import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import fs from 'node:fs';
import path from 'node:path';

// Maps your product ID to the exact private file name
const fileMap: Record<string, string> = {
  'jss2': 'DICTION_GRADE_2.pdf'
};

export const GET: RequestHandler = async ({ url, params }) => {
  const reference = url.searchParams.get('reference');
  const productId = params.id; // 'jss2'

  if (!reference) {
    throw error(400, 'Missing transaction reference.');
  }

  const fileName = fileMap[productId];
  if (!fileName) {
    throw error(404, 'Invalid product identifier.');
  }

  const secretKey = env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    throw error(500, 'Paystack secret key is not configured.');
  }

  try {
    // 1. Verify transaction with Paystack API securely on the server
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${secretKey}`
      }
    });

    const data = await response.json();

    // 2. Ensure payment was actually successful
    if (!data.status || data.data.status !== 'success') {
      throw error(403, 'Payment verification failed or transaction not successful.');
    }

    // 3. Locate the private file on the server
    const filePath = path.resolve(`private_files/${fileName}`);

    if (!fs.existsSync(filePath)) {
      throw error(404, 'Requested curriculum file not found on server.');
    }

    // 4. Stream the file directly to the user's browser
    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`
      }
    });

  } catch (err) {
    console.error('Download error:', err);
    throw error(500, 'Internal server error during download authorization.');
  }
};
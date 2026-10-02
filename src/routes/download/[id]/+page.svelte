<script lang="ts">
  import { page } from '$app/state';
  import { products } from '$lib/Data/products';

  let productId = $derived(page.params.id);
  let reference = $derived(page.url.searchParams.get('reference'));
  let product = $derived(products.find(p => p.id === productId));
</script>

<div class="min-h-screen py-24 px-4 max-w-xl mx-auto text-center flex flex-col items-center justify-center">
  {#if product && reference}
    <h1 class="text-3xl font-bold mb-4">Thank You for Purchasing {product.title}!</h1>
    <p class="text-gray-400 mb-8">Your payment has been verified successfully.</p>

    <a 
      href={`/api/download/${product.id}?reference=${reference}`}
      class="px-6 py-3 bg-amber-400 text-black font-bold rounded-xl shadow-lg hover:opacity-90 transition"
    >
      Download Your PDF File
    </a>
  {:else}
    <h1 class="text-2xl font-bold mb-2">Access Restricted</h1>
    <p class="text-gray-400 mb-6">No valid transaction reference was found.</p>
    <a href="/" class="text-amber-400 underline">Return Home</a>
  {/if}
</div>
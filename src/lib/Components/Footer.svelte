<script>
    import src from '$lib/assets/logo.png';
</script>
<footer class="bg-[#1C1C1C] text-[#F5F0E1] mt-2">
	<div class="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
	
	<img {src} alt="BettyDiction Academy" class="h-8 w-auto" />
	<p class="text-sm">&copy; {new Date().getFullYear()} BettyDiction Academy. All rights reserved.</p>

		<div class="flex gap-6 text-sm">
			<a href="/" class="hover:text-[#D4AF37]">Home</a>
			<a href="/shop" class="hover:text-[#D4AF37]">Shop</a>
			<a href="/about" class="hover:text-[#D4AF37]">About</a>
			<a href="/contact" class="hover:text-[#D4AF37]">Contact</a>
		</div>
	</div>
</footer>
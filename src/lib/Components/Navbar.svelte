<script>
	let menuOpen = $state(false);
    import src from "$lib/assets/logo.png"
</script>

<nav class="bg-[#F5F0E1] sticky top-0 z-50 shadow-sm">
	<div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    
		<a href="/" class="text-lg font-semibold text-[#1C1C1C] ">
           <img {src} alt="BettyDiction Academy" class="h-8 w-auto" /> BettyDiction
        </a>

		<div class="hidden md:flex items-center gap-8 text-sm text-[#1C1C1C]">
			<a href="/" class="hover:text-[#D4AF37] transition-colors">Home</a>
			<a href="/shop" class="hover:text-[#D4AF37] transition-colors">Shop</a>
			<a href="/about" class="hover:text-[#D4AF37] transition-colors">About</a>
			<a href="/contact" class="hover:text-[#D4AF37] transition-colors">Contact</a>
		</div>

		
			<a href="/shop"
			class="hidden md:inline-block bg-[#D4AF37] text-[#1C1C1C] text-sm font-medium px-5 py-2 rounded-md hover:opacity-85 transition-opacity"
		>
			Shop
		</a>

		<button
			class="md:hidden text-[#1C1C1C]"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>

	{#if menuOpen}
		<div class="md:hidden flex flex-col gap-4 px-6 pb-6 text-[#1C1C1C] text-sm">
			<a href="/" onclick={() => (menuOpen = false)}>Home</a>
			<a href="/shop" onclick={() => (menuOpen = false)}>Shop</a>
			<a href="/about" onclick={() => (menuOpen = false)}>About</a>
			<a href="/contact" onclick={() => (menuOpen = false)}>Contact</a>
		</div>
	{/if}
</nav>
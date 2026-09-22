<script>
    import About from '$lib/Components/About.svelte';
    import Shop from '$lib/Components/Shop.svelte';
	import Contact from '$lib/Components/Contact.svelte';
</script>

<svelte:head>
	<title>BettyDiction Academy — English Diction Coaching</title>
</svelte:head>

<!-- Hero -->
<section class="bg-[#F5F0E1] text-center px-6 py-20">
	<h1 class="text-3xl md:text-5xl font-semibold text-[#1C1C1C] max-w-3xl mx-auto leading-tight">
		Master English diction with precision and confidence
	</h1>
	<p class="text-[#5a5a55] max-w-xl mx-auto mt-5 text-base md:text-lg">
		BettyDiction Academy gives teachers and students the tools to sharpen language skills.
		Premium lesson plans and coaching resources built for real classrooms.
	</p>
	<div class="flex gap-4 justify-center mt-8">
		
			<a href="/Shop"
			class="bg-[#D4AF37] text-[#1C1C1C] font-medium px-6 py-3 rounded-md hover:opacity-85 transition-opacity"
		>
			Shop
		</a>
		
			<a href="/About"
			class="border border-[#1C1C1C] text-[#1C1C1C] font-medium px-6 py-3 rounded-md hover:bg-[#1C1C1C] hover:text-[#F5F0E1] transition-colors"
		>
			About
		</a>
	</div>
</section>

<About />

<Shop />

<Contact />


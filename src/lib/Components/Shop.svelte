<script>
    	const featuredProducts = [
		{ name: 'JSS1 English Lesson Plan', price: '₦1,000' },
		{ name: 'JSS2 English Lesson Plan', price: '₦1,000' },
		{ name: 'SSS3 English Lesson Plan', price: '₦1,000' }
	];
</script>
<!-- Product preview -->
<section class="bg-[#1C1C1C] px-6 py-16">
	<div class="max-w-5xl mx-auto text-center">
		<p class="text-[#D4AF37] text-xs tracking-widest font-medium mb-2">PRODUCTS</p>
		<h2 class="text-2xl md:text-3xl font-semibold text-[#F5F0E1] mb-10">
			Find your next lesson plan
		</h2>

		<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
			{#each featuredProducts as product}
				<div class="bg-[#2E2E2E] rounded-lg p-6 text-left">
					<div class="w-full h-32 bg-[#3a3a3a] rounded-md mb-4"></div>
					<h3 class="text-[#F5F0E1] font-medium mb-1">{product.name}</h3>
					<p class="text-[#D4AF37] font-semibold">{product.price}</p>
				</div>
			{/each}
		</div>

		
			<a href="/shop"
			class="inline-block mt-10 bg-[#D4AF37] text-[#1C1C1C] font-medium px-6 py-3 rounded-md hover:opacity-85 transition-opacity">
			View all lesson plans
		</a>
	</div>
</section>
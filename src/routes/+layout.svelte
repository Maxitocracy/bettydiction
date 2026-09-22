<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/logo.png';
	import Navbar from '$lib/Components/Navbar.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Navbar />
<main>
	{@render children()}
</main>
<Footer />
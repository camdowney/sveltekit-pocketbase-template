<script>
	import { Header, Footer } from '$lib/components/sections'
	import '../css/global.css'
</script>

<div class='app'>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
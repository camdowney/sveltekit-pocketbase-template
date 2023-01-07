<script>
	import { Header, Footer } from '$lib/components'
	import '../css/global.css'
</script>

<div class='app'>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
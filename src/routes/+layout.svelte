<script>
	import { Header, Footer } from '../components/sections'
	import '../css/global.css'
</script>

<div class='app'>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
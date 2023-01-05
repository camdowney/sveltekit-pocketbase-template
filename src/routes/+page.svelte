<script>
  import { Login, Messages } from '$lib/components/pb'
  import { currentUser } from '$lib/pocketbase'
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>SvelteKit Pocketbase Template</title>
	<meta name='description' content='SvelteKit Pocketbase Template' />
</svelte:head>

<section>
	<h1>Pocketchat</h1>
	<Login />
	{#if $currentUser}
		<Messages />
	{/if}
</section>
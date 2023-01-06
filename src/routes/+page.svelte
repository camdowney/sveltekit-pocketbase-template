<script>
  import { Login, Messages } from '$lib/components/pb'
  import { user } from '$lib/pocketbase'
</script>

<svelte:head>
	<title>SvelteKit Pocketbase Template</title>
	<meta name='description' content='SvelteKit Pocketbase Template' />
</svelte:head>

<section>
	<h1>Pocketchat</h1>
	<Login />
	{#if $user}
		<Messages />
	{/if}
</section>
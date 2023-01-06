<script>
  import { Auth, Messages } from '$lib/components/backend'
  import { user } from '$lib/pocketbase'
</script>

<svelte:head>
	<title>SvelteKit PocketBase Template</title>
	<meta name='description' content='SvelteKit PocketBase Template' />
</svelte:head>

<section>
	<h1>Pocketchat</h1>
	<Auth />
	{#if $user}
		<Messages />
	{/if}
</section>
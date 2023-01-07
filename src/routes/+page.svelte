<script>
  import { Auth, Messages } from '$lib/components'
  import { user } from '$lib/pocketbase'
</script>

<svelte:head>
	<title>SvelteKit PocketBase Template</title>
	<meta name='description' content='SvelteKit PocketBase Template' />
</svelte:head>

<section>
	<Auth />
	{#if $user}
		<Messages />
	{/if}
</section>
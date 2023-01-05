<script>
	import { signOut } from '@auth/sveltekit/client'
  import { page } from '$app/stores'
</script>

<section>
  <img class='avatar' src='{$page.data.session.user.image}' alt='' />
  <pre>{JSON.stringify($page.data.session, null, 2)}</pre>
  <button on:click={signOut} class='button'>Sign out</button>
</section>

<style>
	.avatar {
		width: 4rem;
		height: 4rem;
		border-radius: 9999px;
	}
</style>
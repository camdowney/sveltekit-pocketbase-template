<script>
	import { signIn } from '@auth/sveltekit/client'
</script>

<section>
  <button on:click={() => signIn('google')}>Sign In with Google</button>
</section>
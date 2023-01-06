<script>
  import { user, pb } from '$lib/pocketbase'

  let username
  let password

  async function signIn() {
    await pb.collection('users').authWithPassword(username, password)
  }

  async function signUp() {
    try {
      const data = {
        username,
        password,
        passwordConfirm: password,
        name: 'name',
      }
      
      await pb.collection('users').create(data)
      await signIn()
    }
    catch (err) {
      console.error(err)
    }
  }

  function signOut() {
    pb.authStore.clear()
  }

</script>

{#if $user}
  <p>
    Signed in as {$user.username} 
    <button on:click={signOut}>Sign Out</button>
  </p>
{:else}
  <form on:submit|preventDefault>
    <input
      placeholder='Username'
      type='text'
      bind:value={username}
    />

    <input 
      placeholder='Password' 
      type='password' 
      bind:value={password} 
    />
    <button on:click={signUp}>Sign up</button>
    <button on:click={signIn}>Sign in</button>
  </form>
{/if}

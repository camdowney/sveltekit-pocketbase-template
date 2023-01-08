<script>
  import { user, pb } from '$lib/pocketbase'

  let username
  let password

  async function signIn() {
    try {
      const data = {
        username,
        password,
        passwordConfirm: password,
      }
      
      try {
        await pb.collection('users').create(data)
      }
      catch (err) {
        console.log('Username already exists; attempting login.')
      }
      await pb.collection('users').authWithPassword(username, password)
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
  <div>
    <p>Signed in as {$user.username}</p>
    <button on:click={signOut}>Sign out</button>
  </div>
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
    <button on:click={signIn}>Sign in/up</button>
  </form>
{/if}

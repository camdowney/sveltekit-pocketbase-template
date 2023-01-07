<script>
  import { user, pb } from '$lib/pocketbase'
  import { subscribeList } from '$lib/util'

  let newMessage

  const messages = subscribeList(pb, 'messages', {
    sort: 'created',
    expand: 'user',
    onCreate: async record => {
      record.expand = { user: $user }
    }
  })

  async function sendMessage() {
    const data = {
      text: newMessage,
      user: $user.id,
    }

    await pb.collection('messages').create(data)
    newMessage = ''
  }
</script>

<div class='messages'>
  {#each $messages as message}
    <div class='msg'>
      <img
        class='avatar'
        src={`https://avatars.dicebear.com/api/identicon/${message.expand?.user?.username}.svg`}
        alt='avatar'
        width='40px'
      />
      <div>
        <small>
          Sent by @{message.expand?.user?.username}
        </small>
        <p class='msg-text'>{message.text}</p>
      </div>
    </div>
  {/each}
</div>

<form on:submit|preventDefault={sendMessage}>
  <input placeholder='Message' type='text' bind:value={newMessage} />
  <button type='submit'>Send</button>
</form>
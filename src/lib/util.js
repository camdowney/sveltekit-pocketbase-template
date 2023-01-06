import { onMount, onDestroy } from 'svelte'
import { writable } from 'svelte/store'

export const subscribeList = (pb, collection, options) => {
  const { page, count, onCreate, onUpdate, onDelete } = options

  let list = []
  const store = writable([])
  let unsubscribe = null

  onMount(async () => {
    list = (await pb.collection(collection).getList(page || 1, count || 99, options)).items
    store.set(list)

    unsubscribe = await pb
      .collection(collection)
      .subscribe('*', async ({ action, record }) => {
        if (action === 'create') {
          onCreate && await onCreate(record)

          list = [...list, record]
          store.set(list)
        }
        else if (action === 'update') {
          onUpdate && await onUpdate(record)

          list = list.map(item => item.id === record.id ? record : item)
          store.set(list)
        }
        else if (action === 'delete') {
          onDelete && await onDelete(record)

          list = list.filter(item => item.id !== record.id)
          store.set(list)
        }
      })
  })

  onDestroy(() => unsubscribe?.())

  return store
}
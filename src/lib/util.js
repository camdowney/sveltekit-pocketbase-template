import { onMount, onDestroy } from 'svelte'
import { writable } from 'svelte/store'

export const subscribeList = (pocketbase, collection, options) => {
  const { initial, page, count, onChange } = options

  let unsubscribe = null
  let list = Array.isArray(initial) ? initial : []
  const store = writable(list)

  onMount(async () => {
    list = (await pocketbase.collection(collection).getList(page || 1, count || 99, options)).items
    store.set(list)

    unsubscribe = await pocketbase
      .collection(collection)
      .subscribe('*', async ({ action, record }) => {
        if (action === 'create') {
          list = [...list, record]
        }
        else if (action === 'update') {
          list = list.map(item => item.id === record.id ? record : item)
        }
        else if (action === 'delete') {
          list = list.filter(item => item.id !== record.id)
        }

        store.set(list)
        onChange && await onChange({ action, record })
      })
  })

  onDestroy(() => unsubscribe?.())

  return store
}
import PocketBase from 'pocketbase'
import { writable } from 'svelte/store'
import { PUBLIC_POCKETBASE_URL } from '$env/static/public'

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL)
export const user = writable(pb.authStore.model)

pb.authStore.onChange(() => {
	user.set(pb.authStore.model)
})
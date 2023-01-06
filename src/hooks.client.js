import { user, pb } from '$lib/pocketbase'

pb.authStore.loadFromCookie(document.cookie)

pb.authStore.onChange(() => {
	user.set(pb.authStore.model)
	document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
})
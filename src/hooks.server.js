import { pb } from '$lib/pocketbase'

export const handle = async ({ event, resolve }) => {
	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

	event.locals.pb = pb
	event.locals.user = pb.authStore.isValid ? structuredClone(pb.authStore.model) : undefined

	const response = await resolve(event)
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ secure: false }))

	return response
}
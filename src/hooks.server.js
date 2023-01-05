import PocketBase from 'pocketbase'

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase('https://pb-demo.fly.dev/')
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = structuredClone(event.locals.pb.authStore.model)
	} 
  else {
		event.locals.user = undefined
	}

	const response = await resolve(event)

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

	return response
};
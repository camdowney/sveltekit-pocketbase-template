import { redirect } from '@sveltejs/kit'

export const load = async ({ parent }) => {
  const { session } = await parent()

  if (!session?.user) {
    throw redirect(303, '/signin')
  }

  return {}
}
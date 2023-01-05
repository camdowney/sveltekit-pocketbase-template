import { error } from '@sveltejs/kit'
import sg from '@sendgrid/mail'
import { SENDGRID_API_KEY } from '$env/static/private'

sg.setApiKey(SENDGRID_API_KEY)

export async function POST({ body }) {
  const mail = body

  if (!mail)
    throw error(400, 'Contact: Not found')

  try {
    await sg.send(mail)

    return new Response(JSON.stringify({ status: 200, msg: 'Contact: Success!' }))
  }
  catch (err) {
    throw error(400, { msg: 'Contact: Error', err })
  }
}
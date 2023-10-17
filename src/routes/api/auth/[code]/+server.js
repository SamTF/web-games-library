import { json } from '@sveltejs/kit'

export async function GET({ url, params }) {
    const validCodes = ['SAM-666-WTF', 'HAT-420-NET', 'HAT-007-TEO', 'HAT-111-MAX', 'HAT-197-JOE']
    
    const userCode = params.code

    const authorised = validCodes.includes(userCode)

    return json(authorised)
}
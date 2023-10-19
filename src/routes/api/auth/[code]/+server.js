import { json } from '@sveltejs/kit'

export async function GET({ url, params }) {
    const validCodes = import.meta.env.VITE_ACCESS_CODES
    
    const userCode = params.code

    const authorised = validCodes.includes(userCode)

    return json(authorised)
}
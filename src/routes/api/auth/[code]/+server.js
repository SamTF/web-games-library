import { dev } from '$app/environment'
import { json } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export async function GET({ url, params, cookies }) {
    const validCodes = (import.meta.env.VITE_ACCESS_CODES).split(', ')

    const userCode = params.code

    const authorised = validCodes.includes(userCode)

    // save code to cookie if authorised
    if (authorised) {
        cookies.set('accessCode', userCode, {
            path: '/hat-boy-chp2-demo',
            sameSite: 'strict',
            httpOnly: true, // whether to only allow server-side
            secure: !dev, // whether to ONLY allow via SSL connections
            // maxAge: 60 * 60 * 99999 // seconds that the cookie will be stored for
            expiration: 'Thu, 01 Jan 2030 00:00:00 GMT'
        })
    }

    return json(authorised)
}
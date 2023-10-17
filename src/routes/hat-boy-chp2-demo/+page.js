// Redirect to Hat Boy

import { error, redirect } from "@sveltejs/kit"
import { get } from "svelte/store"
import { accessCode } from '$lib/stores/accessCode'
import { getAccessCode } from "$lib/services/accessCode"

export async function load({ params, url }) {
    console.log("hello gamers")
    console.log("hello gamers")
    console.log("hello gamers")
    console.log("hello gamers")
    console.log("hello gamers")
	const code = get(accessCode)
    console.log("AAAA access code: ", code)

    const code2 = getAccessCode()
    console.log("AAAA access code service: ", code2)

    if(code2.length < 1) {
        console.log('oops')
        console.log("--- ACCESS DENIED ---")
        throw redirect(302, '/hat-boy-chp2-demo/access')
    }

    const api = `${url.origin}/api/auth/${code2}`
    console.log(api)
    const res = await fetch(api)
    const authorised = await res.json()
    console.log(authorised)

    console.log(res)

    if (authorised == true) {
        console.log("--- ACCESS GRANTED ---")
        return { authorised }
    } else {
        console.log("--- ACCESS DENIED ---")
        throw redirect(302, '/hat-boy-chp2-demo/access?error=unauthorised code')
    }
}
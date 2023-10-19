// Redirect to Hat Boy

import { error, redirect } from "@sveltejs/kit"
import { get } from "svelte/store"
import { accessCode } from '$lib/stores/accessCode'
import { getAccessCode } from "$lib/services/accessCode"

export async function load({ params, url }) {
	const code = get(accessCode)

    const code2 = getAccessCode()

    if(code2.length < 1) {
        console.log("--- ACCESS DENIED ---")
        throw redirect(302, '/hat-boy-chp2-demo/access')
    }

    const api = `${url.origin}/api/auth/${code2}`
    const res = await fetch(api)
    const authorised = await res.json()

    // Redirect based on whether the code given is authorised
    if (authorised == true) {
        console.log("--- ACCESS GRANTED ---")
        return { authorised }
    } else {
        console.log("--- ACCESS DENIED ---")
        throw redirect(302, '/hat-boy-chp2-demo/access?error=unauthorised code')
    }
}
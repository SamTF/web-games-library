// Redirect to Hat Boy

import { error, redirect } from "@sveltejs/kit";

export function load({ params }) {
	throw redirect(302, '/hat-boy');
}
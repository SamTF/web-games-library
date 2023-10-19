export async function load({ url, params}) {
    // look for search params
    let error = url.searchParams.get('error')

    return { error }
}
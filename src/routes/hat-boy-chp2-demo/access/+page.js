export async function load({ url, params}) {
    // look for search params
    console.log(url.searchParams)

    let error = url.searchParams.get('error')

    return { error }
}
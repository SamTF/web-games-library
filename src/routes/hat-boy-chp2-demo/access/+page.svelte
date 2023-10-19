<!-- JS -->
<script>
    // props
    export let data

    // import store
    import { accessCode } from '$lib/stores/accessCode'
    import { setAccessCode, getAccessCode } from "$lib/services/accessCode"
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte'
    
    let code = ''
    let error = ''
    let success = ''

    // Reg ex pattern for XXX-XXX-XXX where X is a number or uppercase letter
    const accessCodePattern = /^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/;

    // Load the previous access code on mount
    onMount(() => {
        code = getAccessCode() || $accessCode || ''
    })

    // Triggered when the user submits a code
    async function handleSubmit() {
        code = code.toUpperCase()
        $accessCode = code
        setAccessCode(code)
        console.log("user access code: ", $accessCode)

        const isValidAccessCode = accessCodePattern.test(code);
        
        // chekc if the code is in the correct format
        if(!isValidAccessCode) {
            error = 'Code format is not valid'
            return
        }

        // call API to check if code is authorised (first check)
        const api = `/api/auth/${code}`
        const res = await fetch(api)
        const authorised = await res.json()

        // check if code is authorised (first check)
        if (authorised) {
            success = 'Access granted!'
            data.error = ''
            error = ''
            // redirect to game page after 1 second
            setTimeout(() => goto('/hat-boy-chp2-demo'), '500')
            
            // redirect instantly
            // goto('/hat-boy-chp2-demo')
        } else {
            error = 'unautorised code!'
            // reset code
            code = ''
        }
    }
</script>

<!-- HTML -->
<main class="center">
    <div class="access-code-container">
        <h1>Enter access code:</h1>
        <form on:submit|preventDefault={handleSubmit} class="access-code-form">
            <input type="text" placeholder="XXX-XXX-XXX" name="code" id="code" bind:value={code} pattern={`[A-Za-z0-9]{3}-[A-Za-z0-9]{3}-[A-Za-z0-9]{3}`}>
            <button type="submit" class="btn">SUBMIT</button>
        </form>

        {#if data.error || error}
            <div class="user-feedback error center sub-font"><h1>{data.error || error}</h1></div>
        {/if}
        {#if success}
            <div class="user-feedback success center sub-font"><h1>{success}</h1></div>
        {/if}
        
    </div>

</main>

<!-- CSS -->
<style>
    main {
        display: grid;
        place-items: center;
        height: 100%;
        width: 100%;
    }

    .access-code-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
    }

    .access-code-form {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 1rem;
        width: 100%;
    }

    input {
        background: none;
        border: none;

        padding: 8px 16px;

        font-family: 'm3x6', Fallback, sans-serif;
        color: var(--text-colour);
        font-size: 48px;
        text-align: center;
        text-transform: uppercase;

        outline: 2px solid white;
    }

    .user-feedback h1 {
        font-size: 48px;
    }
    .error {
        color: var(--colour-accent);
    }
    .success {
        color: rgb(29, 221, 29);
    }
</style>
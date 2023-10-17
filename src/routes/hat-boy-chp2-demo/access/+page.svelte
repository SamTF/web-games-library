<!-- JS -->
<script>
    // props
    export let data
    console.log(data)

    // import store
    import { accessCode } from '$lib/stores/accessCode'
    import { setAccessCode, getAccessCode } from "$lib/services/accessCode";
    import { goto } from '$app/navigation'
    
    let code = ''
    let error = ''

    // Reg ex pattern for XXX-XXX-XXX where X is a number or uppercase letter
    const accessCodePattern = /^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/;

    // Triggered when the user submits a code
    function handleSubmit() {
        code = code.toUpperCase()
        $accessCode = code
        setAccessCode(code)
        console.log("user access code: ", $accessCode)

        const isValidAccessCode = accessCodePattern.test(code);
        
        if(!isValidAccessCode) {
            error = 'Code format is not valid'
            return
        }

        code = ''

        // redirect to game page
        goto('/hat-boy-chp2-demo')
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
        <div class="error accent center sub-font"><h1 style="font-size: 48px;">{error}</h1></div>
        {#if data.error}
            <div class="error accent center sub-font"><h1 style="font-size: 48px;">{data.error}</h1></div>
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
</style>
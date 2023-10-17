<!-- Page for the HAT BOY game -->

<!-- JS -->
<script>
    import Meta from "$components/UI/Meta.svelte";
    import {requestFullscreen} from '$lib/fullscreen'

    let showText = { description: true, controls: false }

    const toggleText = ( showDescription ) => {
        showText.description = showDescription
        showText.controls = !showDescription
    }

    // fullscreen
    let fsContainer = null

    const fullscreen = () => {
        console.log("fullscreen time")
        console.log(fsContainer)
        requestFullscreen(fsContainer)
    }
</script>

<!-- META -->
<Meta
    title={"Hat Boy: Chapter 2 - ALPHA DEMO"}
    description={"Stranger surroundings. Sinisterer creatures. Suspicious plants. And where are the hats?!"}
    thumbnail={"/games/hat-boy/icon.gif"}
/>

<!-- HTML -->
<svelte:head>
  <link rel="icon" type="image/gif" href={"/games/hat-boy/icon.gif"} />
</svelte:head>

<main class="center">
    <div class="game-container">
        <div class="game-header">
            <img src="/games/hat-boy/icon.gif" alt="game-icon" class="game-icon">
            <h1 class="game-title">Hat Boy: <h2 class="game-subtitle">Chapter Two - Demo</h2></h1>
            
        </div>

        <iframe
            src="/games/hat-boy-chp2/hat_boy_chp2_demo.html"
            class="game-frame"
            title="GAME"
            id="game_drop"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            allowtransparency="true"
            webkitallowfullscreen="true"
            msallowfullscreen="true"
            allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
            bind:this={fsContainer}
        />

        <div class="buttons">
            <!-- Show Description -->
            <button
                class="btn-icon"
                on:click={() => toggleText(true)}
            >
                <span>Description</span>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="currentColor" d="M0 1v7h8V1H0zm7 6H1V2h6v5zM2 5h3v1H2zm0-2h4v1H2z"/></svg>
            </button>
            
            <!-- Show Controls -->
            <button
                class="btn-icon"
                on:click={() => toggleText(false)}
            >
                <span>Controls</span>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="currentColor" d="M5 3V1H2v2H0v3h7V3H5zM2 5H1V4h1v1zm2 0H3V4h1v1zm0-2H3V2h1v1zm2 2H5V4h1v1z"/></svg>
            </button>

            <!-- Enter Fullscreen Mode -->
            <button
                class="btn-icon"
                on:click={fullscreen}
            >
                <span>Fullscreen</span>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="currentColor" d="M3 7v1H0V5h1v2zm2 0v1h3V5H7v2zM3 1V0H0v3h1V1zm2 0V0h3v3H7V1z"/></svg>
            </button>

            <!-- Download the game -->
            <!-- <a 
                href="/games/hat-boy/hat_boy.bitsy"
                download="hat_boy.bitsy"
                class="btn btn-icon"
            >
                <span>Download</span>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="currentColor" d="M4.5 4.005h1v1h-1v.99h-1v-.99h-1v-1h1v-4h1v4zm1-1.01h1v1h-1v-1zm-4 0h1v1h-1v-1zm6 3v2h-7v-2h1v1h5v-1h1z"/></svg>
            </a> -->
        </div>

        <!-- Game Description -->
        {#if showText.description}
            <div class="game-description">
                <p>Cosmic vistas.</p>
                <p style="margin-left: 20%;">Labirynthine tunnels.</p>
                <p style="margin-left: 40%;">Sneaky critters.</p>
                <p style="margin-left: 50%;" class="accent"><b><i>And where are the hats?!</i></b></p>

                <br>

                <div class="sub-font">
                    <p>This is a <span class="accent">CLOSED PRIVATE EXCLUSIVE Demo</span> of the beginning of Hat Boy 2. Please do not share this link with unauthorised people.</p>
                    <p><span class="accent">NOTE:</span> you need to play <a href="/hat-boy">Hat Boy: chapter one</a> first!</p>
                    <p><span class="accent">NOTE 2:</span> you can talk to NPCs multiple times!</p>
                    <p>Please give me some feedback after you've played it through via <a href="https://discord.com/users/216972321099874305/" target="_blank">Discord</a> or <a href="mailto:sebastiancc.info@gmail.com" target="_blank">email!</a></p>
                    <p>Thank you and stay tuned for the full release of <span class="accent">Hat Boy: Chapter Two</span>!</p>
                </div>
            </div>
        {/if}
        
        <!-- Game controls -->
        {#if showText.controls}
            <div class="game-controls">
                <h3><b>CONTROLS:</b></h3>
                <ul>
                    <li class="sub-font">Move - arrow keys</li>
                    <li class="sub-font">Interact - walk into sprite</li>
                </ul>
                
            </div>
        {/if}
    </div>
</main>

<!-- CSS -->
<style>
    /* :root {
        --bg-colour: red;
    } */

    iframe {
        width: 100%;
        height: 100%;

        outline: 8px dashed white;
        outline-offset: 8px;

        margin-bottom: 32px;

        background-color: black;
        background: black;
    }

    .game-container {
        height: 30vw;
        width: 30vw;

        margin-bottom: 40rem;
    }

    .game-icon {
        /* flex-grow: 1; */
        height: 100%;
        height: 2rem;

    }

    .game-header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        gap: 1rem;

        margin-bottom: 3rem;

        max-height: 10vh;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 1rem;

        margin-bottom: 2rem;
    }

    .icon {
        /* height: 2rem; */
        height: 24px;
        object-fit: contain;
        position: relative;
        /* flex-grow: 1; */

        /* filter: invert(50%) sepia(48%) saturate(5454%) hue-rotate(164deg) brightness(99%) contrast(105%); */

        /* shape-rendering: crispEdges; */

        /* https://stackoverflow.com/questions/7415872/change-color-of-png-image-via-css */
        /* https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991 */
        /* https://codepen.io/sosuke/pen/Pjoqqp */
    }
</style>

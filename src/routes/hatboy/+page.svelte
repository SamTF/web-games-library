<!-- Page for the HAT BOY game -->

<!-- JS -->
<script>
    import Meta from "../../components/UI/Meta.svelte";
</script>

<!-- META -->
<Meta
    title={"Hat Boy"}
    description={"Strange surroundings. Sinister creatures. Suspicious skulls. And lots o' hats!"}
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
            <h1 class="game-title">Hat Boy</h1>
        </div>

        <iframe
            src="/games/hat-boy/hat_boy.html"
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
        />

        <div class="game-description">
            <p>Strange surroundings.</p>
            <p style="margin-left: 20%;">Sinister creatures.</p>
            <p style="margin-left: 40%;">Suspicious skulls.</p>
            <p style="margin-left: 50%;" class="accent"><b><i>And lots o' hats!</i></b></p>

            <br>

            <p class="sub-font">Made in 2.5 days to learn how Bitsy works.</p>
        </div>
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

        margin-bottom: 64px;
    }

    .game-container {
        height: 30vw;
        width: 30vw;
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
        gap: 1rem;

        margin-bottom: 3rem;

        max-height: 10vh;
    }
</style>

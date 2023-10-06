<!-- Page for the HAT BOY game -->

<!-- JS -->
<script>
    import Meta from "../../components/UI/Meta.svelte";
</script>

<!-- META -->
<Meta
    title={"Hat Boy"}
    description={"Strange surroundings. Sinister creatures. Suspicious skulls. And lots o' hats!"}
    thumbnail={""}
/>

<!-- HTML -->
<main>
    <h1>Hat Boy: The Beginning</h1>

    <iframe
        src="/games/hat-boy/hat_boy__the_beginning.html"
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
</main>

<!-- CSS -->
<style>
    main {
        display: grid;
        place-items: center;
    }
    iframe {
        width: 40vw;
        height: 40vw;
    }
</style>

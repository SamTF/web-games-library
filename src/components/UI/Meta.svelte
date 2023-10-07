<!-- Metadata Component -->

<!-- JS -->
<script>
    export let title = ''
    export let description = ''
    export let thumbnail = '/images/logo.webp'
    export let url = 'https://sam.freelancepolice.org/'
    export let colour = '#FF0062'
    export let bigMode = false
</script>

<!-- META -->
<svelte:head>
    <!-- Page Title -->
    <title>{title == '' ? 'Web Games by Sam Casaleiro' : `${title} // Sam Casaleiro`}</title>

    <!-- Link Embed Stuff -->
    <meta property="og:site_name"   content="Sam's Web Games">      <!-- Top of the embed -->
    <meta property="og:title"       content={title}>                <!-- Big Bold Letters -->
    <meta property="og:description" content={description}>          <!-- Subtitle, smaller, under title -->
    <meta property="og:image"       content={thumbnail}>            <!-- Cool lil thumbnail to the side! :) -->
    <meta property="og:url"         content={url}>                  <!-- Link when you click on the title -->
    <meta name="theme-color"        content={colour}>               <!-- Embed sidebar colour! -->

    {#if bigMode}
        <meta name="twitter:card"   content="summary_large_image">
    {/if}
    
</svelte:head>
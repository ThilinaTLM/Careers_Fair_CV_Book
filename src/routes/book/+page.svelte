<script lang="ts">
    import Page from "../../lib/Page.svelte";
    import ProfilePage from "../../lib/ProfilePage.svelte";
    import {onMount} from "svelte";
    import {error} from '@sveltejs/kit';
    import {getData, preprocess} from "../../api";
    import IndexPage from "../../lib/IndexPage.svelte";
    import Introduction from "../../lib/Introduction.svelte";
    import CoverPage from "../../lib/CoverPage.svelte";
    import BackCover from "$lib/BackCover.svelte";

    let data: any = [];
    let loading: boolean = true;
    let photo: boolean = true;

    onMount(async () => {
        // read query params
        const urlParams = new URLSearchParams(window.location.search);
        const limit = urlParams.get('limit');
        const offset = urlParams.get('offset') || 0;
        const qPhoto = urlParams.get('photo');
        if (qPhoto === 'false') {
            photo = false;
        }

        try {
            data = await getData();
            data = data.map(preprocess);
            data = data.sort((a, b) => a.lastName.localeCompare(b.lastName));
            if (limit) {
                data = data.slice(offset, offset + limit);
            }
        } catch (e) {
            throw error(500, {message: e.message});
        } finally {
            loading = false;
        }
    });
</script>

<svelte:head>
    <title>CSE 2023 Carriers Fair CV Book</title>
</svelte:head>


{#if loading}
    <div class="grid h-screen content-center">
        <h1 class="text-3xl font-bold text-center">Loading...</h1>
    </div>
{:else}
    {#if data.length === 0}
        <div class="grid w-screen h-screen content-center">
            <h1 class="text-3xl font-bold text-center">Content API is offline</h1>
            <h4 class="text-xl text-center">Wait few minutes until it comes back online</h4>
        </div>
    {:else}
        <!-- Cover Page -->
        <CoverPage />

        <!-- Introduction -->
        <Introduction />

        <!-- Index Page -->
        <IndexPage d={data}/>

        <!-- Profiles -->
        {#each data as profile}
            <ProfilePage d={profile} showPhoto="{photo}"/>
        {/each}

        <!-- Back Cover -->
        <BackCover />
    {/if}
{/if}



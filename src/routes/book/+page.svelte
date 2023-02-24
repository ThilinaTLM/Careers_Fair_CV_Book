<script lang="ts">
    import Page from "../../lib/Page.svelte";
    import ProfilePage from "../../lib/ProfilePage.svelte";
    import {onMount} from "svelte";
    import {error} from '@sveltejs/kit';
    import {getData, preprocess} from "../../api";
    import IndexPage from "../../lib/IndexPage.svelte";

    let data: any = [];
    let loading: boolean = true;

    onMount(async () => {
        try {
            data = await getData();
            data = data.map(preprocess);
            data = data.sort((a, b) => a.lastName.localeCompare(b.lastName));
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
    <div class="grid w-screen h-screen content-center">
        <h1 class="text-3xl font-bold text-center">Loading...</h1>
    </div>
{:else}
    <!-- Cover Page -->
    <Page>
        <div class="grid place-items-center w-full h-full">
            <h1 class="text-3xl font-bold">CSE Career Fair 2023</h1>
        </div>
    </Page>

    <!-- Introduction -->
    <Page>
        <div class="grid place-items-center w-full h-full">
            <h1 class="text-3xl font-bold">Introduction</h1>
        </div>
    </Page>

    <!-- Index Page -->
    <IndexPage d={data}/>

    <!-- Profiles -->
    {#each data as profile}
        <ProfilePage d={profile}/>
    {/each}

    <!-- Back Cover -->
    <Page>
        <div class="grid place-items-center w-full h-full">
            <h1 class="text-3xl font-bold">Back Cover</h1>
        </div>
    </Page>
{/if}



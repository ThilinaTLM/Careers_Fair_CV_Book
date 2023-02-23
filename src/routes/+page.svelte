<script lang="ts">
    import Page from "../lib/Page.svelte";
    import ProfilePage from "../lib/ProfilePage.svelte";
    import { onMount } from "svelte";
    import { getData, preprocess } from "../api";

    let data: any = [];
    let profiles = false;

    onMount(async () => {
        // get query params
        const urlParams = new URLSearchParams(window.location.search);
        const p = urlParams.get("profiles");
        if (p) {
            data = await getData();
            data = data.map(preprocess);
            profiles = true;
            console.log(data);
        } else {
            return;
        }
    });
</script>

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

<!-- Profiles -->
{#if profiles}
    {#each data as profile}
        <ProfilePage d={profile} />
    {/each}
{/if}

<!-- Index Page -->
<Page>
    <div class="grid place-items-center w-full h-full">
        <h1 class="text-3xl font-bold">Index</h1>
    </div>
</Page>

<!-- Back Cover -->
<Page>
    <div class="grid place-items-center w-full h-full">
        <h1 class="text-3xl font-bold">Back Cover</h1>
    </div>
</Page>

<script lang="ts">
    import {onMount} from "svelte";
    import {getData, preprocess} from "../../api";
    import {error} from "@sveltejs/kit";
    import ProfilePage from "$lib/ProfilePage.svelte";

    let loading: boolean = true;
    let profile: any;

    const loadProfile = async () => {
        const url = new URL(window.location.href);
        const path = url.pathname.split('/')[url.pathname.split('/').length - 1];
        const d = await getData();
        const p = d.filter((e: any) => e["Index Number"] === path)[0];
        if (p) {
            profile = preprocess(p);
        }
        loading = false;
    }

    onMount(loadProfile);

</script>

{#if loading}
    <h1>Loading...</h1>
{:else}
    {#if profile === undefined}
        <h1>Not found</h1>
    {:else}
        <ProfilePage d={profile}/>
    {/if}
{/if}
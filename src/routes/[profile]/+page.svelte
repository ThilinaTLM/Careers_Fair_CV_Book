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
    <div class="grid w-screen h-screen content-center">
        <h1 class="text-center">Loading...</h1>
    </div>
{:else}
    {#if profile === undefined}
        <div class="grid w-screen h-screen content-center">
            <h1 class="text-center">Not Found</h1>
        </div>
    {:else}
        <ProfilePage d={profile}/>
    {/if}
{/if}
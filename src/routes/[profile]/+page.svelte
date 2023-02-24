<script lang="ts">
    import {onMount} from "svelte";
    import {getData, preprocess} from "../../api";
    import ProfilePage from "$lib/ProfilePage.svelte";

    let loading: boolean = true;
    let profile: any;
    let index: string = '';

    const loadProfile = async () => {
        const d = await getData();
        const p = d.filter((e: any) => e["Index Number"] === index)[0];
        if (p) {
            profile = preprocess(p);
        }
        loading = false;
    }

    onMount(() => {
        const url = new URL(window.location.href);
        index = url.pathname.split('/')[url.pathname.split('/').length - 1];
    });

    $: loadProfile();
</script>

<svelte:head>
    <title>{index} | CSE 2023 Carriers Fair CV Book </title>
</svelte:head>

{#if loading}
    <div class="grid w-screen h-screen content-center">
        <h1 class="text-3xl font-bold text-center">Loading...</h1>
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
<script lang="ts">
    import {onMount} from "svelte";
    import {getData, preprocess} from "../../api";
    import ProfilePage from "$lib/ProfilePage.svelte";

    let profile: any;
    let index: string = '';
    let loading: boolean = true;

    const loadProfile = async () => {
        try {
            const d = await getData();
            const p = d.filter((e: any) => e["Index Number"] === index)[0];
            if (p) {
                profile = preprocess(p);
            }
        } catch (e) {
            console.error(e);
        } finally {
            loading = false;
        }
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
            <h1 class="text-3xl font-bold text-center">Profile Not Found</h1>
            <h4 class="text-xl text-center">Possible Reasons:</h4>
            <ul class="text-center">
                <li>Content API is offline (wait few minutes until it comes back online)</li>
                <li>Index number is wrong (check the link)</li>
            </ul>
        </div>
    {:else}
        <ProfilePage d={profile}/>
    {/if}
{/if}
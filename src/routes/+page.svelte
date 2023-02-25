<script lang="ts">
    import {onMount} from "svelte";
    import {getData, preprocess} from "../api";
    import {error} from "@sveltejs/kit";
    import ProfileLinks from "../lib/ProfileLinks.svelte";

    let data: any = [];
    let loading = true;

    onMount(async () => {
        try {
            data = await getData();
            data = data.map(preprocess);
            data = data.sort((a, b) => a.lastName.localeCompare(b.lastName));
            console.log('indexes', data.map(p => p.index));
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
    <ProfileLinks d={data}/>
{/if}


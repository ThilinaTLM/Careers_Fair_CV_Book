<script lang="ts">
    import {onMount} from "svelte";
    import {getData, preprocess} from "../api";
    import {error} from "@sveltejs/kit";

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
    {#if data.length === 0}
        <div class="grid w-screen h-screen content-center">
            <h1 class="text-3xl font-bold text-center">Content API is offline</h1>
            <h4 class="text-xl text-center">Wait few minutes until it comes back online</h4>
        </div>
    {:else}
        <div class="grid grid-cols-con w-full p-[30px] ">
            {#each data as p}
                <a class="inline-block m-3" href="/{p.index}">
                    {p.firstName} {p.lastName} - {p.index}
                </a>
            {/each}
        </div>
    {/if}
{/if}


<style>
    .grid-cols-con {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 1rem;
    }
</style>


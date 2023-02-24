<script lang="ts">
    export let d: any = [];

</script>

{#if d.length === 0}
    <div class="grid w-screen h-screen content-center">
        <h1 class="text-3xl font-bold text-center">Content API is offline</h1>
        <h4 class="text-xl text-center">Wait few minutes until it comes back online</h4>
    </div>
{:else}
    <div class="font-roboto p-[30px] my-auto mx-[20%]">
        <h1 class="text-2xl font-bold uppercase mb-6">CV Profiles [{d.length}]</h1>

        <div class="grid grid-cols-con ">
            {#each d as p}
                <a class="inline-block my-1" href="/{p.index}">
                    {p.index} - {p.firstName} {p.lastName}
                </a>
            {/each}
        </div>
    </div>

{/if}


<style>
    .grid-cols-con {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
    }
</style>


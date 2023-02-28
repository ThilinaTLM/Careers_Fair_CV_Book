<script lang="ts">
    import Page from "$lib/Page.svelte";

    export let d: any;
    const size = 50;
    export let offset;
</script>

{#each Array(Math.ceil(d.length / size)) as _, i}
    <Page>
        <div class="font-roboto mx-[60px] my-[100px]">
            <h1 class="text-3xl text-left uppercase mb-[50px]">Indexes</h1>

            <div class="grid grid-cols-1fr-1fr grid-rows-30px-repeat grid-flow-col w-full">
                {#each d.slice(i * size, (i + 1) * size) as p, j}
                    <a class="inline-block justify-start" href="#{p.index}">
                        {p.firstName}, {p.lastName} ({Number(offset) + i * size + j})
                    </a>
                {/each}
            </div>
        </div>
    </Page>
{/each}

<style>
    .grid-cols-1fr-1fr {
        grid-template-columns: 1fr 1fr;
    }

    .grid-rows-30px-repeat {
        grid-template-rows: repeat(25, 34px);
    }
</style>
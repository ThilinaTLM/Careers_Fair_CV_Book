<script lang="ts">
    import Page from "$lib/Page.svelte";

    export let d: any;
    const size = 58;
    const pageOffset = 4;
</script>

{#each Array(Math.ceil(d.length / size)) as _, i}
    <Page>
        <div class="font-roboto mx-[60px] my-[60px]">
            <h1 class="text-3xl text-left uppercase mb-6">Indexes</h1>

            <div class="grid grid-cols-con w-full">
                {#each d.slice(i * size, (i + 1) * size) as p, j}
                    <a class="inline-block my-1" href="#{p.index}">
                        {p.firstName}, {p.lastName} ({4 + i * size + j})
                    </a>
                {/each}
            </div>
        </div>
    </Page>
{/each}

<style>
    .grid-cols-con {
        grid-template-columns: 1fr 1fr;
    }
</style>
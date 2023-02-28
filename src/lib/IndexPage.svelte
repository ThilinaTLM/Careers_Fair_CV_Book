<script lang="ts">
    import Page from "$lib/Page.svelte";

    export let d: any = [];
    const size = 50;
    export let offset;

    let d2 = [];
    $: {
        let processed = d;
        processed = processed.sort((a, b) => a.lastName.localeCompare(b.lastName));
        processed = processed.map((i, j) => ({
            firstName: i.firstName,
            lastName: i.lastName,
            page: Number(offset) + j,
            index: i.index
        }))
        d2 = processed.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }
</script>

{#each Array(Math.ceil(d2.length / size)) as _, i}
    <Page>
        <div class="font-roboto mx-[60px] my-[100px]">
            <h1 class="text-3xl text-left uppercase mb-[50px]">Indexes</h1>

            <div class="grid grid-cols-1fr-1fr grid-rows-30px-repeat grid-flow-col w-full">
                {#each d2.slice(i * size, (i + 1) * size) as p}
                    <a class="inline-block justify-start" href="#{p.index}">
                        {p.firstName}, {p.lastName} ({p.page})
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
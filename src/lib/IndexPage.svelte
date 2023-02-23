<script lang="ts">
    import Page from "$lib/Page.svelte";

    export let d: any;
    const size = 30;

    let pageD = [];
    $: {
        if (d) {
            for (let i = 0; i < d.length; i += size) {
                pageD.push(d.slice(i, i + size));
            }
            pageD = [...pageD]
        }
    }

</script>

{#each pageD as pd}
    <Page>
        <div class="grid grid-cols-con w-full p-[30px] ">
            {#each pd as p}
                <a class="inline-block m-3" href="#{p.index}">
                    {p.firstName} {p.lastName}
                </a>
            {/each}
        </div>
    </Page>
{/each}

<style>
    .grid-cols-con {
        grid-template-columns: 1fr 1fr;
    }
</style>
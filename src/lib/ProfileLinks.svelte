<script lang="ts">
    export let d: any = [];
    let all = [
        '180003L', '180007D', '180009K', '180012M', '180022T', '180029V', '180030P', '180044L', '180048D',
        '180052J', '180053M', '180059L', '180062N', '180070L', '180071P', '180094M', '180108M', '180109R', '180114D',
        '180117N', '180118T', '180119X', '180123E', '180126P', '180127U', '180141G', '180146C', '180147F', '180148J',
        '180162V', '180167P', '180176R', '180183K', '180186X', '180187C', '180192L', '180196D', '180211X', '180212C',
        '180213F', '180234U', '180239N', '180240J', '180244B', '180247L', '180255J', '180257R', '180259B', '180269F',
        '180273L', '180276A', '180281J', '180286E', '180294C', '180295F', '180313L', '180321J', '180322M', '180325B',
        '180335F', '180348X', '180352E', '180364R', '180369L', '180371K', '180377J', '180420L', '180424D', '180431V',
        '180449H', '180459M', '180463U', '180471R', '180474E', '180475H', '180476L', '180482C', '180485M', '180486R',
        '180488B', '180492G', '180509T', '180524J', '180525M', '180526R', '180527V', '180535T', '180536X', '180537C',
        '180543P', '180552R', '180553V', '180555E', '180561T', '180562X', '180565J', '180568V', '180572D', '180573G',
        '180582H', '180587D', '180594V', '180596E', '180607R', '180610U', '180626A', '180629K', '180630F', '180632M',
        '180633R', '180635B', '180638L', '180643X', '180645F', '180648R', '180652A', '180653D', '180659C', '180660V',
        '180664L', '180668D', '180670C', '180704L', '180707A', '180711F', '180718H', '180722N', '180725C'
    ]

    let missing: string[] = [];
    $: {
        const available = d.map(i => i.index)
        missing = all.filter(i => !available.includes(i))
    }

</script>

{#if d.length === 0}
    <div class="grid w-screen h-screen content-center">
        <h1 class="text-3xl font-bold text-center">Content API is offline</h1>
        <h4 class="text-xl text-center">Wait few minutes until it comes back online</h4>
    </div>
{:else}
    <div class="font-roboto p-[30px] my-auto mx-[20%]">
        <h1 class="text-2xl font-bold uppercase mb-3">CV Profiles [{d.length}]</h1>

        <div class="w-full bg-red-300 py-4 px-2 rounded my-3">
            <h1 class="font-bold my-1 uppercase">Missing Indexes:</h1>
            {#each missing as i}
                <span class="inline-block mr-1">{i}</span>
            {/each}
        </div>

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


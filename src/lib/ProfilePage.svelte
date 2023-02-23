<script lang="ts">
    import Page from "./Page.svelte";
    import Contacts from "$lib/Contacts.svelte";
    import Skills from "$lib/Skills.svelte";

    export let d: any;
</script>

<Page>
    <div class="relative grid grid-rows-con1 h-full w-full font-roboto ">
        <div class="grid grid-cols-content bg-primary content-center">
            <div></div>
            <div class="">
                <h1 class="text-4xl text-white font-semibold">{d.firstName} {d.lastName}</h1>
                <h3 class="text-md text-white">Computer Science & Engineering Undergraduate</h3>
            </div>
        </div>
        <div class="grid grid-cols-content">
            <div class="pl-6 pt-[65px]">
                <Contacts d={d.contacts} />
                <Skills d={d.skills} />
            </div>
            <div>
                second column
            </div>
        </div>
        <div class="absolute left-[34px] top-[46px] w-[135px] h-[135px] rounded-full bg-gray-300">
            <!-- Image -->
        </div>
    </div>
</Page>


<style>
    .grid-rows-con1 {
        grid-template-rows: 115px 1fr;
    }

    .grid-cols-content {
        grid-template-columns: 233px 1fr;
    }


</style>
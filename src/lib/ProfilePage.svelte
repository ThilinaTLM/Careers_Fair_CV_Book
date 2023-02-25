<script lang="ts">
    import Page from "./Page.svelte";
    import Contacts from "./profile/Contacts.svelte";
    import Skills from "./profile/Skills.svelte";
    import Awards from "./profile/Awards.svelte";
    import AboutMe from "./profile/AboutMe.svelte";
    import Experiences from "./profile/Experiences.svelte";
    import Projects from "./profile/Projects.svelte";
    import Activities from "./profile/Activities.svelte";
    import Education from "$lib/profile/Education.svelte";
    import {onMount} from "svelte";

    let coloredMargins = false;

    onMount(() => {
        // read query params
        const urlParams = new URLSearchParams(window.location.search);
        const margins = urlParams.get('margins');
        if (margins === 'colored') {
            coloredMargins = true;
        }
    })

    export let d: any;
    export let showPhoto: boolean = true;
</script>

<Page>
    <div class="relative grid grid-rows-con1 h-full w-full font-roboto" class:bg-red-200={coloredMargins}
         id="{d.index}">
        <div class="grid grid-cols-content bg-primary content-center">
            <div></div>
            <div class="">
                <h1 class="text-4xl text-white font-semibold">{d.firstName} {d.lastName}</h1>
                <h3 class="text-md text-white">Computer Science & Engineering Undergraduate</h3>
            </div>
        </div>
        <div class="grid grid-cols-content gap-4 mx-5 mb-5 h-[988px] overflow-hidden bg-white">
            <div class="mt-5 pt-[80px] h-max-full overflow-hidden">
                <Contacts d={d.contacts}/>
                <Skills d={d.skills} />
                <Awards d={d.awards} />
                <Activities d={d.activities} />
            </div>
            <div class="mt-5 h-max-full overflow-hidden">
                <AboutMe d={d.aboutMe} />
                <Education d={d.education} />
                <Experiences d={d.experiences} />
                <Projects d={d.projects} />
            </div>
        </div>
        <div class="absolute left-[40px] top-[46px] w-[150px] h-[150px] rounded-full overflow-hidden bg-gray-300">
            {#if showPhoto}
                <img src="{d.photo}" class="w-full h-full object-cover object-position" alt="{d.index}" />
            {/if}
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

    .object-position {
        object-position: 50% 8%;
    }
</style>
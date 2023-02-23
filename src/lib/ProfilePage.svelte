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

    export let d: any;
</script>

<Page>
    <div class="relative grid grid-rows-con1 h-full w-full font-roboto" id="{d.index}">
        <div class="grid grid-cols-content bg-primary content-center">
            <div></div>
            <div class="">
                <h1 class="text-4xl text-white font-semibold">{d.firstName} {d.lastName}</h1>
                <h3 class="text-md text-white">Computer Science & Engineering Undergraduate</h3>
            </div>
        </div>
        <div class="grid grid-cols-content">
            <div class="pl-6 pt-[80px]">
                <Contacts d={d.contacts} />
                <Skills d={d.skills} />
                <Awards d={d.awards} />
                <Activities d={d.activities} />
            </div>
            <div class="p-4">
                <AboutMe d={d.aboutMe} />
                <Education d={d.education} />
                <Experiences d={d.experiences} />
                <Projects d={d.projects} />
            </div>
        </div>
        <div class="absolute left-[40px] top-[46px] w-[150px] h-[150px] rounded-full bg-gray-300">
            <img src="{d.photo}" class="rounded-full w-full h-full object-cover" />
        </div>
    </div>
</Page>


<style>
    .grid-rows-con1 {
        grid-template-rows: 115px 1fr;
    }

    .grid-cols-content {
        grid-template-columns: 233px 550px;
    }


</style>
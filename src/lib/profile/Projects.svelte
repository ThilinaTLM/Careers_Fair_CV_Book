<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>


<Heading heading="Projects" />

{#each d as project}
    <div class="my-2">
        <p class="font-bold text-xs w-[90%]">
            {project.heading}
        </p>
        <p class="text-secondary font-medium text-xs">
            {project.subheading}
        </p>
        <p class="text-xs mt-1">
            {project.description}
        </p>
    </div>
{/each}
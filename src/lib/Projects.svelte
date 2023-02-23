<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>


<Heading heading="Projects" />

{#each d as project}
    <div class="my-3">
        <h3 class="font-semibold">
            {project.heading}
        </h3>
        <p class="text-gray-600 text-sm">
            {project.techStack}
        </p>
        <p class="text-gray-600 text-sm">
            {project.description}
        </p>
    </div>
{/each}
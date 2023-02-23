<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>


<Heading heading="Projects" />

{#each d as project}
    <div class="my-3">
        <p class="font-bold text-xs line-clamp-1">
            {project.heading}
        </p>
        <p class="text-secondary font-medium text-xs line-clamp-1">
            {project.techStack}
        </p>
        <p class="text-xs mt-1 line-clamp-2">
            {project.description}
        </p>
    </div>
{/each}
<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>

<Heading heading="Education" />

{#each d as education}
    <div class="my-2">
        <div class="flex justify-between">
            <p class="font-bold text-xs">
                {education.heading}
            </p>
        </div>
        <p class="text-secondary font-medium text-xs">
            {education.subheading}
        </p>
        <p class="text-xs mt-1">
            {education.description}
        </p>
    </div>
{/each}
<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>

<Heading heading="Experiences" />

{#each d as experience}
    <div class="my-3">
        <div class="flex justify-between">
            <p class="font-bold text-xs">
                {experience.heading}
            </p>
            <p class="text-secondary font-medium text-[10px]">
                {experience.date}
            </p>
        </div>
        <p class="text-secondary font-medium text-xs">
            {experience.subheading}
        </p>
        <p class="text-xs mt-1 line-clamp-3">
            {experience.description}
        </p>
    </div>
{/each}
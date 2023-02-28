<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>

{#if d.length > 0}
    <Heading heading="Awards and Achievements"/>
{/if}

{#each d as award}
    <div class="my-2">
        <p class="font-bold text-xs">
            {award.heading}
        </p>
        <p class="text-xs">
            {award.description}
        </p>
    </div>
{/each}
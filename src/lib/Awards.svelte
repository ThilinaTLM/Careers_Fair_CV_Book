<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>


<Heading heading="Awards and Achievements" />

{#each d as award}
    <div class="my-3">
        <p class="font-bold text-xs">
            {award.heading}
        </p>
        <p class="text-xs line-clamp-2">
            {award.description}
        </p>
    </div>
{/each}
<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>


<Heading heading="Awards" />

{#each d as award}
    <div class="my-3">
        <h3 class="font-semibold">
            {award.title}
        </h3>
        <p class="text-gray-600 text-sm">
            {award.description}
        </p>
    </div>
{/each}
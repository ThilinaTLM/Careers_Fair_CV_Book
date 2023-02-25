<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>

{#if d.length > 0}
    <Heading heading="Extra Curricular Activities"/>
{/if}

{#each d as activity}
    <div class="my-2">
        <p class="font-bold text-xs">
            {activity.heading}
        </p>
        <p class="text-xs">
            {activity.description}
        </p>
    </div>
{/each}
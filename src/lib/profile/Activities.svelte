<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>

<Heading heading="Extra Curricular Activities" />

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
<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>

<Heading heading="Extra Curricular Activities" />

{#each d as activity}
    <div class="my-3">
        <h3 class="font-semibold">
            {activity.heading}
        </h3>
        <p class="text-gray-600 text-sm">
            {activity.description}
        </p>
    </div>
{/each}
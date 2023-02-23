<script lang="ts">
    import Heading from "$lib/Heading.svelte";

    export let d: any;
</script>

<Heading heading="Skills" />

{#each d as skill}
    <div class="my-3">
        <h3 class="font-semibold">
            {skill.heading}
        </h3>
        <p class="text-gray-600 text-sm">
            {skill.skills.join(" | ")}
        </p>
    </div>
{/each}

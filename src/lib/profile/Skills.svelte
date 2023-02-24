<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>

<Heading heading="Skills" />

{#each d as skill}
    <div class="my-3">
        <h3 class="font-semibold text-xs">
            {skill.heading}
        </h3>
        <p class="text-xs">
            {skill.skills.join(" | ")}
        </p>
    </div>
{/each}

<script lang="ts">
    import Heading from "$lib/Heading.svelte";

    export let d: any;
</script>

<Heading heading="Skills" />

<div class="my-3">
    <h3 class="font-semibold">
        Technical Fields
    </h3>
    <p class="text-gray-600 text-sm">
        {d.technical.join(" | ")}
    </p>
</div>

<div class="my-3">
    <h3 class="font-semibold">
        Programming Languages
    </h3>
    <p class="text-gray-600 text-sm">
        {d.programming.join(" | ")}
    </p>
</div>

<div class="my-3">
    <h3 class="font-semibold">
        Frameworks and Libraries
    </h3>
    <p class="text-gray-600 text-sm">
        {d.frameworks.join(" | ")}
    </p>
</div>

<div class="my-3">
    <h3 class="font-semibold">
        Tools and Other
    </h3>
    <p class="text-gray-600 text-sm">
        {d.tools.join(" | ")}
    </p>
</div>

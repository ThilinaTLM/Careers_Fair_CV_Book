<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>

<Heading heading="About Me" />

<div class="text-justify">
    <p class="text-xs line-clamp-5">
        {d}
    </p>
</div>

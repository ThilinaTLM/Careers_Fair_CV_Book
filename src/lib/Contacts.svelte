<script lang="ts">
    import Heading from "$lib/Heading.svelte";

    export let d: any;
</script>

<Heading heading="Contact" />

{#each d as contact}
    <div class="grid grid-cols-con">
        <img src={contact.icon} class="w-[12px]" alt="icon" />
        <a href={contact.link} class="decoration-0 font-medium">{contact.label}</a>
    </div>
{/each}

<style>
    .grid-cols-con {
        grid-template-columns: 30px 1fr;
    }
</style>

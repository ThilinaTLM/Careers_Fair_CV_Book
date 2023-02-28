<script lang="ts">
    import Heading from "./Heading.svelte";

    export let d: any;
</script>

<Heading heading="Contact" />

{#each d as contact}
    <div class="grid grid-cols-con items-center">
        <img src={contact.icon} class="w-[12px]" alt="icon" />
        <div class="overflow-hidden text-ellipsis whitespace-nowrap -ml-2">
            <a href={contact.link}
               class="text-secondary decoration-0 font-medium text-xs underline underline-offset-1">{contact.label}</a>
        </div>
    </div>
{/each}

<style>
    .grid-cols-con {
        grid-template-columns: 30px 1fr;
    }
</style>

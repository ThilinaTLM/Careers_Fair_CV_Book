<script lang="ts">
    import Heading from "$lib/Heading.svelte";

    export let d: any;
</script>

<Heading heading="Contact" />

<div class="grid grid-cols-con">
    <img src={d.phone.icon} class="w-[12px]" alt="telephone" />
    <a href={d.phone.link} class="decoration-0 font-medium">{d.phone.label}</a>
</div>

<div class="grid grid-cols-con">
    <img src={d.email.icon} class="w-[12px]" alt="email" />
    <a href={d.email.link} class="decoration-0 font-medium">{d.email.label}</a>
</div>

<div class="grid grid-cols-con">
    <img src={d.github.icon} class="w-[12px]" alt="github" />
    <a href={d.github.link} class="decoration-0 font-medium">{d.github.label}</a
    >
</div>

<div class="grid grid-cols-con">
    <img src={d.linkedin.icon} class="w-[12px]" alt="linkedin" />
    <a href={d.linkedin.link} class="decoration-0 font-medium"
        >{d.linkedin.label}</a
    >
</div>

<style>
    .grid-cols-con {
        grid-template-columns: 30px 1fr;
    }
</style>

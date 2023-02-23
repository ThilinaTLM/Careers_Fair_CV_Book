<script lang="ts">
    import Page from "../lib/Page.svelte";
    import ProfilePage from "../lib/ProfilePage.svelte";
    import { onMount } from "svelte";
    import { getData, preprocess } from "../api";

    let data: any = [];

    onMount(async () => {
        data = await getData();
        data = data.map(preprocess);
        console.log(data)
    });
</script>

<!-- Profiles -->
{#each data as profile}
    <ProfilePage d={profile} />
{/each}

<!-- Cover Page -->
<!--<Page>-->
<!--    <div class="grid place-items-center w-full h-full">-->
<!--        <h1 class="text-3xl font-bold">CSE Career Fair 2023</h1>-->
<!--    </div>-->
<!--</Page>-->

<!-- Introduction -->
<!--<Page>-->
<!--    <div class="grid place-items-center w-full h-full">-->
<!--        <h1 class="text-3xl font-bold">Introduction</h1>-->
<!--    </div>-->
<!--</Page>-->

<!-- Index Page -->
<Page>
    <div class="grid place-items-center w-full h-full">
        <h1 class="text-3xl font-bold">Index</h1>
    </div>
</Page>

<!-- Back Cover -->
<Page>
    <div class="grid place-items-center w-full h-full">
        <h1 class="text-3xl font-bold">Back Cover</h1>
    </div>
</Page>

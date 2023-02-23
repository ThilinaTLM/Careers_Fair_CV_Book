<script lang="ts">
    import {onMount} from "svelte";
    import {getData, preprocess} from "../../api";
    import {error} from "@sveltejs/kit";
    import ProfilePage from "$lib/ProfilePage.svelte";

    export let data;
    let profile: any = {};

    const loadProfile = async () => {
        const d = await getData();
        const p = d.filter((item: any) => item["Index Number"] === data.profile)[0];
        console.log(p, d.profile)
        if (p) {
            profile = preprocess(p);
        } else {
            throw error(404, 'Not found');
        }
    }

    onMount(loadProfile);

</script>

<ProfilePage d={profile} />
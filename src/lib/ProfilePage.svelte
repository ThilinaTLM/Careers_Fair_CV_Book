<script lang="ts">
    import Page from "./Page.svelte";
</script>

<Page>
    <div class="container">
        <!--    LEFT    -->
        <div class="left-container">
            test
        </div>

        <!--    RIGHT    -->
        <div class="right-container">
            test
        </div>
    </div>
</Page>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        width: 100%;
        height: 100%;
        background-color: red;;
    }

    .left-container {
        background-color: #233D73;
        height: 100%;
    }

    .right-container {
        background-color: white;
        height: 100%;
    }
</style>
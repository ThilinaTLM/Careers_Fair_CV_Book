<script>
    import { page } from '$app/stores';
</script>

<div class="grid h-screen w-screen content-center bg-red-600">
    <h1>{$page.status}: {$page.error.message}</h1>
</div>

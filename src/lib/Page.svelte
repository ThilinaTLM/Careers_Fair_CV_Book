<script lang="ts">
    export let size: "A4" | "A5" = "A4";
    export let orientation: "portrait" | "landscape" = "portrait";
</script>

<page size={size} layout={orientation} style="overflow: hidden">
     <slot></slot>
</page>

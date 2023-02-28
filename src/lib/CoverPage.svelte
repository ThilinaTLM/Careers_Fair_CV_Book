<script>
  import Page from "./Page.svelte";

</script>

<Page>
    <div class="grid place-items-center w-full bg-coverBackground h-full relative overflow-hidden">
        <div class="absolute w-[35%] h-[7%] top-[50px] left-0">
            <img src="shape.svg" alt="shape" class="absolute w-full h-full z-30" />
            <img src="shape_color.svg" alt="shape" class="absolute w-full h-full top-[5px] -left-[10px] z-20" />
            <div class="flex items-center w-full h-full absolute z-30 pl-6 pr-2">
                <img src="uom.png" alt="uom logo" class="h-[70%] mr-3" />
                <img src="cse-logo-color.png" alt="uom logo" class="h-[70%] mr-3" />
                <img src="batch_logo.svg" alt="uom logo" class="h-[70%]" />
            </div>
        </div>
        <!-- <img src="uom.png" alt="" class="absolute " /> -->
        <img src="vector_design.svg" alt="cover-design" class="absolute w-[150%] top-[300px] -left-[300px] max-w-none z-10" />
        <img src="logo.svg" alt="logo" class="absolute w-[550px] z-20" />
        <div class="absolute bottom-0 justify z-30 h-[12%] flex flex-col justify-center bg-coverBackground w-full border-t-2 border-t-themePrimary">
            <p class="text-white font-metropolis font-bold text-center">Department of Computer Science & Engineering</p>
            <p class="text-white font-metropolis font-normal text-center">University of Moratuwa</p>
        </div>
    </div>
</Page>
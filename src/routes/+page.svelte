<script>
    // deps
    import { clickOutside } from "./clickOutside";

    // date
    let date = createDate();
    let startShowing = false;

    // function to create date
    function createDate() {
        let toReturn = new Date();
        toReturn.getLocaleTime = getLocaleTime;
        return toReturn;
    }

    // function to get locale time
    function getLocaleTime(style = "short") {
        return date.toLocaleTimeString("en-US", {
            timeStyle: style,
        });
    }

    // toggle start
    function toggleStart() {
        startShowing = !startShowing;
    }

    // date setting stuff
    $: time = date.getLocaleTime();
    $: longTime = date.getLocaleTime("medium");
    setInterval(() => (date = createDate()), 1000);
</script>

<!-- for that sweet click sound effect -->
<svelte:body on:mousedown={() => new Audio("click.mp3").play()} />

<!-- background text -->
<div
    class="absolute lg:visible md:visible invisible top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono text-6xl text-slate-400 font-bold select-none"
>
    birb
    <noscript>(enable js)</noscript>
</div>

<!-- icons -->
<div class="absolute lg:visible md:visible invisible font-mono select-none">
    <!-- icons -->
    <div class="flex flex-col p-5 gap-5 w-40">
        <div class="text-center">
            <span class="material-symbols-outlined text-6xl">info</span>
            <p class="leading-none">About</p>
        </div>
        <div class="text-center">
            <span class="material-symbols-outlined text-6xl">description</span>
            <p class="leading-none">Experience</p>
        </div>
        <div class="text-center">
            <span class="material-symbols-outlined text-6xl">ink_pen</span>
            <p class="leading-none">Writing</p>
        </div>
        <div class="text-center">
            <span class="material-symbols-outlined text-6xl">person</span>
            <p class="leading-none">Personal</p>
        </div>
    </div>
</div>

<!-- main -->
<main
    class="bg-pink-100 w-screen min-h-screen text-black lg:flex md:flex flex-col font-mono hidden select-none"
>
    <!-- desktop -->
    <div class="flex flex-col flex-grow">
        <div class="flex-grow" />
        <!-- start menu -->
        {#if startShowing}
            <div
                use:clickOutside
                on:click_outside={toggleStart}
                class="ml-1 mb-1 p-1 w-48 bg-purple-800 flex flex-col gap-0.5 z-50"
            >
                <a
                    href="mailto:birb@pry.dog"
                    class="bg-pink-200 text-center py-2 border-t-2 border-t-white border-l-2 border-l-white hover:bg-purple-700 hover:text-white"
                    >Email</a
                >
                <button
                    on:click={() => location.reload()}
                    class="bg-pink-200 text-center py-2 border-t-2 border-t-white border-l-2 border-l-white hover:bg-purple-700 hover:text-white"
                    >Restart</button
                >
                <button
                    on:click={() => (location.href = "https://startpage.com")}
                    class="bg-pink-200 text-center py-2 border-t-2 border-t-white border-l-2 border-l-white hover:bg-purple-700 hover:text-white"
                    >Shut Down</button
                >
            </div>
        {/if}
    </div>
    <!-- taskbar -->
    <div
        class="bg-pink-200 w-screen h-10 flex items-center border-t-2 border-t-white z-50 px-2 py-5 gap-2"
    >
        <button
            on:click={toggleStart}
            class="border-t-2 border-t-white border-l-2 border-l-white border-b-2 border-b-purple-800 border-r-2 border-r-purple-800 py-0.5 px-2 active:border-t-purple-800 active:border-l-purple-800 active:border-b-white active:border-r-white"
            >START</button
        >
        <div />
        <div class="flex-grow" />
        <div
            class="border-t-2 border-t-purple-800 border-l-2 border-l-purple-800 border-b-2 border-b-white border-r-2 border-r-white py-0.5 px-2 has-tooltip"
        >
            <span class="tooltip -mt-20">{longTime}</span>{time}
        </div>
    </div>
</main>

<!-- mobile view -->
<main
    class="bg-slate-100 w-screen min-h-screen p-8 text-black lg:hidden md:hidden flex-col font-mono flex text-center justify-center"
>
    <h1 class="text-4xl">heya!</h1>
    <p>
        while i'd love for you to see my website, your current browser window
        size is a bit small. this website was hand-crafted with care and a
        mobile version hasn't been implemented yet. thank you.
    </p>
    <p>&nbsp;</p>
    <a href="mailto:birb@pry.dog" class="text-blue-800">email me</a>
</main>

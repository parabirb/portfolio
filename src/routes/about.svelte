<script>
    import Window from "./window.svelte";

    export let state;
    export let getState;
    export let updateState;
    export let windowIcon;

    $: updateState(state);
</script>

<Window title="About" bind:state {getState} {windowIcon}>
    <div class="p-4 min-h-full flex-col flex text-blue-800 justify-center">
        <img
            src="proot.png"
            class="w-48 self-center border-2 border-blue-800"
        />
        <h1 class="self-center text-6xl leading-snug font-bold">birb</h1>
        <p class="self-center text-base leading-snug hyphens-auto">
            heya! i'm birb. i'm currently a literature student and pre-law at
            the university of texas at dallas. i used to be a web developer and
            programmer; i have 5 years of experience. i designed this website
            from scratch using tailwind and svelte. the artwork and UI for this
            website were inspired by the video game <a
                href="https://store.steampowered.com/app/1451940/NEEDY_STREAMER_OVERLOAD/"
                target="_blank"
                class="text-violet-950 underline italic decoration-dashed decoration-1 underline-offset-2"
                >needy streamer overload</a
            >
            <span class="line-through decoration-wavy decoration-1"
                >(also, i might've used their click sfx)</span
            >. the font used is fira mono and the icons are material icons. all
            art on this website was drawn by
            <a
                href="https://ko-fi.com/zameerdraws"
                target="_blank"
                class="text-violet-950 underline decoration-dashed decoration-1 underline-offset-2"
                >zameer</a
            >.
        </p>
        <p class="self-center text-base leading-loose hyphens-auto">
            <a
                href="https://furry.engineer/@parabirb"
                target="_blank"
                class="text-violet-950 underline decoration-dashed decoration-1 underline-offset-2">mastodon</a
            >
            &bull;
            <a
                href="https://github.com/parabirb"
                target="_blank"
                class="text-violet-950 underline decoration-dashed decoration-1 underline-offset-2">github</a
            >
            &bull;
            <a
                href="https://parabirb.medium.com"
                target="_blank"
                class="text-violet-950 underline decoration-dashed decoration-1 underline-offset-2">medium</a
            >
            &bull;
            <a
                href="mailto:me@birb.works"
                target="_blank"
                class="text-violet-950 underline decoration-dashed decoration-1 underline-offset-2">email</a
            >
        </p>
    </div>
</Window>

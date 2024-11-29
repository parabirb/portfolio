<script>
    import Window from "./window.svelte";

    export let state;
    export let getState;
    export let updateState;
    export let windowIcon;

    $: updateState(state);
</script>

<Window title="Personal" bind:state {getState} {windowIcon}>
    <div class="p-4 min-h-full flex-col flex text-blue-800 justify-center">
        <img
            draggable="false"
            src="proot_homo.png"
            class="w-48 self-center border-2 border-blue-800"
        />
        <h1 class="self-center text-4xl font-bold leading-tight">
            personal details
        </h1>
        <p class="text-base leading-snug hyphens-auto">
            so... a little about me, i suppose? i was born in dallas, tx in
            october 2006; i've lived in the dfw metroplex for my whole life. i'm
            currently 18. i've also got a few hobbies; i'm a licensed amateur
            radio operator (extra class), a furry, and a hobbyist programmer
            from time to time. plus, i enjoy reading and writing about the law.
            i'm a literature major for a few reasons, one of them being that i
            want to produce art before i head off to law school. literature
            allows me to do that; i might end up pursuing a creative writing
            concentration. feel free to check my blog page to see what i'm up to!
        </p>
    </div>
</Window>

<script>
    import Window from "./window.svelte";

    export let state;
    export let getState;
    export let updateState;
    export let windowIcon;

    $: updateState(state);
</script>

<Window title="Writing" bind:state getState={getState} windowIcon={windowIcon}>
    <div class="p-4 min-h-full flex-col flex text-blue-800 justify-center">
        <video
            draggable="false"
            src="project.mp4"
            class="w-half self-center border-2 border-blue-800"
            autoplay
            loop
            muted
        />
        <h1 class="self-center text-4xl font-bold leading-snug">
            writing
        </h1>
        <p class="self-center text-base leading-snug hyphens-auto">
            i don't have anything to put here at the moment. check back later!
        </p>
    </div>
</Window>
<script>
    import Window from "./window.svelte";

    export let state;
    export let getState;
    export let updateState;
    export let windowIcon;

    $: updateState(state);
</script>

<Window title="Blog" bind:state getState={getState} windowIcon={windowIcon}>
    <iframe id="blogContainer" src="https://blog.birb.works" class="w-full min-h-full">
</Window>
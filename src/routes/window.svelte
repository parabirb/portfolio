<script>
    import { clickOutside } from "./clickOutside";
    import { get_current_component } from "svelte/internal";
    const component = get_current_component();

    export let title;
    export let state;
    export let getState;
    export let windowIcon;

    let left = 30;
    let top = 30;

    let minimized = false;
    let focused = true;

    state.push({
        title,
        focus,
        getFocused,
        opUnfocus
    });

    function getIndex() {
        for (let i = 0; i < getState().length; i++) {
            if (getState()[i].title === title) return i;
        }
    }

    let dragging = false;

    function enableDragging() {
        dragging = true;
    }

    function disableDragging() {
        dragging = false;
    }

    function move(e) {
        if (dragging) {
            left += e.movementX;
            top += e.movementY;
        }
    }

    function onMinimize() {
        minimized = true;
        focused = false;
    }

    function focus() {
        minimized = false;
        focused = true;
    }

    function unfocus() {
        for (let i = 0; i < getState().length; i++) {
            if (getState()[i].getFocused() && i !== getIndex()) focused = false;
        }
    }

    function opUnfocus() {
        focused = false;
    }
    
    function getFocused() {
        return focused;
    }

    function onClose() {
        let copiedState = [...getState()];
        copiedState.splice(getIndex(), 1);
        state = copiedState;
        component.$destroy();
    }
</script>

<svelte:window on:mouseup={disableDragging} on:mousemove={move} />

<div use:clickOutside on:click_outside={() => setTimeout(unfocus, 20)} on:click_inside={focus} style="left: {left}px; top: {top}px; {focused ? "z-index: 30" : ""}" class="lg:visible md:visible invisible absolute z-20 select-none font-mono w-[70vw] h-[70vh] {focused ? "bg-cyan-400 drop-shadow-md" : "bg-slate-200"} border-2 border-blue-800 p-1 flex-col gap-1 {minimized ? "hidden" : "flex"}">
    <div class="w-full h-8 border-2 border-blue-800 bg-pink-200 flex items-center text-sm gap-0.5 px-1 cursor-move text-violet-950 font-bold" on:mousedown={enableDragging}>
        <div class="flex gap-1 items-center">
            <span class="material-symbols-outlined text-xl">{windowIcon}</span>
            <span>{title}</span>
        </div>
        <div class="flex-grow"></div>
        <button on:click={onMinimize} class="hover:text-black h-6 w-5 flex items-center justify-center">
            <span class="material-symbols-outlined text-lg hover:text-black">minimize</span>
        </button>
        <button on:click={onClose} class="hover:text-black h-6 w-5 flex items-center justify-center">
            <span class="material-symbols-outlined text-lg">close</span>
        </button>
    </div>
    <div class="flex-grow border-2 border-blue-800 bg-pink-200 overflow-y-scroll scrollbar max-w-full w-full scrollbar-thumb-blue-800 scrollbar-track-pink-200">
        <slot/>
    </div>
</div>
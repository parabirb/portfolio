<script>
    import Window from "./window.svelte";

    export let state;
    export let getState;
    export let updateState;
    export let windowIcon;

    $: updateState(state);
</script>

<Window title="Experience" bind:state {getState} {windowIcon}>
    <div
        class="p-4 min-h-full flex-col flex text-blue-800 justify-center gap-2"
    >
        <img
            draggable="false"
            src="proot_fish.png"
            class="w-48 self-center border-2 border-blue-800"
        />
        <h1 class="self-center text-5xl font-bold leading-loose">experience</h1>
        <div class="flex flex-col">
            <h2 class="text-3xl underline decoration-wavy decoration-1 underline-offset-2">education</h2>
            <div>
                <h3 class="text-2xl leading-snug">ut dallas (2023-present)</h3>
                <p class="text-base leading-snug hyphens-auto">
                    i'm a junior at the university of texas at
                    dallas in the school of arts, humanities, and technology.
                    i'm majoring in literature and minoring in software
                    engineering; i plan to go to law school after undergrad.
                </p>
            </div>
            <div>
                <h3 class="text-2xl leading-snug">newman smith (2020-2023)</h3>
                <p class="text-base leading-snug hyphens-auto">
                    i went to newman smith high school and graduated in three
                    years. i received a diploma with distinction and
                    endorsements in stem and multidisciplinary studies.
                </p>
            </div>
        </div>
        <div class="flex flex-col">
            <h2 class="text-3xl underline decoration-wavy decoration-1 underline-offset-2">
                professional work
            </h2>
            <div>
                <h3 class="text-2xl leading-snug">ame (2024-present)</h3>
                <p class="text-base leading-snug hyphens-auto">
                    i am currently the sole web developer for Expl0dingCat's AI assistant project, ame. there, i rapidly write, test, revise, and deploy sleek, functional front-end web UIs that achieve the triple goals of usability, fashion, and simplicity.
                </p>
            </div>
            <div>
                <h3 class="text-2xl leading-snug">coinpilot (2021-2023)</h3>
                <p class="text-base leading-snug hyphens-auto">
                    i was a software development intern at coinpilot. i worked on the frontend codebase and the discord bot among other things (like keeping the VPSes in good condition). i eventually ended up leaving on good terms to pursue opportunities elsewhere and focus on my education.
                </p>
            </div>
            <div>
                <h3 class="text-2xl leading-snug">wrongthink (2021-2021)</h3>
                <p class="text-base leading-snug hyphens-auto">
                    i implemented, created, and deployed a peer-to-peer encrypted messenger built for the browser, based on webrtc and signal's double ratchet (using a library written by me). it was consistently used by many people and maintained security while remaining simple to use.
                </p>
            </div>
        </div>
        <div class="flex flex-col">
            <h2 class="text-3xl underline decoration-wavy decoration-1 underline-offset-2">
                certificates and awards
            </h2>
            <div>
            	<h3 class="text-2xl leading-snug">dean's list</h3>
            	<p class="text-base leading-snug hyphens-auto">
            		i was on the fall 2023 dean's list for the school of arts, humanities, and technology.
            	</p>
            </div>
            <div>
                <h3 class="text-2xl leading-snug">national merit semifinalist</h3>
                <p class="text-base leading-snug hyphens-auto">
                    i was a national merit semifinalist; i received a score of 1490 on the psat and was recognized as being in the 99th percentile.
                </p>
            </div>
        </div>
    </div>
</Window>

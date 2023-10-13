<script>
    import { page } from "$app/stores";
</script>

<!-- error -->
<main
    class="bg-slate-100 w-screen min-h-screen p-8 text-black flex-col font-mono flex text-center justify-center"
>
    <h1 class="text-4xl">oops!</h1>
    <p>
        you encountered a {$page.status} error. weird.
    </p>
    <p>&nbsp;</p>
    <a href="https://birb.works" class="text-blue-800">go home</a>
</main>

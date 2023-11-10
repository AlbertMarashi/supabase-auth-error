<script lang="ts">
export let data

$: supabase = data.supabase
async function google_sign_in() {
    await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${window.location.origin}/callback`,
        },
    })
}

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={google_sign_in}>Button</button>
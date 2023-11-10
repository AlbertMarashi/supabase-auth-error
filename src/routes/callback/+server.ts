import { error, redirect } from "@sveltejs/kit"

export async function GET({ url, locals: { supabase } }) {
    const code = url.searchParams.get("code")
    const redirect_uri = url.searchParams.get("redirect")
    if (code) {
        const { error: code_error } = await supabase.auth.exchangeCodeForSession(code)
        if (code_error) {
            throw error(code_error.status || 400, "Code error")
        }
        throw redirect(303, redirect_uri || "/")
    }

    throw error(400, {
        message: "Missing code",
    })
}
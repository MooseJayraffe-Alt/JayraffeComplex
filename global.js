// global.js - The Brain of the Complex
const SUPABASE_URL = 'https://edmakmpjcudrwdxpgbuc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkbWFrbXBqY3VkcndkeHBnYnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NTAzNDMsImV4cCI6MjA4ODUyNjM0M30.efTUVrvQbKYBlDBv2B-SCXaKQYCRU84gJ9jP8CMwyUs';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkAuthStatus() {
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        const statusBtn = document.getElementById('user-status');
        if (statusBtn) statusBtn.href = "profile.html"; // Redirect to profile instead of login
        
        // This checks Discord metadata first, then our custom sign-up metadata, then fallback to email
        const name = user.user_metadata.full_name || user.user_metadata.display_name || user.email.split('@')[0];
        if (nameEl) nameEl.innerText = name;
        const rankEl = document.getElementById('user-rank');
        const avatarEl = document.getElementById('user-avatar');

        if (nameEl) nameEl.innerText = user.user_metadata.full_name || user.email;
        if (rankEl) rankEl.innerText = "Complex Citizen";
        
        if (avatarEl && user.user_metadata.avatar_url) {
            avatarEl.innerHTML = `<img src="${user.user_metadata.avatar_url}" class="rounded-full w-full h-full object-cover border-2 border-cyan-400">`;
        }
    }
}

async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error("Error signing out:", error.message);
    } else {
        // Redirect to home after logging out
        window.location.href = "index.html";
    }
}

// Auto-run on every page load
document.addEventListener('DOMContentLoaded', checkAuthStatus);
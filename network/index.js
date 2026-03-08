// 1. GATEKEEPER: Prevent unauthorized access
async function checkAccess() {
    const client = window.supabaseClient;
    if (!client) {
        setTimeout(checkAccess, 100);
        return;
    }

    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        window.location.href = "../auth/";
        return;
    }

    // Load initial data
    loadIncomingRequests(user.id);
    loadNetwork(user.id);
}

// 2. SEARCH: Find other citizens
async function searchUsers() {
    const query = document.getElementById('user-search').value;
    if (!query) return;

    const { data: users, error } = await window.supabaseClient
        .from('profiles')
        .select('id, display_name, avatar_url')
        .ilike('display_name', `%${query}%`)
        .limit(5);

    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';

    users.forEach(user => {
        resultsDiv.innerHTML += `
            <div class="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 group hover:border-cyan-500/30 transition">
                <span class="text-xs font-bold">${user.display_name}</span>
                <button onclick="sendRequest('${user.id}')" class="text-[9px] bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition uppercase font-black">
                    Add
                </button>
            </div>
        `;
    });
}

// 3. REQUESTS: Send, Load, and Accept
async function sendRequest(receiverId) {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (user.id === receiverId) return alert("You can't add yourself!");

    const { error } = await window.supabaseClient
        .from('friends')
        .insert({ sender_id: user.id, receiver_id: receiverId, status: 'pending' });

    if (error) alert("Signal already broadcasted or failed.");
    else alert("Friend request sent!");
}

async function loadIncomingRequests(userId) {
    const { data: requests } = await window.supabaseClient
        .from('friends')
        .select(`id, sender:sender_id ( display_name )`)
        .eq('receiver_id', userId)
        .eq('status', 'pending');

    const list = document.getElementById('requests-list');
    if (requests && requests.length > 0) {
        list.innerHTML = '';
        requests.forEach(req => {
            list.innerHTML += `
                <div class="flex items-center justify-between p-3 bg-pink-500/10 border border-pink-500/20 rounded-xl">
                    <span class="text-[10px] font-bold uppercase tracking-tighter">${req.sender.display_name}</span>
                    <div class="flex gap-2">
                        <button onclick="acceptFriend('${req.id}')" class="bg-emerald-500 text-slate-900 p-1 px-2 rounded text-[9px] font-black uppercase">Accept</button>
                        <button onclick="deleteRequest('${req.id}')" class="bg-slate-700 text-white p-1 px-2 rounded text-[9px] font-black uppercase">Ignore</button>
                    </div>
                </div>`;
        });
    }
}

async function acceptFriend(requestId) {
    const { error } = await window.supabaseClient
        .from('friends')
        .update({ status: 'accepted' })
        .eq('id', requestId);
    if (!error) location.reload();
}

async function deleteRequest(requestId) {
    await window.supabaseClient.from('friends').delete().eq('id', requestId);
    location.reload();
}

// 4. NETWORK: Load accepted friends
async function loadNetwork(userId) {
    const { data: connections } = await window.supabaseClient
        .from('friends')
        .select(`
            status,
            sender:sender_id ( id, display_name, avatar_url ),
            receiver:receiver_id ( id, display_name, avatar_url )
        `)
        .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`)
        .eq('status', 'accepted');

    const grid = document.getElementById('network-grid');
    grid.innerHTML = '';

    if (!connections || connections.length === 0) {
        grid.innerHTML = `<div class="col-span-full p-12 glass-panel text-center text-slate-500 uppercase text-xs tracking-[0.3em]">No synchronized citizens found</div>`;
        return;
    }

    connections.forEach(conn => {
        const other = conn.sender.id === userId ? conn.receiver : conn.sender;
        const card = document.createElement('div');
        card.className = "glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-cyan-500/30 transition-all duration-300 group bg-slate-800/40";
        card.innerHTML = `
            <div class="relative">
                <div class="w-14 h-14 rounded-2xl bg-slate-700 overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition flex items-center justify-center text-xl">
                    ${other.avatar_url ? `<img src="${other.avatar_url}" class="w-full h-full object-cover">` : '👤'}
                </div>
                <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-slate-900 rounded-full"></div>
            </div>
            <div class="flex-grow">
                <p class="text-sm font-bold tracking-tight">${other.display_name}</p>
                <p class="text-[10px] text-emerald-500 uppercase tracking-widest font-bold mt-1">Status: Online</p>
            </div>
            <button onclick="deleteRequestByContext('${other.id}')" class="opacity-0 group-hover:opacity-100 p-2 text-slate-500 hover:text-red-500 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
        `;
        grid.appendChild(card);
    });
}

// Initialize
window.addEventListener('load', checkAccess);
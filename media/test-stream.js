import Express from 'express';
import Cors from 'cors'; // 1. Import the cors package
import YTMusic from 'ytmusic-api';
import ytdl from '@distube/ytdl-core';

const app = Express();
const port = 3000;

// 2. Replace the old manual header block with this single line:
app.use(Cors()); 

const ytmusic = new YTMusic();
await ytmusic.initialize();

// Endpoint 1: Search for tracks
app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    if (!query) return res.status(400).json({ error: "Missing query parameter 'q'" });

    try {
        const results = await ytmusic.searchSongs(query);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint 2: Stream the audio
app.get('/api/stream', async (req, res) => {
    const videoId = req.query.id;
    if (!videoId) return res.status(400).json({ error: "Missing video ID" });

    try {
        res.setHeader('Content-Type', 'audio/mpeg');
        
        ytdl(`https://www.youtube.com/watch?v=${videoId}`, {
            filter: 'audioonly',
            highWaterMark: 1 << 25
        }).pipe(res);

    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching audio stream.");
    }
});

app.listen(port, () => {
    console.log(`🎵 Music API Backend running on http://localhost:${port}`);
});
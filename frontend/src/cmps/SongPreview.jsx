import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export function SongPreview({ song, onPlaySong, onAddToFavs }) {

    const [addStyle, setAddStyle] = useState('')

    useEffect(() => {
        setTimeout(() => {  setAddStyle('') }, 1500);
    },[addStyle])

    return (
        <div className={`main-card ${addStyle} flex align-center space-around`}>
            <img src={song.snippet.thumbnails.default.url} />
            <div className="txt-box flex column space-around">
                <h2>{song.snippet.title}</h2>
                <p>{song.snippet.description}</p>
            </div>
            <section className="btn-box flex column">
                <button onClick={(event) => { onPlaySong(song) }}>▶️</button>
                <button onClick={(event) => { onAddToFavs(song); setAddStyle('added') }}>📌</button>
            </section>
            <h2 className={(addStyle)?'addMsg':'hidden'}>Adding</h2>

        </div>
    )
}

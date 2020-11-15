import React from 'react';
import { SongPreview } from './SongPreview.jsx'

export function SongList(props) {
    return (
        <div className="song-list flex column align-center ">
            {
                props.songs.map((song, idx) => {
                    return <SongPreview key={idx} song={song} onPlaySong={props.onPlaySong}
                        onAddToFavs={props.onAddToFavs} />
                })
            }
        </div>
    )
}   

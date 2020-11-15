import React from 'react';

export function Player({ song, isFav }) {

    function isFavStyle(){
        return (isFav)? 'fav-player' :'';
    }

    return (
        <div className={`player-box ${isFavStyle()} flex column align-center`}>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                // src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                src={`https://www.youtube.com/embed/${song.id.videoId}?autoplay=0`}
                frameBorder="0"></iframe>
                <h2>Now Playing: {song.snippet.title}</h2>
        </div>
    )
}

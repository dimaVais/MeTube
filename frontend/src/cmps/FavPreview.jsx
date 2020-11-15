import React from 'react';

export function FavPreview({ fav, onPlayFav, onRemoveFav }) {
    return (
        <div className={`fav-card`} onClick={(event) => { onPlayFav(fav) }}>
            <img src={fav.snippet.thumbnails.medium.url} />
            <h3>{fav.snippet.title}</h3>
            <button onClick={(event) => { event.stopPropagation(); onRemoveFav(fav._id) }}>❌</button>
        </div>
    )
}
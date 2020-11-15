
import React from 'react';
import { FavPreview } from './FavPreview.jsx'

export function FavList(props) {
    return (
        <div className="fav-list flex wrap justify-center">
            {
                props.favs.map((fav, idx) => {
                    return <FavPreview key={idx} fav={fav} onPlayFav={props.onPlayFav}
                        onRemoveFav={props.onRemoveFav} />
                })
            }
        </div>
    )
}
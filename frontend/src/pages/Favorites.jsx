import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFavs, removeFav } from '../store/actions/favActions.js';
import { FavList } from '../cmps/FavList.jsx';
import { Player } from '../cmps/Player.jsx';


export function Favorites(props) {

    const favs = useSelector(state => state.favReducer.favs);
    const dispatch = useDispatch();
    const [currFav, setCurrFav] = useState(null);

    useEffect(() => {
        async function loadTheFavs() {
            await dispatch(loadFavs());
            if (!currFav) setCurrFav(favs[0]);
        };
        loadTheFavs();
    }, [currFav])


    function onPlayFav(fav) {
        setCurrFav(fav);
    }

    async function onRemoveFav(favId) {
        await dispatch(removeFav(favId));
        await dispatch(loadFavs());
    }

    return (
        <section className="main-container">
            <div className="inner-box ">
                <div className="flex column space-between align-center">
                    {favs.length && currFav && <Player song={currFav} isFav={true} />}
                    {favs.length && <FavList favs={favs} onPlayFav={onPlayFav} onRemoveFav={onRemoveFav} />}
                </div>
            </div>
        </section>
    )
}
import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SongList } from '../cmps/SongList.jsx';
import { Player } from '../cmps/Player.jsx';
import { SearchName } from '../cmps/SearchName.jsx';
import { loadSongs, setSearch } from '../store/actions/songActions.js';
import {addFav } from '../store/actions/favActions.js';

export function Home(props) {

    const songs = useSelector(state => state.songReducer.songs);
    const search = useSelector(state => state.songReducer.search);
    const dispatch = useDispatch();
    const [currPlaying, setCurrPlaying] = useState(null)

    useEffect(() => {
        async function loadSongsInEffect() {
            await dispatch(loadSongs(search));
            if (!currPlaying) setCurrPlaying(songs[0]);
        };
        loadSongsInEffect();
    }, [currPlaying])


    const onPlaySong = (song) => {
        setCurrPlaying(song);
    }

    const onSearch = async (search) => {
        await dispatch(setSearch(search));
        await dispatch(loadSongs(search));
    }

    const onAddToFavs = async (fav) => {
        await dispatch(addFav(fav));
    }

    return (
        <section className="main-container">
            <div className="inner-box ">
                <SearchName onSearch={onSearch} />
                <div className="content-box">
                    {songs && <SongList songs={songs} onPlaySong={onPlaySong} onAddToFavs={onAddToFavs} />}
                    {songs && currPlaying && <Player song={currPlaying} isFav={false}  />}
                </div>
            </div>
        </section>
    )
}
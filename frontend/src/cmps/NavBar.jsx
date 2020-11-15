import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar(props) {

    const [activeHome, setActiveHome] = useState(true);
    const [activeFav, setActiveFav] = useState(false);

    return (
        <div className="nav-box full flex space-around align-center">
            <NavLink to='/'>
                <button className={(activeHome) ? 'active' : ''}
                    onClick={() => {
                        if (!activeHome) {
                            setActiveHome(!activeHome);
                            setActiveFav(!activeFav);
                        }
                    }} >  Home</button></NavLink>
            <NavLink to='/favorites'>
                <button className={(activeFav) ? 'active' : ''}
                    onClick={() => {
                        if (!activeFav) {
                            setActiveHome(!activeHome);
                            setActiveFav(!activeFav);
                        }
                    }} >Favorites</button></NavLink>
        </div>
    )
}

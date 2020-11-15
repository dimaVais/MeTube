import httpService from './httpService.js'
const BASE_URL = '/fav'

export const favService = {
    loadFavs,
    addFav,
    removeFav
}

// const FAVS_KEY = 'FAVS';
// const INIT_FAV = [{
//         "kind": "youtube#searchResult",
//         "etag": "W8YiH5HezYd5IUe20xlDC4p9ZKw",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "hTWKbfoikeg"
//         },
//         "snippet": {
//             "publishedAt": "2009-06-16T22:14:25Z",
//             "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
//             "title": "Nirvana - Smells Like Teen Spirit (Official Music Video)",
//             "description": "Nirvana's official music video for Smells Like Teen Spirit, remastered in HD. Subscribe for more videos: https://Nirvana.lnk.to/Subscribe Listen to more from ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/hTWKbfoikeg/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/hTWKbfoikeg/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/hTWKbfoikeg/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "NirvanaVEVO",
//             "liveBroadcastContent": "none",
//             "publishTime": "2009-06-16T22:14:25Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "gWlAbsARp204icqcSNnU4iGdv0I",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "vabnZ9-ex7o"
//         },
//         "snippet": {
//             "publishedAt": "2009-06-16T21:34:49Z",
//             "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
//             "title": "Nirvana - Come As You Are",
//             "description": "As heard in Captain Marvel! Listen to more Nirvana here: https://Nirvana.lnk.to/Essentials Read the story behind 'Nevermind' here: ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/vabnZ9-ex7o/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/vabnZ9-ex7o/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/vabnZ9-ex7o/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "NirvanaVEVO",
//             "liveBroadcastContent": "none",
//             "publishTime": "2009-06-16T21:34:49Z"
//         }
//     }
// ];
// var favs = JSON.parse(localStorage.getItem(FAVS_KEY)) || INIT_FAV;

async function loadFavs() {
    try {
        const favs = await httpService.get(`${BASE_URL}`)
        return favs;
    } catch (err) {
        console.log(err); 
    }
}

async function addFav(fav) {
    try {
        const addedFav = await httpService.post(`${BASE_URL}`, fav);
        return addedFav;
    } catch (err) {
        console.log(err); 
    }
}

async function removeFav(favId) {
    try {
        const msg = await httpService.delete(`${BASE_URL}/${favId}`);
        console.log(msg);
    } catch (err) {
        console.log(err); 
    }
}


function _makeId(length = 6) {
    let txt = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
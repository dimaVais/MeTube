"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.songService = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import httpService from './httpService.js';
var YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
var API_KEY = 'AIzaSyDGql0MyVMEQeH89LQj0TtpM66SoLpkAhw';

var axios = _axios["default"].create({
  withCredentials: false
});

var songService = {
  loadSongs: loadSongs
};
exports.songService = songService;

function loadSongs(search) {
  var queryStrKey, res;
  return regeneratorRuntime.async(function loadSongs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          queryStrKey = "?&part=snippet&maxResults=25&videoEmbeddable=true&type=video&key=".concat(API_KEY, "&q=").concat(search);
          _context.next = 4;
          return regeneratorRuntime.awrap(axios.get("".concat(YOUTUBE_URL).concat(queryStrKey)));

        case 4:
          res = _context.sent;
          console.log(res);
          return _context.abrupt("return", res.data.items);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", test.items);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function _makeId() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

var test = {
  "kind": "youtube#searchListResponse",
  "etag": "zqVGRDVERh-IYfN-eWn58c128Us",
  "nextPageToken": "CA8QAA",
  "regionCode": "IL",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 15
  },
  "items": [{
    "kind": "youtube#searchResult",
    "etag": "tT6Ifm1OnbNkJYGnN5GfhC1RfSI",
    "id": {
      "kind": "youtube#video",
      "videoId": "u9Dg-g7t2l4"
    },
    "snippet": {
      "publishedAt": "2015-12-08T15:28:55Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed  - The Sound Of Silence [Official Music Video]",
      "description": "Download or stream the song now: https://wbr.ec/immortalized New album 'Evolution' out now: https://disturbed.lnk.to/evolution Directed by Matt Mahurin ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/u9Dg-g7t2l4/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/u9Dg-g7t2l4/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/u9Dg-g7t2l4/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2015-12-08T15:28:55Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "RFtVRB-FkSXAAFaVpJ0nDl13VaQ",
    "id": {
      "kind": "youtube#video",
      "videoId": "09LTT0xwdfw"
    },
    "snippet": {
      "publishedAt": "2009-10-27T00:31:50Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - Down With The Sickness [Official Music Video]",
      "description": "From the album 'The Sickness (20th Anniversary Edition)': https://Disturbed.lnk.to/sickness-20 New album 'Evolution' out now: https://disturbed.lnk.to/evolution ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/09LTT0xwdfw/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/09LTT0xwdfw/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/09LTT0xwdfw/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2009-10-27T00:31:50Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "0KKc5dIvXBxRLEBKdRakmQaNc60",
    "id": {
      "kind": "youtube#video",
      "videoId": "8nW-IPrzM1g"
    },
    "snippet": {
      "publishedAt": "2015-06-23T12:23:40Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - The Vengeful One [Official Music Video]",
      "description": "New album 'Evolution' out now: https://disturbed.lnk.to/evolution Directed by Phil Mucci Connect with Disturbed: Official Website - http://disturbed1.com ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/8nW-IPrzM1g/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/8nW-IPrzM1g/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/8nW-IPrzM1g/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2015-06-23T12:23:40Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "sIkOI4vwokBPpkUSsCQ0bkBHrgo",
    "id": {
      "kind": "youtube#video",
      "videoId": "I77mjesUbkw"
    },
    "snippet": {
      "publishedAt": "2009-10-27T02:01:23Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - Stricken (Video)",
      "description": "2005 WMG Stricken (Video)",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/I77mjesUbkw/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/I77mjesUbkw/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/I77mjesUbkw/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2009-10-27T02:01:23Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "BaIlXZFFfYHJdcWtEbiaUkIQq3o",
    "id": {
      "kind": "youtube#video",
      "videoId": "KY8E-O7LCog"
    },
    "snippet": {
      "publishedAt": "2020-09-11T04:00:11Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - If I Ever Lose My Faith in You [Official Music Video]",
      "description": "\"If I Ever Lose My Faith in You\" out now: http://disturbed.lnk.to/iielmfiy Directed by Matt Mahurin http://www.mattmahurin.com New album 'Evolution' out now: ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/KY8E-O7LCog/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/KY8E-O7LCog/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/KY8E-O7LCog/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2020-09-11T04:00:11Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "5n20Npr2ZBqSTVp2tgLA8L0VXHo",
    "id": {
      "kind": "youtube#video",
      "videoId": "L2QTtdeL3dE"
    },
    "snippet": {
      "publishedAt": "2018-01-08T01:12:00Z",
      "channelId": "UCZ5eLwVvfIJzDvdrEwsxK6Q",
      "title": "Disturbed - Indestructible Full album HQ",
      "description": "one of the greatest album and band EVER. 1. Indestructible - 0:00 2. Inside the Fire - 4:38 3. Deceiver - 8:29 4. The Night - 12:19 5. Haunted - 17:05 6. Perfect ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/L2QTtdeL3dE/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/L2QTtdeL3dE/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/L2QTtdeL3dE/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Mr. MusicmanTV",
      "liveBroadcastContent": "none",
      "publishTime": "2018-01-08T01:12:00Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "7ffl_obZEkz7J51Exrhk3TVvsWs",
    "id": {
      "kind": "youtube#video",
      "videoId": "t4382UVl0oc"
    },
    "snippet": {
      "publishedAt": "2018-09-21T13:59:31Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - A Reason To Fight [Official Music Video]",
      "description": "If you or someone you know is struggling with drug/alcohol addiction or having thoughts of suicide, please reach out to the following: AUSTRALIA Australian ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/t4382UVl0oc/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/t4382UVl0oc/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/t4382UVl0oc/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2018-09-21T13:59:31Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "-qoaJOO_lJfiIOZne6NdjvmphBs",
    "id": {
      "kind": "youtube#video",
      "videoId": "HkhfL0pnMPQ"
    },
    "snippet": {
      "publishedAt": "2009-10-27T02:02:29Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - Down With The Sickness (Explicit) (Official Music Video)",
      "description": "\"Down With The Sickness (Explicit)\" by Disturbed from The Sickness, available now. Download on iTunes: http://bit.ly/Wqy4EL New Album \"Immortalized\" Out ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/HkhfL0pnMPQ/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/HkhfL0pnMPQ/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/HkhfL0pnMPQ/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2009-10-27T02:02:29Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "_s1eYTokbW69nolNfJJlWAZsPNA",
    "id": {
      "kind": "youtube#video",
      "videoId": "YV4oYkIeGJc"
    },
    "snippet": {
      "publishedAt": "2009-10-27T00:31:06Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - Land Of Confusion [Official Music Video]",
      "description": "From the album 'Ten Thousand Fists': https://Disturbed.lnk.to/tenthousandfists New album 'Evolution' out now: https://disturbed.lnk.to/evolution See Disturbed ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/YV4oYkIeGJc/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/YV4oYkIeGJc/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/YV4oYkIeGJc/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2009-10-27T00:31:06Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "DdHCXqxndp5kblIrUQvOILJz00k",
    "id": {
      "kind": "youtube#video",
      "videoId": "3moLkjvhEu0"
    },
    "snippet": {
      "publishedAt": "2009-10-27T00:37:05Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - Stricken [Official Music Video]",
      "description": "From the album 'Ten Thousand Fists': https://Disturbed.lnk.to/tenthousandfists New album 'Evolution' out now: https://disturbed.lnk.to/evolution See Disturbed ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/3moLkjvhEu0/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/3moLkjvhEu0/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/3moLkjvhEu0/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2009-10-27T00:37:05Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "yrqxxu3TWTp5NNgAmolJ69dYKVg",
    "id": {
      "kind": "youtube#video",
      "videoId": "rxujAPhxlo0"
    },
    "snippet": {
      "publishedAt": "2009-10-29T21:24:40Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - Inside The Fire [Official Music Video]",
      "description": "From the album 'Indestructible': https://Disturbed.lnk.to/indestructible New album 'Evolution' out now: https://disturbed.lnk.to/evolution See Disturbed live: ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/rxujAPhxlo0/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/rxujAPhxlo0/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/rxujAPhxlo0/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2009-10-29T21:24:40Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "LcrzMstIrJTN3bHziZggmF-b8i8",
    "id": {
      "kind": "youtube#video",
      "videoId": "G19UqSnNuO8"
    },
    "snippet": {
      "publishedAt": "2015-03-26T01:02:58Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - Down with the Sickness (Live at Rock am Ring 2008, Germany) [HD]",
      "description": "Disturbed - Down With The Sickness (Live at Rock am Ring 2008, Germany) [HD]",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/G19UqSnNuO8/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/G19UqSnNuO8/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/G19UqSnNuO8/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2015-03-26T01:02:58Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "a_oTpjKl5NAtyHy15B3n2C_vc14",
    "id": {
      "kind": "youtube#video",
      "videoId": "_LypjOTTH6E"
    },
    "snippet": {
      "publishedAt": "2015-11-20T10:30:00Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - The Light [Official Music Video]",
      "description": "New album 'Evolution' out now: https://disturbed.lnk.to/evolution Directed by Culley Bunker & Craig Bernard Tour Dates: http://disturbed1.com Connect with ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/_LypjOTTH6E/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/_LypjOTTH6E/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/_LypjOTTH6E/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2015-11-20T10:30:00Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "5MhsIpMVivauaRRuASvw0HIGvks",
    "id": {
      "kind": "youtube#video",
      "videoId": "Bk7RVw3I8eg"
    },
    "snippet": {
      "publishedAt": "2016-03-29T19:03:13Z",
      "channelId": "UCi7GJNg51C3jgmYTUwqoUXA",
      "title": "Disturbed &quot;The Sound Of Silence&quot; 03/28/16",
      "description": "Disturbed performs a track from their album Immortalized. More CONAN @ http://teamcoco.com/video Team Coco is the official YouTube channel of late night ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/Bk7RVw3I8eg/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/Bk7RVw3I8eg/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/Bk7RVw3I8eg/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Team Coco",
      "liveBroadcastContent": "none",
      "publishTime": "2016-03-29T19:03:13Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "ps91KZ9cPHxdqo8qmqhIzzZfEmA",
    "id": {
      "kind": "youtube#video",
      "videoId": "DWSlOCEzRGo"
    },
    "snippet": {
      "publishedAt": "2009-10-27T00:29:49Z",
      "channelId": "UCveWMJeHgcIUPMnFzd7Vxjg",
      "title": "Disturbed - Prayer [Official Music Video]",
      "description": "From the album 'Believe': https://Disturbed.lnk.to/believe New album 'Evolution' out now: https://disturbed.lnk.to/evolution See Disturbed live: ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/DWSlOCEzRGo/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/DWSlOCEzRGo/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/DWSlOCEzRGo/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Disturbed",
      "liveBroadcastContent": "none",
      "publishTime": "2009-10-27T00:29:49Z"
    }
  }]
};
var test1 = {
  "kind": "youtube#searchListResponse",
  "etag": "IUl2bkamZ9XqofMduAWK3K6ty14",
  "nextPageToken": "CBkQAA",
  "regionCode": "IL",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 25
  },
  "items": [{
    "kind": "youtube#searchResult",
    "etag": "W8YiH5HezYd5IUe20xlDC4p9ZKw",
    "id": {
      "kind": "youtube#video",
      "videoId": "hTWKbfoikeg"
    },
    "snippet": {
      "publishedAt": "2009-06-16T22:14:25Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - Smells Like Teen Spirit (Official Music Video)",
      "description": "Nirvana's official music video for Smells Like Teen Spirit, remastered in HD. Subscribe for more videos: https://Nirvana.lnk.to/Subscribe Listen to more from ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/hTWKbfoikeg/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/hTWKbfoikeg/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/hTWKbfoikeg/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-06-16T22:14:25Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "gWlAbsARp204icqcSNnU4iGdv0I",
    "id": {
      "kind": "youtube#video",
      "videoId": "vabnZ9-ex7o"
    },
    "snippet": {
      "publishedAt": "2009-06-16T21:34:49Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - Come As You Are",
      "description": "As heard in Captain Marvel! Listen to more Nirvana here: https://Nirvana.lnk.to/Essentials Read the story behind 'Nevermind' here: ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/vabnZ9-ex7o/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/vabnZ9-ex7o/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/vabnZ9-ex7o/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-06-16T21:34:49Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "eAygxjsSwnOpU1BunjLdLNofLPE",
    "id": {
      "kind": "youtube#video",
      "videoId": "pkcJEvMcnEg"
    },
    "snippet": {
      "publishedAt": "2009-06-16T22:57:12Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - Lithium",
      "description": "Read the story behind 'Nevermind' here: https://www.udiscovermusic.com/stories/nirvana-quiet-debut-nevermind/ Listen to more from Nirvana: ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/pkcJEvMcnEg/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/pkcJEvMcnEg/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/pkcJEvMcnEg/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-06-16T22:57:12Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "iEWjUCTauWVLjrAVkUPvuoQoYrk",
    "id": {
      "kind": "youtube#video",
      "videoId": "iz3tmYDl6XI"
    },
    "snippet": {
      "publishedAt": "2020-05-22T17:00:30Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - The Man Who Sold The World (Live And Loud, Seattle / 1993)",
      "description": "Music video by Nirvana performing The Man Who Sold The World (Live And Loud, Seattle / 1993). © 2013 UMG Recordings, Inc. http://vevo.ly/hF0blL.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/iz3tmYDl6XI/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/iz3tmYDl6XI/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/iz3tmYDl6XI/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2020-05-22T17:00:30Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "rVtTrY09WHmafQ7RzIIEKoiA-8E",
    "id": {
      "kind": "youtube#video",
      "videoId": "SV9-9RvHsjY"
    },
    "snippet": {
      "publishedAt": "2020-08-28T12:45:10Z",
      "channelId": "UCR5wZcXtOUka8jTA57flzMg",
      "title": "Gülşen &amp; Edis - Nirvana",
      "description": "Gülşen & Edis'in, DMC etiketiyle yayınlanan \"Nirvana\" isimli tekli çalışması, video klibiyle netd müzik'te. Söz - Müzik: Gülşen & Edis & Emrah Karakuyu ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/SV9-9RvHsjY/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/SV9-9RvHsjY/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/SV9-9RvHsjY/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "netd müzik",
      "liveBroadcastContent": "none",
      "publishTime": "2020-08-28T12:45:10Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "8zGhmVCl8us5UQfAkSt00go0oN0",
    "id": {
      "kind": "youtube#video",
      "videoId": "hEMm7gxBYSc"
    },
    "snippet": {
      "publishedAt": "2019-12-21T18:00:11Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - Where Did You Sleep Last Night (Live On MTV Unplugged Unedited)",
      "description": "REMASTERED IN HD! Taken from the 25th Anniversary Editions of Nirvana – MTV Unplugged in New York Order Now: https://Nirvana.lnk.to/Unplugged25 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/hEMm7gxBYSc/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/hEMm7gxBYSc/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/hEMm7gxBYSc/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2019-12-21T18:00:11Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "v5UWQd1bKLM1K0qAKbhIdfBcR3Y",
    "id": {
      "kind": "youtube#video",
      "videoId": "fregObNcHC8"
    },
    "snippet": {
      "publishedAt": "2009-06-16T22:56:31Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - The Man Who Sold The World (MTV Unplugged)",
      "description": "REMASTERED IN HD! Taken from the 25th Anniversary Editions of Nirvana – MTV Unplugged in New York Order Now: https://Nirvana.lnk.to/Unplugged25 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/fregObNcHC8/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/fregObNcHC8/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/fregObNcHC8/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-06-16T22:56:31Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "qQFxAhvsZqjVvSBQzCX2-xzV2AI",
    "id": {
      "kind": "youtube#video",
      "videoId": "PbgKEjNBHqM"
    },
    "snippet": {
      "publishedAt": "2009-06-16T22:25:12Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - In Bloom (Official Video)",
      "description": "Read the story behind the seminal 'Nevermind' here: https://www.udiscovermusic.com/stories/nirvana-quiet-debut-nevermind/ Listen to more from Nirvana: ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/PbgKEjNBHqM/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/PbgKEjNBHqM/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/PbgKEjNBHqM/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-06-16T22:25:12Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "1VUYRphrqCnSTUqvOqyFJwK9VhQ",
    "id": {
      "kind": "youtube#video",
      "videoId": "n6P0SitRwy8"
    },
    "snippet": {
      "publishedAt": "2009-06-16T22:03:01Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - Heart-Shaped Box",
      "description": "Read the story behind Nirvana's final studio album here: https://www.udiscovermusic.com/stories/utero-takes-bow-nirvana/ Listen to more from Nirvana: ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/n6P0SitRwy8/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/n6P0SitRwy8/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/n6P0SitRwy8/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-06-16T22:03:01Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "yltzVVaI6G_uT_CkGBXzoHRI_K8",
    "id": {
      "kind": "youtube#video",
      "videoId": "qv96yJYhk3M"
    },
    "snippet": {
      "publishedAt": "2009-12-25T01:05:48Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - You Know You&#39;re Right",
      "description": "Listen to more from Nirvana: https://Nirvana.lnk.to/essentials Subscribe for more videos: https://goo.gl/DS7Geg Facebook: https://www.facebook.com/Nirvana/ ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/qv96yJYhk3M/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/qv96yJYhk3M/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/qv96yJYhk3M/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-12-25T01:05:48Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "DnCxcAj2TeVelH5EbiNyTfwATS4",
    "id": {
      "kind": "youtube#video",
      "videoId": "d9iLPs1Tjkc"
    },
    "snippet": {
      "publishedAt": "2018-06-25T12:12:37Z",
      "channelId": "UC2ZlRfXEDlhD7KyARGkP91Q",
      "title": "Nirvana Best Best Songs - Nirvana Greatest Hits Full Album",
      "description": "Nirvana Best Best Songs - Nirvana Greatest Hits Full Album.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/d9iLPs1Tjkc/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/d9iLPs1Tjkc/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/d9iLPs1Tjkc/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "MUSIC Everyday 2020",
      "liveBroadcastContent": "none",
      "publishTime": "2018-06-25T12:12:37Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "ytWG5zc4ySywyKGTARCuxXmykt0",
    "id": {
      "kind": "youtube#video",
      "videoId": "aWmkuH1k7uA"
    },
    "snippet": {
      "publishedAt": "2009-06-17T01:36:28Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - All Apologies (MTV Unplugged)",
      "description": "REMASTERED IN HD! Listen to more from Nirvana: https://Nirvana.lnk.to/essentials Subscribe for more videos: https://goo.gl/DS7Geg Facebook: ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/aWmkuH1k7uA/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/aWmkuH1k7uA/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/aWmkuH1k7uA/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-06-17T01:36:28Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "ysv165xNoyByTu-zuBsuMtpchgg",
    "id": {
      "kind": "youtube#video",
      "videoId": "OfS1jFck8YQ"
    },
    "snippet": {
      "publishedAt": "2017-11-28T15:24:11Z",
      "channelId": "UCr8RbU-D7iSvpy0ZO-AasoQ",
      "title": "INNA - Nirvana | Official Music Video",
      "description": "I got lost in the city, I got lost in Nirvana Official music video by INNA performing the single \"Nirvana\". (C) & (P) 2017 Global Records Concerts: ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/OfS1jFck8YQ/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/OfS1jFck8YQ/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/OfS1jFck8YQ/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "INNA",
      "liveBroadcastContent": "none",
      "publishTime": "2017-11-28T15:24:11Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "iF33IhTqcjewf-QRpHFJX_8Pjlw",
    "id": {
      "kind": "youtube#video",
      "videoId": "BGqlqspzeYU"
    },
    "snippet": {
      "publishedAt": "2018-12-12T12:20:01Z",
      "channelId": "UCrPe3hLA51968GwxHSZ1llw",
      "title": "Something In The Way",
      "description": "Provided to YouTube by Universal Music Group Something In The Way · Nirvana Nevermind ℗ 1991 Geffen Records Released on: 2011-01-01 Producer, Studio ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/BGqlqspzeYU/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/BGqlqspzeYU/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/BGqlqspzeYU/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Nirvana - Topic",
      "liveBroadcastContent": "none",
      "publishTime": "2018-12-12T12:20:01Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "8yJ4xdTzqQ37YMvHvlzyHESBkVo",
    "id": {
      "kind": "youtube#video",
      "videoId": "QECJ9pCyhns"
    },
    "snippet": {
      "publishedAt": "2009-12-25T05:44:26Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - Sliver (Official Video)",
      "description": "Listen to more from Nirvana: https://Nirvana.lnk.to/essentials Subscribe for more videos: https://goo.gl/DS7Geg Facebook: https://www.facebook.com/Nirvana/ ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/QECJ9pCyhns/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/QECJ9pCyhns/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/QECJ9pCyhns/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-12-25T05:44:26Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "DEKhNlfNsLD081xazImtXz2_axA",
    "id": {
      "kind": "youtube#video",
      "videoId": "z9LiPuVRyU8"
    },
    "snippet": {
      "publishedAt": "2019-11-05T18:00:05Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - Come As You Are (Live On MTV Unplugged, 1993 / Unedited)",
      "description": "REMASTERED IN HD! Taken from the 25th Anniversary Editions of Nirvana – MTV Unplugged in New York Order Now: https://Nirvana.lnk.to/Unplugged25 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/z9LiPuVRyU8/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/z9LiPuVRyU8/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/z9LiPuVRyU8/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2019-11-05T18:00:05Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "K1lOiBVOdahZf34vByNxF20stsM",
    "id": {
      "kind": "youtube#video",
      "videoId": "AhcttcXcRYY"
    },
    "snippet": {
      "publishedAt": "2009-06-17T00:49:23Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - About A Girl (MTV Unplugged)",
      "description": "REMASTERED IN HD! Taken from the 25th Anniversary Editions of Nirvana – MTV Unplugged in New York Order Now: https://Nirvana.lnk.to/Unplugged25 Read ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/AhcttcXcRYY/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/AhcttcXcRYY/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/AhcttcXcRYY/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-06-17T00:49:23Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "BxuaNpSkiVSlWO6cqpjnGeJ8TPY",
    "id": {
      "kind": "youtube#video",
      "videoId": "R3XIGon2RjY"
    },
    "snippet": {
      "publishedAt": "2009-12-25T05:43:51Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - Smells Like Teen Spirit (Official Live at Reading 1992)",
      "description": "Read about Nirvana's 1992 performance at Reading here: https://www.udiscovermusic.com/stories/reading-nirvana/ Listen to more from Nirvana: ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/R3XIGon2RjY/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/R3XIGon2RjY/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/R3XIGon2RjY/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2009-12-25T05:43:51Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "aBIGuJ8dXGOIbWP2EV9a3nlJGbE",
    "id": {
      "kind": "youtube#video",
      "videoId": "qMOA9f63d8Q"
    },
    "snippet": {
      "publishedAt": "2018-02-09T09:06:13Z",
      "channelId": "UCQubkhpxgJmZ8Bu3kOcyj7Q",
      "title": "INNA - Nirvana (Official Video)",
      "description": "inna nirvana | Stream and Download: https://fanlink.to/Nirvana Stop Cyberbullying! Comments are disabled to avoid insults, vulgar language and messages ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/qMOA9f63d8Q/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/qMOA9f63d8Q/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/qMOA9f63d8Q/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "CDF Records",
      "liveBroadcastContent": "none",
      "publishTime": "2018-02-09T09:06:13Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "ENK4uFRLXE2TyaWV_smNalzyuPA",
    "id": {
      "kind": "youtube#video",
      "videoId": "1YhR5UfaAzM"
    },
    "snippet": {
      "publishedAt": "2019-12-06T18:00:01Z",
      "channelId": "UCzGrGrvf9g8CVVzh_LvGf-g",
      "title": "Nirvana - Something In The Way (Live On MTV Unplugged Unedited, 1993)",
      "description": "REMASTERED IN HD! Taken from the 25th Anniversary Editions of Nirvana – MTV Unplugged in New York Order Now: https://Nirvana.lnk.to/Unplugged25 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/1YhR5UfaAzM/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/1YhR5UfaAzM/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/1YhR5UfaAzM/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "NirvanaVEVO",
      "liveBroadcastContent": "none",
      "publishTime": "2019-12-06T18:00:01Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "dw5AWR8LC1dRZ5gvszIY1_usLrY",
    "id": {
      "kind": "youtube#video",
      "videoId": "Y5e1tYuCOBo"
    },
    "snippet": {
      "publishedAt": "2013-03-26T17:10:16Z",
      "channelId": "UCqQ8dna-4vF7I7FRqD5bGEw",
      "title": "JELENA ROZGA - NIRVANA (OFFICIAL VIDEO 2013) HD",
      "description": "Follow Jelena: http://www.facebook.com/rozga.jelena http://www.instagram.com/rozgajelenaofficial http://www.twitter.com/jelenarozga Subscribe to Jelena ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/Y5e1tYuCOBo/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/Y5e1tYuCOBo/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/Y5e1tYuCOBo/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Jelena Rozga",
      "liveBroadcastContent": "none",
      "publishTime": "2013-03-26T17:10:16Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "y5ORFkWKtwnZ3G6M54vYkRAX2fA",
    "id": {
      "kind": "youtube#video",
      "videoId": "gdSWaIvyQ3o"
    },
    "snippet": {
      "publishedAt": "2012-10-27T03:16:03Z",
      "channelId": "UCTUKv3Zs7Wx5hVPzork9wkw",
      "title": "Nirvana - Rape Me [Lyrics]",
      "description": "Song Author: Kurt Cobain Writing Period: 1991 Alternate/Working Titles: Waif Me from the album \"In Utero\" Lyrics Rape me Rape me, my friend Rape me Rape ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/gdSWaIvyQ3o/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/gdSWaIvyQ3o/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/gdSWaIvyQ3o/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Incesticide23",
      "liveBroadcastContent": "none",
      "publishTime": "2012-10-27T03:16:03Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "MpleR4N1VKsnqaGBy9v2Zv1CD4E",
    "id": {
      "kind": "youtube#video",
      "videoId": "LTyNvD8Jaos"
    },
    "snippet": {
      "publishedAt": "2009-08-07T02:39:14Z",
      "channelId": "UCCQlAhCIyax60ebLhExzQlw",
      "title": "Nirvana - In Bloom",
      "description": "Here is some background information on \"In Bloom\" from songfacts.com : Kurt Cobain wrote this about Dylan Carlson, one of his most reliable friends throughout ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/LTyNvD8Jaos/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/LTyNvD8Jaos/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/LTyNvD8Jaos/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "ALT World",
      "liveBroadcastContent": "none",
      "publishTime": "2009-08-07T02:39:14Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "swCvE1mFNLzmo7uxlAj8YbkmqVI",
    "id": {
      "kind": "youtube#video",
      "videoId": "gXjM5Axu36U"
    },
    "snippet": {
      "publishedAt": "2020-02-06T14:45:29Z",
      "channelId": "UCp_LetcchQi6bjsOoDh_Icw",
      "title": "N I R V A N A (Official Video)",
      "description": "Ida nee mak hanesan EL CHAPO nia múzika video foun neebe mak ho tema domin, ho kor múzika neebe foun atu diverte EL CHAPO LOVERS sira hotu.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/gXjM5Axu36U/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/gXjM5Axu36U/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/gXjM5Axu36U/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "EL CHAPO",
      "liveBroadcastContent": "none",
      "publishTime": "2020-02-06T14:45:29Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "svcORV6wSt-PAUEUz1eNNwn7IYg",
    "id": {
      "kind": "youtube#video",
      "videoId": "IHHQm4MeoV0"
    },
    "snippet": {
      "publishedAt": "2020-08-24T13:00:05Z",
      "channelId": "UCuoKuTCQ9dmPIgOgyLm9HgQ",
      "title": "Nirvana - Something In The Way | EPIC TRAILER VERSION (Batman Trailer Music Cover)",
      "description": "The Batman (2021) SPOTIFY Playlist ▻https://spoti.fi/3j7HyT0 1 Hour Version ▻ https://youtu.be/rCftQr6jJ1U Solo Piano Version ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/IHHQm4MeoV0/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/IHHQm4MeoV0/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/IHHQm4MeoV0/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Samuel Kim Music",
      "liveBroadcastContent": "none",
      "publishTime": "2020-08-24T13:00:05Z"
    }
  }]
};
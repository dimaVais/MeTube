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

function loadSongs() {
  var search,
      queryStrKey,
      res,
      _args = arguments;
  return regeneratorRuntime.async(function loadSongs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          search = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
          queryStrKey = "?apikey=".concat(API_KEY, "part=snippet&maxResults=25&videoEmbeddable=true&type=video&q=").concat(search);
          _context.next = 4;
          return regeneratorRuntime.awrap(axios.get("".concat(YOUTUBE_URL).concat(queryStrKey)));

        case 4:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
} // async function loadSongs(key){
//   const queryStrForcast = `?apikey=${API_KEY}`part=snippet&maxResults=25&videoEmbeddable=true&type=video&key=AIzaSyDGql0MyVMEQeH89LQj0TtpM66SoLpkAhw&q=d;
//   const res = await axios.get(`${FORCAST_URL}/${key}${queryStrForcast}`);
//   return res.data.DailySongs;
// }


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
  "Headline": {
    "EffectiveDate": "2020-10-10T08:00:00+03:00",
    "EffectiveEpochDate": 1602306000,
    "Severity": 4,
    "Text": "Pleasant this weekend",
    "Category": "mild",
    "EndDate": null,
    "EndEpochDate": null,
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-song/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?lang=en-us"
  },
  "DailySongs": [{
    "Date": "2020-10-07T07:00:00+03:00",
    "EpochDate": 1602043200,
    "Temperature": {
      "Minimum": {
        "Value": 72,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 90,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false
    },
    "Night": {
      "Icon": 33,
      "IconPhrase": "Clear",
      "HasPrecipitation": false
    },
    "Sources": ["AccuWeather"],
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?day=1&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?day=1&lang=en-us"
  }, {
    "Date": "2020-10-08T07:00:00+03:00",
    "EpochDate": 1602129600,
    "Temperature": {
      "Minimum": {
        "Value": 75,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 92,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 2,
      "IconPhrase": "Mostly sunny",
      "HasPrecipitation": false
    },
    "Night": {
      "Icon": 33,
      "IconPhrase": "Clear",
      "HasPrecipitation": false
    },
    "Sources": ["AccuWeather"],
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?day=2&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?day=2&lang=en-us"
  }, {
    "Date": "2020-10-09T07:00:00+03:00",
    "EpochDate": 1602216000,
    "Temperature": {
      "Minimum": {
        "Value": 76,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 94,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false
    },
    "Night": {
      "Icon": 33,
      "IconPhrase": "Clear",
      "HasPrecipitation": false
    },
    "Sources": ["AccuWeather"],
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?day=3&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?day=3&lang=en-us"
  }, {
    "Date": "2020-10-10T07:00:00+03:00",
    "EpochDate": 1602302400,
    "Temperature": {
      "Minimum": {
        "Value": 75,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 87,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false
    },
    "Night": {
      "Icon": 34,
      "IconPhrase": "Mostly clear",
      "HasPrecipitation": false
    },
    "Sources": ["AccuWeather"],
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?day=4&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?day=4&lang=en-us"
  }, {
    "Date": "2020-10-11T07:00:00+03:00",
    "EpochDate": 1602388800,
    "Temperature": {
      "Minimum": {
        "Value": 73,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 85,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false
    },
    "Night": {
      "Icon": 34,
      "IconPhrase": "Mostly clear",
      "HasPrecipitation": false
    },
    "Sources": ["AccuWeather"],
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?day=5&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-song/215854?day=5&lang=en-us"
  }]
};
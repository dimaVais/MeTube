"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forecastService = void 0;

var _httpService = _interopRequireDefault(require("./httpService.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = '/weather';
var forecastService = {
  getBrodcastsByName: getBrodcastsByName
};
exports.forecastService = forecastService;
var test = {
  "Headline": {
    "EffectiveDate": "2020-10-10T08:00:00+03:00",
    "EffectiveEpochDate": 1602306000,
    "Severity": 4,
    "Text": "Pleasant this weekend",
    "Category": "mild",
    "EndDate": null,
    "EndEpochDate": null,
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
  },
  "DailyForecasts": [{
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
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
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
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
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
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
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
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
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
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
  }]
};

function getBrodcastsByName(name) {
  return regeneratorRuntime.async(function getBrodcastsByName$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", test);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
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
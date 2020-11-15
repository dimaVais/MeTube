"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadBrodcasts = loadBrodcasts;

var _weatherService = require("../../services/weather-service.js");

function loadBrodcasts() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function _callee(dispatch) {
    var brodcasts;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_weatherService.weatherService.getBrodcastsByName(name));

          case 2:
            brodcasts = _context.sent;
            dispatch({
              type: 'LOAD_BRODCASTS',
              brodcasts: brodcasts
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
}
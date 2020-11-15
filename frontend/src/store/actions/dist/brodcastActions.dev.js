"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadBrodcasts = loadBrodcasts;

var _forecastService = require("../../services/forecast-service.js");

function loadBrodcasts() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function _callee(dispatch) {
    var forecasts;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_forecastService.forecastService.getBrodcastsByName(name));

          case 2:
            forecasts = _context.sent;
            dispatch({
              type: 'LOAD_FORECASTS',
              forecasts: forecasts
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
}
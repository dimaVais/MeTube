"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSongs = loadSongs;

var _songService = require("../../services/song-service.js");

function loadSongs() {
  return function _callee(dispatch) {
    var songs;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_songService.songService.loadSongs());

          case 2:
            songs = _context.sent;
            dispatch({
              type: 'LOAD_SONGS',
              songs: songs
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var baseUrl = process.env.NODE_ENV === 'production' ? '' : '//localhost:3002/';
var socketService = createSocketService(); // const socketService = createDummySocketService();

window.socketService = socketService;
var _default = socketService;
exports["default"] = _default;

function createSocketService() {
  var socket;
  var socketService = {
    setup: function setup() {
      socket = (0, _socket["default"])(baseUrl);
    },
    on: function on(eventName, cb) {
      socket.on(eventName, cb);
    },
    off: function off(eventName, cb) {
      socket.off(eventName, cb);
    },
    emit: function emit(eventName, data) {
      console.log('socketservice:', eventName, 'Data', data);
      socket.emit(eventName, data);
    },
    terminate: function terminate() {
      socket = null;
    }
  };
  return socketService;
}

function createDummySocketService() {
  var listenersMap = {};
  var socketService = {
    setup: function setup() {
      listenersMap = {};
      window.listenersMap = listenersMap;
    },
    terminate: function terminate() {
      listenersMap = {};
    },
    on: function on(eventName, cb) {
      listenersMap[eventName] = [].concat(_toConsumableArray(listenersMap[eventName] || []), [cb]);
    },
    off: function off(eventName, cb) {
      listenersMap[eventName] = listenersMap[eventName].filter(function (l) {
        return l !== cb;
      });
    },
    emit: function emit(eventName, data) {
      if (!listenersMap[eventName]) return;
      listenersMap[eventName].forEach(function (listener) {
        listener(data);
      });
    },
    debugMsg: function debugMsg() {
      this.emit('chat addMsg', {
        from: 'Someone',
        txt: 'Aha it worked!'
      });
    }
  };
  return socketService;
} // Basic Tests
// function cb(x) {console.log(x)}
// socketService.on('baba', cb)
// socketService.emit('baba', 'DATA')
// socketService.off('baba', cb)
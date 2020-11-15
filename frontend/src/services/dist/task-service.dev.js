"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taskService = void 0;

var _httpService = _interopRequireDefault(require("./httpService.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = '/task';
var taskService = {
  getTasks: getTasks,
  getTaskById: getTaskById,
  save: save,
  remove: remove,
  start: start
};
exports.taskService = taskService;

function getTasks(filterBy) {
  var queryStr, res;
  return regeneratorRuntime.async(function getTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          queryStr = ''; // (filterBy)? `?name=${filterBy.name}&type=${filterBy.type}&inStock=${filterBy.inStock}`: '';

          _context.next = 3;
          return regeneratorRuntime.awrap(_httpService["default"].get("".concat(BASE_URL).concat(queryStr), {
            params: filterBy
          }));

        case 3:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getTaskById(id) {
  var res;
  return regeneratorRuntime.async(function getTaskById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_httpService["default"].get("".concat(BASE_URL, "/").concat(id)));

        case 2:
          res = _context2.sent;
          return _context2.abrupt("return", res);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function save(task) {
  var res, _res;

  return regeneratorRuntime.async(function save$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!task._id) {
            _context3.next = 7;
            break;
          }

          _context3.next = 3;
          return regeneratorRuntime.awrap(_httpService["default"].put("".concat(BASE_URL, "/").concat(task._id), task));

        case 3:
          res = _context3.sent;
          return _context3.abrupt("return", res);

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap(_httpService["default"].post("".concat(BASE_URL), task));

        case 9:
          _res = _context3.sent;
          return _context3.abrupt("return", _res);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function remove(taskId) {
  return regeneratorRuntime.async(function remove$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_httpService["default"]["delete"]("".concat(BASE_URL, "/").concat(taskId)));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function start(task) {
  return regeneratorRuntime.async(function start$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_httpService["default"].put("".concat(BASE_URL, "/").concat(task._id, "/start"), task));

        case 2:
        case "end":
          return _context5.stop();
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
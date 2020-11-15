"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const BASE_URL = process.env.NODE_ENV === 'production'
//     ? '/api'
//     : '//localhost:3002/api'
var BASE_URL = '';

var axios = _axios["default"].create({
  withCredentials: true
});

var _default = {
  get: function get(endpoint, data) {
    return ajax(endpoint, 'GET', data);
  },
  post: function post(endpoint, data) {
    return ajax(endpoint, 'POST', data);
  },
  put: function put(endpoint, data) {
    return ajax(endpoint, 'PUT', data);
  },
  "delete": function _delete(endpoint, data) {
    return ajax(endpoint, 'DELETE', data);
  }
};
exports["default"] = _default;

function ajax(endpoint) {
  var method,
      data,
      res,
      _args = arguments;
  return regeneratorRuntime.async(function ajax$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'get';
          data = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(axios({
            url: "".concat(BASE_URL).concat(endpoint),
            method: method,
            data: data
          }));

        case 5:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.log("Had Issues ".concat(method, "ing to the backend, endpoint: ").concat(endpoint, ", with data: ").concat(data));
          console.dir(_context.t0);

          if (_context.t0.response && _context.t0.response.status === 401) {
            window.location.assign('/#/');
          }

          throw _context.t0;

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
}
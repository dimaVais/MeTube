"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadTasks = loadTasks;
exports.saveTask = saveTask;
exports.removeTask = removeTask;
exports.setFilter = setFilter;

var _taskService = require("../../services/task-service.js");

function loadTasks(filterBy) {
  console.log('LOAD TASKS ACTIVATED!!"', filterBy);
  return function _callee(dispatch) {
    var tasks;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_taskService.taskService.getTasks(filterBy));

          case 2:
            tasks = _context.sent;
            dispatch({
              type: 'LOAD_TASKS',
              tasks: tasks
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
}

function saveTask(task) {
  return function _callee2(dispatch) {
    var taskSaved;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_taskService.taskService.save(task));

          case 2:
            taskSaved = _context2.sent;
            if (task._id) dispatch({
              type: 'EDIT_TASK',
              taskSaved: taskSaved
            });else dispatch({
              type: 'ADD_TASK',
              taskSaved: taskSaved
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
}

function removeTask(taskId) {
  return function _callee3(dispatch) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(_taskService.taskService.remove(taskId));

          case 2:
            dispatch({
              type: 'REMOVE_TASK',
              taskId: taskId
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
}

function setFilter(filterBy) {
  return function (dispatch) {
    dispatch({
      type: 'SET_FILTER',
      filterBy: filterBy
    });
  };
}
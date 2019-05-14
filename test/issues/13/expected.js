"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rewire$spam = rewire$spam;
exports.rewire$broken = rewire$broken;
exports.rewire$ok = rewire$ok;
exports.restore = restore;
exports.ok = exports.broken = exports.spam = void 0;
var spam = _spam,
    broken = _broken,
    ok = _ok;
exports.ok = ok;
exports.broken = broken;
exports.spam = spam;

function _spam() {
  return {
    ok: ok,
    broken: function broken() {
      broken();
    }
  };
}

function _broken() {
  return true;
}

function _ok() {
  return false;
}

function rewire$spam($stub) {
  exports.spam = spam = $stub;
}

function rewire$broken($stub) {
  exports.broken = broken = $stub;
}

function rewire$ok($stub) {
  exports.ok = ok = $stub;
}

function restore() {
  exports.spam = spam = _spam;
  exports.broken = broken = _broken;
  exports.ok = ok = _ok;
}

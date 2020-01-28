(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = division;
exports.modulo = modulo;

function division(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _suma = _interopRequireDefault(require("./suma"));

var _resta = _interopRequireDefault(require("./resta"));

var _division = _interopRequireWildcard(require("./division"));

var _producto = _interopRequireWildcard(require("./producto"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var c = console.log;
c((0, _suma["default"])(6, 4));
c((0, _resta["default"])(16, 24));
c((0, _division["default"])(16, 4));
c((0, _division.modulo)(16, 4));
c((0, _producto["default"])(16, 4));
c((0, _producto.potencia)(16, 4));
c((0, _producto.cuadrado)(2));
/* let nombre = 'José Ignacio'
console.log('Hello ' + nombre + 'browserify funcionando.') */

},{"./division":1,"./producto":3,"./resta":4,"./suma":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = producto;
exports.cuadrado = cuadrado;
exports.potencia = potencia;

function producto(a, b) {
  return a * b;
}

function cuadrado(a) {
  return a * a;
}

function potencia(base, exp) {
  return Math.pow(base, exp);
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resta;

function resta(a, b) {
  return a - b;
}

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = suma;

function suma(a, b) {
  return a - b;
}

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZGl2aXNpb24uanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvcHJvZHVjdG8uanMiLCJzcmMvanMvcmVzdGEuanMiLCJzcmMvanMvc3VtYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDQWUsU0FBUyxRQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCO0FBQ3BDLFNBQU8sQ0FBQyxHQUFHLENBQVg7QUFDSDs7QUFFTSxTQUFTLE1BQVQsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUI7QUFDMUIsU0FBTyxDQUFDLEdBQUcsQ0FBWDtBQUNIOzs7Ozs7O0FDTkQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQWxCO0FBRUEsQ0FBQyxDQUFFLHNCQUFLLENBQUwsRUFBUSxDQUFSLENBQUYsQ0FBRDtBQUNBLENBQUMsQ0FBRSx1QkFBTSxFQUFOLEVBQVUsRUFBVixDQUFGLENBQUQ7QUFDQSxDQUFDLENBQUUsMEJBQVMsRUFBVCxFQUFhLENBQWIsQ0FBRixDQUFEO0FBQ0EsQ0FBQyxDQUFFLHNCQUFPLEVBQVAsRUFBVyxDQUFYLENBQUYsQ0FBRDtBQUNBLENBQUMsQ0FBRSwwQkFBUyxFQUFULEVBQWEsQ0FBYixDQUFGLENBQUQ7QUFDQSxDQUFDLENBQUUsd0JBQVMsRUFBVCxFQUFhLENBQWIsQ0FBRixDQUFEO0FBQ0EsQ0FBQyxDQUFFLHdCQUFTLENBQVQsQ0FBRixDQUFEO0FBR0E7Ozs7Ozs7Ozs7Ozs7QUNoQmUsU0FBUyxRQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCO0FBQ3BDLFNBQU8sQ0FBQyxHQUFHLENBQVg7QUFDSDs7QUFDTSxTQUFTLFFBQVQsQ0FBbUIsQ0FBbkIsRUFBc0I7QUFDekIsU0FBTyxDQUFDLEdBQUcsQ0FBWDtBQUNIOztBQUVNLFNBQVMsUUFBVCxDQUFtQixJQUFuQixFQUF5QixHQUF6QixFQUE4QjtBQUNqQyxTQUFPLElBQUksQ0FBQyxHQUFMLENBQVMsSUFBVCxFQUFlLEdBQWYsQ0FBUDtBQUNIOzs7Ozs7Ozs7O0FDVGMsU0FBUyxLQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCO0FBQ2pDLFNBQU8sQ0FBQyxHQUFHLENBQVg7QUFDSDs7Ozs7Ozs7OztBQ0ZjLFNBQVMsSUFBVCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUI7QUFDaEMsU0FBTyxDQUFDLEdBQUcsQ0FBWDtBQUNIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGl2aXNpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSAvIGJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZHVsbyAoYSwgYikge1xuICAgIHJldHVybiBhICUgYlxufSIsImltcG9ydCBzdW1hIGZyb20gJy4vc3VtYSdcbmltcG9ydCByZXN0YSBmcm9tICcuL3Jlc3RhJ1xuaW1wb3J0IGRpdmlzaW9uLCB7IG1vZHVsbyB9IGZyb20gJy4vZGl2aXNpb24nXG5pbXBvcnQgcHJvZHVjdG8sIHsgcG90ZW5jaWEsIGN1YWRyYWRvIH0gZnJvbSAnLi9wcm9kdWN0bydcblxuY29uc3QgYyA9IGNvbnNvbGUubG9nXG5cbmMoIHN1bWEoNiwgNCkgKVxuYyggcmVzdGEoMTYsIDI0KSApXG5jKCBkaXZpc2lvbigxNiwgNCkgKVxuYyggbW9kdWxvKDE2LCA0KSApXG5jKCBwcm9kdWN0bygxNiwgNCkgKVxuYyggcG90ZW5jaWEoMTYsIDQpIClcbmMoIGN1YWRyYWRvKDIpIClcblxuXG4vKiBsZXQgbm9tYnJlID0gJ0pvc8OpIElnbmFjaW8nXG5jb25zb2xlLmxvZygnSGVsbG8gJyArIG5vbWJyZSArICdicm93c2VyaWZ5IGZ1bmNpb25hbmRvLicpICovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdG8gKGEsIGIpIHtcbiAgICByZXR1cm4gYSAqIGJcbn1cbmV4cG9ydCBmdW5jdGlvbiBjdWFkcmFkbyAoYSkge1xuICAgIHJldHVybiBhICogYVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG90ZW5jaWEgKGJhc2UsIGV4cCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhiYXNlLCBleHApXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzdGEgKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdW1hIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiXG59Il19

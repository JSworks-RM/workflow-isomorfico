!function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){return o(e[i][1][r]||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){"use strict";function division(a,b){return a/b}function modulo(a,b){return a%b}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=division,exports.modulo=modulo},{}],2:[function(require,module,exports){"use strict";function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function(){return cache},cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _suma=_interopRequireDefault(require("./suma")),_resta=_interopRequireDefault(require("./resta")),_division=_interopRequireWildcard(require("./division")),_producto=_interopRequireWildcard(require("./producto")),c=console.log;c((0,_suma.default)(6,4)),c((0,_resta.default)(16,24)),c((0,_division.default)(16,4)),c((0,_division.modulo)(16,4)),c((0,_producto.default)(16,4)),c((0,_producto.potencia)(16,4)),c((0,_producto.cuadrado)(2))},{"./division":1,"./producto":3,"./resta":4,"./suma":5}],3:[function(require,module,exports){"use strict";function producto(a,b){return a*b}function cuadrado(a){return a*a}function potencia(base,exp){return Math.pow(base,exp)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=producto,exports.cuadrado=cuadrado,exports.potencia=potencia},{}],4:[function(require,module,exports){"use strict";function resta(a,b){return a-b}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=resta},{}],5:[function(require,module,exports){"use strict";function suma(a,b){return a-b}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=suma},{}]},{},[2]);
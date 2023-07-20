/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("var inputEl = document.querySelector(\"input\");\nvar buttonEl = document.querySelector(\"button\");\nvar timerEl = document.querySelector(\"span\");\nvar parseStr = function parseStr(number) {\n  return number < 10 ? \"0\" + number : number;\n};\nvar createTimerAnimator = function createTimerAnimator() {\n  var timer;\n  return function (timeFromInput) {\n    clearInterval(timer);\n    var time = timeFromInput;\n    var updateTime = function updateTime() {\n      var hours = Math.floor(time / 3600);\n      var minutes = Math.floor((time - hours * 3600) / 60);\n      var seconds = time - hours * 3600 - minutes * 60;\n      timerEl.textContent = \"\".concat(parseStr(hours), \":\").concat(parseStr(minutes), \":\").concat(parseStr(seconds));\n    };\n    updateTime();\n    timer = setInterval(function () {\n      time--;\n      if (time >= 0) {\n        updateTime();\n      } else {\n        clearInterval(timer);\n      }\n    }, 1000);\n  };\n};\nvar animateTimer = createTimerAnimator();\ninputEl.removeEventListener(\"input\", onChangeInput);\ninputEl.addEventListener(\"input\", onChangeInput);\nfunction onChangeInput() {\n  inputEl.value = inputEl.value.replace(/[^0-9]/g, \"\");\n}\nbuttonEl.removeEventListener(\"click\", startTimer);\nbuttonEl.addEventListener(\"click\", startTimer);\nfunction startTimer() {\n  var seconds = Number(inputEl.value);\n  animateTimer(seconds);\n  inputEl.value = \"\";\n}\n\n//# sourceURL=webpack://amotimer/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;
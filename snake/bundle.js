/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameControl */ \"./src/modules/GameControl.ts\");\n// 引入样式\n\n\nvar gameControl = new _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__.default(); // 定时调用\n// setInterval(()=>{\n//     console.log(gameControl.direection);\n// }, 1000);\n\n//# sourceURL=webpack://snake/./src/index.ts?");

/***/ }),

/***/ "./src/modules/Food.ts":
/*!*****************************!*\
  !*** ./src/modules/Food.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 定义食物类Food\nvar Food = /*#__PURE__*/function () {\n  function Food() {\n    _classCallCheck(this, Food);\n\n    //获取页面中的food的元素并将其赋值给element\n    // !表示获取到的元素不可能为空\n    this.element = document.getElementById('food');\n  } // 定义一个获取食物X轴坐标的方法\n\n\n  _createClass(Food, [{\n    key: \"X\",\n    get: function get() {\n      return this.element.offsetLeft;\n    } // 定义一个获取食物X轴坐标的方法\n\n  }, {\n    key: \"Y\",\n    get: function get() {\n      return this.element.offsetTop;\n    } // 修改食物的位置\n\n  }, {\n    key: \"change\",\n    value: function change() {\n      // 生成一个随机的位置\n      // 食物的位置最小是0 最大是290\n      // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10\n      var top = Math.round(Math.random() * 29) * 10;\n      var left = Math.round(Math.random() * 29) * 10;\n      this.element.style.left = left + 'px';\n      this.element.style.top = top + 'px';\n    }\n  }]);\n\n  return Food;\n}(); // 测试代码\n// const food = new Food();\n// console.log(food.X, food.Y);\n// food.change();\n// console.log(food.X, food.Y);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Food);\n\n//# sourceURL=webpack://snake/./src/modules/Food.ts?");

/***/ }),

/***/ "./src/modules/GameControl.ts":
/*!************************************!*\
  !*** ./src/modules/GameControl.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ \"./src/modules/Snake.ts\");\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food */ \"./src/modules/Food.ts\");\n/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScorePanel */ \"./src/modules/ScorePanel.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 引入其他的类\n\n\n // 游戏控制器，控制其他的所有类\n\nvar GameControl = /*#__PURE__*/function () {\n  function GameControl() {\n    _classCallCheck(this, GameControl);\n\n    // 创建一个属性来存储蛇的移动方法（也就是按键的方向）\n    this.direction = ''; // 创建一个属性用来记录游戏是否结束\n\n    this.isLive = true;\n    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__.default();\n    this.food = new _Food__WEBPACK_IMPORTED_MODULE_1__.default();\n    this.scorePanel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_2__.default(10, 1);\n    this.init();\n  } // 游戏的初始化方法，调用后游戏即开始\n\n\n  _createClass(GameControl, [{\n    key: \"init\",\n    value: function init() {\n      // 绑定键盘按键按下的事件\n      // 这里的bind会创建一个新函数传进去\n      document.addEventListener('keydown', this.keydownHandler.bind(this)); // 调用run方法，使蛇移动\n\n      this.run();\n    } // 创建一个按键按下的响应函数\n\n  }, {\n    key: \"keydownHandler\",\n    value: function keydownHandler(event) {\n      // 需要检查event.key的值是否合法（用户是否按了正确的按键）\n      // 修改direection属性\n      this.direction = event.key;\n    } // 创建一个控制蛇移动的方法\n\n  }, {\n    key: \"run\",\n    value: function run() {\n      /*\r\n      * 根据方向（this.direction）来使蛇的位置改变\r\n      * */\n      var X = this.snake.X;\n      var Y = this.snake.Y;\n\n      switch (this.direction) {\n        case \"ArrowUp\":\n        case \"Up\":\n          Y -= 10;\n          break;\n\n        case \"ArrowDown\":\n        case \"Down\":\n          Y += 10;\n          break;\n\n        case \"ArrowLeft\":\n        case \"Left\":\n          X -= 10;\n          break;\n\n        case \"ArrowRight\":\n        case \"Right\":\n          X += 10;\n          break;\n      } // 检查蛇吃到食物\n\n\n      this.checkEat(X, Y); // 修改蛇的X和Y值\n\n      try {\n        // 修改蛇的X和Y值\n        this.snake.X = X;\n        this.snake.Y = Y;\n      } catch (e) {\n        // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息\n        alert(e.message + 'game over'); // 将isLive设置为false，游戏结束\n\n        this.isLive = false;\n      } // 开启一个定时调用\n\n\n      this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30); // this.isLive && setTimeout(this.run.bind(this), 300 );\n      // setTimeout(this.run.bind(this), 300 );\n    } // 定义一个方法，用来检测蛇是否吃到食物\n\n  }, {\n    key: \"checkEat\",\n    value: function checkEat(X, Y) {\n      if (X === this.food.X && Y === this.food.Y) {\n        // console.log('吃到食物了！');\n        // 食物的位置要进行重置\n        this.food.change(); // 分数增加\n\n        this.scorePanel.addScore(); // 蛇要增加一节\n\n        this.snake.addBody();\n        console.log(this.snake.bodies.length);\n      }\n    }\n  }]);\n\n  return GameControl;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameControl);\n\n//# sourceURL=webpack://snake/./src/modules/GameControl.ts?");

/***/ }),

/***/ "./src/modules/ScorePanel.ts":
/*!***********************************!*\
  !*** ./src/modules/ScorePanel.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 定义表示记分牌的类\nvar ScorePanel = /*#__PURE__*/function () {\n  function ScorePanel() {\n    var maxLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n    var upScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n\n    _classCallCheck(this, ScorePanel);\n\n    // score和level用来记录分数和等级\n    this.score = 0;\n    this.level = 1;\n    this.scoreEle = document.getElementById('score');\n    this.levelEle = document.getElementById('level');\n    this.maxLevel = maxLevel;\n    this.upScore = upScore;\n  } // 设置一个加分的方法\n\n\n  _createClass(ScorePanel, [{\n    key: \"addScore\",\n    value: function addScore() {\n      // 使分数自增\n      this.scoreEle.innerHTML = ++this.score + ''; // 判断分数是多少，10分升一级\n\n      if (this.score % this.upScore === 0) {\n        this.levelUp();\n      }\n    } // 提升等级的方法\n\n  }, {\n    key: \"levelUp\",\n    value: function levelUp() {\n      if (this.level < this.maxLevel) {\n        this.levelEle.innerHTML = ++this.level + '';\n      }\n    }\n  }]);\n\n  return ScorePanel;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScorePanel); // 测试代码\n// const scorePanel = new ScorePanel();\n// for (let i = 0; i < 100;i++){\n//     scorePanel.addScore();\n// }\n\n//# sourceURL=webpack://snake/./src/modules/ScorePanel.ts?");

/***/ }),

/***/ "./src/modules/Snake.ts":
/*!******************************!*\
  !*** ./src/modules/Snake.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Snake = /*#__PURE__*/function () {\n  function Snake() {\n    _classCallCheck(this, Snake);\n\n    this.element = document.getElementById('snake');\n    this.head = document.querySelector('#snake > div');\n    this.bodies = this.element.getElementsByTagName('div');\n  } // 获取蛇的坐标（蛇头坐标）\n\n\n  _createClass(Snake, [{\n    key: \"X\",\n    get: function get() {\n      return this.head.offsetLeft;\n    } // 获取蛇的坐标（蛇头坐标）\n    ,\n    set: // 设置蛇头的坐标\n    function set(value) {\n      // 如果新值和就值相同，则直接返回不在修改\n      if (this.X === value) {\n        return;\n      } // x值的合法范围0~290\n\n\n      if (value < 0 || value > 290) {\n        // 进入判断说明蛇撞墙了\n        throw new Error('蛇撞墙了！');\n      } // 修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动的时候，不能向右掉头，反之亦然\n\n\n      if (this.bodies[1] && this.bodies[1].offsetLeft === value) {\n        // console.log('水平方向发生了掉头');\n        // 如果发生了掉头，让蛇向反方向继续移动\n        if (value > this.X) {\n          // 如果新值value大于就值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走\n          value = this.X - 10;\n        } else {\n          // 向左走\n          value = this.X + 10;\n        }\n      } // 移动身体\n\n\n      this.moveBody();\n      this.head.style.left = value + 'px'; // 检查有没有撞到自己\n\n      this.checkHeadBody();\n    }\n  }, {\n    key: \"Y\",\n    get: function get() {\n      return this.head.offsetTop;\n    },\n    set: function set(value) {\n      // 如果新值和就值相同，则直接返回不在修改\n      if (this.Y === value) {\n        return;\n      } // Y值的合法范围0~290\n\n\n      if (value < 0 || value > 290) {\n        // 进入判断说明蛇撞墙了\n        throw new Error('蛇撞墙了！');\n      } // 修改Y时，是在修改垂直坐标，蛇在移动，蛇在向上移动的时候，不能向下掉头，反之亦然\n\n\n      if (this.bodies[1] && this.bodies[1].offsetTop === value) {\n        // console.log('垂直方向发生了掉头');\n        // 如果发生了掉头，让蛇向反方向继续移动\n        if (value > this.Y) {\n          // 如果新值value大于就值Y，则说明蛇在向上走，此时发生掉头，应该使蛇继续向下走\n          value = this.Y - 10;\n        } else {\n          // 向左走\n          value = this.Y + 10;\n        }\n      } // 移动身体\n\n\n      this.moveBody();\n      this.head.style.top = value + 'px'; // 检查有没有撞到自己\n\n      this.checkHeadBody();\n    } // 蛇增加身体的方法\n\n  }, {\n    key: \"addBody\",\n    value: function addBody() {\n      // 向element中添加一个div\n      this.element.insertAdjacentHTML(\"beforeend\", \"<div></div>\");\n    } // 添加一个蛇身体移动的方法\n\n  }, {\n    key: \"moveBody\",\n    value: function moveBody() {\n      /**\r\n       * 将后面的身体设置为前边身体的位置\r\n       *  举例子：\r\n       *      第4节 = 第3节的位置\r\n       *      第3节 = 第2节的位置\r\n       *      第2节 = 蛇头的位置\r\n       */\n      for (var i = this.bodies.length - 1; i > 0; i--) {\n        // 获取前边身体的位置\n        var X = this.bodies[i - 1].offsetLeft;\n        var Y = this.bodies[i - 1].offsetTop; // 将值设置到当前身体上\n\n        this.bodies[i].style.left = X + 'px';\n        this.bodies[i].style.top = Y + 'px';\n      }\n    } //检查蛇头是否撞到身体的方法\n\n  }, {\n    key: \"checkHeadBody\",\n    value: function checkHeadBody() {\n      // 获取所有的身体，检查其是否和蛇头的坐标发生重叠\n      for (var i = 1; i < this.bodies.length; i++) {\n        var bd = this.bodies[i];\n\n        if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {\n          // 进入判断说明蛇头撞到了身体，游戏结束\n          throw new Error('撞到自己了~~~');\n        }\n      }\n    }\n  }]);\n\n  return Snake;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snake);\n\n//# sourceURL=webpack://snake/./src/modules/Snake.ts?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\nbody {\\n  font: bold 20px \\\"Courier\\\";\\n}\\n#main {\\n  width: 360px;\\n  height: 420px;\\n  background-color: #b7d4a8;\\n  margin: 100px auto;\\n  border: 10px solid black;\\n  border-radius: 40px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-flow: column;\\n          flex-flow: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n}\\n#main #stage {\\n  width: 304px;\\n  height: 304px;\\n  border: 2px solid black;\\n  position: relative;\\n}\\n#main #stage #snake > div {\\n  width: 10px;\\n  height: 10px;\\n  background-color: black;\\n  border: 1px solid #b7d4a8;\\n  position: absolute;\\n}\\n#main #stage #food {\\n  width: 10px;\\n  height: 10px;\\n  position: absolute;\\n  left: 40px;\\n  top: 100px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-flow: row wrap;\\n          flex-flow: row wrap;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -ms-flex-line-pack: justify;\\n      align-content: space-between;\\n}\\n#main #stage #food > div {\\n  width: 4px;\\n  height: 4px;\\n  background-color: chocolate;\\n  -webkit-transform: rotate(45deg);\\n          transform: rotate(45deg);\\n}\\n#main #score-panel {\\n  width: 300px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://snake/./src/style/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://snake/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://snake/./src/style/index.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://snake/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
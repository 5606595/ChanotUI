/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _main = __webpack_require__(19);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = new Vue(_main2.default).$mount('#app');
	window.app = app;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(20)
	module.exports = __webpack_require__(24)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(118)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/src/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-415b7153&file=main.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-415b7153&file=main.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-col[_v-415b7153]:nth-of-type(2n) {\n  background: #52bdee;\n}\n.c-col[_v-415b7153]:nth-of-type(2n+1) {\n  background: #1aa1e6;\n}\n.c-row[_v-415b7153] {\n  height: 50px;\n  color: white;\n}\n.group[_v-415b7153] {\n  margin: 20px 0;\n  padding-bottom: 2px;\n  border-bottom: 1px solid #DDD;\n}\n", ""]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(25);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _spin = __webpack_require__(35);
	
	var _spin2 = _interopRequireDefault(_spin);
	
	var _icon = __webpack_require__(40);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _message = __webpack_require__(41);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _box = __webpack_require__(47);
	
	var _box2 = _interopRequireDefault(_box);
	
	var _grid = __webpack_require__(53);
	
	var _popover = __webpack_require__(64);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _treeselect = __webpack_require__(70);
	
	var _transfer = __webpack_require__(83);
	
	var _transfer2 = _interopRequireDefault(_transfer);
	
	var _checkbox = __webpack_require__(102);
	
	var _dropdown = __webpack_require__(103);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _backtop = __webpack_require__(111);
	
	var _backtop2 = _interopRequireDefault(_backtop);
	
	var _menu = __webpack_require__(123);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var checkAllList = ["apple", "banana", "pear"]; // <style scoped lang="less" rel="stylesheet/less">
	//   .c-col {
	//     &:nth-of-type(2n) {
	//       background: #52bdee;
	//     }
	//     &:nth-of-type(2n+1) {
	//       background: #1aa1e6;
	//     }
	//   }
	//   .c-row {
	//     height: 50px;
	//     color: white;
	//   }
	//   .group {
	//     margin: 20px 0;
	//     padding-bottom: 2px;
	//     border-bottom: 1px solid #DDD;
	//   }
	
	// </style>
	// <template>
	//   <div>
	//     <!--<box>-->
	//       <!--<spin tips="loading..."></spin>-->
	//       <!--<icon type="success"/>-->
	//       <!--<icon type="fail"/>-->
	//       <!--<icon type="prompt"/>-->
	//       <!--<icon type="warning"/>-->
	//       <!--<icon type="search"/>-->
	//     <!--</box>-->
	//     <box>
	//       <c-button size="large">large</c-button>
	//       <c-button type="primary">default</c-button>
	//       <c-button size="small" type="primary">small</c-button>
	//       <c-button type="primary" size="large" icon="search" shape="circle"></c-button>
	//       <c-button type="primary" icon="search" shape="circle"></c-button>
	//       <c-button type="primary" icon="search" shape="circle" size="small"></c-button>
	//       <c-button type="primary" icon="search" size="small">click me</c-button>
	//       <c-button icon="forward" size="small" type="primary">Go froward</c-button>
	//       <c-button icon="download" size="small" type="primary">download</c-button>
	//       <c-button :loading="loading" type="primary" @click="loading = true">我收起看不见的结果</c-button>
	//     </box>
	//     <!--<box>-->
	//       <!--<row space="between">-->
	//         <!--<column xs="1" sm="6" md="2" lg="2">-->
	//           <!--haha-->
	//         <!--</column>-->
	//         <!--<column xs="10" sm="6" md="8" lg="10">-->
	//           <!--hehe-->
	//         <!--</column>-->
	//       <!--</row>-->
	//     <!--</box>-->
	//     <!--<box>-->
	//       <!--<popover placement="left">-->
	//         <!--<c-button type="primary">Hover me.</c-button>-->
	//       <!--</popover>-->
	//       <!--<popover placement="right">-->
	//         <!--<c-button type="primary">Hover me.</c-button>-->
	//       <!--</popover>-->
	//       <!--<popover placement="top" title="<h2>这是标题</h2>" content="<p>内容</p>" trigger="click">-->
	//         <!--<c-button type="primary">Hover me.</c-button>-->
	//       <!--</popover>-->
	//       <!--<popover placement="bottom">-->
	//         <!--<c-button type="primary">Hover me.</c-button>-->
	//       <!--</popover>-->
	//     <!--</box>-->
	//     <!--<box>-->
	//       <!--<treeselect :selectopt="option">-->
	
	//       <!--</treeselect>-->
	//     <!--</box>-->
	//     <!--<box>-->
	//       <!--<transfer v-bind:title="title" :sourcedata="sourcedata" :targetdata="targetdata"></transfer>-->
	//     <!--</box>-->
	//     <box>
	//       <checkbox disabled isselected>Haha</checkbox>
	//       <checkbox>Hehe</checkbox>
	//       <checkbox>Xixi</checkbox>
	//       <div class="group">
	//         <checkbox :isnotall="notall" :isselected="checkall" @change="allEvent">
	//           CheckAll
	//         </checkbox>
	//       </div>
	//       <checkboxgroup :options="array" :values="checkList"></checkboxgroup>
	//     </box>
	//     <box>
	//       <dropdown>
	//         <span slot="display">
	//           Hover Me <icon type="down"></icon>
	//         </span>
	//         <ul>
	//           <li>
	//             <a href="">
	//               不敢回看
	//             </a>
	//           </li>
	//           <li>
	//             <a href="">
	//               左顾右盼不自然的暗自喜欢
	//             </a>
	//           </li>
	//           <li>
	//             <a href="">
	//               偷偷搭讪总没完地坐立难安
	//             </a>
	//           </li>
	//           <li>
	//             <a href="">
	//               试探说晚安 多空泛又心酸
	//             </a>
	//           </li>
	//         </ul>
	//       </dropdown>
	//     </box>
	//     <backtop></backtop>
	//     <box>
	//       <c-menu>
	//         <item>haha</item>
	//         <item>hehe</item>
	//         <item>xixi</item>
	//       </c-menu>
	//     </box>
	//   </div>
	// </template>
	
	// <script type="text/ecmascript-6">
	
	var defaultList = [];
	exports.default = {
	  components: {
	    'c-button': _button2.default,
	    'spin': _spin2.default,
	    'box': _box2.default,
	    'message': _message2.default,
	    'icon': _icon2.default,
	    'row': _grid.row,
	    'column': _grid.column,
	    'popover': _popover2.default,
	    'treeselect': _treeselect.treeselect,
	    'transfer': _transfer2.default,
	    'checkbox': _checkbox.checkbox,
	    'checkboxgroup': _checkbox.checkboxgroup,
	    'dropdown': _dropdown2.default,
	    'backtop': _backtop2.default,
	    "c-menu": _menu.menu,
	    "menugroup": _menu.menugroup,
	    "submenu": _menu.submenu,
	    "item": _menu.item
	  },
	  data: function data() {
	    return {
	      name: 'just-vue',
	      loading: false,
	      option: [{
	        content: "parent",
	        title: "这是parent",
	        children: [{
	          content: "parent1",
	          title: "parent1",
	          children: [{
	            content: "child1",
	            title: "child1",
	            children: null
	          }]
	        }, {
	          content: "child2",
	          title: "child2",
	          children: null
	        }]
	      }],
	      array: checkAllList,
	      checkList: defaultList,
	      sourcedata: [{
	        content: "hahaha"
	      }, {
	        content: "mxoamoxjisoadnoiasndoisandoisandiosadnoiasa"
	      }],
	      targetdata: [{
	        content: 'pppp'
	      }],
	      title: ["来源", "目标"]
	    };
	  },
	
	  computed: {
	    checkLength: function checkLength() {
	      var length = 0;
	      this.array.map(function (data) {
	        if (!data.disabled) {
	          length++;
	        }
	      });
	      return length;
	    },
	    checkall: function checkall() {
	      return this.checkList.length === this.checkLength;
	    },
	    notall: function notall() {
	      return this.checkList.length && this.checkList.length !== this.checkLength;
	    }
	  },
	  methods: {
	    allEvent: function allEvent() {
	      if (this.notall) {
	        this.checkList = [];
	        for (var i = 0; i < checkAllList.length; i++) {
	          if (!checkAllList[i].disabled) {
	            this.checkList[i] = checkAllList[i];
	          }
	        }
	      } else if (this.checkall) {
	        this.checkList = [];
	      } else {
	        this.checkList = [];
	        for (var _i = 0; _i < checkAllList.length; _i++) {
	          if (!checkAllList[_i].disabled) {
	            this.checkList[_i] = checkAllList[_i];
	          }
	        }
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26)
	module.exports = __webpack_require__(28)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(34)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/button/button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-610020c5&file=button.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-610020c5&file=button.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".j-btn[_v-610020c5] {\n  padding: 6px 16px;\n  background: #FFF;\n  border: 1px solid #DADADA;\n  border-radius: 4px;\n  box-sizing: border-box;\n  -webkit-transition: all .1s linear;\n  transition: all .1s linear;\n  outline: none;\n  font-size: 14px;\n  position: relative;\n  /*.btnclick-enter-active {*/\n  /*transition: all .2s ease-out;*/\n  /*transform: scaleX(1.2) scaleY(1.4)*/\n  /*}*/\n  /*.btnclick-enter {*/\n  /*transform: scale(1);*/\n  /*}*/\n}\n.j-btn.loading[_v-610020c5] {\n  background: #46a6ea !important;\n  color: white!important;\n}\n.j-btn.loading i[_v-610020c5] {\n  color: white;\n}\n.j-btn.loading[_v-610020c5]:hover {\n  cursor: default;\n  border: 1px solid #DADADA;\n}\n.j-btn[_v-610020c5]:hover {\n  cursor: pointer;\n  color: #1f90e6;\n  background: none;\n  border-color: #1f90e6;\n}\n.j-btn.primary[_v-610020c5] {\n  background-color: #1f90e6;\n  border-color: #1f90e6;\n  color: white;\n}\n.j-btn.primary i[_v-610020c5] {\n  color: white;\n}\n.j-btn.primary[_v-610020c5]:hover {\n  background-color: #46a6ea;\n  border-color: #46a6ea;\n}\n.j-btn.large[_v-610020c5] {\n  padding: 8px 20px;\n}\n.j-btn.small[_v-610020c5] {\n  padding: 4px 12px;\n}\n.j-btn[disabled][_v-610020c5] {\n  background-color: #F7F7F7;\n  border-color: #DADADA;\n  color: #AAA;\n}\n.j-btn[disabled] i[_v-610020c5] {\n  color: #AAA;\n}\n.j-btn[disabled][_v-610020c5]:hover {\n  border-color: #DADADA;\n  background-color: #F7F7F7;\n  cursor: not-allowed;\n}\n.j-btn.priclicked[_v-610020c5] {\n  background-color: #1f90e6 !important;\n}\n.j-btn.clicked[_v-610020c5]:after {\n  content: '';\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  position: absolute;\n  border-radius: inherit;\n  box-sizing: border-box;\n  margin: 0;\n  -webkit-animation: pray .2s linear forwards;\n          animation: pray .2s linear forwards;\n}\n.j-btn.shape-circle[_v-610020c5] {\n  padding: 6px;\n  border-radius: 50%;\n}\n.j-btn.shape-circle.large[_v-610020c5] {\n  padding: 8px;\n}\n.j-btn.shape-circle.small[_v-610020c5] {\n  padding: 4px;\n}\n@-webkit-keyframes pray {\n  to {\n    left: -6px;\n    top: -6px;\n    right: -6px;\n    bottom: -6px;\n    border-width: 6px;\n    opacity: 0;\n  }\n}\n@keyframes pray {\n  to {\n    left: -6px;\n    top: -6px;\n    right: -6px;\n    bottom: -6px;\n    border-width: 6px;\n    opacity: 0;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _icon = __webpack_require__(29);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    components: {
	        'Icon': _icon2.default
	    },
	    methods: {
	        clickEvent: function clickEvent(event) {
	            if (this.loading) {
	                return;
	            }
	            var dom = event.target;
	            if (dom.nodeName.toLowerCase() !== 'button') {
	                dom = dom.parentNode;
	            }
	            if (this.type === 'primary') {
	                dom.classList.add('priclicked');
	                dom.addEventListener("animationend", function () {
	                    dom.classList.remove("clicked");
	                    dom.classList.remove('priclicked');
	                }, false);
	            } else {
	                dom.addEventListener("animationend", function () {
	                    dom.classList.remove("clicked");
	                }, false);
	            }
	            dom.classList.add("clicked");
	            this.$emit("click");
	            //                console.log(this.type)
	            //                this.show = true;
	        }
	    },
	    props: {
	        type: String,
	        disabled: Boolean,
	        size: String,
	        show: Boolean,
	        icon: String,
	        shape: String,
	        loading: Boolean
	    },
	    computed: {
	        exists: function exists() {
	            return this.icon || this.loading;
	        },
	        iconType: function iconType() {
	            if (this.loading) {
	                return 'loading';
	            }
	            return this.icon;
	        },
	        btnShape: function btnShape() {
	            if (this.shape) {
	                return 'shape-' + this.shape;
	            } else {
	                return false;
	            }
	        }
	    }
	};
	// </script>
	// <style lang="less" scoped type="text/less" rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .j-btn {
	//         padding: 6px 16px;
	//         background: #FFF;;
	//         border: 1px solid @jdefault;
	//         border-radius: 4px;
	//         box-sizing: border-box;
	//         transition: all .1s linear;
	//         outline: none;
	//         font-size: 14px;
	//         position: relative;
	//         &.loading {
	//             background: @jbluelight!important;
	//             color: white!important;
	//             i {
	//                 color: white;
	//             }
	//             &:hover {
	//                 cursor: default;
	//                 border: 1px solid @jdefault;
	//             }
	//         }
	//         &:hover {
	//             cursor: pointer;
	//             color: @jblue;
	//             background: none;
	//             border-color: @jblue;
	//         }
	//         &.primary {
	//             background-color: @jblue;
	//             border-color: @jblue;
	//             color: white;
	//             i {
	//                 color: white;
	//             }
	//             &:hover {
	//                 background-color: @jbluelight;
	//                 border-color: @jbluelight;
	//             }
	//         }
	//         &.large {
	//             padding: 8px 20px;
	//         }
	//         &.small {
	//             padding: 4px 12px;
	//         }
	//         &[disabled] {
	//             background-color: @jgrey;
	//             border-color: @jdefault;
	//             color: #AAA;
	//             i {
	//                 color: #AAA;
	//             }
	//             &:hover {
	//                 border-color: @jdefault;
	//                 background-color: @jgrey;
	//                 cursor: not-allowed;
	//             }
	//         }
	//         &.priclicked {
	//             background-color: @jblue!important;
	//         }
	//         &.clicked {
	//             &:after {
	//                 content: '';
	//                 left: -1px;
	//                 top: -1px;
	//                 right: -1px;
	//                 bottom: -1px;
	//                 position: absolute;
	//                 border-radius: inherit;
	//                 box-sizing: border-box;
	//                 margin: 0;
	//                 animation: pray .2s linear forwards;
	//             }
	//         }
	//         &.shape-circle {
	//             padding: 6px;
	//             border-radius: 50%;
	//             &.large {
	//                 padding: 8px;
	//             }
	//             &.small {
	//                 padding: 4px;
	//             }
	//         }
	//         /*.btnclick-enter-active {*/
	//             /*transition: all .2s ease-out;*/
	//             /*transform: scaleX(1.2) scaleY(1.4)*/
	//         /*}*/
	//         /*.btnclick-enter {*/
	//             /*transform: scale(1);*/
	//         /*}*/
	//     }
	//     @keyframes pray {
	//         to {
	//             left: -6px;
	//             top: -6px;
	//             right: -6px;
	//             bottom: -6px;
	//             border-width: 6px;
	//             opacity: 0;
	//         }
	//     }
	// </style>
	// <template>
	//     <button
	//         class="j-btn"
	//         :class="[type, size, btnShape, { loading: loading }]"
	//         :disabled="disabled"
	//         @click="clickEvent"
	//     >
	//         <!--<transition name="btnclick" v-on:after-enter="enterCancelled">-->
	//             <!--<p v-if="show" class="clicked"></p>-->
	//         <!--</transition>-->
	//         <!--<i v-if="icon" class="jicon" :class="'jicon-' + icon"></i>-->
	//         <Icon v-if="exists" :type="iconType"></Icon>
	//         <slot></slot>
	//     </button>
	// </template>
	// <script type="text/ecmascript-6">

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30)
	module.exports = __webpack_require__(32)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(33)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/icon/icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-63dfef65&file=icon.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./icon.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-63dfef65&file=icon.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./icon.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".jicon {\n  display: inline-block;\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n.jicon-forward {\n  float: right;\n  margin-top: 1px;\n  margin-left: 1px;\n}\n.jicon-forward:before {\n  content: \"\\E601\";\n}\n.jicon-prompt {\n  color: #1f90e6;\n}\n.jicon-prompt:before {\n  content: \"\\E620\";\n}\n.jicon-success {\n  color: #89ce6d;\n}\n.jicon-success:before {\n  content: \"\\E63A\";\n}\n.jicon-fail {\n  color: #fc561f;\n}\n.jicon-fail:before {\n  content: \"\\E613\";\n}\n.jicon-warning {\n  color: #fda929;\n}\n.jicon-warning:before {\n  content: \"\\E6D4\";\n}\n.jicon-search:before {\n  content: \"\\E600\";\n}\n.jicon-backward:before {\n  content: \"\\E60A\";\n}\n.jicon-loading {\n  color: #1f90e6;\n  -webkit-animation: loading .5s linear infinite;\n          animation: loading .5s linear infinite;\n}\n.jicon-loading:before {\n  content: '\\E637';\n}\n.jicon-download:before {\n  content: '\\E621';\n}\n.jicon-down:before {\n  content: '\\E69D';\n}\n.jicon-right:before {\n  content: '\\E67A';\n}\n.jicon-backtop:before {\n  content: '\\E612';\n}\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@font-face {\n  font-family: 'iconfont';\n  /* project id 191439 */\n  src: url('//at.alicdn.com/t/font_kk45pahzawkx1or.eot');\n  src: url('//at.alicdn.com/t/font_kk45pahzawkx1or.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_kk45pahzawkx1or.woff') format('woff'), url('//at.alicdn.com/t/font_kk45pahzawkx1or.ttf') format('truetype'), url('//at.alicdn.com/t/font_kk45pahzawkx1or.svg#iconfont') format('svg');\n}\n", ""]);
	
	// exports


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <i class="jicon" :class="['jicon-' + type, jclass]"></i>
	// </template>
	// <style  lang="less" rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .jicon {
	//         display: inline-block;
	//         font-family:"iconfont" !important;
	//         font-size:16px;
	//         font-style:normal;
	//         -webkit-font-smoothing: antialiased;
	//         -webkit-text-stroke-width: 0.2px;
	//         -moz-osx-font-smoothing: grayscale;
	//     }
	//     .jicon-forward {
	//         float: right;
	//         margin-top: 1px;
	//         margin-left: 1px;
	//         &:before {
	//             content: "\e601";
	//         }
	//     }
	//     .jicon-prompt {
	//         color: @default;
	//         &:before { content: "\e620"; }
	//     }
	//     .jicon-success {
	//         color: @success;
	//         &:before { content: "\e63a"; }
	//     }
	//     .jicon-fail {
	//         color: @fail;
	//         &:before { content: "\e613"; }
	//     }
	//     .jicon-warning {
	//         color: @warning;
	//         &:before { content: "\e6d4"; }
	//     }
	//     .jicon-search:before { content: "\e600"; }
	//     .jicon-backward:before { content: "\e60a"; }
	//     .jicon-loading {
	//         color: @default;
	//         animation: loading .5s linear infinite;
	//         &:before {
	//             content: '\e637';
	//         }
	//     }
	//     .jicon-download:before { content: '\e621' }
	//     .jicon-down:before { content: '\e69d' }
	//     .jicon-right:before { content: '\e67a' }
	//     .jicon-backtop:before { content: '\e612' }
	//     @keyframes loading {
	//         0% {
	//             transform: rotate(0deg);
	//         }
	//         50% {
	//             transform: rotate(180deg);
	//         }
	//         100% {
	//             transform: rotate(360deg);
	//         }
	//     }
	//     @font-face {
	//         font-family: 'iconfont';  /* project id 191439 */
	//         src: url('//at.alicdn.com/t/font_kk45pahzawkx1or.eot');
	//         src: url('//at.alicdn.com/t/font_kk45pahzawkx1or.eot?#iefix') format('embedded-opentype'),
	//         url('//at.alicdn.com/t/font_kk45pahzawkx1or.woff') format('woff'),
	//         url('//at.alicdn.com/t/font_kk45pahzawkx1or.ttf') format('truetype'),
	//         url('//at.alicdn.com/t/font_kk45pahzawkx1or.svg#iconfont') format('svg');
	//     }
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    components: {},
	    props: {
	        type: String,
	        jclass: String
	    }
	};
	// </script>

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<i class=\"jicon\" :class=\"['jicon-' + type, jclass]\"></i>";

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<button class=\"j-btn\" :class=\"[type, size, btnShape, { loading: loading }]\" :disabled=\"disabled\" @click=\"clickEvent\" _v-610020c5=\"\">\n        <!--<transition name=\"btnclick\" v-on:after-enter=\"enterCancelled\">-->\n            <!--<p v-if=\"show\" class=\"clicked\"></p>-->\n        <!--</transition>-->\n        <!--<i v-if=\"icon\" class=\"jicon\" :class=\"'jicon-' + icon\"></i>-->\n        <icon v-if=\"exists\" :type=\"iconType\" _v-610020c5=\"\"></icon>\n        <slot _v-610020c5=\"\"></slot>\n    </button>";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)
	module.exports = __webpack_require__(38)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(39)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/spin/spin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4fe71505&file=spin.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./spin.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4fe71505&file=spin.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./spin.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".spin[_v-4fe71505] {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-animation: jrotate 3s infinite linear;\n          animation: jrotate 3s infinite linear;\n  margin: auto;\n}\n.spin .dot[_v-4fe71505] {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #3ec8f5;\n  opacity: 0.3;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  -webkit-animation: jopacity 0.8s infinite linear alternate;\n          animation: jopacity 0.8s infinite linear alternate;\n}\n.spin .dot[_v-4fe71505]:nth-of-type(1) {\n  left: 0;\n  top: 0;\n}\n.spin .dot[_v-4fe71505]:nth-of-type(2) {\n  right: 0;\n  top: 0;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.spin .dot[_v-4fe71505]:nth-of-type(3) {\n  right: 0;\n  bottom: 0;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.spin .dot[_v-4fe71505]:nth-of-type(4) {\n  left: 0;\n  bottom: 0;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.jsay[_v-4fe71505] {\n  text-align: center;\n  margin-top: 10px;\n}\n@-webkit-keyframes jopacity {\n  0% {\n    opacity: .3;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes jopacity {\n  0% {\n    opacity: .3;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes jrotate {\n  0% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  100% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n@keyframes jrotate {\n  0% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  100% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style scoped lang="less" rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .spin {
	//         position: relative;
	//         width: 20px;
	//         height: 20px;
	//         transform: rotate(45deg);
	//         animation: jrotate 3s infinite linear;
	//         margin: auto;
	//         .dot {
	//             position: absolute;
	//             width: 8px;
	//             height: 8px;
	//             border-radius: 50%;
	//             background: @jspin;
	//             opacity: 0.3;
	//             transform: scale(0.6);
	//             animation: jopacity 0.8s infinite linear alternate;
	//             &:nth-of-type(1) {
	//                 left: 0;
	//                 top: 0;
	//             }
	//             &:nth-of-type(2) {
	//                 right: 0;
	//                 top: 0;
	//                 animation-delay: 0.4s;
	//             }
	//             &:nth-of-type(3) {
	//                 right: 0;
	//                 bottom: 0;
	//                 animation-delay: 0.8s;
	//             }
	//             &:nth-of-type(4) {
	//                 left: 0;
	//                 bottom: 0;
	//                 animation-delay: 1.2s;
	//             }
	//         }
	//     }
	//     .jsay {
	//         text-align: center;
	//         margin-top: 10px;
	//     }
	//     @keyframes jopacity {
	//         0% {
	//             opacity: .3;
	//             transform: scale(0.6);
	//         }
	//         100% {
	//             opacity: 1;
	//             transform: scale(1);
	//         }
	//     }
	//     @keyframes jrotate {
	//         0% {
	//             transform: rotate(45deg);
	//         }
	//         100% {
	//             transform: rotate(405deg);
	//         }
	//     }
	// </style>
	// <template>
	//     <div class="jspin-container">
	//         <div class="spin">
	//             <i class="dot"></i>
	//             <i class="dot"></i>
	//             <i class="dot"></i>
	//             <i class="dot"></i>
	//         </div>
	//         <div class="jsay">
	//             <span>{{ tips }}</span>
	//         </div>
	//     </div>
	// </template>
	
	// <script>
	exports.default = {
	    props: {
	        tips: String
	    }
	};
	
	// </script>

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jspin-container\" _v-4fe71505=\"\">\n        <div class=\"spin\" _v-4fe71505=\"\">\n            <i class=\"dot\" _v-4fe71505=\"\"></i>\n            <i class=\"dot\" _v-4fe71505=\"\"></i>\n            <i class=\"dot\" _v-4fe71505=\"\"></i>\n            <i class=\"dot\" _v-4fe71505=\"\"></i>\n        </div>\n        <div class=\"jsay\" _v-4fe71505=\"\">\n            <span _v-4fe71505=\"\">{{ tips }}</span>\n        </div>\n    </div>";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _icon = __webpack_require__(29);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _icon2.default; /**
	                                   * Created by jorten on 2016/12/4.
	                                   */

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _message = __webpack_require__(42);
	
	var _message2 = _interopRequireDefault(_message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    info: function info(content, duration) {
	        var div = document.createElement("div");
	        document.body.appendChild(div);
	        var message = new Vue(_message2.default);
	        message.$slots.default = content;
	        message.duration = duration;
	        message.$mount(div);
	        return function () {
	            message.$el.classList.add("j-end");
	            message.$el.addEventListener("animationend", function () {
	                message.show = false;
	            }, false);
	        };
	    },
	    success: function success(content, duration) {
	        var div = document.createElement("div");
	        document.body.appendChild(div);
	        var message = new Vue(_message2.default);
	        message.$slots.default = content;
	        message.type = "success";
	        message.duration = duration;
	        message.$mount(div);
	        return function () {
	            message.$el.classList.add("j-end");
	            message.$el.addEventListener("animationend", function () {
	                message.show = false;
	            }, false);
	        };
	    },
	    fail: function fail(content, duration) {
	        var div = document.createElement("div");
	        document.body.appendChild(div);
	        var message = new Vue(_message2.default);
	        message.$slots.default = content;
	        message.type = "fail";
	        message.duration = duration;
	        message.$mount(div);
	        return function () {
	            message.$el.classList.add("j-end");
	            message.$el.addEventListener("animationend", function () {
	                message.show = false;
	            }, false);
	        };
	    },
	    warning: function warning(content, duration) {
	        var div = document.createElement("div");
	        document.body.appendChild(div);
	        var message = new Vue(_message2.default);
	        message.$slots.default = content;
	        message.type = "warning";
	        message.duration = duration;
	        message.$mount(div);
	        return function () {
	            message.$el.classList.add("j-end");
	            message.$el.addEventListener("animationend", function () {
	                message.show = false;
	            }, false);
	        };
	    },
	    loading: function loading(content, duration) {
	        var div = document.createElement("div");
	        document.body.appendChild(div);
	        var message = new Vue(_message2.default);
	        message.$slots.default = content;
	        message.type = "loading";
	        message.duration = duration;
	        message.$mount(div);
	        return function () {
	            message.$el.classList.add("j-end");
	            message.$el.addEventListener("animationend", function () {
	                message.show = false;
	            }, false);
	        };
	    }
	}; /**
	    * Created by jorten on 2016/12/1.
	    */

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43)
	module.exports = __webpack_require__(45)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(46)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/message/message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1e199ad6&file=message.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./message.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1e199ad6&file=message.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./message.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".j-message[_v-1e199ad6] {\n  padding: 8px 16px;\n  border: 1px solid #e9e9e9;\n  border-radius: 4px;\n  display: inline-block;\n  position: fixed;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n  top: 50px;\n  font-size: 12px;\n  color: #666;\n  box-shadow: 2px 2px 2px #e9e9e9, -1px 0px 1px #e9e9e9;\n  -webkit-animation: messagedisplay .2s linear;\n          animation: messagedisplay .2s linear;\n}\n.j-message .message[_v-1e199ad6] {\n  margin-left: 5px;\n}\n.j-end[_v-1e199ad6] {\n  -webkit-animation: messageend .2s linear;\n          animation: messageend .2s linear;\n}\n@-webkit-keyframes messageend {\n  0% {\n    opacity: 1;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, -20px, 0);\n            transform: translate3d(-50%, -20px, 0);\n  }\n}\n@keyframes messageend {\n  0% {\n    opacity: 1;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, -20px, 0);\n            transform: translate3d(-50%, -20px, 0);\n  }\n}\n@-webkit-keyframes messagedisplay {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, -20px, 0);\n            transform: translate3d(-50%, -20px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes messagedisplay {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, -20px, 0);\n            transform: translate3d(-50%, -20px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _icon = __webpack_require__(29);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            show: true
	        };
	    },
	
	    computed: {
	        newType: function newType() {
	            return this.type ? this.type : "prompt";
	        },
	        time: function time() {
	            if (this.duration) {
	                return this.duration * 1000;
	            } else if (this.duration === 0) {
	                return 0;
	            } else {
	                return 1500;
	            }
	        }
	    },
	    components: {
	        "icon": _icon2.default
	    },
	    props: {
	        type: String
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        if (this.time !== 0) {
	            setTimeout(function () {
	                if (_this.$el.classList) {
	                    _this.$el.classList.add("j-end");
	                    _this.$el.addEventListener("animationend", function () {
	                        _this.show = false;
	                    }, false);
	                }
	            }, this.time);
	        }
	    }
	};
	// </script>
	// <template>
	//     <div class="j-message" v-if="show">
	//         <icon :type="newType"></icon>
	//         <span class="message">
	//             <slot></slot>
	//         </span>
	//     </div>
	// </template>
	// <style scoped lang="less" rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .j-message {
	//         padding: 8px 16px;
	//         border: 1px solid @border;
	//         border-radius: 4px;
	//         display: inline-block;
	//         position: fixed;
	//         left: 50%;
	//         transform: translate3d(-50%, 0, 0);
	//         top: 50px;
	//         font-size: 12px;
	//         color: @messagefontcolor;
	//         box-shadow: 2px 2px 2px @border, -1px 0px 1px @border;
	//         animation: messagedisplay .2s linear;
	//         .message {
	//             margin-left: 5px;
	//         }
	//     }
	//     .j-end {
	//         animation: messageend .2s linear;
	//     }
	//     @keyframes messageend {
	//         0% {
	//             opacity: 1;
	//             transform: translate3d(-50%, 0, 0);
	//         }
	//         100% {
	//             opacity: 0;
	//             transform: translate3d(-50%, -20px, 0);
	//         }
	//     }
	//     @keyframes messagedisplay {
	//         0% {
	//             opacity: 0;
	//             transform: translate3d(-50%, -20px, 0);
	//         }
	//         100% {
	//             opacity: 1;
	//             transform: translate3d(-50%, 0, 0);
	//         }
	//     }
	// </style>
	// <script type="text/ecmascript-6">

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"j-message\" v-if=\"show\" _v-1e199ad6=\"\">\n        <icon :type=\"newType\" _v-1e199ad6=\"\"></icon>\n        <span class=\"message\" _v-1e199ad6=\"\">\n            <slot _v-1e199ad6=\"\"></slot>\n        </span>\n    </div>";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _box = __webpack_require__(48);
	
	var _box2 = _interopRequireDefault(_box);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _box2.default; /**
	                                  * Created by jorten on 2016/12/7.
	                                  */

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)
	module.exports = __webpack_require__(51)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(52)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/box/box.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-36efc21d&file=box.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./box.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-36efc21d&file=box.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./box.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".j-box[_v-36efc21d] {\n  padding: 50px 30px;\n  box-sizing: border-box;\n  min-width: 500px;\n  min-height: 200px;\n  margin: 20px;\n  border: 1px solid #e9e9e9;\n  border-radius: 10px;\n}\n", ""]);
	
	// exports


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less" scoped rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .j-box {
	//         @border: #e9e9e9;
	//         padding: 50px 30px;
	//         box-sizing: border-box;
	//         min-width: 500px;
	//         min-height: 200px;
	//         margin: 20px;
	//         border: 1px solid @border;
	//         border-radius: 10px;
	//     }
	// </style>
	// <template>
	//     <div class="j-box">
	//         <slot></slot>
	//     </div>
	// </template>
	
	// <script>
	exports.default = {};
	// </script>

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"j-box\" _v-36efc21d=\"\">\n        <slot _v-36efc21d=\"\"></slot>\n    </div>";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.column = exports.row = undefined;
	
	var _row = __webpack_require__(54);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _column = __webpack_require__(59);
	
	var _column2 = _interopRequireDefault(_column);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by jorten on 2016/12/7.
	 */
	exports.row = _row2.default;
	exports.column = _column2.default;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55)
	module.exports = __webpack_require__(57)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(58)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/grid/row.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-61295c2a&file=row.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./row.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-61295c2a&file=row.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./row.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n", ""]);
	
	// exports


/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="c-row" :style="justifyContent">
	//         <slot></slot>
	//     </div>
	// </template>
	// <style lang="less" rel="stylesheet/less">
	//     .c-row {
	//         display: flex;
	//     }
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    props: {
	        space: String
	    },
	    computed: {
	        justifyContent: function justifyContent() {
	            switch (this.space) {
	                case 'start':
	                    return {
	                        justifyContent: 'flex-start'
	                    };
	                case 'end':
	                    return {
	                        justifyContent: 'flex-end'
	                    };
	                case 'center':
	                    return {
	                        justifyContent: 'center'
	                    };
	                case 'between':
	                    return {
	                        justifyContent: 'space-between'
	                    };
	                case 'around':
	                    return {
	                        justifyContent: 'space-around'
	                    };
	            }
	            return null;
	        }
	    }
	};
	// </script>

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-row\" :style=\"justifyContent\">\n        <slot></slot>\n    </div>";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60)
	module.exports = __webpack_require__(62)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(63)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/grid/column.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6efc49d5&file=column.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./column.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6efc49d5&file=column.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./column.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-col[_v-6efc49d5] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  word-break: break-all;\n  overflow: hidden;\n}\n.c-col.c-col-12[_v-6efc49d5] {\n  width: 100%;\n}\n.c-col.c-col-11[_v-6efc49d5] {\n  width: 91.66666667%;\n}\n.c-col.c-col-10[_v-6efc49d5] {\n  width: 83.33333333%;\n}\n.c-col.c-col-9[_v-6efc49d5] {\n  width: 75%;\n}\n.c-col.c-col-8[_v-6efc49d5] {\n  width: 66.66666667%;\n}\n.c-col.c-col-7[_v-6efc49d5] {\n  width: 58.33333333%;\n}\n.c-col.c-col-6[_v-6efc49d5] {\n  width: 50%;\n}\n.c-col.c-col-5[_v-6efc49d5] {\n  width: 41.66666667%;\n}\n.c-col.c-col-4[_v-6efc49d5] {\n  width: 33.33333333%;\n}\n.c-col.c-col-3[_v-6efc49d5] {\n  width: 25%;\n}\n.c-col.c-col-2[_v-6efc49d5] {\n  width: 16.66666667%;\n}\n.c-col.c-col-1[_v-6efc49d5] {\n  width: 8.33333333%;\n}\n.c-col.c-col-0[_v-6efc49d5] {\n  display: none;\n}\n@media (max-width: 767px) {\n  .c-col.c-xs-12[_v-6efc49d5] {\n    width: 100%;\n  }\n  .c-col.c-xs-11[_v-6efc49d5] {\n    width: 91.66666667%;\n  }\n  .c-col.c-xs-10[_v-6efc49d5] {\n    width: 83.33333333%;\n  }\n  .c-col.c-xs-9[_v-6efc49d5] {\n    width: 75%;\n  }\n  .c-col.c-xs-8[_v-6efc49d5] {\n    width: 66.66666667%;\n  }\n  .c-col.c-xs-7[_v-6efc49d5] {\n    width: 58.33333333%;\n  }\n  .c-col.c-xs-6[_v-6efc49d5] {\n    width: 50%;\n  }\n  .c-col.c-xs-5[_v-6efc49d5] {\n    width: 41.66666667%;\n  }\n  .c-col.c-xs-4[_v-6efc49d5] {\n    width: 33.33333333%;\n  }\n  .c-col.c-xs-3[_v-6efc49d5] {\n    width: 25%;\n  }\n  .c-col.c-xs-2[_v-6efc49d5] {\n    width: 16.66666667%;\n  }\n  .c-col.c-xs-1[_v-6efc49d5] {\n    width: 8.33333333%;\n  }\n  .c-col.c-xs-0[_v-6efc49d5] {\n    display: none;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .c-col.c-sm-12[_v-6efc49d5] {\n    width: 100%;\n  }\n  .c-col.c-sm-11[_v-6efc49d5] {\n    width: 91.66666667%;\n  }\n  .c-col.c-sm-10[_v-6efc49d5] {\n    width: 83.33333333%;\n  }\n  .c-col.c-sm-9[_v-6efc49d5] {\n    width: 75%;\n  }\n  .c-col.c-sm-8[_v-6efc49d5] {\n    width: 66.66666667%;\n  }\n  .c-col.c-sm-7[_v-6efc49d5] {\n    width: 58.33333333%;\n  }\n  .c-col.c-sm-6[_v-6efc49d5] {\n    width: 50%;\n  }\n  .c-col.c-sm-5[_v-6efc49d5] {\n    width: 41.66666667%;\n  }\n  .c-col.c-sm-4[_v-6efc49d5] {\n    width: 33.33333333%;\n  }\n  .c-col.c-sm-3[_v-6efc49d5] {\n    width: 25%;\n  }\n  .c-col.c-sm-2[_v-6efc49d5] {\n    width: 16.66666667%;\n  }\n  .c-col.c-sm-1[_v-6efc49d5] {\n    width: 8.33333333%;\n  }\n  .c-col.c-sm-0[_v-6efc49d5] {\n    display: none;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .c-col.c-md-12[_v-6efc49d5] {\n    width: 100%;\n  }\n  .c-col.c-md-11[_v-6efc49d5] {\n    width: 91.66666667%;\n  }\n  .c-col.c-md-10[_v-6efc49d5] {\n    width: 83.33333333%;\n  }\n  .c-col.c-md-9[_v-6efc49d5] {\n    width: 75%;\n  }\n  .c-col.c-md-8[_v-6efc49d5] {\n    width: 66.66666667%;\n  }\n  .c-col.c-md-7[_v-6efc49d5] {\n    width: 58.33333333%;\n  }\n  .c-col.c-md-6[_v-6efc49d5] {\n    width: 50%;\n  }\n  .c-col.c-md-5[_v-6efc49d5] {\n    width: 41.66666667%;\n  }\n  .c-col.c-md-4[_v-6efc49d5] {\n    width: 33.33333333%;\n  }\n  .c-col.c-md-3[_v-6efc49d5] {\n    width: 25%;\n  }\n  .c-col.c-md-2[_v-6efc49d5] {\n    width: 16.66666667%;\n  }\n  .c-col.c-md-1[_v-6efc49d5] {\n    width: 8.33333333%;\n  }\n  .c-col.c-md-0[_v-6efc49d5] {\n    display: none;\n  }\n}\n@media (min-width: 1200px) {\n  .c-col.c-lg-12[_v-6efc49d5] {\n    width: 100%;\n  }\n  .c-col.c-lg-11[_v-6efc49d5] {\n    width: 91.66666667%;\n  }\n  .c-col.c-lg-10[_v-6efc49d5] {\n    width: 83.33333333%;\n  }\n  .c-col.c-lg-9[_v-6efc49d5] {\n    width: 75%;\n  }\n  .c-col.c-lg-8[_v-6efc49d5] {\n    width: 66.66666667%;\n  }\n  .c-col.c-lg-7[_v-6efc49d5] {\n    width: 58.33333333%;\n  }\n  .c-col.c-lg-6[_v-6efc49d5] {\n    width: 50%;\n  }\n  .c-col.c-lg-5[_v-6efc49d5] {\n    width: 41.66666667%;\n  }\n  .c-col.c-lg-4[_v-6efc49d5] {\n    width: 33.33333333%;\n  }\n  .c-col.c-lg-3[_v-6efc49d5] {\n    width: 25%;\n  }\n  .c-col.c-lg-2[_v-6efc49d5] {\n    width: 16.66666667%;\n  }\n  .c-col.c-lg-1[_v-6efc49d5] {\n    width: 8.33333333%;\n  }\n  .c-col.c-lg-0[_v-6efc49d5] {\n    display: none;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="c-col" :class="[cspan, cxs, csm, cmd, clg]">
	//         <slot></slot>
	//     </div>
	// </template>
	// <style lang="less" scoped rel="stylesheet/less">
	//     .c-col {
	//         .c-cols(@n, @i: @n) when (@i > 0) {
	//             &.c-col-@{i} {
	//                 width: (@i * 100% / @n);
	//             };
	//             .c-cols(@n, (@i - 1));
	//         }
	//         .c-cols(12);
	//         &.c-col-0 {
	//             display: none;
	//         }
	//         display: flex;
	//         align-items: center;
	//         justify-content: center;
	//         word-break: break-all;
	//         overflow: hidden;
	//         @media(max-width: 767px) {
	//             .c-cols(@n, @i: @n) when (@i > 0) {
	//                 &.c-xs-@{i} {
	//                     width: (@i * 100% / @n)
	//                 }
	//                 .c-cols(@n, (@i - 1));
	//             }
	//             .c-cols(12);
	//             &.c-xs-0 {
	//                 display: none;
	//             }
	//         }
	//         @media(min-width: 768px) and (max-width: 991px) {
	//             .c-cols(@n, @i: @n) when (@i > 0) {
	//                 &.c-sm-@{i} {
	//                     width: (@i * 100% / @n)
	//                 }
	//                 .c-cols(@n, (@i - 1));
	//             }
	//             .c-cols(12);
	//             &.c-sm-0 {
	//                 display: none;
	//             }
	//         }
	//         @media(min-width: 992px) and (max-width: 1199px) {
	//             .c-cols(@n, @i: @n) when (@i > 0) {
	//                 &.c-md-@{i} {
	//                     width: (@i * 100% / @n)
	//                 }
	//                 .c-cols(@n, (@i - 1));
	//             }
	//             .c-cols(12);
	//             &.c-md-0 {
	//                 display: none;
	//             }
	//         }
	//         @media(min-width: 1200px) {
	//             .c-cols(@n, @i: @n) when (@i > 0) {
	//                 &.c-lg-@{i} {
	//                     width: (@i * 100% / @n)
	//                 }
	//                 .c-cols(@n, (@i - 1));
	//             }
	//             .c-cols(12);
	//             &.c-lg-0 {
	//                 display: none;
	//             }
	//         }
	//     }
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            cspan: this.span ? 'c-col-' + this.span : null,
	            cxs: this.xs ? 'c-xs-' + this.xs : null,
	            csm: this.sm ? 'c-sm-' + this.sm : null,
	            cmd: this.md ? 'c-md-' + this.md : null,
	            clg: this.lg ? 'c-lg-' + this.lg : null
	        };
	    },
	
	    props: {
	        span: Number,
	        xs: Number,
	        sm: Number,
	        md: Number,
	        lg: Number
	    }
	
	};
	// </script>

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-col\" :class=\"[cspan, cxs, csm, cmd, clg]\" _v-6efc49d5=\"\">\n        <slot _v-6efc49d5=\"\"></slot>\n    </div>";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popover = __webpack_require__(65);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _popover2.default; /**
	                                      * Created by jorten on 2016/12/8.
	                                      */

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66)
	module.exports = __webpack_require__(68)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(69)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/popover/popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ee93185e&file=popover.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./popover.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ee93185e&file=popover.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-popcontainer {\n  display: inline-block;\n}\n.c-popover {\n  box-sizing: border-box;\n  border-radius: 4px;\n  display: inline-block;\n  color: #666;\n  position: absolute;\n  z-index: 30;\n  background: white;\n  box-shadow: 2px 2px 2px #e9e9e9, -1px -1px 2px #e9e9e9;\n  -webkit-animation: fadein .2s forwards;\n          animation: fadein .2s forwards;\n  /*&-topLeft .arrow {*/\n  /*left: 15%;*/\n  /*}*/\n  /*&-topRight .arrow {*/\n  /*right: 15%;*/\n  /*}*/\n  /*&-rightTop .arrow {*/\n  /*top: 15%;*/\n  /*}*/\n  /*&-rightBottom .arrow {*/\n  /*bottom: 15%;*/\n  /*}*/\n  /*&-bottomLeft .arrow {*/\n  /*left: 15%;*/\n  /*}*/\n  /*&-bottomRight .arrow {*/\n  /*right: 15%;*/\n  /*}*/\n}\n.c-popover * {\n  box-sizing: border-box;\n}\n.c-popover-top,\n.c-popover-topLeft,\n.c-popover-topRight {\n  -webkit-transform: translate3d(-50%, calc(-100% - 7px), 0);\n          transform: translate3d(-50%, calc(-100% - 7px), 0);\n}\n.c-popover-top .arrow,\n.c-popover-topLeft .arrow,\n.c-popover-topRight .arrow {\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 6px solid #d9d9d9;\n  border-bottom: none;\n  bottom: -7px;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n.c-popover-top .arrow:after,\n.c-popover-topLeft .arrow:after,\n.c-popover-topRight .arrow:after {\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 6px solid white;\n  bottom: 2px;\n  left: -5px;\n}\n.c-popover-top .arrow {\n  left: 50%;\n}\n.c-popover-right,\n.c-popover-rightTop,\n.c-popover-rightBottom {\n  -webkit-transform: translate3d(7px, calc(-50% - 7px), 0);\n          transform: translate3d(7px, calc(-50% - 7px), 0);\n}\n.c-popover-right .arrow,\n.c-popover-rightTop .arrow,\n.c-popover-rightBottom .arrow {\n  border-left: none;\n  border-right: 6px solid #d9d9d9;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  left: -7px;\n}\n.c-popover-right .arrow:after,\n.c-popover-rightTop .arrow:after,\n.c-popover-rightBottom .arrow:after {\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-right: 6px solid white;\n  top: -5px;\n  left: 2px;\n}\n.c-popover-right .arrow {\n  top: 50%;\n}\n.c-popover-bottom,\n.c-popover-bottomLeft,\n.c-popover-bottomRight {\n  -webkit-transform: translate3d(-50%, 7px, 0);\n          transform: translate3d(-50%, 7px, 0);\n}\n.c-popover-bottom .arrow,\n.c-popover-bottomLeft .arrow,\n.c-popover-bottomRight .arrow {\n  border-top: none;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  border-bottom: 6px solid #d9d9d9;\n  top: -7px;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n.c-popover-bottom .arrow:after,\n.c-popover-bottomLeft .arrow:after,\n.c-popover-bottomRight .arrow:after {\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 6px solid white;\n  left: -5px;\n  top: 2px;\n}\n.c-popover-bottom .arrow {\n  left: 50%;\n}\n.c-popover-left,\n.c-popover-leftTop,\n.c-popoverleftBottom {\n  -webkit-transform: translate3d(calc(-100% - 7px), -50%, 0);\n          transform: translate3d(calc(-100% - 7px), -50%, 0);\n}\n.c-popover-left .arrow,\n.c-popover-leftTop .arrow,\n.c-popoverleftBottom .arrow {\n  border-right: none;\n  border-left: 6px solid #d9d9d9;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  right: -7px;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n}\n.c-popover-left .arrow:after,\n.c-popover-leftTop .arrow:after,\n.c-popoverleftBottom .arrow:after {\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 6px solid white;\n  top: -5px;\n  right: 2px;\n}\n.c-popover-left .arrow {\n  top: 50%;\n}\n.c-popover-leftTop .arrow {\n  top: 15%;\n}\n.c-popover-leftBottom .arrow {\n  bottom: 15%;\n}\n.c-popover .arrow {\n  width: 0;\n  height: 0;\n  background: white;\n  z-index: 20;\n  position: absolute;\n}\n.c-popover .arrow:after {\n  position: absolute;\n  content: '';\n  width: 0;\n  height: 0;\n}\n.c-popover .inner .title {\n  border-bottom: 1px solid #e9e9e9;\n  min-width: 177px;\n  padding: 0 16px;\n  height: 32px;\n  line-height: 32px;\n}\n.c-popover .inner .content {\n  padding: 8px 16px;\n}\n.c-popover.fadeout {\n  -webkit-animation: fadeout .2s;\n          animation: fadeout .2s;\n}\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="c-popcontainer">
	//         <slot></slot>
	//     </div>
	// </template>
	// <style lang="less" rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .c-popcontainer {
	//         display: inline-block;
	//     }
	//     .c-popover {
	//         box-sizing: border-box;
	//         border-radius: 4px;
	//         display: inline-block;
	//         color: #666;
	//         position: absolute;
	//         z-index: 30;
	//         background: white;
	//         box-shadow: 2px 2px 2px @border, -1px -1px 2px @border;
	//         animation: fadein .2s forwards;
	//         * {
	//             box-sizing: border-box
	//         }
	//         &-top, &-topLeft, &-topRight {
	//             transform: translate3d(-50%, ~"calc(-100% - 7px)", 0);
	//             .arrow {
	//                 border-left: 5px solid transparent;
	//                 border-right: 5px solid transparent;
	//                 border-top: 6px solid rgba(217, 217, 217, 1);
	//                 border-bottom: none;
	//                 bottom: -7px;
	//                 transform: translate3d(-50%, 0, 0);
	//                 &:after {
	//                     border-left: 5px solid transparent;
	//                     border-right: 5px solid transparent;
	//                     border-top: 6px solid white;
	//                     bottom: 2px;
	//                     left: -5px;
	//                 }
	//             }
	
	//         }
	//         &-top .arrow {
	//             left: 50%;
	//         }
	//         /*&-topLeft .arrow {*/
	//             /*left: 15%;*/
	//         /*}*/
	//         /*&-topRight .arrow {*/
	//             /*right: 15%;*/
	//         /*}*/
	//         &-right, &-rightTop, &-rightBottom {
	//             transform: translate3d(7px, ~"calc(-50% - 7px)", 0);
	//             .arrow {
	//                 border-left: none;
	//                 border-right: 6px solid rgba(217, 217, 217, 1);
	//                 border-top: 5px solid transparent;
	//                 border-bottom: 5px solid transparent;
	//                 left: -7px;
	//                 &:after {
	//                     border-top: 5px solid transparent;
	//                     border-bottom: 5px solid transparent;
	//                     border-right: 6px solid white;
	//                     top: -5px;
	//                     left: 2px;
	//                 }
	//             }
	//         }
	//         &-right .arrow {
	//             top: 50%;
	//         }
	//         /*&-rightTop .arrow {*/
	//             /*top: 15%;*/
	//         /*}*/
	//         /*&-rightBottom .arrow {*/
	//             /*bottom: 15%;*/
	//         /*}*/
	//         &-bottom, &-bottomLeft, &-bottomRight {
	//             transform: translate3d(-50%, 7px, 0);
	//             .arrow {
	//                 border-top: none;
	//                 border-right: 5px solid transparent;
	//                 border-left: 5px solid transparent;
	//                 border-bottom: 6px solid rgba(217, 217, 217, 1);
	//                 top: -7px;
	//                 transform: translate3d(-50%, 0, 0);
	//                 &:after {
	//                     border-left: 5px solid transparent;
	//                     border-right: 5px solid transparent;
	//                     border-bottom: 6px solid white;
	//                     left: -5px;
	//                     top: 2px;
	//                 }
	//             }
	//         }
	//         &-bottom .arrow {
	//             left: 50%;
	//         }
	//         /*&-bottomLeft .arrow {*/
	//             /*left: 15%;*/
	//         /*}*/
	//         /*&-bottomRight .arrow {*/
	//             /*right: 15%;*/
	//         /*}*/
	//         &-left, &-leftTop, &leftBottom {
	//             transform: translate3d(~"calc(-100% - 7px)", -50%, 0);
	//             .arrow {
	//                 border-right: none;
	//                 border-left: 6px solid rgba(217, 217, 217, 1);
	//                 border-top: 5px solid transparent;
	//                 border-bottom: 5px solid transparent;
	//                 right: -7px;
	//                 transform: translate3d(0, -50%, 0);
	//                 &:after {
	//                     border-top: 5px solid transparent;
	//                     border-bottom: 5px solid transparent;
	//                     border-left: 6px solid white;
	//                     top: -5px;
	//                     right: 2px;
	//                 }
	//             }
	//         }
	//         &-left .arrow {
	//             top: 50%;
	//         }
	//         &-leftTop .arrow {
	//             top: 15%;
	//         }
	//         &-leftBottom .arrow {
	//             bottom: 15%;
	//         }
	//         .arrow {
	//             width: 0;
	//             height: 0;
	//             background: white;
	//             z-index: 20;
	//             position: absolute;
	//             &:after {
	//                 position: absolute;
	//                 content: '';
	//                 width: 0;
	//                 height: 0;
	//             }
	//         }
	//         .inner {
	//             .title {
	//                 border-bottom: 1px solid @border;
	//                 min-width: 177px;
	//                 padding: 0 16px;
	//                 height: 32px;
	//                 line-height: 32px;
	//             }
	//             .content {
	//                 padding: 8px 16px;
	//             }
	//         }
	//         &.fadeout {
	//             animation: fadeout .2s;
	//         }
	//     }
	//     @keyframes fadein {
	//         0% {
	//             opacity: 0;
	//         }
	//         100% {
	//             opacity: 1;
	//         }
	//     }
	//     @keyframes fadeout {
	//         0% {
	//             opacity: 1;
	//         }
	//         100% {
	//             opacity: 0;
	//         }
	//     }
	// </style>
	// <script type="text/ecmascript-6">
	exports.default = {
	    data: function data() {
	        return {};
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        if (this.$el.querySelectorAll('button').length) {
	            (function () {
	                var buttons = _this.$el.querySelectorAll("button");
	
	                var _loop = function _loop(i) {
	                    if (_this.trigger === 'hover') {
	                        (function () {
	                            var dom = void 0;
	                            var timeEvent = void 0;
	                            var _animationHandle = void 0;
	                            buttons[i].addEventListener('mouseover', function () {
	                                if (dom) {
	                                    window.clearTimeout(timeEvent);
	                                    dom.style.display = 'block';
	                                } else {
	                                    dom = document.createElement("div");
	                                    dom.innerHTML = '<div class="arrow">\
	                                </div>\
	                                <div class="inner">\
	                                <div class="title">\
	                                title\
	                                </div>\
	                                <div class="content">\
	                                <p>\
	                                content\
	                                </p>\
	                                <p>\
	                                content\
	                                </p>\
	                                </div>\
	                                </div>';
	                                    dom.classList.add('c-popover');
	                                    dom.classList.add('c-popover-' + _this.placement);
	                                    dom.setAttribute('c-num', i);
	                                    if (_this.placement === 'top') {
	                                        dom.style.left = buttons[i].offsetLeft + buttons[i].offsetWidth / 2 + 'px';
	                                        dom.style.top = buttons[i].offsetTop + 'px';
	                                    } else if (_this.placement === 'right') {
	                                        dom.style.left = buttons[i].offsetLeft + buttons[i].offsetWidth + 'px';
	                                        dom.style.top = buttons[i].offsetTop + buttons[i].offsetHeight / 2 + 'px';
	                                    } else if (_this.placement === 'bottom') {
	                                        dom.style.left = buttons[i].offsetLeft + buttons[i].offsetWidth / 2 + 'px';
	                                        dom.style.top = buttons[i].offsetTop + buttons[i].offsetHeight + 'px';
	                                    } else {
	                                        dom.style.left = buttons[i].offsetLeft + 'px';
	                                        dom.style.top = buttons[i].offsetTop + buttons[i].offsetHeight / 2 + 'px';
	                                    }
	                                    document.body.appendChild(dom);
	                                    dom.addEventListener('mouseover', function (event) {
	                                        window.clearTimeout(timeEvent);
	                                        dom.style.display = "block";
	                                    }, false);
	                                    dom.addEventListener('mouseleave', function () {
	                                        timeEvent = window.setTimeout(function () {
	                                            if (dom.style.display !== 'none') {
	                                                dom.classList.add('fadeout');
	                                                dom.addEventListener('animationend', _animationHandle, false);
	                                            }
	                                        }, 30);
	                                    }, false);
	                                }
	                            }, false);
	                            buttons[i].addEventListener('mouseleave', function () {
	                                timeEvent = window.setTimeout(function () {
	                                    if (dom.style.display !== 'none') {
	                                        dom.classList.add('fadeout');
	                                        dom.addEventListener('animationend', _animationHandle, false);
	                                    }
	                                }, 30);
	                            }, false);
	                            _animationHandle = function animationHandle() {
	                                dom.style.display = "none";
	                                dom.classList.remove('fadeout');
	                                dom.removeEventListener("animationend", _animationHandle, false);
	                            };
	                        })();
	                    } else if (_this.trigger === 'click') {
	                        (function () {
	                            var dom = void 0;
	                            var displayDom = void 0;
	                            var animationHandle = function animationHandle() {
	                                dom.style.display = "none";
	                                dom.classList.remove('fadeout');
	                                dom.classList.remove('c-popover-display');
	                                dom.removeEventListener("animationend", animationHandle, false);
	                            };
	
	                            var otherAnimationHandle = function otherAnimationHandle() {
	                                displayDom.style.display = "none";
	                                displayDom.classList.remove('fadeout');
	                                displayDom.classList.remove('c-popover-display');
	                                displayDom.removeEventListener("animationend", otherAnimationHandle, false);
	                                dom.classList.add('c-popover-display');
	                            };
	                            buttons[i].addEventListener('click', function () {
	                                if (dom) {
	                                    dom.style.display = "block";
	                                } else {
	                                    dom = document.createElement("div");
	                                    dom.innerHTML = '<div class="arrow">\
	                                </div>\
	                                <div class="inner">\
	                                <div class="title">' + _this.title + '</div>\
	                                <div class="content">' + _this.content + '</div>\
	                                </div>';
	                                    dom.classList.add('c-popover');
	                                    dom.classList.add('c-popover-' + _this.placement);
	                                    dom.setAttribute('c-num', i);
	                                    if (_this.placement === 'top') {
	                                        dom.style.left = buttons[i].offsetLeft + buttons[i].offsetWidth / 2 + 'px';
	                                        dom.style.top = buttons[i].offsetTop + 'px';
	                                    } else if (_this.placement === 'right') {
	                                        dom.style.left = buttons[i].offsetLeft + buttons[i].offsetWidth + 'px';
	                                        dom.style.top = buttons[i].offsetTop + buttons[i].offsetHeight / 2 + 'px';
	                                    } else if (_this.placement === 'bottom') {
	                                        dom.style.left = buttons[i].offsetLeft + buttons[i].offsetWidth / 2 + 'px';
	                                        dom.style.top = buttons[i].offsetTop + buttons[i].offsetHeight + 'px';
	                                    } else {
	                                        dom.style.left = buttons[i].offsetLeft + 'px';
	                                        dom.style.top = buttons[i].offsetTop + buttons[i].offsetHeight / 2 + 'px';
	                                    }
	                                    document.body.appendChild(dom);
	                                }
	                                displayDom = document.querySelector(".c-popover-display");
	                                if (displayDom) {
	                                    if (displayDom === dom) {
	                                        dom.classList.add('fadeout');
	                                        dom.addEventListener('animationend', animationHandle, false);
	                                    } else {
	                                        displayDom.classList.add("fadeout");
	                                        displayDom.addEventListener("animationend", otherAnimationHandle, false);
	                                    }
	                                } else {
	                                    dom.classList.add('c-popover-display');
	                                }
	                            }, false);
	                        })();
	                    }
	                };
	
	                for (var i = 0; i < buttons.length; i++) {
	                    _loop(i);
	                }
	            })();
	        }
	        var displayDom = void 0;
	        var animationHandle = function animationHandle() {
	            displayDom.style.display = "none";
	            displayDom.classList.remove("fadeout");
	            displayDom.classList.remove("c-popover-display");
	            displayDom.removeEventListener("animationend", animationHandle, false);
	        };
	        document.body.addEventListener("click", function (event) {
	            displayDom = document.querySelector(".c-popover-display");
	            console.log();
	            if (displayDom) {
	                var dom = event.target;
	                while (dom !== document.body) {
	                    if (dom === displayDom || dom.className.indexOf("c-popcontainer") !== -1) {
	                        return;
	                    }
	                    dom = dom.parentNode;
	                }
	                displayDom.classList.add("fadeout");
	                displayDom.addEventListener("animationend", animationHandle, false);
	            }
	        }, false);
	    },
	
	    methods: {},
	    props: {
	        placement: {
	            type: String,
	            default: 'top'
	        },
	        trigger: {
	            type: String,
	            default: 'hover'
	        },
	        title: {
	            type: String,
	            default: "This is title"
	        },
	        content: {
	            type: String,
	            default: "This is content"
	        }
	    }
	};
	// </script>

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-popcontainer\">\n        <slot></slot>\n    </div>";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.treenode = exports.treeselect = undefined;
	
	var _treeselect = __webpack_require__(71);
	
	var _treeselect2 = _interopRequireDefault(_treeselect);
	
	var _treenode = __webpack_require__(78);
	
	var _treenode2 = _interopRequireDefault(_treenode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by jorten on 2016/12/14.
	 */
	exports.treeselect = _treeselect2.default;
	exports.treenode = _treenode2.default;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72)
	__webpack_require__(74)
	module.exports = __webpack_require__(76)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(77)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/treeselect/treeselect.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(73);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-05c0c976&file=treeselect.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./treeselect.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-05c0c976&file=treeselect.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./treeselect.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-treeselect[_v-05c0c976] {\n  width: 300px;\n  height: 25px;\n  border: 1px solid #e9e9e9;\n  border-radius: 4px;\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear;\n  position: relative;\n  padding-right: 24px;\n  box-sizing: border-box;\n}\n.c-treeselect.selected .selectContent[_v-05c0c976] {\n  color: black;\n}\n.c-treeselect.selected:hover .clear[_v-05c0c976] {\n  display: block;\n}\n.c-treeselect .selectContent[_v-05c0c976] {\n  height: 25px;\n  line-height: 25px;\n  width: 100%;\n  padding: 0 10px;\n  color: #CCC;\n  box-sizing: border-box;\n}\n.c-treeselect-clicked[_v-05c0c976] {\n  border-color: #46a6ea;\n}\n.c-treeselect-clicked[_v-05c0c976]:after {\n  content: '';\n  width: 300px;\n  height: 25px;\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  border: 2px solid #d0e8fa;\n  border-radius: 6px;\n}\n.c-treeselect[_v-05c0c976]:hover {\n  border-color: #46a6ea;\n  cursor: pointer;\n}\n.c-treeselect .clear[_v-05c0c976] {\n  font-size: 12px;\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  z-index: 30;\n  background: white;\n  color: grey;\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear;\n  display: none;\n}\n.c-treeselect .jicon-down[_v-05c0c976] {\n  font-size: 12px;\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear;\n}\n.c-treeselect .jicon-down-display[_v-05c0c976] {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n", ""]);
	
	// exports


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-05c0c976&file=treeselect.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./treeselect.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-05c0c976&file=treeselect.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./treeselect.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-treeselect-hide {\n  position: absolute;\n  border: 1px solid #e9e9e9;\n  border-radius: 4px;\n  box-shadow: 0px 1px 6px #EAEAEA, 0px 0px 6px #EAEAEA;\n  padding: 5px;\n  background: white;\n  box-sizing: border-box;\n  -webkit-animation: c-treeselect-hide-display 0.2s linear forwards;\n          animation: c-treeselect-hide-display 0.2s linear forwards;\n}\n.c-treeselect-hide .c-treeselect-input {\n  border: 1px solid #e9e9e9;\n  border-radius: 4px;\n  width: 100%;\n  height: 30px;\n  padding: 0 5px;\n  box-sizing: border-box;\n}\n.c-treeselect-hide .c-treeselect-input input {\n  width: 100%;\n  height: 26px;\n  line-height: 26px;\n  border: none;\n  outline: none;\n}\n.c-treeselect-hide .content div {\n  margin: 20px 0;\n  color: #666;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n}\n.c-treeselect-hide .content div .jicon-right {\n  font-size: 12px;\n  margin: 0 5px;\n}\n.c-treeselect-hide .content .jicon-right {\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear;\n}\n.c-treeselect-hide .content .jicon-right:hover {\n  cursor: pointer;\n}\n.c-treeselect-hide .content .open > .jicon-right {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.c-treeselect-hide .content .close > .jicon-right {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.c-treeselect-hide .content .parent .parent {\n  padding: 0 22px;\n}\n.c-treeselect-hide .content .parent .children {\n  padding: 0 44px;\n}\n.c-treeselect-hide .content .strong > span {\n  font-weight: 700;\n}\n.c-treeselect-hide .content span {\n  padding: 5px;\n  border-radius: 2px;\n  -webkit-transition: font-weight 0.2s ease-in;\n  transition: font-weight 0.2s ease-in;\n}\n.c-treeselect-hide .content span:hover {\n  cursor: pointer;\n  background: #e7f4fd;\n}\n.c-treeselect-hide .content .notfound {\n  padding: 0 5px;\n  color: #CCC;\n}\n.c-treeselect-hide-fade {\n  -webkit-animation: c-treeselect-hide-fadeout 0.1s linear;\n          animation: c-treeselect-hide-fadeout 0.1s linear;\n}\n@-webkit-keyframes c-treeselect-hide-display {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n            transform: scaleY(0.6);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n@keyframes c-treeselect-hide-display {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n            transform: scaleY(0.6);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n@-webkit-keyframes c-treeselect-hide-fadeout {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n            transform: scaleY(0.6);\n  }\n}\n@keyframes c-treeselect-hide-fadeout {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n            transform: scaleY(0.6);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _icon = __webpack_require__(40);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            isDisplay: false,
	            domCreated: false,
	            treeDom: null,
	            input: null,
	            isMatched: false,
	            notFound: null
	        };
	    },
	
	    components: {
	        'icon': _icon2.default
	    },
	    methods: {
	        clickEvent: function clickEvent(event) {
	            if (event.target.className.indexOf("clear") !== -1) {
	                this.$el.querySelector(".selectContent").textContent = "";
	                this.$el.classList.remove("selected");
	                if (this.isDisplay) {
	                    this.hide();
	                }
	                return;
	            }
	            if (!this.isDisplay) {
	                this.display();
	            } else {
	                this.hide();
	            }
	        },
	        display: function display() {
	            var _this = this;
	
	            var treeSelectDom = this.$el;
	            var iconDown = treeSelectDom.querySelector(".jicon-down");
	            treeSelectDom.classList.add('c-treeselect-clicked');
	            iconDown.classList.add("jicon-down-display");
	            this.isDisplay = true;
	            if (this.domCreated) {
	                var newDom = this.treeDom;
	                var input = this.input;
	                newDom.style.display = "block";
	                input.focus();
	            } else {
	                var _newDom = document.createElement("div");
	                _newDom.classList.add('c-treeselect-hide');
	                _newDom.innerHTML = ' <div class="c-treeselect-input">\
	                            <input />\
	                            </div>\
	                            </div>';
	                var content = document.createElement("div");
	                content.classList.add("content");
	                this.mapNode(content, this.selectopt);
	                _newDom.appendChild(content);
	                var rect = this.$el.getBoundingClientRect();
	                _newDom.style.width = rect.width + 'px';
	                _newDom.style.top = rect.top + document.body.scrollTop + rect.height + 3 + 'px';
	                _newDom.style.left = rect.left + document.body.scrollLeft + 'px';
	                document.body.appendChild(_newDom);
	                var _input = _newDom.querySelector("input");
	                this.input = _input;
	                _input.focus();
	                this.treeDom = _newDom;
	                this.domCreated = true;
	                _newDom.addEventListener("click", function (event) {
	                    if (event.target.nodeName.toLowerCase() === "span") {
	                        _this.$el.querySelector(".selectContent").textContent = event.target.textContent;
	                        _this.$el.classList.add("selected");
	                        _this.hide();
	                    }
	                    if (event.target.nodeName.toLowerCase() === "i") {
	                        var parent = event.target.parentNode;
	                        var children = parent.getElementsByTagName("div")[0];
	                        if (parent.className.indexOf("open") !== -1) {
	                            parent.classList.remove("open");
	                            parent.classList.add("close");
	                            children.style.display = "none";
	                        } else {
	                            parent.classList.remove("close");
	                            parent.classList.add("open");
	                            children.style.display = "block";
	                        }
	                    }
	                }, false);
	                _input.addEventListener("keyup", this.nodeMatch, false);
	                document.body.addEventListener("click", function (event) {
	                    var dom = event.target;
	                    while (dom && dom !== document.body) {
	                        if (dom === _this.treeDom || dom === _this.$el) {
	                            return;
	                        }
	                        dom = dom.parentNode;
	                    }
	                    _this.hide();
	                }, false);
	            }
	        },
	        hide: function hide() {
	            var treeSelectDom = this.$el;
	            var iconDown = treeSelectDom.querySelector(".jicon-down");
	            treeSelectDom.classList.remove('c-treeselect-clicked');
	            iconDown.classList.remove("jicon-down-display");
	            this.isDisplay = false;
	            var newDom = this.treeDom;
	            newDom.classList.add('c-treeselect-hide-fade');
	            newDom.addEventListener("animationend", this.fadeHandle, false);
	        },
	        fadeHandle: function fadeHandle() {
	            var newDom = this.treeDom;
	            newDom.style.display = "none";
	            newDom.classList.remove("c-treeselect-hide-fade");
	            newDom.removeEventListener("animationend", this.fadeHandle, false);
	        },
	        mapNode: function mapNode(node, obj) {
	            for (var i in obj) {
	                var child = document.createElement("div");
	                if (obj[i].children) {
	                    child.innerHTML = "<i class='jicon jicon-right'></i><span title='" + obj[i].title + "'>" + obj[i].content + "</span><div class='innerContent'></div>";
	                    child.classList.add("open");
	                    child.classList.add("parent");
	                    this.mapNode(child.getElementsByClassName("innerContent")[0], obj[i].children);
	                } else {
	                    child.innerHTML = "<span title='" + obj[i].title + "'>" + obj[i].content + "</span>";
	                    child.classList.add("children");
	                }
	                obj[i].dom = child;
	                obj[i].parent = node;
	                node.appendChild(child);
	            }
	        },
	        nodeMatch: function nodeMatch() {
	            var _this2 = this;
	
	            this.isMatched = false;
	            var option = this.selectopt;
	            var input = this.input;
	            var inputContent = input.value;
	            var strongs = this.treeDom.querySelectorAll(".strong");
	            for (var i = 0; i < strongs.length; i++) {
	                strongs[i].classList.remove("strong");
	            }
	            option.map(function (data) {
	                _this2.matchMap(inputContent, data);
	                if (inputContent) {
	                    _this2.strongMap(inputContent, data);
	                }
	            });
	            if (!this.isMatched) {
	                if (this.notFound) {
	                    this.notFound.style.display = "block";
	                } else {
	                    var notFound = document.createElement("div");
	                    notFound.textContent = "Not Found";
	                    notFound.classList.add("notfound");
	                    this.notFound = notFound;
	                    this.treeDom.querySelector(".content").appendChild(notFound);
	                }
	            } else {
	                if (this.notFound) {
	                    this.notFound.style.display = "none";
	                }
	            }
	        },
	        matchMap: function matchMap(content, opt) {
	            var _this3 = this;
	
	            if (opt.content.indexOf(content) !== -1) {
	                this.isMatched = true;
	                this.displayAll(opt.dom);
	                return;
	            } else {
	                opt.dom.style.display = "none";
	            }
	            if (opt.children) {
	                opt.children.map(function (data) {
	                    _this3.matchMap(content, data);
	                });
	            }
	        },
	        displayAll: function displayAll(dom) {
	            var temp = dom;
	            while (temp.className.indexOf("content") == -1) {
	                temp.style.display = "block";
	                temp = temp.parentNode;
	            }
	            var divs = dom.getElementsByTagName("div");
	            for (var i = 0; i < divs.length; i++) {
	                divs[i].style.display = "block";
	            }
	        },
	        strongMap: function strongMap(content, opt) {
	            var _this4 = this;
	
	            if (opt.content.indexOf(content) !== -1) {
	                opt.dom.classList.add("strong");
	            }
	            if (opt.children) {
	                opt.children.map(function (data) {
	                    _this4.strongMap(content, data);
	                });
	            }
	        }
	    },
	    props: {
	        selectopt: {
	            type: Array,
	            default: [{
	                content: 'parent',
	                title: 'this is a parent',
	                children: [{
	                    content: 'child1',
	                    title: 'haha',
	                    children: null
	                }, {
	                    content: 'child2',
	                    title: 'hehe',
	                    children: null
	                }]
	            }]
	        }
	    }
	};
	// </script>
	// <template>
	//     <div class="c-treeselect" @click="clickEvent">
	//         <icon type="down"></icon>
	//         <icon type="fail" jclass="clear"></icon>
	//         <div class="selectContent">
	//             Please a select
	//         </div>
	//     </div>
	// </template>
	// <style scoped lang="less" rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .c-treeselect {
	//         &.selected {
	//             .selectContent {
	//                 color: black;
	//             }
	//             &:hover {
	//                 .clear {
	//                     display: block;
	//                 }
	//             }
	//         }
	//         width: 300px;
	//         height: 25px;
	//         border: 1px solid @border;
	//         border-radius: 4px;
	//         transition: all .2s linear;
	//         position: relative;
	//         padding-right: 24px;
	//         box-sizing: border-box;
	//         .selectContent {
	//             height: 25px;
	//             line-height: 25px;
	//             width: 100%;
	//             padding: 0 10px;
	//             color: @placeholder;
	//             box-sizing: border-box;
	//         }
	//         &-clicked {
	//             border-color: @jbluelight;
	//             &:after {
	//                 content: '';
	//                 width: 300px;
	//                 height: 25px;
	//                 position: absolute;
	//                 top: -3px;
	//                 left: -3px;
	//                 border: 2px solid @borderthin;
	//                 border-radius: 6px;
	//             }
	//         }
	//         &:hover {
	//             border-color: @jbluelight;
	//             cursor: pointer;
	//         }
	//         .clear {
	//             font-size: 12px;
	//             position: absolute;
	//             right: 6px;
	//             top: 6px;
	//             z-index: 30;
	//             background: white;
	//             color: grey;
	//             transition: all .2s linear;
	//             display: none;
	//         }
	//         .jicon-down {
	//             font-size: 12px;
	//             position: absolute;
	//             right: 6px;
	//             top: 6px;
	//             transition: all .2s linear;
	//             &-display {
	//                 transform: rotate(180deg);
	//             }
	//         }
	//     }
	// </style>
	// <style lang="less" rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .c-treeselect-hide {
	//         position: absolute;
	//         border: 1px solid @border;
	//         border-radius: 4px;
	//         box-shadow: 0px 1px 6px @boxshadow, 0px 0px 6px @boxshadow;
	//         padding: 5px;
	//         background: white;
	//         box-sizing: border-box;
	//         animation: c-treeselect-hide-display .2s linear forwards;
	//         .c-treeselect-input {
	//             border: 1px solid @border;
	//             border-radius: 4px;
	//             width: 100%;
	//             height: 30px;
	//             padding: 0 5px;
	//             box-sizing: border-box;
	//             input {
	//                 width: 100%;
	//                 height: 26px;
	//                 line-height: 26px;
	//                 border: none;
	//                 outline: none;
	//             }
	//         }
	//         .content {
	//             div {
	//                 margin: 20px 0;
	//                 color: @messagefontcolor;
	//                 transition: all .2s ease-in;
	//                 .jicon-right {
	//                     font-size: 12px;
	//                     margin: 0 5px;
	//                 }
	//             }
	//             .jicon-right {
	//                 transition: all .2s linear;
	//                 &:hover {
	//                     cursor: pointer;
	//                 }
	//             }
	//             .open {
	//                 & > .jicon-right {
	//                     transform: rotate(90deg);
	//                 }
	//             }
	//             .close {
	//                 & > .jicon-right {
	//                     transform: rotate(0deg);
	//                 }
	//             }
	//             .parent {
	//                 .parent {
	//                     padding: 0 22px;
	//                 }
	//                 .children {
	//                     padding: 0 44px;
	//                 }
	//             }
	//             .strong {
	//                 & > span {
	//                     font-weight: 700;
	//                 }
	//             }
	//             span {
	//                 padding: 5px;
	//                 border-radius: 2px;
	//                 transition: font-weight .2s ease-in;
	//                 &:hover {
	//                     cursor: pointer;
	//                     background: @hoverpadding;
	//                 }
	//             }
	//             .notfound {
	//                 padding: 0 5px;
	//                 color: @placeholder;
	//             }
	//         }
	//         &-fade {
	//             animation: c-treeselect-hide-fadeout .1s linear;
	//         }
	//     }
	//     @keyframes c-treeselect-hide-display {
	//         0% {
	//             opacity: 0;
	//             transform: scaleY(0.6);
	//         }
	//         100% {
	//             opacity: 1;
	//             transform: scaleY(1);
	//         }
	//     }
	//     @keyframes c-treeselect-hide-fadeout {
	//         0% {
	//             opacity: 1;
	//             transform: scaleY(1);
	//         }
	//         100% {
	//             opacity: 0;
	//             transform: scaleY(0.6);
	//         }
	//     }
	// </style>
	// <script type="text/ecmascript-6">

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-treeselect\" @click=\"clickEvent\" _v-05c0c976=\"\">\n        <icon type=\"down\" _v-05c0c976=\"\"></icon>\n        <icon type=\"fail\" jclass=\"clear\" _v-05c0c976=\"\"></icon>\n        <div class=\"selectContent\" _v-05c0c976=\"\">\n            Please a select\n        </div>\n    </div>";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79)
	module.exports = __webpack_require__(81)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(82)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/treeselect/treenode.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-096ed98b&file=treenode.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./treenode.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-096ed98b&file=treenode.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./treenode.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="">
	//     </div>
	// </template>
	// <style scoped>
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    components: {}
	};
	// </script>

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div class=\"\" _v-096ed98b=\"\">\n    </div>";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _transfer = __webpack_require__(84);
	
	var _transfer2 = _interopRequireDefault(_transfer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _transfer2.default; /**
	                                       * Created by jorten on 2016/12/19.
	                                       */

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85)
	__webpack_require__(87)
	module.exports = __webpack_require__(89)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(101)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/transfer/transfer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1cfd56a5&file=transfer.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./transfer.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1cfd56a5&file=transfer.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./transfer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".transfer-content {\n  height: 168px;\n}\n.transfer-content .j-checkboxgroup .detail .checkboxcont {\n  margin: 0;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px;\n  -webkit-transition: all .5s linear;\n  transition: all .5s linear;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.transfer-content .j-checkboxgroup .detail .checkboxcont:hover {\n  background: #ecf6fd;\n  cursor: pointer;\n}\n.transfer-content .notfound {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  color: #DADADA;\n}\n.transfer-symbol {\n  padding-top: 65px;\n}\n.transfer-symbol .small {\n  margin: 10px;\n  padding: 2px 8px!important;\n  border-radius: 0px;\n  display: block;\n}\n", ""]);
	
	// exports


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(88);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1cfd56a5&file=transfer.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./transfer.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1cfd56a5&file=transfer.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./transfer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-transfer[_v-1cfd56a5] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 0 20px;\n}\n.c-transfer .transfercont[_v-1cfd56a5] {\n  border: 1px solid #e9e9e9;\n  box-sizing: border-box;\n  width: 200px;\n}\n.c-transfer .transfercont input[_v-1cfd56a5] {\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear;\n}\n.c-transfer .transfercont input[_v-1cfd56a5]:hover {\n  border-color: #46a6ea;\n  cursor: pointer;\n}\n.c-transfer .transfercont .transfer-top[_v-1cfd56a5] {\n  padding: 10px;\n  border-bottom: 1px solid #EAEAEA;\n}\n.checkboxcont[_v-1cfd56a5] {\n  width: 100px;\n  margin-right: 20px;\n  vertical-align: -3px;\n}\n", ""]);
	
	// exports


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _checkbox = __webpack_require__(90);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _checkboxgroup = __webpack_require__(96);
	
	var _checkboxgroup2 = _interopRequireDefault(_checkboxgroup);
	
	var _button = __webpack_require__(25);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            fromSelected: [],
	            toSelected: [],
	            sourcevalue: [],
	            targetvalue: []
	        };
	    },
	
	    computed: {
	        fromNum: function fromNum() {
	            return this.sourcedata.length;
	        },
	        toNum: function toNum() {
	            return this.targetdata.length;
	        },
	        sourceisall: function sourceisall() {
	            return this.sourcedata.length && this.sourcedata.length === this.sourcevalue.length;
	        },
	        sourceisnotall: function sourceisnotall() {
	            return this.sourcevalue.length && this.sourcevalue.length !== this.sourcedata.length;
	        },
	        targetisall: function targetisall() {
	            return this.targetdata.length && this.targetdata.length === this.targetvalue.length;
	        },
	        targetisnotall: function targetisnotall() {
	            return this.targetvalue.length && this.targetvalue.length !== this.targetdata.length;
	        }
	    },
	    components: {
	        'checkbox': _checkbox2.default,
	        'checkboxgroup': _checkboxgroup2.default,
	        'c-button': _button2.default
	    },
	    props: {
	        sourcedata: {
	            type: Array,
	            default: [{
	                content: 'task1',
	                title: 'task1',
	                disabled: false
	            }]
	        },
	        targetdata: {
	            type: Array,
	            default: []
	        },
	        title: {
	            type: Array,
	            default: ['Source', 'Target']
	        }
	    },
	    methods: {
	        sourceChangeEvent: function sourceChangeEvent() {},
	        sourceAllEvent: function sourceAllEvent() {
	            if (this.sourceisnotall) {
	                this.sourcevalue = [];
	                for (var i = 0; i < this.sourcedata.length; i++) {
	                    if (Object.prototype.toString.call(this.sourcedata[i]) === "[object Object]") {
	                        this.sourcevalue[i] = this.sourcedata[i].content;
	                    } else {
	                        this.sourcevalue[i] = this.sourcedata[i];
	                    }
	                }
	            } else if (this.sourceisall) {
	                this.sourcevalue = [];
	            } else {
	                this.sourcevalue = [];
	                for (var _i = 0; _i < this.sourcedata.length; _i++) {
	                    if (Object.prototype.toString.call(this.sourcedata[_i]) === "[object Object]") {
	                        this.sourcevalue[_i] = this.sourcedata[_i].content;
	                    } else {
	                        this.sourcevalue[_i] = this.sourcedata[_i];
	                    }
	                }
	            }
	        },
	        targetChangeEvent: function targetChangeEvent() {},
	        targetAllEvent: function targetAllEvent() {
	            if (this.targetisnotall) {
	                this.targetvalue = [];
	                for (var i = 0; i < this.targetdata.length; i++) {
	                    if (Object.prototype.toString.call(this.targetdata[i]) === "[object Object]") {
	                        this.targetvalue[i] = this.targetdata[i].content;
	                    } else {
	                        this.targetvalue[i] = this.targetdata[i];
	                    }
	                }
	            } else if (this.targetisall) {
	                this.targetvalue = [];
	            } else {
	                this.targetvalue = [];
	                for (var _i2 = 0; _i2 < this.targetdata.length; _i2++) {
	                    if (Object.prototype.toString.call(this.targetdata[_i2]) === "[object Object]") {
	                        this.targetvalue[_i2] = this.targetdata[_i2].content;
	                    } else {
	                        this.targetvalue[_i2] = this.targetdata[_i2];
	                    }
	                }
	            }
	        },
	        sourceClickEvent: function sourceClickEvent() {
	            var _this = this;
	
	            this.sourcevalue.map(function (data) {
	                var index = void 0;
	                if (Object.prototype.toString.call(_this.sourcedata[0]) === "[object Object]") {
	                    _this.sourcedata.map(function (data1, index1) {
	                        if (data1.content === data) {
	                            index = index1;
	                            return;
	                        }
	                    });
	                } else {
	                    index = _this.sourcedata.indexOf(data);
	                }
	                var element = _this.sourcedata.splice(index, 1);
	                _this.targetdata.unshift(element[0]);
	            });
	            this.sourcevalue = [];
	        },
	        targetClickEvent: function targetClickEvent() {
	            var _this2 = this;
	
	            this.targetvalue.map(function (data) {
	                var index = void 0;
	                if (Object.prototype.toString.call(_this2.targetdata[0]) === "[object Object]") {
	                    _this2.targetdata.map(function (data1, index1) {
	                        if (data1.content === data) {
	                            index = index1;
	                            return;
	                        }
	                    });
	                } else {
	                    index = _this2.targetdata.indexOf(data);
	                }
	                var element = _this2.targetdata.splice(index, 1);
	                _this2.sourcedata.unshift(element[0]);
	            });
	            this.targetvalue = [];
	        }
	    }
	};
	// </script>
	// <template>
	//     <div class="c-transfer">
	//         <div class="transfercont transfer-from">
	//             <div class="transfer-top">
	//                 <checkbox :isnotall="sourceisnotall" :isselected="sourceisall" @change="sourceAllEvent">
	//                     <span v-if="sourcevalue.length">{{ sourcevalue.length }}/</span>{{ fromNum }} items
	//                 </checkbox>
	//                 <span class="from-title">
	//                     {{ title[0] }}
	//                 </span>
	//             </div>
	//             <div class="transfer-content">
	//                 <checkboxgroup v-if="sourcedata.length" :options="sourcedata" @change="sourceChangeEvent" :values="sourcevalue"></checkboxgroup>
	//                 <div class="notfound" v-if="!sourcedata.length">
	//                     <span>Not Found</span>
	//                 </div>
	//             </div>
	//         </div>
	//         <div class="transfer-symbol">
	//             <c-button type="primary" icon="backward" size="small" :disabled="!targetvalue.length" @click="targetClickEvent"></c-button>
	//             <c-button type="primary" icon="forward" size="small" :disabled="!sourcevalue.length" @click="sourceClickEvent"></c-button>
	//         </div>
	//         <div class="transfercont transfer-to">
	//             <div class="transfer-top">
	//                 <checkbox :isnotall="targetisnotall" :isselected="targetisall" @change="targetAllEvent">
	//                     <span v-if="targetvalue.length">{{ targetvalue.length }}/</span>{{ toNum }} items
	//                 </checkbox>
	//                 <span class="from-title">
	//                     {{ title[1] }}
	//                 </span>
	//             </div>
	//             <div class="transfer-content">
	//                 <checkboxgroup v-if="targetdata.length" :options="targetdata" @change="sourceChangeEvent" :values="targetvalue"></checkboxgroup>
	//                 <div class="notfound" v-if="!targetdata.length">
	//                     <span>Not Found</span>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <style lang="less" rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .transfer-content {
	//         height: 168px;
	//         .j-checkboxgroup {
	//             .detail {
	//                 .checkboxcont {
	//                     margin: 0;
	//                     box-sizing: border-box;
	//                     width: 100%;
	//                     padding: 10px;
	//                     transition: all .5s linear;
	//                     text-overflow: ellipsis;
	//                     overflow: hidden;
	//                     white-space: nowrap;
	//                     &:hover {
	//                         background: @transferblue;
	//                         cursor: pointer;
	//                     }
	//                 }
	//             }
	//         }
	//         .notfound {
	//             display: flex;
	//             height: 100%;
	//             justify-content: center;
	//             align-items: center;
	//             color: @jdefault;
	//         }
	//     }
	//     .transfer-symbol {
	//         padding-top: 65px;
	//         .small {
	//             margin: 10px;
	//             padding: 2px 8px!important;
	//             border-radius: 0px;
	//             display: block;
	//         }
	//     }
	// </style>
	// <style lang="less" scoped rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .c-transfer {
	//         display: flex;
	//         padding: 0 20px;
	//         .transfercont {
	//             border: 1px solid @border;
	//             box-sizing: border-box;
	//             width: 200px;
	//             input {
	//                 transition: all .2s linear;
	//                 &:hover {
	//                     border-color: @jbluelight;
	//                     cursor: pointer;
	//                 }
	//             }
	//             .transfer-top {
	//                 padding: 10px;
	//                 border-bottom: 1px solid @boxshadow;
	//             }
	//         }
	//     }
	//     .checkboxcont {
	//         width: 100px;
	//         margin-right: 20px;
	//         vertical-align: -3px;
	//     }
	// </style>
	// <script type="text/ecmascript-6">

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91)
	module.exports = __webpack_require__(93)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(95)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/checkbox/checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-435aacb6&file=checkbox.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./checkbox.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-435aacb6&file=checkbox.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./checkbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".checkboxcont[_v-435aacb6] {\n  display: inline-block;\n}\n.checkboxcont[_v-435aacb6]:hover {\n  cursor: pointer;\n}\n.checkboxcont:hover .j-checkbox[_v-435aacb6] {\n  border-color: #46a6ea;\n}\n.checkboxcont.disabled .j-checkbox[_v-435aacb6] {\n  background: #f1f1f1;\n  border-color: #d4d4d4;\n}\n.checkboxcont.disabled .j-checkbox[_v-435aacb6]:after {\n  border-color: #b7b7b7;\n}\n.checkboxcont.disabled .j-content[_v-435aacb6] {\n  color: #DADADA;\n}\n.checkboxcont.disabled[_v-435aacb6]:hover {\n  cursor: not-allowed;\n}\n.checkboxcont.disabled:hover .j-checkbox[_v-435aacb6] {\n  border-color: #d4d4d4;\n}\n.j-checkbox[_v-435aacb6] {\n  position: relative;\n  top: 3px;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n  border: 1px solid #e9e9e9;\n  border-radius: 3px;\n  line-height: 12px;\n  margin: 0 5px;\n  z-index: 20;\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear;\n}\n.j-checkbox[_v-435aacb6]:after {\n  border-color: white;\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear;\n}\n.j-checkbox input[_v-435aacb6] {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  visibility: hidden;\n}\n.checkboxcont-selected .j-checkbox[_v-435aacb6] {\n  background: #46a6ea;\n  border-color: #46a6ea;\n}\n.checkboxcont-selected .j-checkbox[_v-435aacb6]:after {\n  content: '';\n  width: 4px;\n  height: 7px;\n  border-right: 2px solid white;\n  border-bottom: 2px solid white;\n  position: absolute;\n  left: 3px;\n  top: 0;\n  z-index: 30;\n  -webkit-transform: rotate(45deg) scale(1);\n          transform: rotate(45deg) scale(1);\n}\n.checkboxcont-selected-last .j-checkbox[_v-435aacb6] {\n  border-color: #46a6ea;\n}\n.checkboxcont-notall .j-checkbox[_v-435aacb6] {\n  background: #46a6ea;\n  border-color: #46a6ea;\n}\n.checkboxcont-notall .j-checkbox[_v-435aacb6]:after {\n  content: '';\n  width: 6px;\n  height: 7px;\n  border-bottom: 2px solid white;\n  position: absolute;\n  left: 3px;\n  top: -1px;\n  z-index: 30;\n}\n", ""]);
	
	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vuex = __webpack_require__(94);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = new _vuex2.default.Store({
	    state: {
	        dom: null
	    },
	    mutations: {
	        addDom: function addDom(state, payload) {
	            state.dom = payload;
	        },
	        clickDom: function clickDom(state) {
	            if (state.dom) {
	                state.dom.isselectedLast = false;
	            }
	        }
	    }
	}); // <template>
	//     <div class="checkboxcont" :title="title" :class="{ 'disabled': disabled, 'checkboxcont-selected': isselected, 'checkboxcont-selected-last': isselectedLast, 'checkboxcont-notall': isnotall }" @click="clickevent">
	//         <span class="j-checkbox">
	//             <input type="checkbox" />
	//         </span>
	//         <span class="j-content">
	//             <slot></slot>
	//         </span>
	//     </div>
	// </template>
	// <style lang="less" scoped rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .checkboxcont {
	//         display: inline-block;
	//         &:hover {
	//             cursor: pointer;
	//             .j-checkbox {
	//                 border-color: @jbluelight;
	//             }
	//         }
	//         &.disabled {
	//             .j-checkbox {
	//                 background: @checkdisabledbg;
	//                 border-color: @checkdisablebd;
	//                 &:after {
	//                     border-color: @checkdisablert;
	//                 }
	//             }
	//             .j-content {
	//                 color: @jdefault;
	//             }
	//             &:hover {
	//                 .j-checkbox {
	//                     border-color: @checkdisablebd;
	//                 }
	//                 cursor: not-allowed;
	//             }
	//         }
	//     }
	//     .j-checkbox {
	//         position: relative;
	//         top: 3px;
	//         left: 0;
	//         width: 12px;
	//         height: 12px;
	//         display: inline-block;
	//         border: 1px solid @border;
	//         border-radius: 3px;
	//         line-height: 12px;
	//         margin: 0 5px;
	//         z-index: 20;
	//         transition: all .2s linear;
	//         &:after {
	//             border-color: white;
	//             transition: all .2s linear;
	//         }
	//         input {
	//             opacity: 0;
	//             position: absolute;
	//             left: 0;
	//             top: 0;
	//             visibility: hidden;
	//         }
	//     }
	//     .checkboxcont-selected {
	//         .j-checkbox {
	//             background: @jbluelight;
	//             border-color: @jbluelight;
	//             &:after {
	//                 content: '';
	//                 width: 4px;
	//                 height: 7px;
	//                 border-right: 2px solid white;
	//                 border-bottom: 2px solid white;
	//                 position: absolute;
	//                 left: 3px;
	//                 top: 0;
	//                 z-index: 30;
	//                 transform: rotate(45deg) scale(1);
	//             }
	//         }
	//     }
	//     .checkboxcont-selected-last .j-checkbox {
	//         border-color: @jbluelight;
	//     }
	//     .checkboxcont-notall .j-checkbox {
	//         background: @jbluelight;
	//         border-color: @jbluelight;
	//         &:after {
	//             content: '';
	//             width: 6px;
	//             height: 7px;
	//             border-bottom: 2px solid white;
	//             position: absolute;
	//             left: 3px;
	//             top: -1px;
	//             z-index: 30;
	//         }
	//     }
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            isselectedLast: false
	        };
	    },
	
	    props: {
	        isnotall: {
	            type: Boolean,
	            default: false
	        },
	        isselected: {
	            type: Boolean,
	            default: false
	        },
	        title: {
	            type: String,
	            default: null
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	    store: store,
	    methods: {
	        clickevent: function clickevent(event) {
	            if (!this.disabled) {
	                store.commit("clickDom");
	                if (this.isselected) {
	                    this.isselected = false;
	                    this.isselectedLast = true;
	                    store.commit("addDom", this);
	                } else {
	                    if (this.isnotall) {
	                        this.isnotall = false;
	                    }
	                    this.isselected = true;
	                }
	                this.$emit("change", this.$el.querySelector(".j-content").textContent.trim());
	            }
	        }
	    }
	};
	// </script>

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vuex v2.1.1
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, (function () { 'use strict';
	
	var devtoolHook =
	  typeof window !== 'undefined' &&
	  window.__VUE_DEVTOOLS_GLOBAL_HOOK__
	
	function devtoolPlugin (store) {
	  if (!devtoolHook) { return }
	
	  store._devtoolHook = devtoolHook
	
	  devtoolHook.emit('vuex:init', store)
	
	  devtoolHook.on('vuex:travel-to-state', function (targetState) {
	    store.replaceState(targetState)
	  })
	
	  store.subscribe(function (mutation, state) {
	    devtoolHook.emit('vuex:mutation', mutation, state)
	  })
	}
	
	function applyMixin (Vue) {
	  var version = Number(Vue.version.split('.')[0])
	
	  if (version >= 2) {
	    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
	    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit })
	  } else {
	    // override init and inject vuex init procedure
	    // for 1.x backwards compatibility.
	    var _init = Vue.prototype._init
	    Vue.prototype._init = function (options) {
	      if ( options === void 0 ) options = {};
	
	      options.init = options.init
	        ? [vuexInit].concat(options.init)
	        : vuexInit
	      _init.call(this, options)
	    }
	  }
	
	  /**
	   * Vuex init hook, injected into each instances init hooks list.
	   */
	
	  function vuexInit () {
	    var options = this.$options
	    // store injection
	    if (options.store) {
	      this.$store = options.store
	    } else if (options.parent && options.parent.$store) {
	      this.$store = options.parent.$store
	    }
	  }
	}
	
	var mapState = normalizeNamespace(function (namespace, states) {
	  var res = {}
	  normalizeMap(states).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    res[key] = function mappedState () {
	      var state = this.$store.state
	      var getters = this.$store.getters
	      if (namespace) {
	        var module = this.$store._modulesNamespaceMap[namespace]
	        if (!module) {
	          warnNamespace('mapState', namespace)
	          return
	        }
	        state = module.state
	        getters = module.context.getters
	      }
	      return typeof val === 'function'
	        ? val.call(this, state, getters)
	        : state[val]
	    }
	  })
	  return res
	})
	
	var mapMutations = normalizeNamespace(function (namespace, mutations) {
	  var res = {}
	  normalizeMap(mutations).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    val = namespace + val
	    res[key] = function mappedMutation () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];
	
	      return this.$store.commit.apply(this.$store, [val].concat(args))
	    }
	  })
	  return res
	})
	
	var mapGetters = normalizeNamespace(function (namespace, getters) {
	  var res = {}
	  normalizeMap(getters).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    val = namespace + val
	    res[key] = function mappedGetter () {
	      if (!(val in this.$store.getters)) {
	        console.error(("[vuex] unknown getter: " + val))
	      }
	      return this.$store.getters[val]
	    }
	  })
	  return res
	})
	
	var mapActions = normalizeNamespace(function (namespace, actions) {
	  var res = {}
	  normalizeMap(actions).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    val = namespace + val
	    res[key] = function mappedAction () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];
	
	      return this.$store.dispatch.apply(this.$store, [val].concat(args))
	    }
	  })
	  return res
	})
	
	function normalizeMap (map) {
	  return Array.isArray(map)
	    ? map.map(function (key) { return ({ key: key, val: key }); })
	    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
	}
	
	function normalizeNamespace (fn) {
	  return function (namespace, map) {
	    if (typeof namespace !== 'string') {
	      map = namespace
	      namespace = ''
	    } else if (namespace.charAt(namespace.length - 1) !== '/') {
	      namespace += '/'
	    }
	    return fn(namespace, map)
	  }
	}
	
	function warnNamespace (helper, namespace) {
	  console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace))
	}
	
	/**
	 * forEach for object
	 */
	function forEachValue (obj, fn) {
	  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); })
	}
	
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	function isPromise (val) {
	  return val && typeof val.then === 'function'
	}
	
	function assert (condition, msg) {
	  if (!condition) { throw new Error(("[vuex] " + msg)) }
	}
	
	var Module = function Module (rawModule, runtime) {
	  this.runtime = runtime
	  this._children = Object.create(null)
	  this._rawModule = rawModule
	};
	
	var prototypeAccessors$1 = { state: {},namespaced: {} };
	
	prototypeAccessors$1.state.get = function () {
	  return this._rawModule.state || {}
	};
	
	prototypeAccessors$1.namespaced.get = function () {
	  return !!this._rawModule.namespaced
	};
	
	Module.prototype.addChild = function addChild (key, module) {
	  this._children[key] = module
	};
	
	Module.prototype.removeChild = function removeChild (key) {
	  delete this._children[key]
	};
	
	Module.prototype.getChild = function getChild (key) {
	  return this._children[key]
	};
	
	Module.prototype.update = function update (rawModule) {
	  this._rawModule.namespaced = rawModule.namespaced
	  if (rawModule.actions) {
	    this._rawModule.actions = rawModule.actions
	  }
	  if (rawModule.mutations) {
	    this._rawModule.mutations = rawModule.mutations
	  }
	  if (rawModule.getters) {
	    this._rawModule.getters = rawModule.getters
	  }
	};
	
	Module.prototype.forEachChild = function forEachChild (fn) {
	  forEachValue(this._children, fn)
	};
	
	Module.prototype.forEachGetter = function forEachGetter (fn) {
	  if (this._rawModule.getters) {
	    forEachValue(this._rawModule.getters, fn)
	  }
	};
	
	Module.prototype.forEachAction = function forEachAction (fn) {
	  if (this._rawModule.actions) {
	    forEachValue(this._rawModule.actions, fn)
	  }
	};
	
	Module.prototype.forEachMutation = function forEachMutation (fn) {
	  if (this._rawModule.mutations) {
	    forEachValue(this._rawModule.mutations, fn)
	  }
	};
	
	Object.defineProperties( Module.prototype, prototypeAccessors$1 );
	
	var ModuleCollection = function ModuleCollection (rawRootModule) {
	  var this$1 = this;
	
	  // register root module (Vuex.Store options)
	  this.root = new Module(rawRootModule, false)
	
	  // register all nested modules
	  if (rawRootModule.modules) {
	    forEachValue(rawRootModule.modules, function (rawModule, key) {
	      this$1.register([key], rawModule, false)
	    })
	  }
	};
	
	ModuleCollection.prototype.get = function get (path) {
	  return path.reduce(function (module, key) {
	    return module.getChild(key)
	  }, this.root)
	};
	
	ModuleCollection.prototype.getNamespace = function getNamespace (path) {
	  var module = this.root
	  return path.reduce(function (namespace, key) {
	    module = module.getChild(key)
	    return namespace + (module.namespaced ? key + '/' : '')
	  }, '')
	};
	
	ModuleCollection.prototype.update = function update$1 (rawRootModule) {
	  update(this.root, rawRootModule)
	};
	
	ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
	    var this$1 = this;
	    if ( runtime === void 0 ) runtime = true;
	
	  var parent = this.get(path.slice(0, -1))
	  var newModule = new Module(rawModule, runtime)
	  parent.addChild(path[path.length - 1], newModule)
	
	  // register nested modules
	  if (rawModule.modules) {
	    forEachValue(rawModule.modules, function (rawChildModule, key) {
	      this$1.register(path.concat(key), rawChildModule, runtime)
	    })
	  }
	};
	
	ModuleCollection.prototype.unregister = function unregister (path) {
	  var parent = this.get(path.slice(0, -1))
	  var key = path[path.length - 1]
	  if (!parent.getChild(key).runtime) { return }
	
	  parent.removeChild(key)
	};
	
	function update (targetModule, newModule) {
	  // update target module
	  targetModule.update(newModule)
	
	  // update nested modules
	  if (newModule.modules) {
	    for (var key in newModule.modules) {
	      if (!targetModule.getChild(key)) {
	        console.warn(
	          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
	          'manual reload is needed'
	        )
	        return
	      }
	      update(targetModule.getChild(key), newModule.modules[key])
	    }
	  }
	}
	
	var Vue // bind on install
	
	var Store = function Store (options) {
	  var this$1 = this;
	  if ( options === void 0 ) options = {};
	
	  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.")
	  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.")
	
	  var state = options.state; if ( state === void 0 ) state = {};
	  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
	  var strict = options.strict; if ( strict === void 0 ) strict = false;
	
	  // store internal state
	  this._committing = false
	  this._actions = Object.create(null)
	  this._mutations = Object.create(null)
	  this._wrappedGetters = Object.create(null)
	  this._modules = new ModuleCollection(options)
	  this._modulesNamespaceMap = Object.create(null)
	  this._subscribers = []
	  this._watcherVM = new Vue()
	
	  // bind commit and dispatch to self
	  var store = this
	  var ref = this;
	  var dispatch = ref.dispatch;
	  var commit = ref.commit;
	    this.dispatch = function boundDispatch (type, payload) {
	    return dispatch.call(store, type, payload)
	  }
	  this.commit = function boundCommit (type, payload, options) {
	    return commit.call(store, type, payload, options)
	    }
	
	    // strict mode
	  this.strict = strict
	
	  // init root module.
	  // this also recursively registers all sub-modules
	  // and collects all module getters inside this._wrappedGetters
	  installModule(this, state, [], this._modules.root)
	
	  // initialize the store vm, which is responsible for the reactivity
	  // (also registers _wrappedGetters as computed properties)
	  resetStoreVM(this, state)
	
	  // apply plugins
	  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); })
	};
	
	var prototypeAccessors = { state: {} };
	
	prototypeAccessors.state.get = function () {
	  return this._vm.$data.state
	};
	
	prototypeAccessors.state.set = function (v) {
	  assert(false, "Use store.replaceState() to explicit replace store state.")
	};
	
	Store.prototype.commit = function commit (_type, _payload, _options) {
	    var this$1 = this;
	
	  // check object-style commit
	  var ref = unifyObjectStyle(_type, _payload, _options);
	    var type = ref.type;
	    var payload = ref.payload;
	    var options = ref.options;
	
	  var mutation = { type: type, payload: payload }
	  var entry = this._mutations[type]
	  if (!entry) {
	    console.error(("[vuex] unknown mutation type: " + type))
	    return
	  }
	  this._withCommit(function () {
	    entry.forEach(function commitIterator (handler) {
	      handler(payload)
	    })
	  })
	  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); })
	
	  if (options && options.silent) {
	    console.warn(
	      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
	      'Use the filter functionality in the vue-devtools'
	    )
	  }
	};
	
	Store.prototype.dispatch = function dispatch (_type, _payload) {
	  // check object-style dispatch
	  var ref = unifyObjectStyle(_type, _payload);
	    var type = ref.type;
	    var payload = ref.payload;
	
	  var entry = this._actions[type]
	  if (!entry) {
	    console.error(("[vuex] unknown action type: " + type))
	    return
	  }
	  return entry.length > 1
	    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
	    : entry[0](payload)
	};
	
	Store.prototype.subscribe = function subscribe (fn) {
	  var subs = this._subscribers
	  if (subs.indexOf(fn) < 0) {
	    subs.push(fn)
	  }
	  return function () {
	    var i = subs.indexOf(fn)
	    if (i > -1) {
	      subs.splice(i, 1)
	    }
	  }
	};
	
	Store.prototype.watch = function watch (getter, cb, options) {
	    var this$1 = this;
	
	  assert(typeof getter === 'function', "store.watch only accepts a function.")
	  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
	};
	
	Store.prototype.replaceState = function replaceState (state) {
	    var this$1 = this;
	
	  this._withCommit(function () {
	    this$1._vm.state = state
	  })
	};
	
	Store.prototype.registerModule = function registerModule (path, rawModule) {
	  if (typeof path === 'string') { path = [path] }
	  assert(Array.isArray(path), "module path must be a string or an Array.")
	  this._modules.register(path, rawModule)
	  installModule(this, this.state, path, this._modules.get(path))
	  // reset store to update getters...
	  resetStoreVM(this, this.state)
	};
	
	Store.prototype.unregisterModule = function unregisterModule (path) {
	    var this$1 = this;
	
	  if (typeof path === 'string') { path = [path] }
	  assert(Array.isArray(path), "module path must be a string or an Array.")
	    this._modules.unregister(path)
	  this._withCommit(function () {
	    var parentState = getNestedState(this$1.state, path.slice(0, -1))
	    Vue.delete(parentState, path[path.length - 1])
	  })
	  resetStore(this)
	};
	
	Store.prototype.hotUpdate = function hotUpdate (newOptions) {
	  this._modules.update(newOptions)
	  resetStore(this)
	};
	
	Store.prototype._withCommit = function _withCommit (fn) {
	  var committing = this._committing
	  this._committing = true
	  fn()
	  this._committing = committing
	};
	
	Object.defineProperties( Store.prototype, prototypeAccessors );
	
	function resetStore (store) {
	  store._actions = Object.create(null)
	  store._mutations = Object.create(null)
	  store._wrappedGetters = Object.create(null)
	  store._modulesNamespaceMap = Object.create(null)
	  var state = store.state
	  // init all modules
	  installModule(store, state, [], store._modules.root, true)
	  // reset vm
	  resetStoreVM(store, state)
	}
	
	function resetStoreVM (store, state) {
	  var oldVm = store._vm
	
	  // bind store public getters
	  store.getters = {}
	  var wrappedGetters = store._wrappedGetters
	  var computed = {}
	  forEachValue(wrappedGetters, function (fn, key) {
	    // use computed to leverage its lazy-caching mechanism
	    computed[key] = function () { return fn(store); }
	    Object.defineProperty(store.getters, key, {
	      get: function () { return store._vm[key]; },
	      enumerable: true // for local getters
	    })
	  })
	
	  // use a Vue instance to store the state tree
	  // suppress warnings just in case the user has added
	  // some funky global mixins
	  var silent = Vue.config.silent
	  Vue.config.silent = true
	  store._vm = new Vue({
	    data: { state: state },
	    computed: computed
	  })
	  Vue.config.silent = silent
	
	  // enable strict mode for new vm
	  if (store.strict) {
	    enableStrictMode(store)
	  }
	
	  if (oldVm) {
	    // dispatch changes in all subscribed watchers
	    // to force getter re-evaluation.
	    store._withCommit(function () {
	      oldVm.state = null
	    })
	    Vue.nextTick(function () { return oldVm.$destroy(); })
	  }
	}
	
	function installModule (store, rootState, path, module, hot) {
	  var isRoot = !path.length
	  var namespace = store._modules.getNamespace(path)
	
	  // register in namespace map
	  if (namespace) {
	    store._modulesNamespaceMap[namespace] = module
	  }
	
	  // set state
	  if (!isRoot && !hot) {
	    var parentState = getNestedState(rootState, path.slice(0, -1))
	    var moduleName = path[path.length - 1]
	    store._withCommit(function () {
	      Vue.set(parentState, moduleName, module.state)
	    })
	  }
	
	  var local = module.context = makeLocalContext(store, namespace)
	
	  module.forEachMutation(function (mutation, key) {
	    var namespacedType = namespace + key
	    registerMutation(store, namespacedType, mutation, path)
	  })
	
	  module.forEachAction(function (action, key) {
	    var namespacedType = namespace + key
	    registerAction(store, namespacedType, action, local, path)
	  })
	
	  module.forEachGetter(function (getter, key) {
	    var namespacedType = namespace + key
	    registerGetter(store, namespacedType, getter, local, path)
	  })
	
	  module.forEachChild(function (child, key) {
	    installModule(store, rootState, path.concat(key), child, hot)
	  })
	}
	
	/**
	 * make localized dispatch, commit and getters
	 * if there is no namespace, just use root ones
	 */
	function makeLocalContext (store, namespace) {
	  var noNamespace = namespace === ''
	
	  var local = {
	    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options)
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;
	
	      if (!options || !options.root) {
	        type = namespace + type
	        if (!store._actions[type]) {
	          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type))
	          return
	        }
	      }
	
	      return store.dispatch(type, payload)
	    },
	
	    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options)
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;
	
	      if (!options || !options.root) {
	        type = namespace + type
	        if (!store._mutations[type]) {
	          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type))
	          return
	        }
	      }
	
	      store.commit(type, payload, options)
	    }
	  }
	
	  // getters object must be gotten lazily
	  // because store.getters will be changed by vm update
	  Object.defineProperty(local, 'getters', {
	    get: noNamespace ? function () { return store.getters; } : function () { return makeLocalGetters(store, namespace); }
	  })
	
	  return local
	}
	
	function makeLocalGetters (store, namespace) {
	  var gettersProxy = {}
	
	  var splitPos = namespace.length
	  Object.keys(store.getters).forEach(function (type) {
	    // skip if the target getter is not match this namespace
	    if (type.slice(0, splitPos) !== namespace) { return }
	
	    // extract local getter type
	    var localType = type.slice(splitPos)
	
	    // Add a port to the getters proxy.
	    // Define as getter property because
	    // we do not want to evaluate the getters in this time.
	    Object.defineProperty(gettersProxy, localType, {
	      get: function () { return store.getters[type]; },
	      enumerable: true
	    })
	  })
	
	  return gettersProxy
	}
	
	function registerMutation (store, type, handler, path) {
	  var entry = store._mutations[type] || (store._mutations[type] = [])
	  entry.push(function wrappedMutationHandler (payload) {
	    handler(getNestedState(store.state, path), payload)
	  })
	}
	
	function registerAction (store, type, handler, local, path) {
	  var entry = store._actions[type] || (store._actions[type] = [])
	  entry.push(function wrappedActionHandler (payload, cb) {
	    var res = handler({
	      dispatch: local.dispatch,
	      commit: local.commit,
	      getters: local.getters,
	      state: getNestedState(store.state, path),
	      rootGetters: store.getters,
	      rootState: store.state
	    }, payload, cb)
	    if (!isPromise(res)) {
	      res = Promise.resolve(res)
	    }
	    if (store._devtoolHook) {
	      return res.catch(function (err) {
	        store._devtoolHook.emit('vuex:error', err)
	        throw err
	      })
	    } else {
	      return res
	    }
	  })
	}
	
	function registerGetter (store, type, rawGetter, local, path) {
	  if (store._wrappedGetters[type]) {
	    console.error(("[vuex] duplicate getter key: " + type))
	    return
	  }
	  store._wrappedGetters[type] = function wrappedGetter (store) {
	    return rawGetter(
	      getNestedState(store.state, path), // local state
	      local.getters, // local getters
	      store.state, // root state
	      store.getters // root getters
	    )
	  }
	}
	
	function enableStrictMode (store) {
	  store._vm.$watch('state', function () {
	    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.")
	  }, { deep: true, sync: true })
	}
	
	function getNestedState (state, path) {
	  return path.length
	    ? path.reduce(function (state, key) { return state[key]; }, state)
	    : state
	}
	
	function unifyObjectStyle (type, payload, options) {
	  if (isObject(type) && type.type) {
	    options = payload
	    payload = type
	    type = type.type
	  }
	  return { type: type, payload: payload, options: options }
	}
	
	function install (_Vue) {
	  if (Vue) {
	    console.error(
	      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
	    )
	    return
	  }
	  Vue = _Vue
	  applyMixin(Vue)
	}
	
	// auto install in dist mode
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue)
	}
	
	var index = {
	  Store: Store,
	  install: install,
	  version: '2.1.1',
	  mapState: mapState,
	  mapMutations: mapMutations,
	  mapGetters: mapGetters,
	  mapActions: mapActions
	}
	
	return index;
	
	})));

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "<div class=\"checkboxcont\" :title=\"title\" :class=\"{ 'disabled': disabled, 'checkboxcont-selected': isselected, 'checkboxcont-selected-last': isselectedLast, 'checkboxcont-notall': isnotall }\" @click=\"clickevent\" _v-435aacb6=\"\">\n        <span class=\"j-checkbox\" _v-435aacb6=\"\">\n            <input type=\"checkbox\" _v-435aacb6=\"\">\n        </span>\n        <span class=\"j-content\" _v-435aacb6=\"\">\n            <slot _v-435aacb6=\"\"></slot>\n        </span>\n    </div>";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97)
	module.exports = __webpack_require__(99)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(100)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/checkbox/checkboxgroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-095fbaaa&file=checkboxgroup.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./checkboxgroup.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-095fbaaa&file=checkboxgroup.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./checkboxgroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _checkbox = __webpack_require__(90);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    components: {
	        'checkbox': _checkbox2.default
	    },
	    data: function data() {
	        return {};
	    },
	
	    computed: {
	        dealOptions: function dealOptions() {
	            var arr = [];
	            this.options.map(function (data, index) {
	                if (data.content) {
	                    if (data.title) {
	                        arr[index] = {
	                            content: data.content,
	                            title: data.title
	                        };
	                    } else {
	                        arr[index] = {
	                            content: data.content,
	                            title: data.content
	                        };
	                    }
	                    if (data.disabled) {
	                        arr[index].disabled = true;
	                    } else {
	                        arr[index].disabled = false;
	                    }
	                    if (data.select) {
	                        arr[index].select = true;
	                    } else {
	                        arr[index].select = false;
	                    }
	                } else {
	                    arr[index] = {
	                        content: data,
	                        title: data,
	                        disabled: false,
	                        select: false
	                    };
	                }
	            });
	            return arr;
	        }
	    },
	    props: {
	        options: {
	            type: Array,
	            default: []
	        },
	        values: {
	            type: Array,
	            default: []
	        },
	        titles: {
	            type: Array,
	            default: []
	        }
	    },
	    methods: {
	        changeEvent: function changeEvent(param) {
	            var i = this.values.indexOf(param);
	            if (i === -1) {
	                this.values.push(param);
	            } else {
	                this.values.splice(i, 1);
	            }
	            this.$emit("change");
	        }
	    }
	};
	// </script>
	// <template>
	//     <div class="j-checkboxgroup">
	//         <div class="detail">
	//             <checkbox v-for="(option, index) in dealOptions" :disabled="option.disabled" :title="option.title" v-bind:isselected="values.indexOf(option.content) !== -1" @change="changeEvent">
	//                 {{ option.content }}
	//             </checkbox>
	//         </div>
	//     </div>
	// </template>
	// <style lang="less" scoped rel="stylesheet/less">
	// </style>
	// <script type="text/ecmascript-6">

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "<div class=\"j-checkboxgroup\" _v-095fbaaa=\"\">\n        <div class=\"detail\" _v-095fbaaa=\"\">\n            <checkbox v-for=\"(option, index) in dealOptions\" :disabled=\"option.disabled\" :title=\"option.title\" v-bind:isselected=\"values.indexOf(option.content) !== -1\" @change=\"changeEvent\" _v-095fbaaa=\"\">\n                {{ option.content }}\n            </checkbox>\n        </div>\n    </div>";

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-transfer\" _v-1cfd56a5=\"\">\n        <div class=\"transfercont transfer-from\" _v-1cfd56a5=\"\">\n            <div class=\"transfer-top\" _v-1cfd56a5=\"\">\n                <checkbox :isnotall=\"sourceisnotall\" :isselected=\"sourceisall\" @change=\"sourceAllEvent\" _v-1cfd56a5=\"\">\n                    <span v-if=\"sourcevalue.length\" _v-1cfd56a5=\"\">{{ sourcevalue.length }}/</span>{{ fromNum }} items\n                </checkbox>\n                <span class=\"from-title\" _v-1cfd56a5=\"\">\n                    {{ title[0] }}\n                </span>\n            </div>\n            <div class=\"transfer-content\" _v-1cfd56a5=\"\">\n                <checkboxgroup v-if=\"sourcedata.length\" :options=\"sourcedata\" @change=\"sourceChangeEvent\" :values=\"sourcevalue\" _v-1cfd56a5=\"\"></checkboxgroup>\n                <div class=\"notfound\" v-if=\"!sourcedata.length\" _v-1cfd56a5=\"\">\n                    <span _v-1cfd56a5=\"\">Not Found</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"transfer-symbol\" _v-1cfd56a5=\"\">\n            <c-button type=\"primary\" icon=\"backward\" size=\"small\" :disabled=\"!targetvalue.length\" @click=\"targetClickEvent\" _v-1cfd56a5=\"\"></c-button>\n            <c-button type=\"primary\" icon=\"forward\" size=\"small\" :disabled=\"!sourcevalue.length\" @click=\"sourceClickEvent\" _v-1cfd56a5=\"\"></c-button>\n        </div>\n        <div class=\"transfercont transfer-to\" _v-1cfd56a5=\"\">\n            <div class=\"transfer-top\" _v-1cfd56a5=\"\">\n                <checkbox :isnotall=\"targetisnotall\" :isselected=\"targetisall\" @change=\"targetAllEvent\" _v-1cfd56a5=\"\">\n                    <span v-if=\"targetvalue.length\" _v-1cfd56a5=\"\">{{ targetvalue.length }}/</span>{{ toNum }} items\n                </checkbox>\n                <span class=\"from-title\" _v-1cfd56a5=\"\">\n                    {{ title[1] }}\n                </span>\n            </div>\n            <div class=\"transfer-content\" _v-1cfd56a5=\"\">\n                <checkboxgroup v-if=\"targetdata.length\" :options=\"targetdata\" @change=\"sourceChangeEvent\" :values=\"targetvalue\" _v-1cfd56a5=\"\"></checkboxgroup>\n                <div class=\"notfound\" v-if=\"!targetdata.length\" _v-1cfd56a5=\"\">\n                    <span _v-1cfd56a5=\"\">Not Found</span>\n                </div>\n            </div>\n        </div>\n    </div>";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.checkboxgroup = exports.checkbox = undefined;
	
	var _checkbox = __webpack_require__(90);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _checkboxgroup = __webpack_require__(96);
	
	var _checkboxgroup2 = _interopRequireDefault(_checkboxgroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by jorten on 2016/12/20.
	 */
	exports.checkbox = _checkbox2.default;
	exports.checkboxgroup = _checkboxgroup2.default;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dropdown = __webpack_require__(104);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _dropdown2.default; /**
	                                       * Created by jorten on 2017/2/3.
	                                       */

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(105)
	__webpack_require__(107)
	module.exports = __webpack_require__(109)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(110)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/dropdown/dropdown.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(106);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-07de4165&file=dropdown.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dropdown.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-07de4165&file=dropdown.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dropdown.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".dropdown-content[_v-07de4165] {\n  display: inline-block;\n  position: relative;\n}\n.dropdown-content .dropdown-display[_v-07de4165] {\n  text-decoration: none;\n  color: #1f90e6;\n  -webkit-transition: color .2s linear;\n  transition: color .2s linear;\n}\n.dropdown-content .dropdown-display[_v-07de4165]:hover {\n  cursor: pointer;\n  color: #46a6ea;\n}\n.dropdown-content .dropdown-enter-active[_v-07de4165] {\n  /*transition: all 0.1s cubic-bezier(1, 0.02, 1, 1);*/\n  -webkit-animation: enter .1s linear;\n          animation: enter .1s linear;\n}\n.dropdown-content .dropdown-leave-active[_v-07de4165] {\n  -webkit-animation: leave .1s linear;\n          animation: leave .1s linear;\n}\n.dropdown-content .dropdown-enter[_v-07de4165],\n.dropdown-content .dropdown-leave-active[_v-07de4165] {\n  opacity: 0;\n  -webkit-transform: scaleY(0.8);\n          transform: scaleY(0.8);\n}\n@-webkit-keyframes enter {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.95);\n            transform: scaleY(0.95);\n  }\n  20% {\n    opacity: 0.6;\n    -webkit-transform: scaleY(0.95);\n            transform: scaleY(0.95);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n@keyframes enter {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.95);\n            transform: scaleY(0.95);\n  }\n  20% {\n    opacity: 0.6;\n    -webkit-transform: scaleY(0.95);\n            transform: scaleY(0.95);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n@-webkit-keyframes leave {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  20% {\n    opacity: 0.6;\n    -webkit-transform: scaleY(0.95);\n            transform: scaleY(0.95);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.95);\n            transform: scaleY(0.95);\n  }\n}\n@keyframes leave {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  20% {\n    opacity: 0.6;\n    -webkit-transform: scaleY(0.95);\n            transform: scaleY(0.95);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.95);\n            transform: scaleY(0.95);\n  }\n}\n.dropdown-content .dropdownlist[_v-07de4165] {\n  -webkit-transform-origin: 50% 0;\n          transform-origin: 50% 0;\n  position: absolute;\n  top: 100%;\n  border-radius: 4px;\n  padding: 0;\n  margin-top: 5px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  white-space: nowrap;\n}\n", ""]);
	
	// exports


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(108);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-07de4165&file=dropdown.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./dropdown.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-07de4165&file=dropdown.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./dropdown.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".dropdown-content .dropdown-display a {\n  text-decoration: none;\n  color: #1f90e6;\n  -webkit-transition: color .2s linear;\n  transition: color .2s linear;\n}\n.dropdown-content .dropdown-display a:hover {\n  color: #46a6ea;\n}\n.dropdown-content .dropdownlist ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-content .dropdownlist li {\n  padding: 7px 16px;\n  -webkit-transition: all .5s linear;\n  transition: all .5s linear;\n  color: rgba(0, 0, 0, 0.65);\n}\n.dropdown-content .dropdownlist li:hover {\n  background: #ecf6fd;\n  cursor: pointer;\n}\n.dropdown-content .dropdownlist li a {\n  display: block;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.65);\n}\n", ""]);
	
	// exports


/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="dropdown-content" @mouseover="overin" @mouseleave="leaveout">
	//         <div class="dropdown-display" @click="clickEvent">
	//             <slot name="display"></slot>
	//         </div>
	//         <transition name="dropdown">
	//             <div class="dropdownlist" v-if="isAppear">
	//                 <slot></slot>
	//             </div>
	//         </transition>
	//     </div>
	// </template>
	// <style scoped rel="stylesheet/less" lang="less">
	//     @import '../../mixin/mixin.less';
	//     .dropdown-content {
	//         display: inline-block;
	//         position: relative;
	//         .dropdown-display {
	//             text-decoration: none;
	//             color: @jblue;
	//             transition: color .2s linear;
	//             &:hover {
	//                 cursor: pointer;
	//                 color: @jbluelight;
	//             }
	//         }
	//         .dropdown-enter-active {
	//             /*transition: all 0.1s cubic-bezier(1, 0.02, 1, 1);*/
	//             animation: enter .1s linear;
	//         }
	//         .dropdown-leave-active {
	//             animation: leave .1s linear;
	//         }
	//         .dropdown-enter, .dropdown-leave-active {
	//             opacity: 0;
	//             transform: scaleY(0.8);
	
	//         }
	//         @keyframes enter {
	//             0% {
	//                 opacity: 0;
	//                 transform: scaleY(0.95);
	//             }
	//             20% {
	//                 opacity: 0.6;
	//                 transform: scaleY(0.95);
	//             }
	//             100% {
	//                 opacity: 1;
	//                 transform: scaleY(1);
	//             }
	//         }
	//         @keyframes leave {
	//             0% {
	//                 opacity: 1;
	//                 transform: scaleY(1);
	//             }
	//             20% {
	//                 opacity: 0.6;
	//                 transform: scaleY(0.95);
	//             }
	//             100% {
	//                 opacity: 0;
	//                 transform: scaleY(0.95);
	//             }
	//         }
	//         .dropdownlist {
	//             transform-origin: 50% 0;
	//             position: absolute;
	//             top: 100%;
	//             border-radius: 4px;
	//             padding: 0;
	//             margin-top: 5px;
	//             box-shadow: 0 1px 6px @whiteshadow;
	//             white-space: nowrap;
	//         }
	//     }
	// </style>
	// <style lang="less" rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .dropdown-content {
	//         .dropdown-display {
	//             a {
	//                 text-decoration: none;
	//                 color: @jblue;
	//                 transition: color .2s linear;
	//                 &:hover {
	//                     color: @jbluelight;
	//                 }
	//             }
	//         }
	//         .dropdownlist {
	//             ul {
	//                 list-style: none;
	//                 padding: 0;
	//                 margin: 0;
	//             }
	//             li {
	//                 padding: 7px 16px;
	//                 transition: all .5s linear;
	//                 color: @acolor;
	//                 &:hover {
	//                     background: @dropdownlist-hover;
	//                     cursor: pointer;
	//                 }
	//                 a {
	//                     display: block;
	//                     text-decoration: none;
	//                     color: @acolor;
	//                 }
	//             }
	//         }
	//     }
	// </style>
	// <script type="text/ecmascript-6">
	exports.default = {
	    data: function data() {
	        return {
	            isAppear: false,
	            timeHandle: null
	        };
	    },
	
	    components: {},
	    computed: {},
	    methods: {
	        overin: function overin() {
	            if (this.trigger === 'hover') {
	                clearTimeout(this.timeHandle);
	                if (!this.isAppear) {
	                    this.isAppear = true;
	                }
	            }
	        },
	        leaveout: function leaveout() {
	            var _this = this;
	
	            if (this.trigger === 'hover') {
	                this.timeHandle = setTimeout(function () {
	                    _this.isAppear = false;
	                }, 500);
	            }
	        },
	        clickEvent: function clickEvent(eve) {
	            eve.preventDefault();
	            if (this.trigger === 'click') {
	                if (!this.isAppear) {
	                    this.isAppear = true;
	                } else {
	                    this.isAppear = false;
	                }
	            }
	        }
	    },
	    mounted: function mounted() {
	        var _this2 = this;
	
	        if (this.trigger === 'click') {
	            document.body.addEventListener("click", function (event) {
	                if (_this2.$el !== event.target && _this2.$el.contains ? !_this2.$el.contains(event.target) : !_this2.$el.compareDocumentPosition(event.target) & 16) {
	                    _this2.isAppear = false;
	                }
	            }, false);
	        }
	    },
	
	    props: {
	        trigger: {
	            type: String,
	            default: 'hover'
	        },
	        overload: {
	            type: String
	        }
	    }
	};
	// </script>

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropdown-content\" @mouseover=\"overin\" @mouseleave=\"leaveout\" _v-07de4165=\"\">\n        <div class=\"dropdown-display\" @click=\"clickEvent\" _v-07de4165=\"\">\n            <slot name=\"display\" _v-07de4165=\"\"></slot>\n        </div>\n        <transition name=\"dropdown\" _v-07de4165=\"\">\n            <div class=\"dropdownlist\" v-if=\"isAppear\" _v-07de4165=\"\">\n                <slot _v-07de4165=\"\"></slot>\n            </div>\n        </transition>\n    </div>";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _backtop = __webpack_require__(112);
	
	var _backtop2 = _interopRequireDefault(_backtop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backtop2.default;
	/**
	 * Created by jorten on 2017/2/28.
	 */

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(113)
	module.exports = __webpack_require__(115)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(117)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/backtop/backtop.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(114);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2c1382a3&file=backtop.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./backtop.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2c1382a3&file=backtop.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./backtop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".backtop[_v-2c1382a3] {\n  position: fixed;\n  bottom: 50px;\n  right: 100px;\n}\n.backtop .j-btn[_v-2c1382a3] {\n  background: #AFAFAF;\n  border: 0px;\n  color: white;\n  padding: 10px!important;\n  -webkit-transition: background .2s linear;\n  transition: background .2s linear;\n}\n.backtop .j-btn[_v-2c1382a3]:hover {\n  color: white;\n  background: #999;\n}\n.display-enter-active[_v-2c1382a3],\n.display-leave-active[_v-2c1382a3] {\n  -webkit-transition: opacity .3s linear!important;\n  transition: opacity .3s linear!important;\n}\n.display-enter[_v-2c1382a3],\n.display-leave-active[_v-2c1382a3] {\n  opacity: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _button = __webpack_require__(116);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    components: {
	        'c-button': _button2.default
	    },
	    data: function data() {
	        return {
	            isAppear: false,
	            delta: 0,
	            init: 0,
	            now: 0
	        };
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        if (document.body.scrollTop >= 100) {
	            this.isAppear = true;
	        }
	        document.body.addEventListener("mousewheel", function (event) {
	            if (document.body.scrollTop >= 100) {
	                _this.isAppear = true;
	            } else {
	                _this.isAppear = false;
	            }
	        }, false);
	    },
	
	    methods: {
	        clickEvent: function clickEvent() {
	            this.from = document.body.scrollTop;
	            this.to = 0;
	            this.animationFun(200);
	        },
	        animationFun: function animationFun(time) {
	            this.init = Date.now();
	            this.delta = (this.to - this.from) / time;
	            if (requestAnimationFrame) {
	                requestAnimationFrame(this.go);
	            } else {
	                webkitRequestAnimationFrame(this.go);
	            }
	        },
	        go: function go() {
	            this.now = Date.now();
	            if (this.now - this.init > 10) {
	                document.body.scrollTop += this.delta * (this.now - this.init);
	                if (this.delta > 0) {
	                    if (document.body.scrollTop >= this.to) {
	                        document.body.scrollTop = this.to;
	                        this.isAppear = false;
	                        return;
	                    }
	                }
	                if (this.delta <= 0) {
	                    if (document.body.scrollTop <= this.to) {
	                        document.body.scrollTop = this.to;
	                        this.isAppear = false;
	                        return;
	                    }
	                }
	                if (requestAnimationFrame) {
	                    requestAnimationFrame(this.go);
	                } else {
	                    webkitRequestAnimationFrame(this.go);
	                }
	            }
	            this.init = this.now;
	            if (requestAnimationFrame) {
	                requestAnimationFrame(this.go);
	            } else {
	                webkitRequestAnimationFrame(this.go);
	            }
	        }
	    }
	};
	// </script>
	// <template>
	//     <transition name="display">
	//         <div class="backtop" @click="clickEvent" v-if="isAppear">
	//             <c-button size="large" icon="backtop" shape="circle"></c-button>
	//         </div>
	//     </transition>
	// </template>
	// <style scoped lang="less" rel="stylesheet/less">
	//     @import '../../mixin/mixin.less';
	//     .backtop {
	//         position: fixed;
	//         bottom: 50px;
	//         right: 100px;
	//         .j-btn {
	//             background: @backtopbg;
	//             border: 0px;
	//             color: white;
	//             padding: 10px!important;
	//             transition: background .2s linear;
	//             &:hover {
	//                 color: white;
	//                 background: @backtophoverbg;
	//             }
	//         }
	//     }
	//     .display-enter-active, .display-leave-active {
	//         transition: opacity .3s linear!important;
	//     }
	//     .display-enter, .display-leave-active {
	//         opacity: 0;
	//     }
	// </style>
	// <script type="text/ecmascript-6">

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(25);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _button2.default; /**
	                                     * Created by jorten on 2016/12/4.
	                                     */

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<transition name=\"display\" _v-2c1382a3=\"\">\n        <div class=\"backtop\" @click=\"clickEvent\" v-if=\"isAppear\" _v-2c1382a3=\"\">\n            <c-button size=\"large\" icon=\"backtop\" shape=\"circle\" _v-2c1382a3=\"\"></c-button>\n        </div>\n    </transition>";

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<div _v-415b7153=\"\">\n    <!--<box>-->\n      <!--<spin tips=\"loading...\"></spin>-->\n      <!--<icon type=\"success\"/>-->\n      <!--<icon type=\"fail\"/>-->\n      <!--<icon type=\"prompt\"/>-->\n      <!--<icon type=\"warning\"/>-->\n      <!--<icon type=\"search\"/>-->\n    <!--</box>-->\n    <box _v-415b7153=\"\">\n      <c-button size=\"large\" _v-415b7153=\"\">large</c-button>\n      <c-button type=\"primary\" _v-415b7153=\"\">default</c-button>\n      <c-button size=\"small\" type=\"primary\" _v-415b7153=\"\">small</c-button>\n      <c-button type=\"primary\" size=\"large\" icon=\"search\" shape=\"circle\" _v-415b7153=\"\"></c-button>\n      <c-button type=\"primary\" icon=\"search\" shape=\"circle\" _v-415b7153=\"\"></c-button>\n      <c-button type=\"primary\" icon=\"search\" shape=\"circle\" size=\"small\" _v-415b7153=\"\"></c-button>\n      <c-button type=\"primary\" icon=\"search\" size=\"small\" _v-415b7153=\"\">click me</c-button>\n      <c-button icon=\"forward\" size=\"small\" type=\"primary\" _v-415b7153=\"\">Go froward</c-button>\n      <c-button icon=\"download\" size=\"small\" type=\"primary\" _v-415b7153=\"\">download</c-button>\n      <c-button :loading=\"loading\" type=\"primary\" @click=\"loading = true\" _v-415b7153=\"\">我收起看不见的结果</c-button>\n    </box>\n    <!--<box>-->\n      <!--<row space=\"between\">-->\n        <!--<column xs=\"1\" sm=\"6\" md=\"2\" lg=\"2\">-->\n          <!--haha-->\n        <!--</column>-->\n        <!--<column xs=\"10\" sm=\"6\" md=\"8\" lg=\"10\">-->\n          <!--hehe-->\n        <!--</column>-->\n      <!--</row>-->\n    <!--</box>-->\n    <!--<box>-->\n      <!--<popover placement=\"left\">-->\n        <!--<c-button type=\"primary\">Hover me.</c-button>-->\n      <!--</popover>-->\n      <!--<popover placement=\"right\">-->\n        <!--<c-button type=\"primary\">Hover me.</c-button>-->\n      <!--</popover>-->\n      <!--<popover placement=\"top\" title=\"<h2>这是标题</h2>\" content=\"<p>内容</p>\" trigger=\"click\">-->\n        <!--<c-button type=\"primary\">Hover me.</c-button>-->\n      <!--</popover>-->\n      <!--<popover placement=\"bottom\">-->\n        <!--<c-button type=\"primary\">Hover me.</c-button>-->\n      <!--</popover>-->\n    <!--</box>-->\n    <!--<box>-->\n      <!--<treeselect :selectopt=\"option\">-->\n\n      <!--</treeselect>-->\n    <!--</box>-->\n    <!--<box>-->\n      <!--<transfer v-bind:title=\"title\" :sourcedata=\"sourcedata\" :targetdata=\"targetdata\"></transfer>-->\n    <!--</box>-->\n    <box _v-415b7153=\"\">\n      <checkbox disabled=\"\" isselected=\"\" _v-415b7153=\"\">Haha</checkbox>\n      <checkbox _v-415b7153=\"\">Hehe</checkbox>\n      <checkbox _v-415b7153=\"\">Xixi</checkbox>\n      <div class=\"group\" _v-415b7153=\"\">\n        <checkbox :isnotall=\"notall\" :isselected=\"checkall\" @change=\"allEvent\" _v-415b7153=\"\">\n          CheckAll\n        </checkbox>\n      </div>\n      <checkboxgroup :options=\"array\" :values=\"checkList\" _v-415b7153=\"\"></checkboxgroup>\n    </box>\n    <box _v-415b7153=\"\">\n      <dropdown _v-415b7153=\"\">\n        <span slot=\"display\" _v-415b7153=\"\">\n          Hover Me <icon type=\"down\" _v-415b7153=\"\"></icon>\n        </span>\n        <ul _v-415b7153=\"\">\n          <li _v-415b7153=\"\">\n            <a href=\"\" _v-415b7153=\"\">\n              不敢回看\n            </a>\n          </li>\n          <li _v-415b7153=\"\">\n            <a href=\"\" _v-415b7153=\"\">\n              左顾右盼不自然的暗自喜欢\n            </a>\n          </li>\n          <li _v-415b7153=\"\">\n            <a href=\"\" _v-415b7153=\"\">\n              偷偷搭讪总没完地坐立难安\n            </a>\n          </li>\n          <li _v-415b7153=\"\">\n            <a href=\"\" _v-415b7153=\"\">\n              试探说晚安 多空泛又心酸\n            </a>\n          </li>\n        </ul>\n      </dropdown>\n    </box>\n    <backtop _v-415b7153=\"\"></backtop>\n    <box _v-415b7153=\"\">\n      <c-menu _v-415b7153=\"\">\n        <item _v-415b7153=\"\">haha</item>\n        <item _v-415b7153=\"\">hehe</item>\n        <item _v-415b7153=\"\">xixi</item>\n      </c-menu>\n    </box>\n  </div>";

/***/ },
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.submenu = exports.menugroup = exports.menu = exports.item = undefined;
	
	var _item = __webpack_require__(124);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _menu = __webpack_require__(129);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _menugroup = __webpack_require__(134);
	
	var _menugroup2 = _interopRequireDefault(_menugroup);
	
	var _submenu = __webpack_require__(139);
	
	var _submenu2 = _interopRequireDefault(_submenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by jorten on 2017/2/28.
	 */
	exports.item = _item2.default;
	exports.menu = _menu2.default;
	exports.menugroup = _menugroup2.default;
	exports.submenu = _submenu2.default;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(125)
	module.exports = __webpack_require__(127)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(128)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/menu/item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8ecfca4e&file=item.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./item.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8ecfca4e&file=item.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./item.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-menuitem[_v-8ecfca4e] {\n  padding: 10px 0;\n}\n.c-menuitem[_v-8ecfca4e]:hover {\n  color: #1f90e6;\n  cursor: pointer;\n}\n.c-menuitem.clicked[_v-8ecfca4e] {\n  background: #ecf6fd;\n}\n", ""]);
	
	// exports


/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="c-menuitem" :class="isClicked">
	//         <slot></slot>
	//     </div>
	// </template>
	// <style scoped rel="stylesheet/less" lang="less">
	//     @import '../../mixin/mixin.less';
	//     .c-menuitem {
	//         padding: 10px 0;
	//         &:hover {
	//             color: @default;
	//             cursor: pointer;
	//         }
	//         &.clicked {
	//             background: @dropdownlist-hover;
	//         }
	//     }
	// </style>
	// <script type="text/ecmascript-6">
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    components: {}
	};
	// </script>

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-menuitem\" :class=\"isClicked\" _v-8ecfca4e=\"\">\n        <slot _v-8ecfca4e=\"\"></slot>\n    </div>";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(130)
	module.exports = __webpack_require__(132)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(133)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/menu/menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4e6baf25&file=menu.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./menu.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4e6baf25&file=menu.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./menu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-menu[_v-4e6baf25] {\n  border-right: 1px solid #DADADA;\n  width: 240px;\n}\n", ""]);
	
	// exports


/***/ },
/* 132 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="c-menu">
	//         <slot></slot>
	//     </div>
	// </template>
	// <style scoped rel="stylesheet/less" lang="less">
	//     @import '../../mixin/mixin.less';
	//     .c-menu {
	//         border-right: 1px solid @jdefault;
	//         width: 240px;
	//     }
	// </style>
	// <script type="text/ecmascript-6">
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    components: {}
	};
	// </script>

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-menu\" _v-4e6baf25=\"\">\n        <slot _v-4e6baf25=\"\"></slot>\n    </div>";

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(135)
	module.exports = __webpack_require__(137)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(138)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/menu/menugroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(136);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-238e252a&file=menugroup.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./menugroup.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-238e252a&file=menugroup.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./menugroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="c-menugroup">
	//         <slot></slot>
	//     </div>
	// </template>
	// <style scoped rel="stylesheet/less" lang="less">
	
	// </style>
	// <script type="text/ecmascript-6">
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    components: {}
	};
	// </script>

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-menugroup\" _v-238e252a=\"\">\n        <slot _v-238e252a=\"\"></slot>\n    </div>";

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(140)
	module.exports = __webpack_require__(142)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(143)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jorten/github/ChanotUI/components/menu/submenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-767fad6e&file=submenu.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./submenu.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-767fad6e&file=submenu.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./submenu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 142 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="c-submenu">
	//         <slot></slot>
	//     </div>
	// </template>
	// <style scoped rel="stylesheet/less" lang="less">
	
	// </style>
	// <script type="text/ecmascript-6">
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    components: {}
	};
	// </script>

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-submenu\" _v-767fad6e=\"\">\n        <slot _v-767fad6e=\"\"></slot>\n    </div>";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map
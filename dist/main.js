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

	module.exports = __webpack_require__(9);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _main = __webpack_require__(10);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = new Vue(_main2.default).$mount('#app');
	window.app = app;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11)
	module.exports = __webpack_require__(15)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(55)
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-col[_v-415b7153]:nth-of-type(2n) {\n  background: #52bdee;\n}\n.c-col[_v-415b7153]:nth-of-type(2n+1) {\n  background: #1aa1e6;\n}\n.c-row[_v-415b7153] {\n  height: 50px;\n  color: white;\n}\n", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(16);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _spin = __webpack_require__(26);
	
	var _spin2 = _interopRequireDefault(_spin);
	
	var _icon = __webpack_require__(31);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _message = __webpack_require__(32);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _box = __webpack_require__(38);
	
	var _box2 = _interopRequireDefault(_box);
	
	var _grid = __webpack_require__(44);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <style scoped lang="less" rel="stylesheet/less">
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
	// </style>
	// <template>
	//   <div>
	//     <box>
	//       <spin tips="loading..."></spin>
	//       <icon type="success"/>
	//       <icon type="fail"/>
	//       <icon type="prompt"/>
	//       <icon type="warning"/>
	//       <icon type="search"/>
	//     </box>
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
	//     <box>
	//       <row space="between">
	//         <column xs="1" sm="6" md="2" lg="2">
	//           haha
	//         </column>
	//         <column xs="10" sm="6" md="8" lg="10">
	//           hehe
	//         </column>
	//       </row>
	//     </box>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    'c-button': _button2.default,
	    'spin': _spin2.default,
	    'box': _box2.default,
	    'message': _message2.default,
	    'icon': _icon2.default,
	    'row': _grid.row,
	    'column': _grid.column
	  },
	  data: function data() {
	    return {
	      name: 'just-vue',
	      loading: false
	    };
	  },
	
	  computed: {},
	  methods: {}
	};
	// </script>

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17)
	module.exports = __webpack_require__(19)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(25)
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-610020c5&file=button.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-610020c5&file=button.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".j-btn {\n  padding: 6px 16px;\n  background: #F7F7F7;\n  border: 1px solid #DADADA;\n  border-radius: 4px;\n  box-sizing: border-box;\n  -webkit-transition: all .1s linear;\n  transition: all .1s linear;\n  outline: none;\n  font-size: 14px;\n  margin: 10px;\n  position: relative;\n  /*.btnclick-enter-active {*/\n  /*transition: all .2s ease-out;*/\n  /*transform: scaleX(1.2) scaleY(1.4)*/\n  /*}*/\n  /*.btnclick-enter {*/\n  /*transform: scale(1);*/\n  /*}*/\n}\n.j-btn.loading {\n  background: #46a6ea !important;\n  color: white!important;\n}\n.j-btn.loading i {\n  color: white;\n}\n.j-btn.loading:hover {\n  cursor: default;\n  border: 1px solid #DADADA;\n}\n.j-btn:hover {\n  cursor: pointer;\n  color: #1f90e6;\n  background: none;\n  border-color: #1f90e6;\n}\n.j-btn.primary {\n  background-color: #1f90e6;\n  border-color: #1f90e6;\n  color: white;\n}\n.j-btn.primary i {\n  color: white;\n}\n.j-btn.primary:hover {\n  background-color: #46a6ea;\n  border-color: #46a6ea;\n}\n.j-btn.large {\n  padding: 8px 20px;\n}\n.j-btn.small {\n  padding: 4px 12px;\n}\n.j-btn[disabled] {\n  background-color: #F7F7F7;\n  border-color: #DADADA;\n  color: #AAA;\n}\n.j-btn[disabled] i {\n  color: #AAA;\n}\n.j-btn[disabled]:hover {\n  border-color: #DADADA;\n  background-color: #F7F7F7;\n  cursor: not-allowed;\n}\n.j-btn.priclicked {\n  background-color: #1f90e6 !important;\n}\n.j-btn.clicked:after {\n  content: '';\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  position: absolute;\n  border-radius: inherit;\n  box-sizing: border-box;\n  border: 0px solid rgba(30, 152, 229, 0.4);\n  margin: 0;\n  -webkit-animation: pray .2s linear forwards;\n          animation: pray .2s linear forwards;\n}\n.j-btn.shape-circle {\n  padding: 6px;\n  border-radius: 50%;\n}\n.j-btn.shape-circle.large {\n  padding: 8px;\n}\n.j-btn.shape-circle.small {\n  padding: 4px;\n}\n@-webkit-keyframes pray {\n  to {\n    left: -6px;\n    top: -6px;\n    right: -6px;\n    bottom: -6px;\n    border-width: 6px;\n    opacity: 0;\n  }\n}\n@keyframes pray {\n  to {\n    left: -6px;\n    top: -6px;\n    right: -6px;\n    bottom: -6px;\n    border-width: 6px;\n    opacity: 0;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _icon = __webpack_require__(20);
	
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
	// <style lang="less" type="text/less" rel="stylesheet/less">
	//     @jblue: #1f90e6;
	//     @jbluelight: #46a6ea;
	//     @jblueborder: rgba(30, 152, 229, 0.4);
	//     @jgrey: #F7F7F7;
	//     @jdefault: #DADADA;
	//     .j-btn {
	//         padding: 6px 16px;
	//         background: @jgrey;
	//         border: 1px solid @jdefault;
	//         border-radius: 4px;
	//         box-sizing: border-box;
	//         transition: all .1s linear;
	//         outline: none;
	//         font-size: 14px;
	//         margin: 10px;
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
	//                 border: 0px solid @jblueborder;
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21)
	module.exports = __webpack_require__(23)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(24)
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".jicon {\n  display: inline-block;\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n.jicon-forward {\n  float: right;\n  margin-top: 1px;\n  margin-left: 1px;\n}\n.jicon-forward:before {\n  content: \"\\E601\";\n}\n.jicon-prompt {\n  color: #1f90e6;\n}\n.jicon-prompt:before {\n  content: \"\\E620\";\n}\n.jicon-success {\n  color: #89ce6d;\n}\n.jicon-success:before {\n  content: \"\\E63A\";\n}\n.jicon-fail {\n  color: #fc561f;\n}\n.jicon-fail:before {\n  content: \"\\E613\";\n}\n.jicon-warning {\n  color: #fda929;\n}\n.jicon-warning:before {\n  content: \"\\E6D4\";\n}\n.jicon-search:before {\n  content: \"\\E600\";\n}\n.jicon-backward:before {\n  content: \"\\E60A\";\n}\n.jicon-loading {\n  color: #1f90e6;\n  -webkit-animation: loading .5s linear infinite;\n          animation: loading .5s linear infinite;\n}\n.jicon-loading:before {\n  content: '\\E637';\n}\n.jicon-download:before {\n  content: '\\E621';\n}\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@font-face {\n  font-family: 'iconfont';\n  /* project id 191439 */\n  src: url('//at.alicdn.com/t/font_bc6z3e1kztpm0a4i.eot');\n  src: url('//at.alicdn.com/t/font_bc6z3e1kztpm0a4i.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_bc6z3e1kztpm0a4i.woff') format('woff'), url('//at.alicdn.com/t/font_bc6z3e1kztpm0a4i.ttf') format('truetype'), url('//at.alicdn.com/t/font_bc6z3e1kztpm0a4i.svg#iconfont') format('svg');\n}\n", ""]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <i class="jicon" :class="'jicon-' + type"></i>
	// </template>
	// <style lang="less" rel="stylesheet/less">
	//     @default: #1f90e6;
	//     @success: #89ce6d;
	//     @fail: #fc561f;
	//     @warning: #fda929;
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
	//         src: url('//at.alicdn.com/t/font_bc6z3e1kztpm0a4i.eot');
	//         src: url('//at.alicdn.com/t/font_bc6z3e1kztpm0a4i.eot?#iefix') format('embedded-opentype'),
	//         url('//at.alicdn.com/t/font_bc6z3e1kztpm0a4i.woff') format('woff'),
	//         url('//at.alicdn.com/t/font_bc6z3e1kztpm0a4i.ttf') format('truetype'),
	//         url('//at.alicdn.com/t/font_bc6z3e1kztpm0a4i.svg#iconfont') format('svg');
	//     }
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    components: {},
	    props: {
	        type: String
	    }
	};
	// </script>

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<i class=\"jicon\" :class=\"'jicon-' + type\"></i>";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<button\n        class=\"j-btn\"\n        :class=\"[type, size, btnShape, { loading: loading }]\"\n        :disabled=\"disabled\"\n        @click=\"clickEvent\"\n    >\n        <!--<transition name=\"btnclick\" v-on:after-enter=\"enterCancelled\">-->\n            <!--<p v-if=\"show\" class=\"clicked\"></p>-->\n        <!--</transition>-->\n        <!--<i v-if=\"icon\" class=\"jicon\" :class=\"'jicon-' + icon\"></i>-->\n        <Icon v-if=\"exists\" :type=\"iconType\"></Icon>\n        <slot></slot>\n    </button>";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)
	module.exports = __webpack_require__(29)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(30)
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4fe71505&file=spin.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./spin.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4fe71505&file=spin.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./spin.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".spin {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-animation: jrotate 3s infinite linear;\n          animation: jrotate 3s infinite linear;\n  margin: auto;\n}\n.spin .dot {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #3ec8f5;\n  opacity: 0.3;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  -webkit-animation: jopacity 0.8s infinite linear alternate;\n          animation: jopacity 0.8s infinite linear alternate;\n}\n.spin .dot:nth-of-type(1) {\n  left: 0;\n  top: 0;\n}\n.spin .dot:nth-of-type(2) {\n  right: 0;\n  top: 0;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.spin .dot:nth-of-type(3) {\n  right: 0;\n  bottom: 0;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.spin .dot:nth-of-type(4) {\n  left: 0;\n  bottom: 0;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.jsay {\n  text-align: center;\n  margin-top: 10px;\n}\n@-webkit-keyframes jopacity {\n  0% {\n    opacity: .3;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes jopacity {\n  0% {\n    opacity: .3;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes jrotate {\n  0% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  100% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n@keyframes jrotate {\n  0% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  100% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @jblue: #3ec8f5;
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
	//             background: @jblue;
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
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jspin-container\">\n        <div class=\"spin\">\n            <i class=\"dot\"></i>\n            <i class=\"dot\"></i>\n            <i class=\"dot\"></i>\n            <i class=\"dot\"></i>\n        </div>\n        <div class=\"jsay\">\n            <span>{{ tips }}</span>\n        </div>\n    </div>";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _icon = __webpack_require__(20);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _icon2.default; /**
	                                   * Created by jorten on 2016/12/4.
	                                   */

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _message = __webpack_require__(33);
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34)
	module.exports = __webpack_require__(36)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(37)
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1e199ad6&file=message.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./message.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1e199ad6&file=message.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./message.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".j-message {\n  padding: 8px 16px;\n  border: 1px solid #e9e9e9;\n  border-radius: 4px;\n  display: inline-block;\n  position: fixed;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n  top: 50px;\n  font-size: 12px;\n  color: #666;\n  box-shadow: 2px 2px 2px #e9e9e9, -1px 0px 1px #e9e9e9;\n  -webkit-animation: messagedisplay .2s linear;\n          animation: messagedisplay .2s linear;\n}\n.j-message .message {\n  margin-left: 5px;\n}\n.j-end {\n  -webkit-animation: messageend .2s linear;\n          animation: messageend .2s linear;\n}\n@-webkit-keyframes messageend {\n  0% {\n    opacity: 1;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, -20px, 0);\n            transform: translate3d(-50%, -20px, 0);\n  }\n}\n@keyframes messageend {\n  0% {\n    opacity: 1;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, -20px, 0);\n            transform: translate3d(-50%, -20px, 0);\n  }\n}\n@-webkit-keyframes messagedisplay {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, -20px, 0);\n            transform: translate3d(-50%, -20px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes messagedisplay {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-50%, -20px, 0);\n            transform: translate3d(-50%, -20px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _icon = __webpack_require__(20);
	
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
	// <style lang="less" rel="stylesheet/less">
	//     @border: #e9e9e9;
	//     @messagefontcolor: #666;
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
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"j-message\" v-if=\"show\">\n        <icon :type=\"newType\"></icon>\n        <span class=\"message\">\n            <slot></slot>\n        </span>\n    </div>";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _box = __webpack_require__(39);
	
	var _box2 = _interopRequireDefault(_box);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _box2.default; /**
	                                  * Created by jorten on 2016/12/7.
	                                  */

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40)
	module.exports = __webpack_require__(42)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(43)
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-36efc21d&file=box.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./box.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-36efc21d&file=box.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./box.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".j-box {\n  padding: 50px 30px;\n  box-sizing: border-box;\n  width: 500px;\n  height: 200px;\n  margin: 20px;\n  border: 1px solid #e9e9e9;\n  border-radius: 10px;\n}\n", ""]);
	
	// exports


/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less" rel="stylesheet/less">
	//     .j-box {
	//         @border: #e9e9e9;
	//         padding: 50px 30px;
	//         box-sizing: border-box;
	//         width: 500px;
	//         height: 200px;
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
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"j-box\">\n        <slot></slot>\n    </div>";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.column = exports.row = undefined;
	
	var _row = __webpack_require__(45);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _column = __webpack_require__(50);
	
	var _column2 = _interopRequireDefault(_column);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by jorten on 2016/12/7.
	 */
	exports.row = _row2.default;
	exports.column = _column2.default;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)
	module.exports = __webpack_require__(48)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(49)
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n", ""]);
	
	// exports


/***/ },
/* 48 */
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
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-row\" :style=\"justifyContent\">\n        <slot></slot>\n    </div>";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51)
	module.exports = __webpack_require__(53)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(54)
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6efc49d5&file=column.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./column.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6efc49d5&file=column.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./column.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".c-col {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  word-break: break-all;\n  overflow: hidden;\n}\n.c-col.c-col-12 {\n  width: 100%;\n}\n.c-col.c-col-11 {\n  width: 91.66666667%;\n}\n.c-col.c-col-10 {\n  width: 83.33333333%;\n}\n.c-col.c-col-9 {\n  width: 75%;\n}\n.c-col.c-col-8 {\n  width: 66.66666667%;\n}\n.c-col.c-col-7 {\n  width: 58.33333333%;\n}\n.c-col.c-col-6 {\n  width: 50%;\n}\n.c-col.c-col-5 {\n  width: 41.66666667%;\n}\n.c-col.c-col-4 {\n  width: 33.33333333%;\n}\n.c-col.c-col-3 {\n  width: 25%;\n}\n.c-col.c-col-2 {\n  width: 16.66666667%;\n}\n.c-col.c-col-1 {\n  width: 8.33333333%;\n}\n@media (max-width: 767px) {\n  .c-col.c-xs-12 {\n    width: 100%;\n  }\n  .c-col.c-xs-11 {\n    width: 91.66666667%;\n  }\n  .c-col.c-xs-10 {\n    width: 83.33333333%;\n  }\n  .c-col.c-xs-9 {\n    width: 75%;\n  }\n  .c-col.c-xs-8 {\n    width: 66.66666667%;\n  }\n  .c-col.c-xs-7 {\n    width: 58.33333333%;\n  }\n  .c-col.c-xs-6 {\n    width: 50%;\n  }\n  .c-col.c-xs-5 {\n    width: 41.66666667%;\n  }\n  .c-col.c-xs-4 {\n    width: 33.33333333%;\n  }\n  .c-col.c-xs-3 {\n    width: 25%;\n  }\n  .c-col.c-xs-2 {\n    width: 16.66666667%;\n  }\n  .c-col.c-xs-1 {\n    width: 8.33333333%;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .c-col.c-sm-12 {\n    width: 100%;\n  }\n  .c-col.c-sm-11 {\n    width: 91.66666667%;\n  }\n  .c-col.c-sm-10 {\n    width: 83.33333333%;\n  }\n  .c-col.c-sm-9 {\n    width: 75%;\n  }\n  .c-col.c-sm-8 {\n    width: 66.66666667%;\n  }\n  .c-col.c-sm-7 {\n    width: 58.33333333%;\n  }\n  .c-col.c-sm-6 {\n    width: 50%;\n  }\n  .c-col.c-sm-5 {\n    width: 41.66666667%;\n  }\n  .c-col.c-sm-4 {\n    width: 33.33333333%;\n  }\n  .c-col.c-sm-3 {\n    width: 25%;\n  }\n  .c-col.c-sm-2 {\n    width: 16.66666667%;\n  }\n  .c-col.c-sm-1 {\n    width: 8.33333333%;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .c-col.c-md-12 {\n    width: 100%;\n  }\n  .c-col.c-md-11 {\n    width: 91.66666667%;\n  }\n  .c-col.c-md-10 {\n    width: 83.33333333%;\n  }\n  .c-col.c-md-9 {\n    width: 75%;\n  }\n  .c-col.c-md-8 {\n    width: 66.66666667%;\n  }\n  .c-col.c-md-7 {\n    width: 58.33333333%;\n  }\n  .c-col.c-md-6 {\n    width: 50%;\n  }\n  .c-col.c-md-5 {\n    width: 41.66666667%;\n  }\n  .c-col.c-md-4 {\n    width: 33.33333333%;\n  }\n  .c-col.c-md-3 {\n    width: 25%;\n  }\n  .c-col.c-md-2 {\n    width: 16.66666667%;\n  }\n  .c-col.c-md-1 {\n    width: 8.33333333%;\n  }\n}\n@media (min-width: 1200px) {\n  .c-col.c-lg-12 {\n    width: 100%;\n  }\n  .c-col.c-lg-11 {\n    width: 91.66666667%;\n  }\n  .c-col.c-lg-10 {\n    width: 83.33333333%;\n  }\n  .c-col.c-lg-9 {\n    width: 75%;\n  }\n  .c-col.c-lg-8 {\n    width: 66.66666667%;\n  }\n  .c-col.c-lg-7 {\n    width: 58.33333333%;\n  }\n  .c-col.c-lg-6 {\n    width: 50%;\n  }\n  .c-col.c-lg-5 {\n    width: 41.66666667%;\n  }\n  .c-col.c-lg-4 {\n    width: 33.33333333%;\n  }\n  .c-col.c-lg-3 {\n    width: 25%;\n  }\n  .c-col.c-lg-2 {\n    width: 16.66666667%;\n  }\n  .c-col.c-lg-1 {\n    width: 8.33333333%;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 53 */
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
	// <style lang="less" rel="stylesheet/less">
	//     .c-col {
	//         .c-cols(@n, @i: @n) when (@i > 0) {
	//             &.c-col-@{i} {
	//                 width: (@i * 100% / @n);
	//             };
	//             .c-cols(@n, (@i - 1));
	//         }
	//         .c-cols(12);
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
	//         }
	//         @media(min-width: 768px) and (max-width: 991px) {
	//             .c-cols(@n, @i: @n) when (@i > 0) {
	//                 &.c-sm-@{i} {
	//                     width: (@i * 100% / @n)
	//                 }
	//                 .c-cols(@n, (@i - 1));
	//             }
	//             .c-cols(12);
	//         }
	//         @media(min-width: 992px) and (max-width: 1199px) {
	//             .c-cols(@n, @i: @n) when (@i > 0) {
	//                 &.c-md-@{i} {
	//                     width: (@i * 100% / @n)
	//                 }
	//                 .c-cols(@n, (@i - 1));
	//             }
	//             .c-cols(12);
	//         }
	//         @media(min-width: 1200px) {
	//             .c-cols(@n, @i: @n) when (@i > 0) {
	//                 &.c-lg-@{i} {
	//                     width: (@i * 100% / @n)
	//                 }
	//                 .c-cols(@n, (@i - 1));
	//             }
	//             .c-cols(12);
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
/* 54 */
/***/ function(module, exports) {

	module.exports = "<div class=\"c-col\" :class=\"[cspan, cxs, csm, cmd, clg]\">\n        <slot></slot>\n    </div>";

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div _v-415b7153=\"\">\n    <box _v-415b7153=\"\">\n      <spin tips=\"loading...\" _v-415b7153=\"\"></spin>\n      <icon type=\"success\" _v-415b7153=\"\">\n      <icon type=\"fail\" _v-415b7153=\"\">\n      <icon type=\"prompt\" _v-415b7153=\"\">\n      <icon type=\"warning\" _v-415b7153=\"\">\n      <icon type=\"search\" _v-415b7153=\"\">\n    </icon></icon></icon></icon></icon></box>\n    <box _v-415b7153=\"\">\n      <c-button size=\"large\" _v-415b7153=\"\">large</c-button>\n      <c-button type=\"primary\" _v-415b7153=\"\">default</c-button>\n      <c-button size=\"small\" type=\"primary\" _v-415b7153=\"\">small</c-button>\n      <c-button type=\"primary\" size=\"large\" icon=\"search\" shape=\"circle\" _v-415b7153=\"\"></c-button>\n      <c-button type=\"primary\" icon=\"search\" shape=\"circle\" _v-415b7153=\"\"></c-button>\n      <c-button type=\"primary\" icon=\"search\" shape=\"circle\" size=\"small\" _v-415b7153=\"\"></c-button>\n      <c-button type=\"primary\" icon=\"search\" size=\"small\" _v-415b7153=\"\">click me</c-button>\n      <c-button icon=\"forward\" size=\"small\" type=\"primary\" _v-415b7153=\"\">Go froward</c-button>\n      <c-button icon=\"download\" size=\"small\" type=\"primary\" _v-415b7153=\"\">download</c-button>\n      <c-button :loading=\"loading\" type=\"primary\" @click=\"loading = true\" _v-415b7153=\"\">我收起看不见的结果</c-button>\n    </box>\n    <box _v-415b7153=\"\">\n      <row space=\"between\" _v-415b7153=\"\">\n        <column xs=\"1\" sm=\"6\" md=\"2\" lg=\"2\" _v-415b7153=\"\">\n          haha\n        </column>\n        <column xs=\"10\" sm=\"6\" md=\"8\" lg=\"10\" _v-415b7153=\"\">\n          hehe\n        </column>\n      </row>\n    </box>\n  </div>";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map
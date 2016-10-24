/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _analytics = __webpack_require__(5);

	var _analytics2 = _interopRequireDefault(_analytics);

	var _archives = __webpack_require__(9);

	var _archives2 = _interopRequireDefault(_archives);

	var _businessman = __webpack_require__(10);

	var _businessman2 = _interopRequireDefault(_businessman);

	var _businessmen = __webpack_require__(11);

	var _businessmen2 = _interopRequireDefault(_businessmen);

	var _certificate = __webpack_require__(12);

	var _certificate2 = _interopRequireDefault(_certificate);

	var _chat = __webpack_require__(13);

	var _chat2 = _interopRequireDefault(_chat);

	var _contract = __webpack_require__(14);

	var _contract2 = _interopRequireDefault(_contract);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log('demo complete');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(6);
	var image = "<symbol viewBox=\"0 0 508.4 508.4\" id=\"analytics\" ><circle cx=\"254\" cy=\"254\" r=\"254\" fill=\"#54c0eb\"/><path d=\"M473.2 382.4c22-37.6 34.8-81.6 34.8-128.4C508 113.6 394.4 0 254 0c-43.6 0-84.8 11.2-120.8 30.4V382h340v.4z\" fill=\"#fff\"/><path d=\"M254 0c-32.8 0-64 6.4-92.8 17.6v336.8H487.6c13.2-30.8 20.8-64.8 20.8-100.4C508 113.6 394.4 0 254 0z\" fill=\"#e6e9ee\"/><g fill=\"#f1543f\"><path d=\"M226.4 214.4l17.2 16.4c-2.4 1.2-4.4 3.2-5.6 5.6l-12.8-12c.8-3.2 1.2-6.4 1.2-10zM300 171.2l-38.8 62.4c-1.6-2-4-3.6-6.8-4.4l39.6-62.8c1.2 2.4 3.2 4 6 4.8zM360.4 206.4c-2.4 1.2-4.4 3.2-5.6 5.6l-42-42.4c2-1.6 4-3.6 4.8-6.4l42.8 43.2zM422.8 118.4l-46.4 90c-2-2-4.4-3.2-7.2-3.6l46.4-90 7.2 3.6z\"/></g><g fill=\"#ff7058\"><circle cx=\"419.2\" cy=\"120\" r=\"14\"/><circle cx=\"366.8\" cy=\"218.4\" r=\"14\"/><circle cx=\"304.8\" cy=\"158.4\" r=\"14\"/><circle cx=\"250.4\" cy=\"242.8\" r=\"14\"/></g><g fill=\"#2c9984\"><path d=\"M243.6 115.6l77.6 147.2c-2.8.4-5.2 2-7.2 3.6l-74-140.8-35.2 14c-2-2.4-3.6-4.4-5.6-6.4l44.4-17.6zM361.6 144.4l-30.4 120c-2-1.2-4.4-2-7.2-2h-.4l30.4-120c2 1.2 4.4 2 7.2 2h.4zM440.4 202.8c-2.4 1.2-4.4 3.2-5.6 5.6l-67.2-65.6c2.4-1.2 4.4-3.2 5.6-5.6l67.2 65.6z\"/></g><g fill=\"#4cdbc4\"><circle cx=\"447.2\" cy=\"214.8\" r=\"14\"/><circle cx=\"360.8\" cy=\"130.4\" r=\"14\"/><circle cx=\"324\" cy=\"276.4\" r=\"14\"/><circle cx=\"242\" cy=\"120.8\" r=\"14\"/></g><g fill=\"#e6e9ee\"><path d=\"M66.8 425.6c1.2 1.2 2.4 2.8 3.6 4-1.2-1.6-2.4-2.8-3.6-4zM201.6 314.8c0 29.2-2 97.2-29.2 180-24.8-8.4-48-20.4-68.8-35.6-17.2-66.4-18.4-119.2-18.4-144l58-28 58.4 27.6z\"/></g><path d=\"M143.6 356h-.4c-54-26.4-47.6-60.4-47.6-60.4 0-.4 0-1.2.4-1.6 13.2 16 30 26.8 48 26.8s34.4-10.8 48-26.8c0 .4.4 1.2.4 1.6-.8 0 5.2 34-48.8 60.4z\" fill=\"#f9b54c\"/><path fill=\"#f1543f\" d=\"M164.4 356h-42l8.4 23.6H156z\"/><path d=\"M172.4 494.4L156 379.6h-25.6L118 468.4c16.8 10.8 35.2 19.6 54.4 26z\" fill=\"#ff7058\"/><g fill=\"#2b3b4e\"><path d=\"M104 458.8c-17.2-66.4-18.4-119.2-18.4-144l-68 32.4c18 44.8 48 83.6 86.4 111.6zM103.6 458.8c-.4 0-.4-.4-.8-.4.4 0 .8 0 .8.4z\"/></g><path d=\"M95.6 295.6s-6 34 48 60.4c0 0-40.4 3.2-52 40.8-.8 1.6-22.8-81.2 4-101.2z\" fill=\"#fff\"/><path d=\"M223.6 203.6c0 52.4-36 117.2-80 117.2-44.4 0-80-64.8-80-117.2s36-73.2 80-73.2c44 .4 80 20.8 80 73.2z\" fill=\"#ffd05b\"/><path d=\"M115.6 119.6s64.8-26 98 32.8c35.2 62.8-9.2 130.8-18 136.4 0 0 2.4-10.8 9.2-31.6 0 0 16-46.4-32-53.6 0 0-46.4-6.4-49.6-16.4 0 0 3.2 16.8 24 20 0 0-47.6-1.2-62.4-18 0 0-20.4 66.8 9.2 102.8 0 0-50.8-40.8-44.8-104 .4.4-2.4-86 66.4-68.4z\" fill=\"#324a5e\"/><path d=\"M298.4 361.2l-96.8-46.4c0 29.2-2 97.2-29.2 180 25.6 8.8 52.8 13.6 81.6 13.6 31.6 0 62-6 90-16.4l-45.6-130.8z\" fill=\"#2b3b4e\"/><path d=\"M410.4 327.2c-4.4-.4-8 1.6-8.4 5.6V330c.4-4.4-3.2-6.4-7.6-6.8-4.4-.4-8 1.6-8.4 5.6V326c.4-4.4-3.2-6.4-7.6-6.8-2 0-4 .4-5.6 1.2-1.6.8-2.4 2.4-2.4 4.8l2-38.4c.4-4.4-3.2-8-7.2-8.4-4.4-.4-8.4 3.2-8.4 7.6l-2.4 56c-3.2-8-7.6-15.2-13.6-18.8-3.2-2-7.2.8-8 4.4-.4 1.6-.4 3.6.4 6 0 0 7.6 7.6 6 24-2 16 16.8 35.2 16.8 35.2l51.6 2.8 3.2-10.4c3.6-12 5.6-24.8 6.4-37.6l.8-13.6c0-4.8-3.2-6.8-7.6-6.8z\" fill=\"#f9b54c\"/><path d=\"M334.8 494.8c28.8-9.6 55.2-24 78-42.8l6-57.6-72.8-7.6-11.2 108z\" fill=\"#2b3b4e\"/><path d=\"M191.6 295.6s6 34-48 60.4c0 0 40.4 3.2 52 40.8.4 1.6 22.4-81.2-4-101.2z\" fill=\"#fff\"/></symbol>";
	module.exports = sprite.add(image, "analytics");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Sprite = __webpack_require__(7);
	var globalSprite = new Sprite();

	if (document.body) {
	  globalSprite.elem = globalSprite.render(document.body);
	} else {
	  document.addEventListener('DOMContentLoaded', function () {
	    globalSprite.elem = globalSprite.render(document.body);
	  }, false);
	}

	module.exports = globalSprite;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Sniffr = __webpack_require__(8);

	/**
	 * List of SVG attributes to fix url target in them
	 * @type {string[]}
	 */
	var fixAttributes = [
	  'clipPath',
	  'colorProfile',
	  'src',
	  'cursor',
	  'fill',
	  'filter',
	  'marker',
	  'markerStart',
	  'markerMid',
	  'markerEnd',
	  'mask',
	  'stroke'
	];

	/**
	 * Query to find'em
	 * @type {string}
	 */
	var fixAttributesQuery = '[' + fixAttributes.join('],[') + ']';
	/**
	 * @type {RegExp}
	 */
	var URI_FUNC_REGEX = /^url\((.*)\)$/;

	/**
	 * Convert array-like to array
	 * @param {Object} arrayLike
	 * @returns {Array.<*>}
	 */
	function arrayFrom(arrayLike) {
	  return Array.prototype.slice.call(arrayLike, 0);
	}

	/**
	 * Handles forbidden symbols which cannot be directly used inside attributes with url(...) content.
	 * Adds leading slash for the brackets
	 * @param {string} url
	 * @return {string} encoded url
	 */
	function encodeUrlForEmbedding(url) {
	  return url.replace(/\(|\)/g, "\\$&");
	}

	/**
	 * Replaces prefix in `url()` functions
	 * @param {Element} svg
	 * @param {string} currentUrlPrefix
	 * @param {string} newUrlPrefix
	 */
	function baseUrlWorkAround(svg, currentUrlPrefix, newUrlPrefix) {
	  var nodes = svg.querySelectorAll(fixAttributesQuery);

	  if (!nodes) {
	    return;
	  }

	  arrayFrom(nodes).forEach(function (node) {
	    if (!node.attributes) {
	      return;
	    }

	    arrayFrom(node.attributes).forEach(function (attribute) {
	      var attributeName = attribute.localName.toLowerCase();

	      if (fixAttributes.indexOf(attributeName) !== -1) {
	        var match = URI_FUNC_REGEX.exec(node.getAttribute(attributeName));

	        // Do not touch urls with unexpected prefix
	        if (match && match[1].indexOf(currentUrlPrefix) === 0) {
	          var referenceUrl = encodeUrlForEmbedding(newUrlPrefix + match[1].split(currentUrlPrefix)[1]);
	          node.setAttribute(attributeName, 'url(' + referenceUrl + ')');
	        }
	      }
	    });
	  });
	}

	/**
	 * Because of Firefox bug #353575 gradients and patterns don't work if they are within a symbol.
	 * To workaround this we move the gradient definition outside the symbol element
	 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
	 * @param {Element} svg
	 */
	var FirefoxSymbolBugWorkaround = function (svg) {
	  var defs = svg.querySelector('defs');

	  var moveToDefsElems = svg.querySelectorAll('symbol linearGradient, symbol radialGradient, symbol pattern');
	  for (var i = 0, len = moveToDefsElems.length; i < len; i++) {
	    defs.appendChild(moveToDefsElems[i]);
	  }
	};

	/**
	 * @type {string}
	 */
	var DEFAULT_URI_PREFIX = '#';

	/**
	 * @type {string}
	 */
	var xLinkHref = 'xlink:href';
	/**
	 * @type {string}
	 */
	var xLinkNS = 'http://www.w3.org/1999/xlink';
	/**
	 * @type {string}
	 */
	var svgOpening = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + xLinkNS + '"';
	/**
	 * @type {string}
	 */
	var svgClosing = '</svg>';
	/**
	 * @type {string}
	 */
	var contentPlaceHolder = '{content}';

	/**
	 * Representation of SVG sprite
	 * @constructor
	 */
	function Sprite() {
	  var baseElement = document.getElementsByTagName('base')[0];
	  var currentUrl = window.location.href.split('#')[0];
	  var baseUrl = baseElement && baseElement.href;
	  this.urlPrefix = baseUrl && baseUrl !== currentUrl ? currentUrl + DEFAULT_URI_PREFIX : DEFAULT_URI_PREFIX;

	  var sniffr = new Sniffr();
	  sniffr.sniff();
	  this.browser = sniffr.browser;
	  this.content = [];

	  if (this.browser.name !== 'ie' && baseUrl) {
	    window.addEventListener('spriteLoaderLocationUpdated', function (e) {
	      var currentPrefix = this.urlPrefix;
	      var newUrlPrefix = e.detail.newUrl.split(DEFAULT_URI_PREFIX)[0] + DEFAULT_URI_PREFIX;
	      baseUrlWorkAround(this.svg, currentPrefix, newUrlPrefix);
	      this.urlPrefix = newUrlPrefix;

	      if (this.browser.name === 'firefox' || this.browser.name === 'edge' || this.browser.name === 'chrome' && this.browser.version[0] >= 49) {
	        var nodes = arrayFrom(document.querySelectorAll('use[*|href]'));
	        nodes.forEach(function (node) {
	          var href = node.getAttribute(xLinkHref);
	          if (href && href.indexOf(currentPrefix) === 0) {
	            node.setAttributeNS(xLinkNS, xLinkHref, newUrlPrefix + href.split(DEFAULT_URI_PREFIX)[1]);
	          }
	        });
	      }
	    }.bind(this));
	  }
	}

	Sprite.styles = ['position:absolute', 'width:0', 'height:0', 'visibility:hidden'];

	Sprite.spriteTemplate = function(){ return svgOpening + ' style="'+ Sprite.styles.join(';') +'"><defs>' + contentPlaceHolder + '</defs>' + svgClosing; }
	Sprite.symbolTemplate = function() { return svgOpening + '>' + contentPlaceHolder + svgClosing; }

	/**
	 * @type {Array<String>}
	 */
	Sprite.prototype.content = null;

	/**
	 * @param {String} content
	 * @param {String} id
	 */
	Sprite.prototype.add = function (content, id) {
	  if (this.svg) {
	    this.appendSymbol(content);
	  }

	  this.content.push(content);

	  return DEFAULT_URI_PREFIX + id;
	};

	/**
	 *
	 * @param content
	 * @param template
	 * @returns {Element}
	 */
	Sprite.prototype.wrapSVG = function (content, template) {
	  var svgString = template.replace(contentPlaceHolder, content);

	  var svg = new DOMParser().parseFromString(svgString, 'image/svg+xml').documentElement;

	  /**
	   * Fix for browser (IE, maybe other too) which are throwing 'WrongDocumentError'
	   * if you insert an element which is not part of the document
	   * @see http://stackoverflow.com/questions/7981100/how-do-i-dynamically-insert-an-svg-image-into-html#7986519
	   */
	  if (document.importNode) {
	    svg = document.importNode(svg, true);
	  }

	  if (this.browser.name !== 'ie' && this.urlPrefix) {
	    baseUrlWorkAround(svg, DEFAULT_URI_PREFIX, this.urlPrefix);
	  }

	  return svg;
	};

	Sprite.prototype.appendSymbol = function (content) {
	  var symbol = this.wrapSVG(content, Sprite.symbolTemplate()).childNodes[0];

	  this.svg.querySelector('defs').appendChild(symbol);
	  if (this.browser.name === 'firefox') {
	    FirefoxSymbolBugWorkaround(this.svg);
	  }
	};

	/**
	 * @returns {String}
	 */
	Sprite.prototype.toString = function () {
	  var wrapper = document.createElement('div');
	  wrapper.appendChild(this.render());
	  return wrapper.innerHTML;
	};

	/**
	 * @param {HTMLElement} [target]
	 * @param {Boolean} [prepend=true]
	 * @returns {HTMLElement} Rendered sprite node
	 */
	Sprite.prototype.render = function (target, prepend) {
	  target = target || null;
	  prepend = typeof prepend === 'boolean' ? prepend : true;

	  var svg = this.wrapSVG(this.content.join(''), Sprite.spriteTemplate());

	  if (this.browser.name === 'firefox') {
	    FirefoxSymbolBugWorkaround(svg);
	  }

	  if (target) {
	    if (prepend && target.childNodes[0]) {
	      target.insertBefore(svg, target.childNodes[0]);
	    } else {
	      target.appendChild(svg);
	    }
	  }

	  this.svg = svg;

	  return svg;
	};

	module.exports = Sprite;


/***/ },
/* 8 */
/***/ function(module, exports) {

	(function(host) {

	  var properties = {
	    browser: [
	      [/msie ([\.\_\d]+)/, "ie"],
	      [/trident\/.*?rv:([\.\_\d]+)/, "ie"],
	      [/firefox\/([\.\_\d]+)/, "firefox"],
	      [/chrome\/([\.\_\d]+)/, "chrome"],
	      [/version\/([\.\_\d]+).*?safari/, "safari"],
	      [/mobile safari ([\.\_\d]+)/, "safari"],
	      [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"],
	      [/crios\/([\.\_\d]+).*?safari/, "chrome"],
	      [/opera/, "opera"],
	      [/opera\/([\.\_\d]+)/, "opera"],
	      [/opera ([\.\_\d]+)/, "opera"],
	      [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"],
	      [/opios\/([a-z\.\_\d]+)/, "opera"],
	      [/blackberry/, "blackberry"],
	      [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"],
	      [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"],
	      [/rim.*?version\/([\.\_\d]+)/, "blackberry"],
	      [/iceweasel\/([\.\_\d]+)/, "iceweasel"],
	      [/edge\/([\.\d]+)/, "edge"]
	    ],
	    os: [
	      [/linux ()([a-z\.\_\d]+)/, "linux"],
	      [/mac os x/, "macos"],
	      [/mac os x.*?([\.\_\d]+)/, "macos"],
	      [/os ([\.\_\d]+) like mac os/, "ios"],
	      [/openbsd ()([a-z\.\_\d]+)/, "openbsd"],
	      [/android/, "android"],
	      [/android ([a-z\.\_\d]+);/, "android"],
	      [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"],
	      [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"],
	      [/windows phone.*?([\.\_\d]+)/, "windows.phone"],
	      [/windows mobile/, "windows.mobile"],
	      [/blackberry/, "blackberryos"],
	      [/bb\d+/, "blackberryos"],
	      [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]
	    ],
	    device: [
	      [/ipad/, "ipad"],
	      [/iphone/, "iphone"],
	      [/lumia/, "lumia"],
	      [/htc/, "htc"],
	      [/nexus/, "nexus"],
	      [/galaxy nexus/, "galaxy.nexus"],
	      [/nokia/, "nokia"],
	      [/ gt\-/, "galaxy"],
	      [/ sm\-/, "galaxy"],
	      [/xbox/, "xbox"],
	      [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]
	    ]
	  };

	  var UNKNOWN = "Unknown";

	  var propertyNames = Object.keys(properties);

	  function Sniffr() {
	    var self = this;

	    propertyNames.forEach(function(propertyName) {
	      self[propertyName] = {
	        name: UNKNOWN,
	        version: [],
	        versionString: UNKNOWN
	      };
	    });
	  }

	  function determineProperty(self, propertyName, userAgent) {
	    properties[propertyName].forEach(function(propertyMatcher) {
	      var propertyRegex = propertyMatcher[0];
	      var propertyValue = propertyMatcher[1];

	      var match = userAgent.match(propertyRegex);

	      if (match) {
	        self[propertyName].name = propertyValue;

	        if (match[2]) {
	          self[propertyName].versionString = match[2];
	          self[propertyName].version = [];
	        } else if (match[1]) {
	          self[propertyName].versionString = match[1].replace(/_/g, ".");
	          self[propertyName].version = parseVersion(match[1]);
	        } else {
	          self[propertyName].versionString = UNKNOWN;
	          self[propertyName].version = [];
	        }
	      }
	    });
	  }

	  function parseVersion(versionString) {
	    return versionString.split(/[\._]/).map(function(versionPart) {
	      return parseInt(versionPart);
	    });
	  }

	  Sniffr.prototype.sniff = function(userAgentString) {
	    var self = this;
	    var userAgent = (userAgentString || navigator.userAgent || "").toLowerCase();

	    propertyNames.forEach(function(propertyName) {
	      determineProperty(self, propertyName, userAgent);
	    });
	  };


	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Sniffr;
	  } else {
	    host.Sniffr = new Sniffr();
	    host.Sniffr.sniff(navigator.userAgent);
	  }
	})(this);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(6);
	var image = "<symbol viewBox=\"0 0 508 508\" id=\"archives\" ><circle cx=\"254\" cy=\"254\" r=\"254\" fill=\"#90dfaa\"/><g fill=\"#fff\"><path d=\"M127.2 402H70.4c-5.6 0-10-4.4-10-10V116c0-5.6 4.4-10 10-10h57.2c5.6 0 10 4.4 10 10v275.6c0 6-4.8 10.4-10.4 10.4zM217.6 402h-56.8c-5.6 0-10-4.4-10-10V116c0-5.6 4.4-10 10-10H218c5.6 0 10 4.4 10 10v275.6c0 6-4.8 10.4-10.4 10.4zM308 402h-56.8c-5.6 0-10-4.4-10-10V116c0-5.6 4.4-10 10-10h57.2c5.6 0 10 4.4 10 10v275.6c0 6-4.8 10.4-10.4 10.4z\"/></g><path fill=\"#84dbff\" d=\"M72.8 124h52.4v184.8H72.8z\"/><g fill=\"#54c0eb\"><path d=\"M81.2 134h35.6v6.4H81.2zM81.2 152h35.6v6.4H81.2zM81.2 169.6h35.6v6.4H81.2zM81.2 187.6h35.6v6.4H81.2zM81.2 205.2h35.6v6.4H81.2zM81.2 222.8h35.6v6.4H81.2zM81.2 240.8h35.6v6.4H81.2zM81.2 258.4h35.6v6.4H81.2zM81.2 276.4h35.6v6.4H81.2zM81.2 294h35.6v6.4H81.2z\"/></g><path fill=\"#ffd05b\" d=\"M253.6 124H306v184.8h-52.4z\"/><g fill=\"#f9b54c\"><path d=\"M261.6 134h35.6v6.4h-35.6zM261.6 152h35.6v6.4h-35.6zM261.6 169.6h35.6v6.4h-35.6zM261.6 187.6h35.6v6.4h-35.6zM261.6 205.2h35.6v6.4h-35.6zM261.6 222.8h35.6v6.4h-35.6zM261.6 240.8h35.6v6.4h-35.6zM261.6 258.4h35.6v6.4h-35.6zM261.6 276.4h35.6v6.4h-35.6zM261.6 294h35.6v6.4h-35.6z\"/></g><path fill=\"#ff7058\" d=\"M163.2 124h52.4v184.8h-52.4z\"/><g fill=\"#f1543f\"><path d=\"M171.6 134h35.6v6.4h-35.6zM171.6 152h35.6v6.4h-35.6zM171.6 169.6h35.6v6.4h-35.6zM171.6 187.6h35.6v6.4h-35.6zM171.6 205.2h35.6v6.4h-35.6zM171.6 222.8h35.6v6.4h-35.6zM171.6 240.8h35.6v6.4h-35.6zM171.6 258.4h35.6v6.4h-35.6zM171.6 276.4h35.6v6.4h-35.6zM171.6 294h35.6v6.4h-35.6z\"/></g><circle cx=\"99.6\" cy=\"356\" r=\"18.8\" fill=\"#e6e9ee\"/><circle cx=\"99.6\" cy=\"356\" r=\"14.4\" fill=\"#324a5e\"/><path d=\"M439.6 393.6l-56 10.8c-5.6 1.2-10.8-2.4-12-8L318.8 126c-1.2-5.6 2.4-10.8 8-12l56-10.8c5.6-1.2 10.8 2.4 12 8L447.6 382c1.2 5.2-2.4 10.8-8 11.6z\" fill=\"#fff\"/><path fill=\"#4cdbc4\" d=\"M419.664 302.807l-51.42 10.082-35.554-181.342 51.419-10.081z\"/><g fill=\"#2c9984\"><path d=\"M378.72 139.344l-34.933 6.85-1.231-6.28 34.933-6.85zM382.266 156.514l-34.933 6.85-1.231-6.281 34.933-6.85zM385.5 174.154l-34.933 6.849-1.231-6.28 34.933-6.85zM389.046 191.323l-34.933 6.85-1.231-6.28 34.933-6.85zM392.67 208.87l-34.934 6.85-1.231-6.28 34.933-6.85zM395.904 226.526l-34.933 6.849-1.231-6.28 34.933-6.85zM399.45 243.695l-34.933 6.85-1.231-6.28 34.933-6.85zM402.684 261.34l-34.933 6.848-1.231-6.28 34.933-6.85zM406.308 278.906l-34.933 6.849-1.232-6.28 34.934-6.85zM409.461 296.149l-34.933 6.849-1.232-6.28 34.934-6.85z\"/></g><circle cx=\"402.8\" cy=\"354\" r=\"18.8\" fill=\"#e6e9ee\"/><circle cx=\"402.8\" cy=\"354\" r=\"14.4\" fill=\"#324a5e\"/><circle cx=\"279.6\" cy=\"356\" r=\"18.8\" fill=\"#e6e9ee\"/><circle cx=\"279.6\" cy=\"356\" r=\"14.4\" fill=\"#324a5e\"/><circle cx=\"189.2\" cy=\"356\" r=\"18.8\" fill=\"#e6e9ee\"/><circle cx=\"189.2\" cy=\"356\" r=\"14.4\" fill=\"#324a5e\"/></symbol>";
	module.exports = sprite.add(image, "archives");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(6);
	var image = "<symbol viewBox=\"0 0 508 508\" id=\"businessman\" ><circle cx=\"254\" cy=\"254\" r=\"254\" fill=\"#54c0eb\"/><path d=\"M36.8 386C81.6 459.2 162 508 254 508s172.4-48.8 217.2-122H36.8z\" fill=\"#84dbff\"/><g fill=\"#ffd05b\"><path d=\"M366.4 235.2l2.8 10.4c4.8 5.2 13.2 3.2 14.8 2.8 1.6-1.6-.4-2.4-.4-2.4-6.8.4-7.2-4.8-7.2-4.8 4-2.4 8.4 1.6 10.4 4 .8.8 2 .8 2.8 0s.8-2 .4-2.8c-7.2-11.2-23.6-7.2-23.6-7.2zM128 310.8l10.8 1.2c5.6 3.6 5.6 12.4 5.2 14.4-1.6 2-2.4 0-2.4 0-.8-6.8-6-6.4-6-6.4-1.6 4.4 2.8 8 5.6 9.6 1.2.4 1.2 2 .8 2.8s-1.6 1.2-2.4.8c-12.8-5.6-11.6-22.4-11.6-22.4z\"/></g><path fill=\"#e6e9ee\" d=\"M175.6 137.6H234v77.6h-58.4z\"/><path fill=\"#f1543f\" d=\"M213.6 140.4H196l3.6 7.6H210z\"/><path fill=\"#ff7058\" d=\"M216.4 196.4l-11.6 18.8-11.6-18.8 6.4-48.4H210z\"/><path d=\"M204.8 318.4C202.4 334.8 194 340 194 340c-27.2 6.8-43.2-15.6-43.2-15.6 17.6-45.6 2-113.6 2-113.6-7.6 18-10 102.8-10 102.8h-17.2c-12-62.8-4.8-114 2.4-142.8 3.2-14 14-25.2 27.6-29.2 20.4-6 29.2-17.6 29.2-17.6-2.8 36 15.6 76.8 15.6 76.8 2 3.6 3.2 8.4 4.4 14.4 0-.4-12 62 0 103.2z\" fill=\"#2b3b4e\"/><g fill=\"#324a5e\"><path d=\"M161.6 160l13.6-10.8-14.8-3.2c14-4.8 24.4-21.6 24.4-21.6-2.8 36 15.6 76.8 15.6 76.8 1.6 3.6 3.2 8 4.4 13.6-27.6-14.4-43.2-54.8-43.2-54.8zM215.2 339.2s-8.4-5.2-10.8-21.6c-2 16.4-10.4 21.6-10.4 21.6-15.2 3.6-26.8-1.6-34.4-6.8l8 131.2h23.6L202 340.8c0-1.6 1.2-2.4 2.8-2.4 1.6 0 2.8 1.2 2.8 2.4L218.4 464H242l8-131.2c-8 5.2-19.6 10.4-34.8 6.4z\"/></g><path d=\"M215.2 339.2s-8.4-5.2-10.8-21.6V338c1.6 0 2.8 1.2 2.8 2.4L218 463.6h23.6l8-131.2c-7.6 5.6-19.2 10.8-34.4 6.8z\" fill=\"#2b3b4e\"/><path d=\"M243.2 468.8c.8-1.6 1.2-3.6 1.2-5.2 0-8-6.4-14.4-14.4-14.4s-14.4 6.4-14.4 14.4c0 2 .4 3.6 1.2 5.2h26.4z\" fill=\"#324a5e\"/><path d=\"M204.8 140.4c-.4 0-.4 0 0 0-19.2-9.2-17.2-21.2-17.2-21.2v-.4c4.8 5.6 10.4 9.6 16.8 9.6s12-3.6 16.8-9.6v.8c.8 1.6.8 12.4-16.4 20.8z\" fill=\"#f9b54c\"/><path d=\"M204.8 140.4c-.4 0-.4 0 0 0z\" fill=\"#f1543f\"/><g fill=\"#fff\"><path d=\"M221.6 118.8s2 12-16.8 21.2c0 0 14 1.2 18.4 14.4 0 .8 7.6-28.4-1.6-35.6zM187.6 118.8s-2 12 16.8 21.2c0 0-14 1.2-18.4 14.4 0 .8-7.6-28.4 1.6-35.6z\"/></g><path d=\"M233.2 94c.8-4 1.2-8 1.2-12 0-22-13.2-30.4-30-30.4-16.4 0-30 8.8-30 30.4 0 4 .4 8 1.2 12-2.4 1.2-3.2 5.2-1.6 8.8 1.2 2.8 3.6 4.4 5.6 4.4 5.2 12.8 14.4 23.2 24.8 23.2s19.2-10.4 24.8-23.2c2 0 4.4-2 5.6-4.4 1.6-3.6 1.2-7.6-1.6-8.8z\" fill=\"#ffd05b\"/><path d=\"M204.4 39.2s13.2.4 24.8 11.2c25.2 24-1.2 59.2-1.2 59.2s3.6-8.4 2.4-17.6c-.4-3.2-.8-6.8-.4-10 .4-6-1.2-15.6-15.6-13.2 0 0-8.4 6-28.4 1.2 0 0-12.8 19.6-5.6 36.8 0 0-21.2-32.4 1.2-52.8l-7.6 1.6s8.4-15.6 25.2-10c0 0-1.6-2.8-6.8-4 0 0 7.6-3.2 12 2 0-.4 2.8-2.4 0-4.4z\" fill=\"#324a5e\"/><path d=\"M191.2 468.8c.8-1.6 1.2-3.6 1.2-5.2 0-8-6.4-14.4-14.4-14.4s-14.4 6.4-14.4 14.4c0 2 .4 3.6 1.2 5.2h26.4z\" fill=\"#2b3b4e\"/><path d=\"M258.8 215.2c50 48 114 34.8 114 34.8 0-13.6-4.8-16.4-4.8-16.4-24 4.4-45.6-11.6-58.4-24.8-7.2-7.2-12.4-16-16-25.6-6-16.4-15.6-27.2-24.8-33.6-4.4-3.6-9.2-6.4-14.8-8-.4 0-.8-.4-1.6-.4-1.2-.4-2.4-.8-3.2-1.2-16.8-6-24.4-16-24.4-16 2.8 36-15.6 76.8-15.6 76.8-2 3.6-3.2 8.4-4.4 14.4 0 0-12 62 0 103.6 2 13.2 7.6 19.2 10 21.2l.8.8c27.2 6.8 43.2-15.6 43.2-15.6-12.4-32.4-8-76.4-4.4-98.8l4.4-11.2z\" fill=\"#324a5e\"/><path d=\"M248 160l-13.6-10.8 14.8-3.2c-14-4.8-24.4-21.6-24.4-21.6 2.8 36-15.6 76.8-15.6 76.8-1.6 3.6-3.2 8-4.4 13.6C232.4 200.4 248 160 248 160z\" fill=\"#2b3b4e\"/><path d=\"M421.6 358.8c0-21.6-17.6-38.8-38.8-38.8-8.4 0-15.2-6.8-15.2-15.2s6.8-15.2 15.2-15.2c4.4 0 8.4 1.6 11.2 4.8 4.4 4.8 12 4.8 16.8.4s4.8-12 .4-16.8-10.4-8.4-16.4-10.4v-6.8c0-6.4-5.2-11.6-11.6-11.6s-11.6 5.2-11.6 11.6v6.8c-15.6 5.2-27.2 19.6-27.2 37.2 0 21.6 17.6 38.8 38.8 38.8 8.4 0 15.2 6.8 15.2 15.2s-7.2 15.2-15.6 15.2c-4.4 0-8.4-1.6-11.2-4.8-4.4-4.8-12-4.8-16.8-.4s-4.8 12-.4 16.8 10.4 8.4 16.4 10.4v6.8c0 6.4 5.2 11.6 11.6 11.6s11.6-5.2 11.6-11.6V396c16.4-5.2 27.6-20 27.6-37.2z\" fill=\"#fff\"/></symbol>";
	module.exports = sprite.add(image, "businessman");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(6);
	var image = "<symbol viewBox=\"0 0 508 508\" id=\"businessmen\" ><circle cx=\"254\" cy=\"254\" r=\"254\" fill=\"#84dbff\"/><path d=\"M39.6 390C84.8 460.8 164 508 254 508c90.4 0 169.6-47.2 214.4-118H39.6z\" fill=\"#54c0eb\"/><g fill=\"#fff\"><path d=\"M166.8 141.6c-40.4 1.2-72.4 35.6-72.4 76v71.2c0 4.8 3.6 8.4 8.4 8.4 4.4 0 8-3.2 8.4-7.6l7.2-74.8c.4-2.4 2.4-4.4 4.8-4.4 2.8 0 4.8 2 4.8 4.8v220c0 6.4 5.2 12 12 12h2.4c6 0 11.2-4.8 12-10.8l9.2-115.2c.4-2.8 2.4-4.8 5.2-4.8 2.8 0 4.8 2 5.2 4.8l11.6 115.6c.8 6.4 6.4 11.2 13.2 10.4 6-.8 10.8-6.4 10.8-12.4V215.6c0-2.8 2-4.8 4.8-4.8 2.4 0 4.4 2 4.8 4.4l7.2 74.4c.4 4 3.2 7.2 7.2 8 5.2.8 10-3.2 10-8.4V216c-.4-42-34.8-75.6-76.8-74.4z\"/><circle cx=\"168.8\" cy=\"95.6\" r=\"34.8\"/></g><g fill=\"#324a5e\"><path d=\"M143.2 366.8H64.4c-2.8 0-4.8-2-4.8-4.8v-53.6c0-2.8 2-4.8 4.8-4.8h78.4c2.8 0 4.8 2 4.8 4.8V362c.4 2.8-2 4.8-4.4 4.8z\"/><path d=\"M90 306.4v-10c0-4 3.2-7.2 7.2-7.2h13.6c4 0 7.2 3.2 7.2 7.2v10h4v-10c0-6.4-5.2-11.6-11.6-11.6H96.8c-6.4 0-11.6 5.2-11.6 11.6v10H90z\"/></g><path fill=\"#f1543f\" d=\"M160 159.2l-1.2 3.6 2.8 6H176l2.4-6-.8-3.6z\"/><path fill=\"#ff7058\" d=\"M176 168.8h-14.4l-7.2 61.6 14.4 14 14-14z\"/><g fill=\"#fff\"><path d=\"M350 141.6c-40.4 1.2-72 35.2-72 76v71.2c0 4.8 4 8.4 8.4 8.4s8-3.2 8.4-7.6l7.2-74.8c.4-2.4 2.4-4.4 4.8-4.4 2.8 0 4.8 2 4.8 4.8v220c0 6.4 5.2 12 12 12h2.4c6 0 11.2-4.8 12-10.8l9.2-115.2c.4-2.8 2.4-4.8 5.2-4.8 2.8 0 4.8 2 5.2 4.8l11.6 115.6c.8 6.4 6.4 11.2 13.2 10.4 6-.8 10.8-6.4 10.8-12.4V215.2c0-2.8 2-4.8 4.8-4.8 2.4 0 4.4 2 4.8 4.4l7.2 74.4c.4 4 3.2 7.2 7.2 8 5.2.8 10-3.2 10-8.4V216c-.4-42-34.8-75.6-77.2-74.4z\"/><circle cx=\"352.4\" cy=\"95.6\" r=\"34.8\"/></g><path d=\"M326.8 303.6h-21.2v-7.2c0-6.4-5.2-11.6-11.6-11.6h-13.6c-6.4 0-11.6 5.2-11.6 11.6v7.2h-21.2c-2.8 0-4.8 2-4.8 4.8V362c0 2.8 2 4.8 4.8 4.8h78.8c2.8 0 4.8-2 4.8-4.8v-53.6c.4-2.8-2-4.8-4.4-4.8zm-53.2-7.2c0-4 3.2-7.2 7.2-7.2H294c4 0 7.2 3.2 7.2 7.2v7.2h-27.6v-7.2z\" fill=\"#324a5e\"/><path fill=\"#f1543f\" d=\"M343.2 159.2l-.8 3.6 2.8 6h14.4l2.4-6-.8-3.6z\"/><path fill=\"#ff7058\" d=\"M359.6 168.8h-14.4l-7.2 61.6 14.4 14 14-14z\"/></symbol>";
	module.exports = sprite.add(image, "businessmen");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(6);
	var image = "<symbol viewBox=\"0 0 508 508\" id=\"certificate\" ><circle cx=\"254\" cy=\"254\" r=\"254\" fill=\"#fd8469\"/><path d=\"M382.4 431.2H125.6c-8.4 0-15.2-6.8-15.2-15.2V92.4c0-8.4 6.8-15.2 15.2-15.2h256.8c8.4 0 15.2 6.8 15.2 15.2V416c0 8.4-6.8 15.2-15.2 15.2z\" fill=\"#324a5e\"/><path d=\"M131.6 386.4V121.6c12.8 0 23.2-10.4 23.2-23.2h197.6c0 12.8 10.4 23.2 23.2 23.2V386c-12.8 0-23.2 10.4-23.2 23.2H155.2c0-12.4-10.4-22.8-23.6-22.8z\" fill=\"#fff\"/><g fill=\"#ffd05b\"><path d=\"M217.6 124c-11.2-1.6-25.2 8.8-26.4 18.8 10-2.8 19.6-10 26.4-18.8zM186 128c-10.8 10.4-10.8 23.6-4 27.2 5.6-10 9.2-21.2 4-27.2zM205.6 148.8c-5.2-6-17.2-4-23.6 6.4 7.2 4 16.4 0 23.6-6.4zM172 144.4c-8 12-4.8 25.2 2.8 27.2 3.2-11.2 3.6-22.8-2.8-27.2z\"/><path d=\"M196 160c-6.4-4.8-17.2-.4-21.2 11.2 7.6 2.4 16-3.2 21.2-11.2zM162.8 162.8c-4.8 13.2.8 25.2 8.4 25.6 1.2-11.2-1.2-22.4-8.4-25.6z\"/><path d=\"M189.2 172.8c-7.2-3.2-16.8 3.2-18 15.2 8 .8 14.8-6.4 18-15.2zM157.6 182.4c-2 14 6 24.4 14 23.2-1.6-11.2-6.4-21.6-14-23.2z\"/><path d=\"M186 186.8c-7.6-1.6-15.6 6.8-14.4 18.8 7.6-1.2 12.8-10 14.4-18.8zM156.8 202.8c.8 14 11.2 22.4 18.4 19.6-3.6-10.4-10.4-19.6-18.4-19.6z\"/><path d=\"M185.2 200.8c-8 0-14 10-10 21.6 7.2-2.8 10.8-12.4 10-21.6zM160.4 223.2c4 13.6 16 20 22.4 15.2-6.4-9.6-14.8-17.2-22.4-15.2z\"/><path d=\"M187.6 214.8c-7.6 2-11.6 12.8-5.2 23.6 6.8-4.4 8-14.4 5.2-23.6zM168.4 242c6.8 12.4 20.4 16 25.6 10.4-8.8-8.4-18.4-14-25.6-10.4z\"/><path d=\"M193.2 228c-7.2 3.6-8.4 15.2.4 24.4 5.6-6 4-16-.4-24.4zM219.6 264.8c-8.4-2-16-5.6-23.2-10 5.2 6.8 11.6 12.8 19.6 18 1.2-2.8 2.4-5.2 3.6-8zM290.4 124c11.2-1.6 25.2 8.8 26.4 18.8-10-2.8-19.6-10-26.4-18.8zM322 128c10.8 10.4 10.8 23.6 4 27.2-5.6-10-9.2-21.2-4-27.2zM302.4 148.8c5.2-6 17.2-4 23.6 6.4-7.2 4-16.4 0-23.6-6.4zM336 144.4c8 12 4.8 25.2-2.8 27.2-3.2-11.2-3.6-22.8 2.8-27.2z\"/><path d=\"M312 160c6.4-4.8 17.2-.4 21.2 11.2-7.6 2.4-16-3.2-21.2-11.2zM345.2 162.8c4.8 13.2-.8 25.2-8.4 25.6-1.2-11.2 1.2-22.4 8.4-25.6z\"/><path d=\"M318.8 172.8c7.2-3.2 16.8 3.2 18 15.2-8 .8-14.8-6.4-18-15.2zM350.4 182.4c2 14-6 24.4-14 23.2 1.6-11.2 6.4-21.6 14-23.2z\"/><path d=\"M322 186.8c7.6-1.6 15.6 6.8 14.4 18.8-7.6-1.2-12.8-10-14.4-18.8zM351.2 202.8c-.8 14-11.2 22.4-18.4 19.6 3.6-10.4 10.4-19.6 18.4-19.6z\"/><path d=\"M322.8 200.8c8 0 14 10 10 21.6-7.2-2.8-10.8-12.4-10-21.6zM347.6 223.2c-4 13.6-16 20-22.4 15.2 6.4-9.6 14.8-17.2 22.4-15.2z\"/><path d=\"M320.4 214.8c7.6 2 11.6 12.8 5.2 23.6-6.8-4.4-8-14.4-5.2-23.6zM339.6 242c-6.8 12.4-20.4 16-25.6 10.4 8.8-8.4 18.4-14 25.6-10.4z\"/><path d=\"M314.8 228c7.2 3.6 8.4 15.2-.4 24.4-5.6-6-4-16 .4-24.4zM288.4 264.8c8.4-2 16-5.6 23.2-10-5.2 6.8-11.6 12.8-19.6 18-1.2-2.8-2.4-5.2-3.6-8z\"/></g><path d=\"M294 224.8c-10 9.6-24 15.6-40 15.6s-30-6-40-15.6c1.6-5.2 5.6-9.6 10.4-12l15.6-7.6c.4-2 2.8-4.8 2.8-4.8-1.2-1.6-2-3.6-2.8-5.6-1.2 0-2.4-1.2-3.2-2.4-.8-1.6-.8-3.2 0-4-2.4-6.4-4-16.4 4-23.6l-4 .8s4.8-8.8 14.4-5.6c0 0-.8-1.6-4-2.4 0 0 4.4-2 6.8 1.2 0 0 1.6-1.2 0-2.4 0 0 7.6.4 14 6.4 8.8 8.4 6.8 19.2 3.6 26.4.4.8.4 2.4-.4 3.6-.8 1.2-1.6 2.4-2.8 2.4-.8.8-2.4 4.4-3.2 5.6 0 0 2.4 2.8 2.8 4.8l15.6 7.6c4.8 2 8.8 6.4 10.4 11.6z\" fill=\"#84dbff\"/><g fill=\"#ced5e0\"><path d=\"M165.2 306.8h177.6v8.4H165.2zM165.2 327.2h177.6v8.4H165.2zM165.2 347.6h177.6v8.4H165.2zM165.2 368h102v8.4h-102z\"/></g></symbol>";
	module.exports = sprite.add(image, "certificate");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(6);
	var image = "<symbol viewBox=\"0 0 508 508\" id=\"chat\" ><circle cx=\"254\" cy=\"254\" r=\"254\" fill=\"#84dbff\"/><path fill=\"#e6e9ee\" d=\"M102 313.6h70v78.8h-70z\"/><ellipse cx=\"137.6\" cy=\"289.2\" rx=\"25.6\" ry=\"26\" fill=\"#f9b54c\"/><path fill=\"#f1543f\" d=\"M148.4 315.2h-21.6l4.4 12.8h13.2z\"/><path d=\"M120 405.2c5.6.8 11.6 1.2 17.6 1.2s12-.4 17.6-1.2l-10.8-77.6h-13.2L120 405.2z\" fill=\"#ff7058\"/><g fill=\"#324a5e\"><path d=\"M231.6 358.8l-13.2-40.4L168 294c0 17.6-1.2 60.8-22 112.4 35.2-2.4 66.4-20.8 85.6-47.6zM129.2 406.4c-20.8-51.6-22-95.2-22-112.4l-50.8 24.4-13.2 40.4c20 26.8 50.8 45.2 86 47.6z\"/></g><g fill=\"#fff\"><path d=\"M162.8 284s3.2 18-25.2 31.6c0 0 21.2 1.6 27.2 21.6.4.4 12-42.8-2-53.2zM112.4 284s-3.2 18 25.2 31.6c0 0-21.2 1.6-27.2 21.6-.4.4-11.6-42.8 2-53.2z\"/></g><path d=\"M179.6 235.6c0 27.6-18.8 61.6-42 61.6s-42-34-42-61.6 18.8-38.4 42-38.4c23.2.4 42 11.2 42 38.4z\" fill=\"#ffd05b\"/><path d=\"M123.2 191.6s34-13.6 51.2 17.2c18.4 32.8-4.8 68.4-9.6 71.2 0 0 1.2-5.6 4.8-16.4 0 0 8.4-24.4-16.8-28 0 0-24-3.2-26-8.4 0 0 1.6 8.8 12.8 10.4 0 0-24.8-.4-32.4-9.2 0 0-10.4 34.8 4.8 54 0 0-26.8-21.2-23.6-54.4 0 0-1.2-45.2 34.8-36.4z\" fill=\"#324a5e\"/><path d=\"M396.4 204c0 2-.8 4.4-2 6-6-3.2-13.2-4.8-20.8-4.8-7.6 0-14.8 1.6-20.8 4.8-1.2-2-2-4-2-6 0-8.4 10-15.2 22.8-15.2s22.8 6.8 22.8 15.2z\" fill=\"#2b3b4e\"/><path d=\"M412.4 248c0 5.2-.4 10.8-1.6 16.4-1.2-.8-2.4-.8-4-.4.8-14-7.6-16-7.6-16-8.8-3.2-12.4-11.6-13.6-18-3.6 4-9.6 8.4-19.6 12.4-27.2 11.2-26 21.6-26 21.6l-.4-.4c-1.2-.4-2.8-.4-4 0-1.2-5.6-1.6-11.2-1.6-16.4 0-30.8 17.6-42.8 38.8-42.8 22 .8 39.6 12.8 39.6 43.6z\" fill=\"#324a5e\"/><path d=\"M398.8 298.8s3.2 17.6-24.8 31.6h-.4c-28.4-13.6-24.8-31.6-24.8-31.6.4-2 .8-3.6 1.6-5.2 6 10.8 14.4 18.4 23.6 18.4s17.2-7.6 23.6-18.8c0 2 .8 4 1.2 5.6 0 .4 0 0 0 0z\" fill=\"#f9b54c\"/><path d=\"M464 362.4c-23.2 23.2-55.2 37.6-90.4 37.6s-67.2-14.4-90.4-37.6l9.2-28.8 56.8-27.6c1.6 6.4 7.2 16 24.4 24.4h.4c16.8-8.4 22.4-18 24.4-24.4l56.4 27.2 9.2 29.2z\" fill=\"#ff7058\"/><path d=\"M411.2 264.8c-1.2-.8-2.4-.8-4-.4.8-14-7.6-16-7.6-16-8.8-3.2-12.4-11.6-13.6-18-3.6 4-9.6 8.4-19.6 12.4-27.2 11.2-26 21.6-26 21.6l-.4-.4c-1.6-.4-2.8-.4-4 .4-2.8 2-2.8 8-.4 12.8s6.4 7.2 9.2 5.6c6.4 16.4 16.8 29.2 28.4 29.2s22-12.8 28.4-29.2c2.8 1.6 6.8-.8 9.2-5.6 3.2-4.8 2.8-10.4.4-12.4z\" fill=\"#ffd05b\"/><path d=\"M324 64.8H212c-7.6 0-14 6-14 14V148c0 7.6 6 14 14 14h68.8l47.2 42.4-15.2-42.4H324c7.6 0 14-6 14-14V78.8c-.4-7.6-6.4-14-14-14z\" fill=\"#e6e9ee\"/><g fill=\"#fff\"><path d=\"M184 44h112c7.6 0 14 6 14 14v69.2c0 7.6-6 14-14 14h-68.8l-47.2 42 15.2-42.4H184c-7.6 0-14-6-14-14V58c.4-7.6 6.4-14 14-14zM398.8 298.8s3.2 18-25.2 31.6c0 0 21.2 1.6 27.2 21.6.4.8 11.6-42.4-2-53.2zM348.4 298.8c-14 10.8-2.4 54-2.4 53.2 6.4-19.6 27.2-21.6 27.2-21.6-28-13.6-24.8-31.6-24.8-31.6z\"/></g><g fill=\"#f1543f\"><path d=\"M430.8 386.4c2-9.2.8-16.8.8-18l6.4 14c-2.4 1.2-4.8 2.8-7.2 4zM316.4 386.4c-2.4-1.2-4.8-2.4-7.2-4l6.4-14c-.4 1.2-1.2 8.8.8 18z\"/></g></symbol>";
	module.exports = sprite.add(image, "chat");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprite = __webpack_require__(6);
	var image = "<symbol viewBox=\"0 0 508 508\" id=\"contract\" ><circle cx=\"254\" cy=\"254\" r=\"254\" fill=\"#fd8469\"/><path d=\"M366 401.2v18.4c0 7.2-6 13.2-13.2 13.2H123.6c-7.2 0-13.2-6-13.2-13.2V120c0-7.2 6-13.2 13.2-13.2H142V388c0 7.2 6 13.2 13.2 13.2H366z\" fill=\"#e6e9ee\"/><path d=\"M336.8 75.2h-182c-7.2 0-13.2 6-13.2 13.2V388c0 7.2 6 13.2 13.2 13.2h229.6c7.2 0 13.2-6 13.2-13.2V136H350c-7.2 0-13.2-6-13.2-13.2V75.2z\" fill=\"#fff\"/><g fill=\"#e6e9ee\"><path d=\"M336.8 75.2v47.6c0 7.2 6 13.2 13.2 13.2h47.6l-60.8-60.8zM162.4 322.8h214.4v12H162.4zM162.4 353.2h120.8v12H162.4z\"/></g><path d=\"M302 207.6c0-17.6-14.4-32-32-32-6.8 0-12.8-5.6-12.8-12.8 0-6.8 5.6-12.8 12.8-12.8 3.6 0 6.8 1.6 9.2 4 3.6 4 10 4 13.6.4 4-3.6 4-10 .4-13.6-3.6-4-8.4-6.8-13.6-8.4v-5.6c0-5.2-4.4-9.6-9.6-9.6s-9.6 4.4-9.6 9.6v5.6c-12.8 4-22.4 16.4-22.4 30.4 0 17.6 14.4 32 32 32 6.8 0 12.8 5.6 12.8 12.8 0 6.8-5.6 12.8-12.8 12.8-3.6 0-6.8-1.6-9.2-4-3.6-4-10-4-13.6-.4-4 3.6-4 10-.4 13.6 3.6 4 8.4 6.8 13.6 8.4v5.6c0 5.2 4.4 9.6 9.6 9.6s9.6-4.4 9.6-9.6V238c12.8-3.6 22.4-16 22.4-30.4z\" fill=\"#4cdbc4\"/><path fill=\"#e6e9ee\" d=\"M162.4 292h214.4v12H162.4z\"/></symbol>";
	module.exports = sprite.add(image, "contract");

/***/ }
/******/ ]);
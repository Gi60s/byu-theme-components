;(function() {
"use strict";

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style>', '</style>\n            <div>Hi there! ', '</div>\n            <div>', '</div>\n'], ['\n            <style>', '</style>\n            <div>Hi there! ', '</div>\n            <div>', '</div>\n']);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/__webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 15);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

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

    /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(23);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(5);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(22);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(21);
    /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
        return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
    });
    /* unused harmony reexport matchesSelector */
    /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__["a"];
    });
    /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__["a"];
    });
    /**
     * Created by ThatJoeMoore on 2/14/17
     */

    /***/
},
/* 2 */
/***/function (module, exports) {

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    window.JSCompiler_renameProperty = function (prop) {
        return prop;
    };

    /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* unused harmony export defaultTemplateFactory */
    /* harmony export (immutable) */
    __webpack_exports__["c"] = render;
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    // The first argument to JS template tags retain identity across multiple
    // calls to a tag for the same literal, so we can cache work done per literal
    // in a Map.
    var templateCaches = new Map();
    /* harmony export (immutable) */__webpack_exports__["a"] = templateCaches;

    /**
     * Interprets a template literal as an HTML template that can efficiently
     * render to and update a container.
     */
    var html = function html(strings) {
        for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            values[_key - 1] = arguments[_key];
        }

        return new TemplateResult(strings, values, 'html');
    };
    /* unused harmony export html */

    /**
     * Interprets a template literal as an SVG template that can efficiently
     * render to and update a container.
     */
    var svg = function svg(strings) {
        for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            values[_key2 - 1] = arguments[_key2];
        }

        return new SVGTemplateResult(strings, values, 'svg');
    };
    /* unused harmony export svg */

    /**
     * The return type of `html`, which holds a Template and the values from
     * interpolated expressions.
     */

    var TemplateResult = function () {
        function TemplateResult(strings, values, type) {
            var partCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultPartCallback;

            _classCallCheck(this, TemplateResult);

            this.strings = strings;
            this.values = values;
            this.type = type;
            this.partCallback = partCallback;
        }
        /**
         * Returns a string of HTML used to create a <template> element.
         */


        _createClass(TemplateResult, [{
            key: 'getHTML',
            value: function getHTML() {
                var l = this.strings.length - 1;
                var html = '';
                var isTextBinding = true;
                for (var i = 0; i < l; i++) {
                    var s = this.strings[i];
                    html += s;
                    // We're in a text position if the previous string closed its tags.
                    // If it doesn't have any tags, then we use the previous text position
                    // state.
                    var closing = findTagClose(s);
                    isTextBinding = closing > -1 ? closing < s.length : isTextBinding;
                    html += isTextBinding ? nodeMarker : marker;
                }
                html += this.strings[l];
                return html;
            }
        }, {
            key: 'getTemplateElement',
            value: function getTemplateElement() {
                var template = document.createElement('template');
                template.innerHTML = this.getHTML();
                return template;
            }
        }]);

        return TemplateResult;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["d"] = TemplateResult;

    /**
     * A TemplateResult for SVG fragments.
     *
     * This class wraps HTMl in an <svg> tag in order to parse its contents in the
     * SVG namespace, then modifies the template to remove the <svg> tag so that
     * clones only container the original fragment.
     */

    var SVGTemplateResult = function (_TemplateResult) {
        _inherits(SVGTemplateResult, _TemplateResult);

        function SVGTemplateResult() {
            _classCallCheck(this, SVGTemplateResult);

            return _possibleConstructorReturn(this, (SVGTemplateResult.__proto__ || Object.getPrototypeOf(SVGTemplateResult)).apply(this, arguments));
        }

        _createClass(SVGTemplateResult, [{
            key: 'getHTML',
            value: function getHTML() {
                return '<svg>' + _get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getHTML', this).call(this) + '</svg>';
            }
        }, {
            key: 'getTemplateElement',
            value: function getTemplateElement() {
                var template = _get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getTemplateElement', this).call(this);
                var content = template.content;
                var svgElement = content.firstChild;
                content.removeChild(svgElement);
                reparentNodes(content, svgElement.firstChild);
                return template;
            }
        }]);

        return SVGTemplateResult;
    }(TemplateResult);
    /* harmony export (immutable) */

    __webpack_exports__["e"] = SVGTemplateResult;

    /**
     * The default TemplateFactory which caches Templates keyed on
     * result.type and result.strings.
     */
    function defaultTemplateFactory(result) {
        var templateCache = templateCaches.get(result.type);
        if (templateCache === undefined) {
            templateCache = new Map();
            templateCaches.set(result.type, templateCache);
        }
        var template = templateCache.get(result.strings);
        if (template === undefined) {
            template = new Template(result, result.getTemplateElement());
            templateCache.set(result.strings, template);
        }
        return template;
    }
    /**
     * Renders a template to a container.
     *
     * To update a container with new values, reevaluate the template literal and
     * call `render` with the new result.
     *
     * @param result a TemplateResult created by evaluating a template tag like
     *     `html` or `svg`.
     * @param container A DOM parent to render to. The entire contents are either
     *     replaced, or efficiently updated if the same result type was previous
     *     rendered there.
     * @param templateFactory a function to create a Template or retreive one from
     *     cache.
     */
    function render(result, container) {
        var templateFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultTemplateFactory;

        var template = templateFactory(result);
        var instance = container.__templateInstance;
        // Repeat render, just call update()
        if (instance !== undefined && instance.template === template && instance._partCallback === result.partCallback) {
            instance.update(result.values);
            return;
        }
        // First render, create a new TemplateInstance and append it
        instance = new TemplateInstance(template, result.partCallback, templateFactory);
        container.__templateInstance = instance;
        var fragment = instance._clone();
        instance.update(result.values);
        removeNodes(container, container.firstChild);
        container.appendChild(fragment);
    }
    /**
     * An expression marker with embedded unique key to avoid collision with
     * possible text in templates.
     */
    var marker = '{{lit-' + String(Math.random()).slice(2) + '}}';
    /**
     * An expression marker used text-posisitions, not attribute positions,
     * in template.
     */
    var nodeMarker = '<!--' + marker + '-->';
    var markerRegex = new RegExp(marker + '|' + nodeMarker);
    /**
     * This regex extracts the attribute name preceding an attribute-position
     * expression. It does this by matching the syntax allowed for attributes
     * against the string literal directly preceding the expression, assuming that
     * the expression is in an attribute-value position.
     *
     * See attributes in the HTML spec:
     * https://www.w3.org/TR/html5/syntax.html#attributes-0
     *
     * "\0-\x1F\x7F-\x9F" are Unicode control characters
     *
     * " \x09\x0a\x0c\x0d" are HTML space characters:
     * https://www.w3.org/TR/html5/infrastructure.html#space-character
     *
     * So an attribute is:
     *  * The name: any character except a control character, space character, ('),
     *    ("), ">", "=", or "/"
     *  * Followed by zero or more space characters
     *  * Followed by "="
     *  * Followed by zero or more space characters
     *  * Followed by:
     *    * Any character except space, ('), ("), "<", ">", "=", (`), or
     *    * (") then any non-("), or
     *    * (') then any non-(')
     */
    var lastAttributeNameRegex = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
    /**
     * Finds the closing index of the last closed HTML tag.
     * This has 3 possible return values:
     *   - `-1`, meaning there is no tag in str.
     *   - `string.length`, meaning the last opened tag is unclosed.
     *   - Some positive number < str.length, meaning the index of the closing '>'.
     */
    function findTagClose(str) {
        var close = str.lastIndexOf('>');
        var open = str.indexOf('<', close + 1);
        return open > -1 ? str.length : close;
    }
    /**
     * A placeholder for a dynamic expression in an HTML template.
     *
     * There are two built-in part types: AttributePart and NodePart. NodeParts
     * always represent a single dynamic expression, while AttributeParts may
     * represent as many expressions are contained in the attribute.
     *
     * A Template's parts are mutable, so parts can be replaced or modified
     * (possibly to implement different template semantics). The contract is that
     * parts can only be replaced, not removed, added or reordered, and parts must
     * always consume the correct number of values in their `update()` method.
     *
     * TODO(justinfagnani): That requirement is a little fragile. A
     * TemplateInstance could instead be more careful about which values it gives
     * to Part.update().
     */

    var TemplatePart = function TemplatePart(type, index, name, rawName, strings) {
        _classCallCheck(this, TemplatePart);

        this.type = type;
        this.index = index;
        this.name = name;
        this.rawName = rawName;
        this.strings = strings;
    };
    /* unused harmony export TemplatePart */

    /**
     * An updateable Template that tracks the location of dynamic parts.
     */


    var Template = function Template(result, element) {
        _classCallCheck(this, Template);

        this.parts = [];
        this.element = element;
        var content = this.element.content;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        var walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                            NodeFilter.SHOW_TEXT */, null, false);
        var index = -1;
        var partIndex = 0;
        var nodesToRemove = [];
        // The actual previous node, accounting for removals: if a node is removed
        // it will never be the previousNode.
        var previousNode = void 0;
        // Used to set previousNode at the top of the loop.
        var currentNode = void 0;
        while (walker.nextNode()) {
            index++;
            previousNode = currentNode;
            var node = currentNode = walker.currentNode;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (!node.hasAttributes()) {
                        continue;
                    }
                    var attributes = node.attributes;
                    // Per https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order. In
                    // particular, Edge/IE can return them out of order, so we cannot assume
                    // a correspondance between part index and attribute index.
                    var count = 0;
                    for (var i = 0; i < attributes.length; i++) {
                        if (attributes[i].value.indexOf(marker) >= 0) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute attribute
                        var stringForPart = result.strings[partIndex];
                        // Find the attribute name
                        var attributeNameInPart = lastAttributeNameRegex.exec(stringForPart)[1];
                        // Find the corresponding attribute
                        // TODO(justinfagnani): remove non-null assertion
                        var attribute = attributes.getNamedItem(attributeNameInPart);
                        var stringsForAttributeValue = attribute.value.split(markerRegex);
                        this.parts.push(new TemplatePart('attribute', index, attribute.name, attributeNameInPart, stringsForAttributeValue));
                        node.removeAttribute(attribute.name);
                        partIndex += stringsForAttributeValue.length - 1;
                    }
                } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    var nodeValue = node.nodeValue;
                    if (nodeValue.indexOf(marker) < 0) {
                        continue;
                    }
                    var parent = node.parentNode;
                    var strings = nodeValue.split(markerRegex);
                    var lastIndex = strings.length - 1;
                    // We have a part for each match found
                    partIndex += lastIndex;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (var _i = 0; _i < lastIndex; _i++) {
                        parent.insertBefore(strings[_i] === '' ? document.createComment('') : document.createTextNode(strings[_i]), node);
                        this.parts.push(new TemplatePart('node', index++));
                    }
                    parent.insertBefore(strings[lastIndex] === '' ? document.createComment('') : document.createTextNode(strings[lastIndex]), node);
                    nodesToRemove.push(node);
                } else if (node.nodeType === 8 /* Node.COMMENT_NODE */ && node.nodeValue === marker) {
                var _parent = node.parentNode;
                // Add a new marker node to be the startNode of the Part if any of the
                // following are true:
                //  * We don't have a previousSibling
                //  * previousSibling is being removed (thus it's not the
                //    `previousNode`)
                //  * previousSibling is not a Text node
                //
                // TODO(justinfagnani): We should be able to use the previousNode here
                // as the marker node and reduce the number of extra nodes we add to a
                // template. See https://github.com/PolymerLabs/lit-html/issues/147
                var previousSibling = node.previousSibling;
                if (previousSibling === null || previousSibling !== previousNode || previousSibling.nodeType !== Node.TEXT_NODE) {
                    _parent.insertBefore(document.createComment(''), node);
                } else {
                    index--;
                }
                this.parts.push(new TemplatePart('node', index++));
                nodesToRemove.push(node);
                // If we don't have a nextSibling add a marker node.
                // We don't have to check if the next node is going to be removed,
                // because that node will induce a new marker if so.
                if (node.nextSibling === null) {
                    _parent.insertBefore(document.createComment(''), node);
                } else {
                    index--;
                }
                currentNode = previousNode;
                partIndex++;
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = nodesToRemove[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var n = _step.value;

                n.parentNode.removeChild(n);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    };
    /* harmony export (immutable) */

    __webpack_exports__["b"] = Template;

    /**
     * Returns a value ready to be inserted into a Part from a user-provided value.
     *
     * If the user value is a directive, this invokes the directive with the given
     * part. If the value is null, it's converted to undefined to work better
     * with certain DOM APIs, like textContent.
     */
    var getValue = function getValue(part, value) {
        // `null` as the value of a Text node will render the string 'null'
        // so we convert it to undefined
        if (isDirective(value)) {
            value = value(part);
            return directiveValue;
        }
        return value === null ? undefined : value;
    };
    /* harmony export (immutable) */__webpack_exports__["h"] = getValue;

    var directive = function directive(f) {
        f.__litDirective = true;
        return f;
    };
    /* unused harmony export directive */

    var isDirective = function isDirective(o) {
        return typeof o === 'function' && o.__litDirective === true;
    };
    /**
     * A sentinel value that signals that a value was handled by a directive and
     * should not be written to the DOM.
     */
    var directiveValue = {};
    /* harmony export (immutable) */__webpack_exports__["i"] = directiveValue;

    var isPrimitiveValue = function isPrimitiveValue(value) {
        return value === null || !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function');
    };

    var AttributePart = function () {
        function AttributePart(instance, element, name, strings) {
            _classCallCheck(this, AttributePart);

            this.instance = instance;
            this.element = element;
            this.name = name;
            this.strings = strings;
            this.size = strings.length - 1;
            this._previousValues = [];
        }

        _createClass(AttributePart, [{
            key: '_interpolate',
            value: function _interpolate(values, startIndex) {
                var strings = this.strings;
                var l = strings.length - 1;
                var text = '';
                for (var i = 0; i < l; i++) {
                    text += strings[i];
                    var v = getValue(this, values[startIndex + i]);
                    if (v && v !== directiveValue && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = v[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var t = _step2.value;

                                // TODO: we need to recursively call getValue into iterables...
                                text += t;
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    } else {
                        text += v;
                    }
                }
                return text + strings[l];
            }
        }, {
            key: '_equalToPreviousValues',
            value: function _equalToPreviousValues(values, startIndex) {
                for (var i = startIndex; i < startIndex + this.size; i++) {
                    if (this._previousValues[i] !== values[i] || !isPrimitiveValue(values[i])) {
                        return false;
                    }
                }
                return true;
            }
        }, {
            key: 'setValue',
            value: function setValue(values, startIndex) {
                if (this._equalToPreviousValues(values, startIndex)) {
                    return;
                }
                var s = this.strings;
                var value = void 0;
                if (s.length === 2 && s[0] === '' && s[1] === '') {
                    // An expression that occupies the whole attribute value will leave
                    // leading and trailing empty strings.
                    value = getValue(this, values[startIndex]);
                    if (Array.isArray(value)) {
                        value = value.join('');
                    }
                } else {
                    value = this._interpolate(values, startIndex);
                }
                if (value !== directiveValue) {
                    this.element.setAttribute(this.name, value);
                }
                this._previousValues = values;
            }
        }]);

        return AttributePart;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["f"] = AttributePart;

    var NodePart = function () {
        function NodePart(instance, startNode, endNode) {
            _classCallCheck(this, NodePart);

            this.instance = instance;
            this.startNode = startNode;
            this.endNode = endNode;
            this._previousValue = undefined;
        }

        _createClass(NodePart, [{
            key: 'setValue',
            value: function setValue(value) {
                value = getValue(this, value);
                if (value === directiveValue) {
                    return;
                }
                if (isPrimitiveValue(value)) {
                    // Handle primitive values
                    // If the value didn't change, do nothing
                    if (value === this._previousValue) {
                        return;
                    }
                    this._setText(value);
                } else if (value instanceof TemplateResult) {
                    this._setTemplateResult(value);
                } else if (Array.isArray(value) || value[Symbol.iterator]) {
                    this._setIterable(value);
                } else if (value instanceof Node) {
                    this._setNode(value);
                } else if (value.then !== undefined) {
                    this._setPromise(value);
                } else {
                    // Fallback, will render the string representation
                    this._setText(value);
                }
            }
        }, {
            key: '_insert',
            value: function _insert(node) {
                this.endNode.parentNode.insertBefore(node, this.endNode);
            }
        }, {
            key: '_setNode',
            value: function _setNode(value) {
                if (this._previousValue === value) {
                    return;
                }
                this.clear();
                this._insert(value);
                this._previousValue = value;
            }
        }, {
            key: '_setText',
            value: function _setText(value) {
                var node = this.startNode.nextSibling;
                value = value === undefined ? '' : value;
                if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
                    // If we only have a single text node between the markers, we can just
                    // set its value, rather than replacing it.
                    // TODO(justinfagnani): Can we just check if _previousValue is
                    // primitive?
                    node.textContent = value;
                } else {
                    this._setNode(document.createTextNode(value));
                }
                this._previousValue = value;
            }
        }, {
            key: '_setTemplateResult',
            value: function _setTemplateResult(value) {
                var template = this.instance._getTemplate(value);
                var instance = void 0;
                if (this._previousValue && this._previousValue.template === template) {
                    instance = this._previousValue;
                } else {
                    instance = new TemplateInstance(template, this.instance._partCallback, this.instance._getTemplate);
                    this._setNode(instance._clone());
                    this._previousValue = instance;
                }
                instance.update(value.values);
            }
        }, {
            key: '_setIterable',
            value: function _setIterable(value) {
                // For an Iterable, we create a new InstancePart per item, then set its
                // value to the item. This is a little bit of overhead for every item in
                // an Iterable, but it lets us recurse easily and efficiently update Arrays
                // of TemplateResults that will be commonly returned from expressions like:
                // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
                // If _previousValue is an array, then the previous render was of an
                // iterable and _previousValue will contain the NodeParts from the previous
                // render. If _previousValue is not an array, clear this part and make a new
                // array for NodeParts.
                if (!Array.isArray(this._previousValue)) {
                    this.clear();
                    this._previousValue = [];
                }
                // Lets us keep track of how many items we stamped so we can clear leftover
                // items from a previous render
                var itemParts = this._previousValue;
                var partIndex = 0;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var item = _step3.value;

                        // Try to reuse an existing part
                        var itemPart = itemParts[partIndex];
                        // If no existing part, create a new one
                        if (itemPart === undefined) {
                            // If we're creating the first item part, it's startNode should be the
                            // container's startNode
                            var itemStart = this.startNode;
                            // If we're not creating the first part, create a new separator marker
                            // node, and fix up the previous part's endNode to point to it
                            if (partIndex > 0) {
                                var previousPart = itemParts[partIndex - 1];
                                itemStart = previousPart.endNode = document.createTextNode('');
                                this._insert(itemStart);
                            }
                            itemPart = new NodePart(this.instance, itemStart, this.endNode);
                            itemParts.push(itemPart);
                        }
                        itemPart.setValue(item);
                        partIndex++;
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                if (partIndex === 0) {
                    this.clear();
                    this._previousValue = undefined;
                } else if (partIndex < itemParts.length) {
                    var lastPart = itemParts[partIndex - 1];
                    // Truncate the parts array so _previousValue reflects the current state
                    itemParts.length = partIndex;
                    this.clear(lastPart.endNode.previousSibling);
                    lastPart.endNode = this.endNode;
                }
            }
        }, {
            key: '_setPromise',
            value: function _setPromise(value) {
                var _this2 = this;

                this._previousValue = value;
                value.then(function (v) {
                    if (_this2._previousValue === value) {
                        _this2.setValue(v);
                    }
                });
            }
        }, {
            key: 'clear',
            value: function clear() {
                var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;

                removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
            }
        }]);

        return NodePart;
    }();
    /* unused harmony export NodePart */

    var defaultPartCallback = function defaultPartCallback(instance, templatePart, node) {
        if (templatePart.type === 'attribute') {
            return new AttributePart(instance, node, templatePart.name, templatePart.strings);
        } else if (templatePart.type === 'node') {
            return new NodePart(instance, node, node.nextSibling);
        }
        throw new Error('Unknown part type ' + templatePart.type);
    };
    /* harmony export (immutable) */__webpack_exports__["g"] = defaultPartCallback;

    /**
     * An instance of a `Template` that can be attached to the DOM and updated
     * with new values.
     */

    var TemplateInstance = function () {
        function TemplateInstance(template, partCallback, getTemplate) {
            _classCallCheck(this, TemplateInstance);

            this._parts = [];
            this.template = template;
            this._partCallback = partCallback;
            this._getTemplate = getTemplate;
        }

        _createClass(TemplateInstance, [{
            key: 'update',
            value: function update(values) {
                var valueIndex = 0;
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = this._parts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var part = _step4.value;

                        if (part.size === undefined) {
                            part.setValue(values[valueIndex]);
                            valueIndex++;
                        } else {
                            part.setValue(values, valueIndex);
                            valueIndex += part.size;
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
            }
        }, {
            key: '_clone',
            value: function _clone() {
                var fragment = document.importNode(this.template.element.content, true);
                var parts = this.template.parts;
                if (parts.length > 0) {
                    // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
                    // null
                    var _walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                                          NodeFilter.SHOW_TEXT */, null, false);
                    var _index = -1;
                    for (var i = 0; i < parts.length; i++) {
                        var part = parts[i];
                        while (_index < part.index) {
                            _index++;
                            _walker.nextNode();
                        }
                        this._parts.push(this._partCallback(this, part, _walker.currentNode));
                    }
                }
                return fragment;
            }
        }]);

        return TemplateInstance;
    }();
    /* unused harmony export TemplateInstance */

    /**
     * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
     * (exclusive), into another container (could be the same container), before
     * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
     * container.
     */


    var reparentNodes = function reparentNodes(container, start) {
        var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        var node = start;
        while (node !== end) {
            var n = node.nextSibling;
            container.insertBefore(node, before);
            node = n;
        }
    };
    /* unused harmony export reparentNodes */

    /**
     * Removes nodes, starting from `startNode` (inclusive) to `endNode`
     * (exclusive), from `container`.
     */
    var removeNodes = function removeNodes(container, startNode) {
        var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var node = startNode;
        while (node !== endNode) {
            var n = node.nextSibling;
            container.removeChild(node);
            node = n;
        }
    };
    /* unused harmony export removeNodes */

    //# sourceMappingURL=lit-html.js.map

    /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__boot_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__boot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__boot_js__);
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    // unique global id for deduping mixins.
    var dedupeId = 0;

    /**
     * @constructor
     * @extends {Function}
     */
    function MixinFunction() {}
    /** @type {(WeakMap | undefined)} */
    MixinFunction.prototype.__mixinApplications;
    /** @type {(Object | undefined)} */
    MixinFunction.prototype.__mixinSet;

    /* eslint-disable valid-jsdoc */
    /**
     * Wraps an ES6 class expression mixin such that the mixin is only applied
     * if it has not already been applied its base argument. Also memoizes mixin
     * applications.
     *
     * @template T
     * @param {T} mixin ES6 class expression mixin to wrap
     * @return {T}
     * @suppress {invalidCasts}
     */
    var dedupingMixin = function dedupingMixin(mixin) {
        var mixinApplications = /** @type {!MixinFunction} */mixin.__mixinApplications;
        if (!mixinApplications) {
            mixinApplications = new WeakMap();
            /** @type {!MixinFunction} */mixin.__mixinApplications = mixinApplications;
        }
        // maintain a unique id for each mixin
        var mixinDedupeId = dedupeId++;
        function dedupingMixin(base) {
            var baseSet = /** @type {!MixinFunction} */base.__mixinSet;
            if (baseSet && baseSet[mixinDedupeId]) {
                return base;
            }
            var map = mixinApplications;
            var extended = map.get(base);
            if (!extended) {
                extended = /** @type {!Function} */mixin(base);
                map.set(base, extended);
            }
            // copy inherited mixin set from the extended class, or the base class
            // NOTE: we avoid use of Set here because some browser (IE11)
            // cannot extend a base Set via the constructor.
            var mixinSet = Object.create( /** @type {!MixinFunction} */extended.__mixinSet || baseSet || null);
            mixinSet[mixinDedupeId] = true;
            /** @type {!MixinFunction} */extended.__mixinSet = mixinSet;
            return extended;
        }

        return (/** @type {T} */dedupingMixin
        );
    };
    /* harmony export (immutable) */__webpack_exports__["a"] = dedupingMixin;

    /* eslint-enable valid-jsdoc */

    /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = matchesSelector;
    /*
     *  @license
     *    Copyright 2017 Brigham Young University
     *
     *    Licensed under the Apache License, Version 2.0 (the "License");
     *    you may not use this file except in compliance with the License.
     *    You may obtain a copy of the License at
     *
     *        http://www.apache.org/licenses/LICENSE-2.0
     *
     *    Unless required by applicable law or agreed to in writing, software
     *    distributed under the License is distributed on an "AS IS" BASIS,
     *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *    See the License for the specific language governing permissions and
     *    limitations under the License.
     */

    function matchesSelector(el, selector) {
        var proto = Element.prototype;
        var actual = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (s) {
            var doc = this.document || this.ownerDocument;
            return doc.querySelectorAll(s).indexOf(this) !== -1;
        };

        return actual.call(el, selector);
    }

    /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html__ = __webpack_require__(34);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);

    var BYUFooterActionButton = function (_HTMLElement) {
        _inherits(BYUFooterActionButton, _HTMLElement);

        function BYUFooterActionButton() {
            _classCallCheck(this, BYUFooterActionButton);

            var _this3 = _possibleConstructorReturn(this, (BYUFooterActionButton.__proto__ || Object.getPrototypeOf(BYUFooterActionButton)).call(this));

            _this3.attachShadow({ mode: 'open' });
            return _this3;
        }

        _createClass(BYUFooterActionButton, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-footer-action-button', __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html___default.a);
            }
        }]);

        return BYUFooterActionButton;
    }(HTMLElement);

    window.customElements.define('byu-footer-action-button', BYUFooterActionButton);
    window.BYUFooterActionButton = BYUFooterActionButton;

    /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html__ = __webpack_require__(35);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);

    var BYUFooterColumn = function (_HTMLElement2) {
        _inherits(BYUFooterColumn, _HTMLElement2);

        function BYUFooterColumn() {
            _classCallCheck(this, BYUFooterColumn);

            var _this4 = _possibleConstructorReturn(this, (BYUFooterColumn.__proto__ || Object.getPrototypeOf(BYUFooterColumn)).call(this));

            _this4.attachShadow({ mode: 'open' });
            return _this4;
        }

        _createClass(BYUFooterColumn, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-footer-column', __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html___default.a);
            }
        }]);

        return BYUFooterColumn;
    }(HTMLElement);

    window.customElements.define('byu-footer-column', BYUFooterColumn);
    window.BYUFooterColumn = BYUFooterColumn;

    /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_footer_html__ = __webpack_require__(36);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_footer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);

    var ATTR_FULL_WIDTH = 'full-width';
    var ATTR_MAX_WIDTH = 'max-width';
    var DEFAULT_MAX_WIDTH = '1200px';

    var BYUFooter = function (_HTMLElement3) {
        _inherits(BYUFooter, _HTMLElement3);

        function BYUFooter() {
            _classCallCheck(this, BYUFooter);

            var _this5 = _possibleConstructorReturn(this, (BYUFooter.__proto__ || Object.getPrototypeOf(BYUFooter)).call(this));

            _this5.attachShadow({ mode: 'open' });
            return _this5;
        }

        _createClass(BYUFooter, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var component = this;
                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](component, 'byu-footer', __WEBPACK_IMPORTED_MODULE_0__byu_footer_html___default.a, function () {
                    // always show the current year in the copyright message
                    var currentYear = component.shadowRoot.querySelector("#currentYear");
                    currentYear.innerHTML = new Date().getFullYear();

                    var header = document.querySelector('byu-header');
                    var observer = new MutationObserver(function (mutations) {
                        component.updateWithHeaderAttributes(header);
                    });

                    // configuration of the observer:
                    var config = { attributes: true };
                    observer.observe(header, config);
                    component.updateWithHeaderAttributes(header); // run it once to get the initial values
                });
            }
        }, {
            key: 'updateWithHeaderAttributes',
            value: function updateWithHeaderAttributes(header) {

                // check the header for full-width or max-width attributes
                if (header.hasAttribute(ATTR_FULL_WIDTH)) {
                    this.setAttribute(ATTR_FULL_WIDTH, '');
                } else {
                    this.removeAttribute(ATTR_FULL_WIDTH);
                }

                var w = DEFAULT_MAX_WIDTH;
                if (header.hasAttribute(ATTR_MAX_WIDTH)) {
                    w = header.getAttribute(ATTR_MAX_WIDTH);
                }
                this.setAttribute(ATTR_MAX_WIDTH, w);

                var needsWidthSetting = this.shadowRoot.querySelectorAll('.needs-width-setting');
                for (var i = 0; i < needsWidthSetting.length; i++) {
                    needsWidthSetting[i].style.maxWidth = w;
                    needsWidthSetting[i].style.maxWidth = w;
                }
            }
        }]);

        return BYUFooter;
    }(HTMLElement);

    window.customElements.define('byu-footer', BYUFooter);
    window.BYUFooter = BYUFooter;

    /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_header_scss__ = __webpack_require__(27);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_header_scss__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__polymer_lit_element__ = __webpack_require__(16);

    var DEFAULT_MOBILE_MAX = '1023px';

    var ByuHeader = function (_WEBPACK_IMPORTED_MO) {
        _inherits(ByuHeader, _WEBPACK_IMPORTED_MO);

        function ByuHeader() {
            _classCallCheck(this, ByuHeader);

            return _possibleConstructorReturn(this, (ByuHeader.__proto__ || Object.getPrototypeOf(ByuHeader)).call(this));
        }

        _createClass(ByuHeader, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                _get(ByuHeader.prototype.__proto__ || Object.getPrototypeOf(ByuHeader.prototype), 'connectedCallback', this).call(this);
                console.log('initial mobileMaxWidth', this.mobileMaxWidth);
                // this.isMobile = false;
                // this.mobileMaxWidth = DEFAULT_MOBILE_MAX;
                console.log('m-m-w', this.getAttribute('mobile-max-width'));
            }
        }, {
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(name, old, value, namespace) {
                console.log('attrChanged', name, old, value, namespace);
                _get(ByuHeader.prototype.__proto__ || Object.getPrototypeOf(ByuHeader.prototype), 'attributeChangedCallback', this).call(this, name, old, value, namespace);
            }
        }, {
            key: 'ready',
            value: function ready() {
                console.log('before ready mmw', this.mobileMaxWidth);
                _get(ByuHeader.prototype.__proto__ || Object.getPrototypeOf(ByuHeader.prototype), 'ready', this).call(this);
                console.log('after ready mmw', this.mobileMaxWidth);
            }
        }, {
            key: '_render',
            value: function _render(props) {
                console.log('_render', props, this.mobileMaxWidth);
                return __WEBPACK_IMPORTED_MODULE_1__polymer_lit_element__["b" /* html */](_templateObject, __WEBPACK_IMPORTED_MODULE_0__byu_header_scss__, props.mobileMaxWidth, props.isMobile);
            }
        }], [{
            key: 'properties',
            get: function get() {
                console.log('static props');
                return {
                    mobileMaxWidth: String,
                    fullWidth: Boolean,
                    isMobile: Boolean
                };
            }
        }]);

        return ByuHeader;
    }(__WEBPACK_IMPORTED_MODULE_1__polymer_lit_element__["a" /* LitElement */]);

    customElements.define('byu-header', ByuHeader);

    /***/
},
/* 10 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_menu_html__ = __webpack_require__(37);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_menu_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_menu_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__active_styles_scss__ = __webpack_require__(28);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__active_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__active_styles_scss__);

    var ATTR_ACTIVE_SELECTOR = "active-selector";
    var DEFAULT_ACTIVE_SELECTOR = ".active";

    var BYUMenu = function (_HTMLElement4) {
        _inherits(BYUMenu, _HTMLElement4);

        _createClass(BYUMenu, [{
            key: 'activeSelector',
            get: function get() {
                return this.getAttribute(ATTR_ACTIVE_SELECTOR) || DEFAULT_ACTIVE_SELECTOR;
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_ACTIVE_SELECTOR, val);
                } else {
                    this.setAttribute(ATTR_ACTIVE_SELECTOR, DEFAULT_ACTIVE_SELECTOR);
                }
            }
        }, {
            key: 'showMore',
            get: function get() {
                return isShowingMoreMenu(this);
            },
            set: function set(show) {
                var el = this.shadowRoot.querySelector('.byu-menu-more-menu');
                if (show && !isShowingMoreMenu(this)) enableHideClick(this);
                toggleClass(el, 'byu-menu-more-expanded', show);
            }
        }]);

        function BYUMenu() {
            _classCallCheck(this, BYUMenu);

            // always call super first
            var _this7 = _possibleConstructorReturn(this, (BYUMenu.__proto__ || Object.getPrototypeOf(BYUMenu)).call(this));

            _this7.attachShadow({ mode: 'open' });
            return _this7;
        }

        _createClass(BYUMenu, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                render(this, true);
            }
        }, {
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(attr, oldValue, newValue) {
                switch (attr) {
                    case ATTR_ACTIVE_SELECTOR:
                        render(this, false);
                        return;
                }
            }
        }, {
            key: '_menuSlot',
            get: function get() {
                return this.shadowRoot.querySelector('#byu-menu-items');
            }
        }, {
            key: '_menuMoreSlot',
            get: function get() {
                return this.shadowRoot.querySelector('#byu-menu-more-slot');
            }
        }], [{
            key: 'observedAttributes',
            get: function get() {
                return [ATTR_ACTIVE_SELECTOR];
            }
        }]);

        return BYUMenu;
    }(HTMLElement);

    function render(component, force) {
        var activeSelector = component.activeSelector;
        if (!force && activeSelector === component._renderedActiveSelector) {
            return;
        }

        var css = __WEBPACK_IMPORTED_MODULE_2__active_styles_scss___default.a.toString().replace('__byu-menu-active-placeholder__', activeSelector);
        var tmpl = '<style>' + css + '</style>' + __WEBPACK_IMPORTED_MODULE_0__byu_menu_html___default.a;

        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](component, 'byu-menu', tmpl, function () {
            component._renderedActiveSelector = activeSelector;
            updateMoreMenuState(component);
            addSlotListeners(component);
            // when the more button is clicked then show the more menu
            component.shadowRoot.querySelector('.byu-menu-more').addEventListener('click', function () {
                component.showMore = true;
            });
        });
    }

    function addSlotListeners(component) {
        component.shadowRoot.querySelector('slot').addEventListener('slotchange', function (e) {
            //Run on microtask timing to let polyfilled shadow DOM changes to propagate
            setTimeout(function () {
                return function () {
                    updateMoreMenuState(component);
                };
            });
        });
    }

    function enableHideClick(component) {

        var fn = function fn() {
            document.removeEventListener('click', fn);
            component.showMore = false;
        };

        setTimeout(function () {
            document.addEventListener('click', fn);
        });
    }

    function hasClass(el, className) {
        var classes = el.className.split(/ +/);
        return classes.indexOf(className) !== -1;
    }

    function isShowingMoreMenu(component) {
        return hasClass(component.shadowRoot.querySelector('.byu-menu-more-menu'), 'byu-menu-more-expanded');
    }

    function toggleClass(el, className, value) {
        var classes = el.className.split(/ +/);
        var index = classes.indexOf(className);
        var exists = index !== -1;
        var setTo = arguments.length > 2 ? arguments[2] : !exists;
        if (setTo && !exists) {
            classes.push(className);
        } else if (!setTo && exists) {
            classes.splice(index, 1);
        }
        el.className = classes.join(' ');
    }

    function updateMoreMenuState(component) {
        var children = component.shadowRoot.querySelector('.byu-menu-items').assignedNodes();
        var moreChildren = component.shadowRoot.querySelector('.byu-menu-more-slot').assignedNodes();
        var filteredChildren = children.filter(function (node) {
            return node instanceof HTMLElement;
        });
        var filteredMoreChildren = moreChildren.filter(function (node) {
            return node instanceof HTMLElement;
        });
        var length = filteredChildren.length + filteredMoreChildren.length;
        var hasOverflow = length > 6;
        var nav = component.shadowRoot.querySelector('.outer-nav');

        if (nav) toggleClass(nav, 'byu-menu-more-visible', hasOverflow);

        if (hasOverflow) {
            for (var i = 5; i < filteredChildren.length; i++) {
                filteredChildren[i].setAttribute('slot', 'more');
            }
        } else if (length === 6) {
            filteredChildren[5].setAttribute('slot', '');
        }

        if (length < 4) {
            console.log(length);
            component.setAttribute('left-align', '');
        } else {
            component.removeAttribute('left-align');
        }
    }

    window.customElements.define('byu-menu', BYUMenu);
    window.BYUMenu = BYUMenu;

    /***/
},
/* 11 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */

    var _DEFAULT_ACTION_TARGE;

    var __WEBPACK_IMPORTED_MODULE_0__byu_search_html__ = __webpack_require__(38);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_search_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_search_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);
    /**
     *  @license
     *    Copyright 2016 Brigham Young University
     *
     *    Licensed under the Apache License, Version 2.0 (the "License");
     *    you may not use this file except in compliance with the License.
     *    You may obtain a copy of the License at
     *
     *        http://www.apache.org/licenses/LICENSE-2.0
     *
     *    Unless required by applicable law or agreed to in writing, software
     *    distributed under the License is distributed on an "AS IS" BASIS,
     *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *    See the License for the specific language governing permissions and
     *    limitations under the License.
     **/

    var CLASS_SELECTED_INPUT = '__byu-search-selected-input';

    var ATTR_OLD_SEARCH_HANDLER = 'onsearch';
    var ATTR_SEARCH_HANDLER = 'onbyusearch';
    var ATTR_SEARCH_INPUT_SELECTOR = 'search-input-selector';
    var ATTR_ACTION = 'action';
    var ATTR_ACTION_TARGET = 'action-target';

    var ACTION_SUBMIT_FORM = 'submit-form';
    var ACTION_CLICK = 'click';
    var ACTION_NAVIGATE = 'navigate';

    var DEFAULT_ACTION_TARGET_SUBMIT_FORM = 'form';
    var DEFAULT_ACTION_TARGET_CLICK = 'button, input[type="submit"], input[type="button"]';

    var EVENT_TYPE = 'byu-search';

    var DEFAULT_ACTION_TARGET = (_DEFAULT_ACTION_TARGE = {}, _defineProperty(_DEFAULT_ACTION_TARGE, ACTION_SUBMIT_FORM, DEFAULT_ACTION_TARGET_SUBMIT_FORM), _defineProperty(_DEFAULT_ACTION_TARGE, ACTION_CLICK, DEFAULT_ACTION_TARGET_CLICK), _DEFAULT_ACTION_TARGE);

    var DEFAULT_SEARCH_INPUT_SELECTOR = 'input[type="search"], input[type="text"]';

    var ByuSearch = function (_HTMLElement5) {
        _inherits(ByuSearch, _HTMLElement5);

        function ByuSearch() {
            _classCallCheck(this, ByuSearch);

            // always call super first
            var _this8 = _possibleConstructorReturn(this, (ByuSearch.__proto__ || Object.getPrototypeOf(ByuSearch)).call(this));

            _this8.attachShadow({ mode: 'open' });
            return _this8;
        }

        _createClass(ByuSearch, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this9 = this;

                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-search', __WEBPACK_IMPORTED_MODULE_0__byu_search_html___default.a, function () {
                    _this9._initialized = true;

                    _this9._input = lookupAndConfigureInputElement(_this9, _this9.searchInputSelector);

                    setupButtonSearchDispatcher(_this9);
                    setupSearchListeners(_this9);

                    setupSlotListener(_this9);
                });
            }
        }, {
            key: 'disconnectedCallback',
            value: function disconnectedCallback() {
                if (this._input) {
                    teardownInputElement(this, this._input);
                }

                teardownSearchListeners(this);
            }
        }, {
            key: 'search',
            value: function search() {
                var el = this._input;
                if (!el) {
                    throw new Error('Unable to perform search; no search element matching the selector \'' + this.searchInputSelector + '\' can be found!');
                }
                var value = el.value;
                if (!value) return;

                var event = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["b" /* createEvent */](EVENT_TYPE, { search: value });

                var cancelled = !this.dispatchEvent(event);
                if (cancelled) return;

                if (this.action) {
                    runPredefinedAction(this, value);
                }
            }
        }, {
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(attr, oldValue, newValue) {
                if (!this._initialized) return;
                switch (attr) {
                    case ATTR_SEARCH_INPUT_SELECTOR:
                        if (this._input) {
                            teardownInputElement(this, this._input);
                        }

                        this._input = lookupAndConfigureInputElement(this, newValue);

                        return;
                    //All other attrs are lazily looked up, as needed.
                }
            }
        }, {
            key: 'onbyusearch',
            get: function get() {
                return this.getAttribute(ATTR_SEARCH_HANDLER);
            },
            set: function set(value) {
                this.setAttribute(ATTR_SEARCH_HANDLER, value);
            }
        }, {
            key: 'onsearch',
            get: function get() {
                return this.getAttribute(ATTR_OLD_SEARCH_HANDLER);
            },
            set: function set(value) {
                this.setAttribute(ATTR_OLD_SEARCH_HANDLER, value);
            }
        }, {
            key: 'searchInputSelector',
            set: function set(value) {
                this.setAttribute(ATTR_SEARCH_INPUT_SELECTOR, value);
            },
            get: function get() {
                return this.getAttribute(ATTR_SEARCH_INPUT_SELECTOR) || DEFAULT_SEARCH_INPUT_SELECTOR;
            }
        }, {
            key: 'action',
            set: function set(value) {
                this.setAttribute(ATTR_ACTION, value);
            },
            get: function get() {
                //Defaults to null
                return this.getAttribute(ATTR_ACTION);
            }
        }, {
            key: 'actionTarget',
            set: function set(value) {
                this.setAttribute(ATTR_ACTION_TARGET, value);
            },
            get: function get() {
                //Default depends on action target value
                return this.getAttribute(ATTR_ACTION_TARGET) || defaultActionTarget(this.action);
            }
        }, {
            key: '_searchSlot',
            get: function get() {
                return this.shadowRoot.querySelector('#search');
            }
        }], [{
            key: 'observedAttributes',
            get: function get() {
                return [ATTR_SEARCH_INPUT_SELECTOR];
            }
        }]);

        return ByuSearch;
    }(HTMLElement);

    window.customElements.define('byu-search', ByuSearch);
    window.ByuSearch = ByuSearch;

    function setupSlotListener(search) {
        search._searchSlot.addEventListener('slotchange', function (e) {
            handleSlotChange(search, e);
        });
    }

    function handleSlotChange(search, event) {
        var oldInput = search._input;
        var newInput = lookupSearchInput(search, search.searchInputSelector);

        if (oldInput === newInput) return;

        search._input = newInput;

        if (oldInput) {
            teardownInputElement(search, oldInput);
        }
        if (newInput) {
            setupInputElement(search, newInput);
        } else {
            console.error('[byu-search] WARNING! Unable to find a search input element using the selector \'' + search.searchInputSelector + '\' on ', search);
        }
    }

    function lookupSearchInput(search, selector) {
        return __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, selector);
    }

    function lookupAndConfigureInputElement(search, selector) {
        var input = lookupSearchInput(search, selector);

        if (input) {
            setupInputElement(search, input);
        } else {
            console.error('[byu-search] WARNING! Unable to find a search input element using the selector \'' + selector + '\' on ', search);
        }
        return input;
    }

    function setupInputElement(search, input) {
        applyStyleHelpers(search, input);
        applyA11yHelpers(search, input);
        setupEnterKeySearchDispatcher(search, input);
    }

    function teardownInputElement(search, input) {
        removeStyleHelpers(search, input);
        removeA11yHelpers(search, input);
        teardownEnterKeySearchDispatcher(search, input);
    }

    function runPredefinedAction(search, value) {
        var action = search.action;

        switch (action) {
            case ACTION_SUBMIT_FORM:
                runSubmitFormAction(search, value);
                break;
            case ACTION_CLICK:
                runClickAction(search, value);
                break;
            case ACTION_NAVIGATE:
                runNavigateAction(search, value);
                break;
            default:
                throw new Error('Invalid value for ' + ATTR_ACTION + ': \'' + action + '\'');
        }
    }

    function runSubmitFormAction(search, value) {
        var target = search.actionTarget;

        var form = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, target);

        if (!form) {
            throw new Error('Unable to find target for \'submit-form\' action using selector \'' + target + '\'');
        }

        if (!(form instanceof HTMLFormElement)) {
            throw new Error('Element found by selector \'' + target + '\' must be a <form>, but was \'' + form.localName + '\'');
        }

        form.submit();
    }

    function runClickAction(search, value) {
        var target = search.actionTarget;

        var button = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, target);

        if (!button) {
            throw new Error('Unable to find target for \'click\' action using selector \'' + target + '\'');
        }

        button.click();
    }

    function runNavigateAction(search, value) {
        var target = search.actionTarget;

        if (!target) {
            throw new Error('When using action="navigate", you must specify an action-target');
        }

        if (target.indexOf('${search}')) {
            console.warn('[byu-search] WARNING: Using action="navigate" with a target that does not contain ${search} will not include the search terms in the URL.', search);
        }

        window.location.assign(target.replace('${search}', window.encodeURIComponent(value)));
    }

    function applyStyleHelpers(search, input) {
        input.classList.add(CLASS_SELECTED_INPUT);
    }

    function removeStyleHelpers(search, input) {
        input.classList.remove(CLASS_SELECTED_INPUT);
    }

    // For Accessibility, it's good for us to have a title and placeholder set. So, if there isn't one, we'll set it.
    function applyA11yHelpers(search, input) {
        if (input.title && input.placeholder) return;

        var helped = [];

        if (!input.title && !input.placeholder) {
            input.title = input.placeholder = 'Search';
            helped.push('title', 'placeholder');
        } else if (input.title) {
            input.placeholder = input.title;
            helped.push('placeholder');
        } else {
            input.title = input.placeholder;
            helped.push('title');
        }

        input.__byu_search_a11yHelpersApplied = helped;
    }

    function removeA11yHelpers(search, input) {
        var helpers = input.__byu_search_a11yHelpersApplied;
        if (!helpers) return;

        if (helpers.includes('title')) {
            input.title = null;
        }
        if (helpers.includes('placeholder')) {
            input.placeholder = null;
        }
        delete input.__byu_search_a11yHelpersApplied;
    }

    function setupButtonSearchDispatcher(search) {
        search.shadowRoot.querySelector('#search-button').addEventListener('click', function () {
            search.search();
        });
    }

    function setupEnterKeySearchDispatcher(search, input) {
        var keypress = input.__byu_search_keyObserver = function (e) {
            if (e.keyCode === 13) {
                search.search();
            }
        };
        input.addEventListener('keypress', keypress, false);
    }

    function teardownEnterKeySearchDispatcher(search, input) {
        var keypress = input.__byu_search_keyObserver;
        if (keypress) input.removeEventListener('keypress', keypress, false);
    }

    function setupSearchListeners(search) {
        var handler = search.__onbyusearchHandler = function (event) {
            var name = search.onbyusearch;
            if (!name) return;
            var handler = window[name];
            if (!handler) {
                throw new Error('Unable to find a global function named \'' + name + '\'');
            }
            handler.call(search, event);
        };

        search.addEventListener(EVENT_TYPE, handler, false);

        var legacyHandler = search.__onsearchLegacyHandler = function (event) {
            var name = search.onsearch;
            if (!name) return;

            var handler = window[name];
            if (!handler) {
                throw new Error('Unable to find a global function named \'' + name + '\'');
            }
            handler.call(search, event.detail.search, event);
        };

        search.addEventListener(EVENT_TYPE, legacyHandler, false);
    }

    function teardownSearchListeners(search) {
        if (search.__onbyusearchHandler) {
            search.removeEventListener(EVENT_TYPE, search.__onbyusearchHandler, false);
        }
        if (search.__onsearchLegacyHandler) {
            search.removeEventListener(EVENT_TYPE, search.__onsearchLegacyHandler, false);
        }
    }

    function defaultActionTarget(action) {
        if (!action) return null;
        return DEFAULT_ACTION_TARGET[action];
    }

    /***/
},
/* 12 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html__ = __webpack_require__(39);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);

    var SOCIAL_NAMES = {
        'facebook': 'Facebook',
        'twitter': 'Twitter',
        'instagram': 'Instagram',
        'youtube': 'YouTube',
        'pinterest': 'Pinterest',
        'google-plus': 'Google+',
        'googleplus': 'Google+',
        'gplus': 'Google+',
        'linkedin': 'LinkedIn',
        'rss': 'RSS',
        'snapchat': 'Snapchat',
        'podcast': 'Podcast'
    };

    var SOCIAL_IDS = Object.getOwnPropertyNames(SOCIAL_NAMES);

    var BYUSocialMediaLinks = function (_HTMLElement6) {
        _inherits(BYUSocialMediaLinks, _HTMLElement6);

        function BYUSocialMediaLinks() {
            _classCallCheck(this, BYUSocialMediaLinks);

            var _this10 = _possibleConstructorReturn(this, (BYUSocialMediaLinks.__proto__ || Object.getPrototypeOf(BYUSocialMediaLinks)).call(this));

            _this10.attachShadow({ mode: 'open' });
            return _this10;
        }

        _createClass(BYUSocialMediaLinks, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this11 = this;

                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-social-media-links', __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html___default.a, function () {
                    var main = _this11.shadowRoot.querySelector('#social-main');
                    applyTitleToChildren(main);

                    SOCIAL_IDS.forEach(function (id) {
                        var slot = _this11.shadowRoot.querySelector('#social-deprecated-' + id);
                        if (!slot) return;

                        applyTitleToChildren(slot);
                        //We're still supporting the old way, but it's deprecated and people should move on.
                        if (slot.assignedNodes().length > 0) {
                            console.log('[WARNING] byu-social-media-links: deprecated usage of slot="' + id + '". Replace with class="' + id + '":', _this11);
                        }
                    });
                });
            }
        }]);

        return BYUSocialMediaLinks;
    }(HTMLElement);

    window.customElements.define('byu-social-media-links', BYUSocialMediaLinks);
    window.BYUSocialMediaLinks = BYUSocialMediaLinks;

    function applyTitleToChildren(slotElement) {
        var kids = slotElement.assignedNodes();
        kids.filter(function (k) {
            return k instanceof HTMLElement;
        })
        //Only grab the ones that don't already have a title
        .filter(function (k) {
            return !k.title;
        }).forEach(function (kid) {
            var kind = detectSocialKind(kid);
            if (!kind) {
                return;
            }
            //The spaces are a hack to avoid triggering adblockplus.
            kid.title = ' ' + SOCIAL_NAMES[kind] + ' ';
        });
    }

    function detectSocialKind(element) {
        if (element.hasAttribute('slot')) return element.getAttribute('slot');
        for (var i = 0; i < SOCIAL_IDS.length; i++) {
            var id = SOCIAL_IDS[i];
            if (element.classList.contains(id)) {
                return id;
            }
        }
        return null;
    }

    /***/
},
/* 13 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html__ = __webpack_require__(40);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_user_info_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);
    /**
     * Created by ThatJoeMoore on 11/7/16.
     */

    var ByuUserInfo = function (_HTMLElement7) {
        _inherits(ByuUserInfo, _HTMLElement7);

        function ByuUserInfo() {
            _classCallCheck(this, ByuUserInfo);

            var _this12 = _possibleConstructorReturn(this, (ByuUserInfo.__proto__ || Object.getPrototypeOf(ByuUserInfo)).call(this));

            var shadowRoot = _this12.attachShadow({ mode: 'open' });

            return _this12;
        }

        _createClass(ByuUserInfo, [{
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(attr, oldval, newval) {
                // switch (attr) {
                //     case 'login-url':
                //         this.loginUrl = newval;
                //         break;
                // }
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this13 = this;

                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-user-info', __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html___default.a, function () {
                    _this13._addSlotListeners();
                    _this13._addAriaAttributes();
                });
            }
        }, {
            key: '_addSlotListeners',
            value: function _addSlotListeners() {
                var _this14 = this;

                this._setHasUser();
                var userSlot = this.shadowRoot.querySelector('#user-name');
                userSlot.addEventListener('slotchange', function (e) {
                    _this14._setHasUser();
                });
            }
        }, {
            key: '_setHasUser',
            value: function _setHasUser() {
                var userSlot = this.shadowRoot.querySelector('#user-name');
                if (userSlot.assignedNodes().length > 0) {
                    this.setAttribute('has-user', '');
                } else {
                    this.removeAttribute('has-user');
                }
            }
        }, {
            key: '_addAriaAttributes',
            value: function _addAriaAttributes() {
                this.setAttribute('role', 'button');
            }
        }], [{
            key: 'observedAttributes',
            get: function get() {
                // return ['login-url'];
            }
        }]);

        return ByuUserInfo;
    }(HTMLElement);

    window.customElements.define('byu-user-info', ByuUserInfo);
    window.ByuUserInfo = ByuUserInfo;

    /***/
},
/* 14 */
/***/function (module, exports) {

    module.exports = { "name": "byuweb-components", "version": "1.2.4", "description": "Components to be used for byu web pages and applications.", "main": "", "scripts": { "build": "gulp build", "serve": "gulp watch", "test": "echo \"Error: no test specified\" && exit 1" }, "private": true, "author": "", "license": "Apache-2.0", "dependencies": { "@polymer/lit-element": "^0.5.1", "byu-web-component-utils": "^0.4.2", "deep-equal": "^1.0.1", "sass-loader": "^6.0.6" }, "devDependencies": { "browser-sync": "^2.18.6", "byu-web-component-build": "^0.2.3", "git-revision-webpack-plugin": "^2.5.1", "gulp": "^3.9.1", "gulp-rename": "^1.2.2" }

        /***/ };
},
/* 15 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_header_lit_byu_header_js__ = __webpack_require__(9);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_menu_byu_menu_js__ = __webpack_require__(10);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__byu_search_byu_search_js__ = __webpack_require__(11);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__byu_user_info_byu_user_info_js__ = __webpack_require__(13);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__byu_footer_byu_footer_js__ = __webpack_require__(8);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__byu_footer_column_byu_footer_column_js__ = __webpack_require__(7);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_byu_footer_action_button_js__ = __webpack_require__(6);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_byu_social_media_links_js__ = __webpack_require__(12);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__package_json__ = __webpack_require__(14);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__package_json__);
    /**
     * Created by ThatJoeMoore on 2/18/17
     */

    /*
     * Header Bits
     */
    // import './byu-header/byu-header.js';


    /*
     * Footer Bits
     */

    console.log('--------------- Starting byu-theme-components ' + __WEBPACK_IMPORTED_MODULE_8__package_json__["version"] + ' ---------------');

    /***/
},
/* 16 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* unused harmony export renderAttributes */
    /* unused harmony export classString */
    /* unused harmony export styleString */
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__polymer_polymer_lib_mixins_properties_mixin_js__ = __webpack_require__(18);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__polymer_polymer_lib_utils_case_map_js__ = __webpack_require__(20);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lit_html_lib_shady_render_js__ = __webpack_require__(42);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lit_html_lib_lit_extended_js__ = __webpack_require__(41);
    /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return __WEBPACK_IMPORTED_MODULE_3_lit_html_lib_lit_extended_js__["a"];
    });

    /**
     * Renders attributes to the given element based on the `attrInfo` object where
     * boolean values are added/removed as attributes.
     * @param element Element on which to set attributes.
     * @param attrInfo Object describing attributes.
     */
    function renderAttributes(element, attrInfo) {
        for (var a in attrInfo) {
            var v = attrInfo[a] === true ? '' : attrInfo[a];
            if (v || v === '' || v === 0) {
                if (element.getAttribute(a) !== v) {
                    element.setAttribute(a, v);
                }
            } else if (element.hasAttribute(a)) {
                element.removeAttribute(a);
            }
        }
    }
    /**
     * Returns a string of css class names formed by taking the properties
     * in the `classInfo` object and appending the property name to the string of
     * class names if the property value is truthy.
     * @param classInfo
     */
    function classString(classInfo) {
        var o = [];
        for (var name in classInfo) {
            var v = classInfo[name];
            if (v) {
                o.push(name);
            }
        }
        return o.join(' ');
    }
    /**
     * Returns a css style string formed by taking the properties in the `styleInfo`
     * object and appending the property name (dash-cased) colon the
     * property value. Properties are separated by a semi-colon.
     * @param styleInfo
     */
    function styleString(styleInfo) {
        var o = [];
        for (var name in styleInfo) {
            var v = styleInfo[name];
            if (v || v === 0) {
                o.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__polymer_polymer_lib_utils_case_map_js__["a" /* camelToDashCase */])(name) + ': ' + v);
            }
        }
        return o.join('; ');
    }

    var LitElement = function (_webpack_require__$i) {
        _inherits(LitElement, _webpack_require__$i);

        function LitElement() {
            _classCallCheck(this, LitElement);

            var _this15 = _possibleConstructorReturn(this, (LitElement.__proto__ || Object.getPrototypeOf(LitElement)).apply(this, arguments));

            _this15.__renderComplete = null;
            _this15.__resolveRenderComplete = null;
            _this15.__isInvalid = false;
            _this15.__isChanging = false;
            return _this15;
        }
        /**
         * Override which sets up element rendering by calling* `_createRoot`
         * and `_firstRendered`.
         */


        _createClass(LitElement, [{
            key: 'ready',
            value: function ready() {
                this._root = this._createRoot();
                _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), 'ready', this).call(this);
                this._firstRendered();
            }
            /**
             * Called after the element DOM is rendered for the first time.
             * Implement to perform tasks after first rendering like capturing a
             * reference to a static node which must be directly manipulated.
             * This should not be commonly needed. For tasks which should be performed
             * before first render, use the element constructor.
             */

        }, {
            key: '_firstRendered',
            value: function _firstRendered() {}
            /**
             * Implement to customize where the element's template is rendered by
             * returning an element into which to render. By default this creates
             * a shadowRoot for the element. To render into the element's childNodes,
             * return `this`.
             * @returns {Element|DocumentFragment} Returns a node into which to render.
             */

        }, {
            key: '_createRoot',
            value: function _createRoot() {
                return this.attachShadow({ mode: 'open' });
            }
            /**
             * Override which returns the value of `_shouldRender` which users
             * should implement to control rendering. If this method returns false,
             * _propertiesChanged will not be called and no rendering will occur even
             * if property values change or `_requestRender` is called.
             * @param _props Current element properties
             * @param _changedProps Changing element properties
             * @param _prevProps Previous element properties
             * @returns {boolean} Default implementation always returns true.
             */

        }, {
            key: '_shouldPropertiesChange',
            value: function _shouldPropertiesChange(_props, _changedProps, _prevProps) {
                var shouldRender = this._shouldRender(_props, _changedProps, _prevProps);
                if (!shouldRender && this.__resolveRenderComplete) {
                    this.__resolveRenderComplete(false);
                }
                return shouldRender;
            }
            /**
             * Implement to control if rendering should occur when property values
             * change or `_requestRender` is called. By default, this method always
             * returns true, but this can be customized as an optimization to avoid
             * rendering work when changes occur which should not be rendered.
             * @param _props Current element properties
             * @param _changedProps Changing element properties
             * @param _prevProps Previous element properties
             * @returns {boolean} Default implementation always returns true.
             */

        }, {
            key: '_shouldRender',
            value: function _shouldRender(_props, _changedProps, _prevProps) {
                return true;
            }
            /**
             * Override which performs element rendering by calling
             * `_render`, `_applyRender`, and finally `_didRender`.
             * @param props Current element properties
             * @param changedProps Changing element properties
             * @param prevProps Previous element properties
             */

        }, {
            key: '_propertiesChanged',
            value: function _propertiesChanged(props, changedProps, prevProps) {
                _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_propertiesChanged', this).call(this, props, changedProps, prevProps);
                var result = this._render(props);
                if (result && this._root !== undefined) {
                    this._applyRender(result, this._root);
                }
                this._didRender(props, changedProps, prevProps);
                if (this.__resolveRenderComplete) {
                    this.__resolveRenderComplete(true);
                }
            }
        }, {
            key: '_flushProperties',
            value: function _flushProperties() {
                this.__isChanging = true;
                this.__isInvalid = false;
                _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_flushProperties', this).call(this);
                this.__isChanging = false;
            }
            /**
             * Override which warns when a user attempts to change a property during
             * the rendering lifecycle. This is an anti-pattern and should be avoided.
             * @param property {string}
             * @param value {any}
             * @param old {any}
             */

        }, {
            key: '_shouldPropertyChange',
            value: function _shouldPropertyChange(property, value, old) {
                var change = _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_shouldPropertyChange', this).call(this, property, value, old);
                if (change && this.__isChanging) {
                    console.trace('Setting properties in response to other properties changing ' + ('considered harmful. Setting \'' + property + '\' from ') + ('\'' + this._getProperty(property) + '\' to \'' + value + '\'.'));
                }
                return change;
            }
            /**
             * Implement to describe the DOM which should be rendered in the element.
             * Ideally, the implementation is a pure function using only props to describe
             * the element template. The implementation must a `lit-html` TemplateResult.
             * By default this template is rendered into the element's shadowRoot.
             * This can be customized by implementing `_createRoot`. This method must be
             * implemented.
             * @param {*} _props Current element properties
             * @returns {TemplateResult} Must return a lit-html TemplateResult.
             */

        }, {
            key: '_render',
            value: function _render(_props) {
                throw new Error('_render() not implemented');
            }
            /**
             * Renders the given lit-html template `result` into the given `node`.
             * Implement to customize the way rendering is applied. This is should not
             * typically be needed and is provided for advanced use cases.
             * @param result {TemplateResult} `lit-html` template result to render
             * @param node {Element|DocumentFragment} node into which to render
             */

        }, {
            key: '_applyRender',
            value: function _applyRender(result, node) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lit_html_lib_shady_render_js__["a" /* render */])(result, node, this.localName);
            }
            /**
             * Called after element DOM has been rendered. Implement to
             * directly control rendered DOM. Typically this is not needed as `lit-html`
             * can be used in the `_render` method to set properties, attributes, and
             * event listeners. However, it is sometimes useful for calling methods on
             * rendered elements, like calling `focus()` on an element to focus it.
             * @param _props Current element properties
             * @param _changedProps Changing element properties
             * @param _prevProps Previous element properties
             */

        }, {
            key: '_didRender',
            value: function _didRender(_props, _changedProps, _prevProps) {}
            /**
             * Call to request the element to asynchronously re-render regardless
             * of whether or not any property changes are pending.
             */

        }, {
            key: '_requestRender',
            value: function _requestRender() {
                this._invalidateProperties();
            }
            /**
             * Override which provides tracking of invalidated state.
             */

        }, {
            key: '_invalidateProperties',
            value: function _invalidateProperties() {
                this.__isInvalid = true;
                _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_invalidateProperties', this).call(this);
            }
            /**
             * Returns a promise which resolves after the element next renders.
             * The promise resolves to `true` if the element rendered and `false` if the
             * element did not render.
             * This is useful when users (e.g. tests) need to react to the rendered state
             * of the element after a change is made.
             * This can also be useful in event handlers if it is desireable to wait
             * to send an event until after rendering. If possible implement the
             * `_didRender` method to directly respond to rendering within the
             * rendering lifecycle.
             */

        }, {
            key: 'renderComplete',
            get: function get() {
                var _this16 = this;

                if (!this.__renderComplete) {
                    this.__renderComplete = new Promise(function (resolve) {
                        _this16.__resolveRenderComplete = function (value) {
                            _this16.__resolveRenderComplete = _this16.__renderComplete = null;
                            resolve(value);
                        };
                    });
                    if (!this.__isInvalid && this.__resolveRenderComplete) {
                        Promise.resolve().then(function () {
                            return _this16.__resolveRenderComplete(false);
                        });
                    }
                }
                return this.__renderComplete;
            }
        }]);

        return LitElement;
    }(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__polymer_polymer_lib_mixins_properties_mixin_js__["a" /* PropertiesMixin */])(HTMLElement));
    /* harmony export (immutable) */

    __webpack_exports__["a"] = LitElement;

    //# sourceMappingURL=lit-element.js.map

    /***/
},
/* 17 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__utils_boot_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils_boot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_boot_js__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_mixin_js__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils_async_js__ = __webpack_require__(19);
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /** @const {!AsyncInterface} */
    var microtask = __WEBPACK_IMPORTED_MODULE_2__utils_async_js__["a" /* microTask */];

    /**
     * Element class mixin that provides basic meta-programming for creating one
     * or more property accessors (getter/setter pair) that enqueue an async
     * (batched) `_propertiesChanged` callback.
     *
     * For basic usage of this mixin, call `MyClass.createProperties(props)`
     * once at class definition time to create property accessors for properties
     * named in props, implement `_propertiesChanged` to react as desired to
     * property changes, and implement `static get observedAttributes()` and
     * include lowercase versions of any property names that should be set from
     * attributes. Last, call `this._enableProperties()` in the element's
     * `connectedCallback` to enable the accessors.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin for reacting to property changes from
     *   generated property accessors.
     */
    var PropertiesChanged = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_mixin_js__["a" /* dedupingMixin */])(function (superClass) {

        /**
         * @polymer
         * @mixinClass
         * @extends {superClass}
         * @implements {Polymer_PropertiesChanged}
         * @unrestricted
         */
        var PropertiesChanged = function (_superClass) {
            _inherits(PropertiesChanged, _superClass);

            _createClass(PropertiesChanged, [{
                key: '_createPropertyAccessor',
                //eslint-disable-line no-unused-vars

                /**
                 * Creates a setter/getter pair for the named property with its own
                 * local storage.  The getter returns the value in the local storage,
                 * and the setter calls `_setProperty`, which updates the local storage
                 * for the property and enqueues a `_propertiesChanged` callback.
                 *
                 * This method may be called on a prototype or an instance.  Calling
                 * this method may overwrite a property value that already exists on
                 * the prototype/instance by creating the accessor.
                 *
                 * @param {string} property Name of the property
                 * @param {boolean=} readOnly When true, no setter is created; the
                 *   protected `_setProperty` function must be used to set the property
                 * @return {void}
                 * @protected
                 */
                value: function _createPropertyAccessor(property, readOnly) {
                    this._addPropertyToAttributeMap(property);
                    if (!this.hasOwnProperty('__dataHasAccessor')) {
                        this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
                    }
                    if (!this.__dataHasAccessor[property]) {
                        this.__dataHasAccessor[property] = true;
                        this._definePropertyAccessor(property, readOnly);
                    }
                }

                /**
                 * Adds the given `property` to a map matching attribute names
                 * to property names, using `attributeNameForProperty`. This map is
                 * used when deserializing attribute values to properties.
                 *
                 * @param {string} property Name of the property
                 */

            }, {
                key: '_addPropertyToAttributeMap',
                value: function _addPropertyToAttributeMap(property) {
                    if (!this.hasOwnProperty('__dataAttributes')) {
                        this.__dataAttributes = Object.assign({}, this.__dataAttributes);
                    }
                    if (!this.__dataAttributes[property]) {
                        var attr = this.constructor.attributeNameForProperty(property);
                        this.__dataAttributes[attr] = property;
                    }
                }

                /**
                 * Defines a property accessor for the given property.
                 * @param {string} property Name of the property
                 * @param {boolean=} readOnly When true, no setter is created
                 * @return {void}
                 */

            }, {
                key: '_definePropertyAccessor',
                value: function _definePropertyAccessor(property, readOnly) {
                    Object.defineProperty(this, property, {
                        /* eslint-disable valid-jsdoc */
                        /** @this {PropertiesChanged} */
                        get: function get() {
                            return this._getProperty(property);
                        },

                        /** @this {PropertiesChanged} */
                        set: readOnly ? function () {} : function (value) {
                            this._setProperty(property, value);
                        }
                        /* eslint-enable */
                    });
                }
            }], [{
                key: 'createProperties',


                /**
                 * Creates property accessors for the given property names.
                 * @param {!Object} props Object whose keys are names of accessors.
                 * @return {void}
                 * @protected
                 */
                value: function createProperties(props) {
                    var proto = this.prototype;
                    for (var prop in props) {
                        // don't stomp an existing accessor
                        if (!(prop in proto)) {
                            proto._createPropertyAccessor(prop);
                        }
                    }
                }

                /**
                 * Returns an attribute name that corresponds to the given property.
                 * The attribute name is the lowercased property name. Override to
                 * customize this mapping.
                 * @param {string} property Property to convert
                 * @return {string} Attribute name corresponding to the given property.
                 *
                 * @protected
                 */

            }, {
                key: 'attributeNameForProperty',
                value: function attributeNameForProperty(property) {
                    return property.toLowerCase();
                }

                /**
                 * Override point to provide a type to which to deserialize a value to
                 * a given property.
                 * @param {string} name Name of property
                 *
                 * @protected
                 */

            }, {
                key: 'typeForProperty',
                value: function typeForProperty(name) {}
            }]);

            function PropertiesChanged() {
                _classCallCheck(this, PropertiesChanged);

                var _this17 = _possibleConstructorReturn(this, (PropertiesChanged.__proto__ || Object.getPrototypeOf(PropertiesChanged)).call(this));

                _this17.__dataEnabled = false;
                _this17.__dataReady = false;
                _this17.__dataInvalid = false;
                _this17.__data = {};
                _this17.__dataPending = null;
                _this17.__dataOld = null;
                _this17.__dataInstanceProps = null;
                _this17.__serializing = false;
                _this17._initializeProperties();
                return _this17;
            }

            /**
             * Lifecycle callback called when properties are enabled via
             * `_enableProperties`.
             *
             * Users may override this function to implement behavior that is
             * dependent on the element having its property data initialized, e.g.
             * from defaults (initialized from `constructor`, `_initializeProperties`),
             * `attributeChangedCallback`, or values propagated from host e.g. via
             * bindings.  `super.ready()` must be called to ensure the data system
             * becomes enabled.
             *
             * @return {void}
             * @public
             */


            _createClass(PropertiesChanged, [{
                key: 'ready',
                value: function ready() {
                    this.__dataReady = true;
                    this._flushProperties();
                }

                /**
                 * Initializes the local storage for property accessors.
                 *
                 * Provided as an override point for performing any setup work prior
                 * to initializing the property accessor system.
                 *
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_initializeProperties',
                value: function _initializeProperties() {
                    // Capture instance properties; these will be set into accessors
                    // during first flush. Don't set them here, since we want
                    // these to overwrite defaults/constructor assignments
                    for (var p in this.__dataHasAccessor) {
                        if (this.hasOwnProperty(p)) {
                            this.__dataInstanceProps = this.__dataInstanceProps || {};
                            this.__dataInstanceProps[p] = this[p];
                            delete this[p];
                        }
                    }
                }

                /**
                 * Called at ready time with bag of instance properties that overwrote
                 * accessors when the element upgraded.
                 *
                 * The default implementation sets these properties back into the
                 * setter at ready time.  This method is provided as an override
                 * point for customizing or providing more efficient initialization.
                 *
                 * @param {Object} props Bag of property values that were overwritten
                 *   when creating property accessors.
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_initializeInstanceProperties',
                value: function _initializeInstanceProperties(props) {
                    Object.assign(this, props);
                }

                /**
                 * Updates the local storage for a property (via `_setPendingProperty`)
                 * and enqueues a `_proeprtiesChanged` callback.
                 *
                 * @param {string} property Name of the property
                 * @param {*} value Value to set
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_setProperty',
                value: function _setProperty(property, value) {
                    if (this._setPendingProperty(property, value)) {
                        this._invalidateProperties();
                    }
                }

                /**
                 * Returns the value for the given property.
                 * @param {string} property Name of property
                 * @return {*} Value for the given property
                 * @protected
                 */

            }, {
                key: '_getProperty',
                value: function _getProperty(property) {
                    return this.__data[property];
                }

                /* eslint-disable no-unused-vars */
                /**
                 * Updates the local storage for a property, records the previous value,
                 * and adds it to the set of "pending changes" that will be passed to the
                 * `_propertiesChanged` callback.  This method does not enqueue the
                 * `_propertiesChanged` callback.
                 *
                 * @param {string} property Name of the property
                 * @param {*} value Value to set
                 * @param {boolean=} ext Not used here; affordance for closure
                 * @return {boolean} Returns true if the property changed
                 * @protected
                 */

            }, {
                key: '_setPendingProperty',
                value: function _setPendingProperty(property, value, ext) {
                    var old = this.__data[property];
                    var changed = this._shouldPropertyChange(property, value, old);
                    if (changed) {
                        if (!this.__dataPending) {
                            this.__dataPending = {};
                            this.__dataOld = {};
                        }
                        // Ensure old is captured from the last turn
                        if (this.__dataOld && !(property in this.__dataOld)) {
                            this.__dataOld[property] = old;
                        }
                        this.__data[property] = value;
                        this.__dataPending[property] = value;
                    }
                    return changed;
                }
                /* eslint-enable */

                /**
                 * Marks the properties as invalid, and enqueues an async
                 * `_propertiesChanged` callback.
                 *
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_invalidateProperties',
                value: function _invalidateProperties() {
                    var _this18 = this;

                    if (!this.__dataInvalid && this.__dataReady) {
                        this.__dataInvalid = true;
                        microtask.run(function () {
                            if (_this18.__dataInvalid) {
                                _this18.__dataInvalid = false;
                                _this18._flushProperties();
                            }
                        });
                    }
                }

                /**
                 * Call to enable property accessor processing. Before this method is
                 * called accessor values will be set but side effects are
                 * queued. When called, any pending side effects occur immediately.
                 * For elements, generally `connectedCallback` is a normal spot to do so.
                 * It is safe to call this method multiple times as it only turns on
                 * property accessors once.
                 *
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_enableProperties',
                value: function _enableProperties() {
                    if (!this.__dataEnabled) {
                        this.__dataEnabled = true;
                        if (this.__dataInstanceProps) {
                            this._initializeInstanceProperties(this.__dataInstanceProps);
                            this.__dataInstanceProps = null;
                        }
                        this.ready();
                    }
                }

                /**
                 * Calls the `_propertiesChanged` callback with the current set of
                 * pending changes (and old values recorded when pending changes were
                 * set), and resets the pending set of changes. Generally, this method
                 * should not be called in user code.
                 *
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_flushProperties',
                value: function _flushProperties() {
                    var props = this.__data;
                    var changedProps = this.__dataPending;
                    var old = this.__dataOld;
                    if (this._shouldPropertiesChange(props, changedProps, old)) {
                        this.__dataPending = null;
                        this.__dataOld = null;
                        this._propertiesChanged(props, changedProps, old);
                    }
                }

                /**
                 * Called in `_flushProperties` to determine if `_propertiesChanged`
                 * should be called. The default implementation returns true if
                 * properties are pending. Override to customize when
                 * `_propertiesChanged` is called.
                 * @param {!Object} currentProps Bag of all current accessor values
                 * @param {!Object} changedProps Bag of properties changed since the last
                 *   call to `_propertiesChanged`
                 * @param {!Object} oldProps Bag of previous values for each property
                 *   in `changedProps`
                 * @return {boolean} true if changedProps is truthy
                 */

            }, {
                key: '_shouldPropertiesChange',
                value: function _shouldPropertiesChange(currentProps, changedProps, oldProps) {
                    // eslint-disable-line no-unused-vars
                    return Boolean(changedProps);
                }

                /**
                 * Callback called when any properties with accessors created via
                 * `_createPropertyAccessor` have been set.
                 *
                 * @param {!Object} currentProps Bag of all current accessor values
                 * @param {!Object} changedProps Bag of properties changed since the last
                 *   call to `_propertiesChanged`
                 * @param {!Object} oldProps Bag of previous values for each property
                 *   in `changedProps`
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_propertiesChanged',
                value: function _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars


                /**
                 * Method called to determine whether a property value should be
                 * considered as a change and cause the `_propertiesChanged` callback
                 * to be enqueued.
                 *
                 * The default implementation returns `true` if a strict equality
                 * check fails. The method always returns false for `NaN`.
                 *
                 * Override this method to e.g. provide stricter checking for
                 * Objects/Arrays when using immutable patterns.
                 *
                 * @param {string} property Property name
                 * @param {*} value New property value
                 * @param {*} old Previous property value
                 * @return {boolean} Whether the property should be considered a change
                 *   and enqueue a `_proeprtiesChanged` callback
                 * @protected
                 */

            }, {
                key: '_shouldPropertyChange',
                value: function _shouldPropertyChange(property, value, old) {
                    return (
                        // Strict equality check
                        old !== value && (
                        // This ensures (old==NaN, value==NaN) always returns false
                        old === old || value === value)
                    );
                }

                /**
                 * Implements native Custom Elements `attributeChangedCallback` to
                 * set an attribute value to a property via `_attributeToProperty`.
                 *
                 * @param {string} name Name of attribute that changed
                 * @param {?string} old Old attribute value
                 * @param {?string} value New attribute value
                 * @param {?string} namespace Attribute namespace.
                 * @return {void}
                 * @suppress {missingProperties} Super may or may not implement the callback
                 */

            }, {
                key: 'attributeChangedCallback',
                value: function attributeChangedCallback(name, old, value, namespace) {
                    if (old !== value) {
                        this._attributeToProperty(name, value);
                    }
                    if (_get(PropertiesChanged.prototype.__proto__ || Object.getPrototypeOf(PropertiesChanged.prototype), 'attributeChangedCallback', this)) {
                        _get(PropertiesChanged.prototype.__proto__ || Object.getPrototypeOf(PropertiesChanged.prototype), 'attributeChangedCallback', this).call(this, name, old, value, namespace);
                    }
                }

                /**
                 * Deserializes an attribute to its associated property.
                 *
                 * This method calls the `_deserializeValue` method to convert the string to
                 * a typed value.
                 *
                 * @param {string} attribute Name of attribute to deserialize.
                 * @param {?string} value of the attribute.
                 * @param {*=} type type to deserialize to, defaults to the value
                 * returned from `typeForProperty`
                 * @return {void}
                 */

            }, {
                key: '_attributeToProperty',
                value: function _attributeToProperty(attribute, value, type) {
                    if (!this.__serializing) {
                        var map = this.__dataAttributes;
                        var property = map && map[attribute] || attribute;
                        this[property] = this._deserializeValue(value, type || this.constructor.typeForProperty(property));
                    }
                }

                /**
                 * Serializes a property to its associated attribute.
                 *
                 * @suppress {invalidCasts} Closure can't figure out `this` is an element.
                 *
                 * @param {string} property Property name to reflect.
                 * @param {string=} attribute Attribute name to reflect to.
                 * @param {*=} value Property value to refect.
                 * @return {void}
                 */

            }, {
                key: '_propertyToAttribute',
                value: function _propertyToAttribute(property, attribute, value) {
                    this.__serializing = true;
                    value = arguments.length < 3 ? this[property] : value;
                    this._valueToNodeAttribute( /** @type {!HTMLElement} */this, value, attribute || this.constructor.attributeNameForProperty(property));
                    this.__serializing = false;
                }

                /**
                 * Sets a typed value to an HTML attribute on a node.
                 *
                 * This method calls the `_serializeValue` method to convert the typed
                 * value to a string.  If the `_serializeValue` method returns `undefined`,
                 * the attribute will be removed (this is the default for boolean
                 * type `false`).
                 *
                 * @param {Element} node Element to set attribute to.
                 * @param {*} value Value to serialize.
                 * @param {string} attribute Attribute name to serialize to.
                 * @return {void}
                 */

            }, {
                key: '_valueToNodeAttribute',
                value: function _valueToNodeAttribute(node, value, attribute) {
                    var str = this._serializeValue(value);
                    if (str === undefined) {
                        node.removeAttribute(attribute);
                    } else {
                        node.setAttribute(attribute, str);
                    }
                }

                /**
                 * Converts a typed JavaScript value to a string.
                 *
                 * This method is called when setting JS property values to
                 * HTML attributes.  Users may override this method to provide
                 * serialization for custom types.
                 *
                 * @param {*} value Property value to serialize.
                 * @return {string | undefined} String serialized from the provided
                 * property  value.
                 */

            }, {
                key: '_serializeValue',
                value: function _serializeValue(value) {
                    switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
                        case 'boolean':
                            return value ? '' : undefined;
                        default:
                            return value != null ? value.toString() : undefined;
                    }
                }

                /**
                 * Converts a string to a typed JavaScript value.
                 *
                 * This method is called when reading HTML attribute values to
                 * JS properties.  Users may override this method to provide
                 * deserialization for custom `type`s. Types for `Boolean`, `String`,
                 * and `Number` convert attributes to the expected types.
                 *
                 * @param {?string} value Value to deserialize.
                 * @param {*=} type Type to deserialize the string to.
                 * @return {*} Typed value deserialized from the provided string.
                 */

            }, {
                key: '_deserializeValue',
                value: function _deserializeValue(value, type) {
                    switch (type) {
                        case Boolean:
                            return value !== null;
                        case Number:
                            return Number(value);
                        default:
                            return value;
                    }
                }
            }]);

            return PropertiesChanged;
        }(superClass);

        return PropertiesChanged;
    });
    /* harmony export (immutable) */__webpack_exports__["a"] = PropertiesChanged;

    /***/
},
/* 18 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__utils_boot_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils_boot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_boot_js__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_mixin_js__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__properties_changed_js__ = __webpack_require__(17);
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Creates a copy of `props` with each property normalized such that
     * upgraded it is an object with at least a type property { type: Type}.
     *
     * @param {Object} props Properties to normalize
     * @return {Object} Copy of input `props` with normalized properties that
     * are in the form {type: Type}
     * @private
     */
    function normalizeProperties(props) {
        var output = {};
        for (var p in props) {
            var o = props[p];
            output[p] = typeof o === 'function' ? { type: o } : o;
        }
        return output;
    }

    /**
     * Mixin that provides a minimal starting point to using the PropertiesChanged
     * mixin by providing a mechanism to declare properties in a static
     * getter (e.g. static get properties() { return { foo: String } }). Changes
     * are reported via the `_propertiesChanged` method.
     *
     * This mixin provides no specific support for rendering. Users are expected
     * to create a ShadowRoot and put content into it and update it in whatever
     * way makes sense. This can be done in reaction to properties changing by
     * implementing `_propertiesChanged`.
     *
     * @mixinFunction
     * @polymer
     * @appliesMixin PropertiesChanged
     * @summary Mixin that provides a minimal starting point for using
     * the PropertiesChanged mixin by providing a declarative `properties` object.
     */
    var PropertiesMixin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_mixin_js__["a" /* dedupingMixin */])(function (superClass) {

        /**
         * @constructor
         * @extends {superClass}
         * @implements {Polymer_PropertiesChanged}
         */
        var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__properties_changed_js__["a" /* PropertiesChanged */])(superClass);

        /**
         * Returns the super class constructor for the given class, if it is an
         * instance of the PropertiesMixin.
         *
         * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
         * @return {PropertiesMixinConstructor} Super class constructor
         */
        function superPropertiesClass(constructor) {
            var superCtor = Object.getPrototypeOf(constructor);

            // Note, the `PropertiesMixin` class below only refers to the class
            // generated by this call to the mixin; the instanceof test only works
            // because the mixin is deduped and guaranteed only to apply once, hence
            // all constructors in a proto chain will see the same `PropertiesMixin`
            return superCtor.prototype instanceof PropertiesMixin ?
            /** @type {PropertiesMixinConstructor} */superCtor : null;
        }

        /**
         * Returns a memoized version of the `properties` object for the
         * given class. Properties not in object format are converted to at
         * least {type}.
         *
         * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
         * @return {Object} Memoized properties object
         */
        function ownProperties(constructor) {
            if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
                var props = null;

                if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor)) && constructor.properties) {
                    props = normalizeProperties(constructor.properties);
                }

                constructor.__ownProperties = props;
            }
            return constructor.__ownProperties;
        }

        /**
         * @polymer
         * @mixinClass
         * @extends {base}
         * @implements {Polymer_PropertiesMixin}
         * @unrestricted
         */

        var PropertiesMixin = function (_base) {
            _inherits(PropertiesMixin, _base);

            function PropertiesMixin() {
                _classCallCheck(this, PropertiesMixin);

                return _possibleConstructorReturn(this, (PropertiesMixin.__proto__ || Object.getPrototypeOf(PropertiesMixin)).apply(this, arguments));
            }

            _createClass(PropertiesMixin, [{
                key: '_initializeProperties',


                /**
                 * Overrides `PropertiesChanged` method and adds a call to
                 * `finalize` which lazily configures the element's property accessors.
                 * @override
                 * @return {void}
                 */
                value: function _initializeProperties() {
                    this.constructor.finalize();
                    _get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), '_initializeProperties', this).call(this);
                }

                /**
                 * Called when the element is added to a document.
                 * Calls `_enableProperties` to turn on property system from
                 * `PropertiesChanged`.
                 * @suppress {missingProperties} Super may or may not implement the callback
                 * @return {void}
                 */

            }, {
                key: 'connectedCallback',
                value: function connectedCallback() {
                    if (_get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'connectedCallback', this)) {
                        _get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'connectedCallback', this).call(this);
                    }
                    this._enableProperties();
                }

                /**
                 * Called when the element is removed from a document
                 * @suppress {missingProperties} Super may or may not implement the callback
                 * @return {void}
                 */

            }, {
                key: 'disconnectedCallback',
                value: function disconnectedCallback() {
                    if (_get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'disconnectedCallback', this)) {
                        _get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'disconnectedCallback', this).call(this);
                    }
                }
            }], [{
                key: 'finalize',


                /**
                 * Finalizes an element definition, including ensuring any super classes
                 * are also finalized. This includes ensuring property
                 * accessors exist on the element prototype. This method calls
                 * `_finalizeClass` to finalize each constructor in the prototype chain.
                 * @return {void}
                 */
                value: function finalize() {
                    if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
                        var superCtor = superPropertiesClass( /** @type {PropertiesMixinConstructor} */this);
                        if (superCtor) {
                            superCtor.finalize();
                        }
                        this.__finalized = true;
                        this._finalizeClass();
                    }
                }

                /**
                 * Finalize an element class. This includes ensuring property
                 * accessors exist on the element prototype. This method is called by
                 * `finalize` and finalizes the class constructor.
                 *
                 * @protected
                 */

            }, {
                key: '_finalizeClass',
                value: function _finalizeClass() {
                    var props = ownProperties( /** @type {PropertiesMixinConstructor} */this);
                    if (props) {
                        this.createProperties(props);
                    }
                }

                /**
                 * Returns a memoized version of all properties, including those inherited
                 * from super classes. Properties not in object format are converted to
                 * at least {type}.
                 *
                 * @return {Object} Object containing properties for this class
                 * @protected
                 */

            }, {
                key: 'typeForProperty',


                /**
                 * Overrides `PropertiesChanged` method to return type specified in the
                 * static `properties` object for the given property.
                 * @param {string} name Name of property
                 * @return {*} Type to which to deserialize attribute
                 *
                 * @protected
                 */
                value: function typeForProperty(name) {
                    var info = this._properties[name];
                    return info && info.type;
                }
            }, {
                key: 'observedAttributes',


                /**
                 * Implements standard custom elements getter to observes the attributes
                 * listed in `properties`.
                 * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
                 */
                get: function get() {
                    var _this20 = this;

                    var props = this._properties;
                    return props ? Object.keys(props).map(function (p) {
                        return _this20.attributeNameForProperty(p);
                    }) : [];
                }
            }, {
                key: '_properties',
                get: function get() {
                    if (!this.hasOwnProperty(JSCompiler_renameProperty('__properties', this))) {
                        var superCtor = superPropertiesClass( /** @type {PropertiesMixinConstructor} */this);
                        this.__properties = Object.assign({}, superCtor && superCtor._properties, ownProperties( /** @type {PropertiesMixinConstructor} */this));
                    }
                    return this.__properties;
                }
            }]);

            return PropertiesMixin;
        }(base);

        return PropertiesMixin;
    });
    /* harmony export (immutable) */__webpack_exports__["a"] = PropertiesMixin;

    /***/
},
/* 19 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* unused harmony export timeOut */
    /* unused harmony export animationFrame */
    /* unused harmony export idlePeriod */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function () {
        return microTask;
    });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__boot_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__boot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__boot_js__);
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * @fileoverview
     *
     * This module provides a number of strategies for enqueuing asynchronous
     * tasks. Each sub-module provides a standard `run(fn)` interface that returns a
     * handle, and a `cancel(handle)` interface for canceling async tasks before
     * they run.
     *
     * @summary Module that provides a number of strategies for enqueuing
     * asynchronous tasks.
     */

    // Microtask implemented using Mutation Observer
    var microtaskCurrHandle = 0;
    var microtaskLastHandle = 0;
    var microtaskCallbacks = [];
    var microtaskNodeContent = 0;
    var microtaskNode = document.createTextNode('');
    new window.MutationObserver(microtaskFlush).observe(microtaskNode, { characterData: true });

    function microtaskFlush() {
        var len = microtaskCallbacks.length;
        for (var i = 0; i < len; i++) {
            var cb = microtaskCallbacks[i];
            if (cb) {
                try {
                    cb();
                } catch (e) {
                    setTimeout(function () {
                        throw e;
                    });
                }
            }
        }
        microtaskCallbacks.splice(0, len);
        microtaskLastHandle += len;
    }

    /**
     * Async interface wrapper around `setTimeout`.
     *
     * @namespace
     * @summary Async interface wrapper around `setTimeout`.
     */
    var timeOut = {
        /**
         * Returns a sub-module with the async interface providing the provided
         * delay.
         *
         * @memberof timeOut
         * @param {number=} delay Time to wait before calling callbacks in ms
         * @return {!AsyncInterface} An async timeout interface
         */
        after: function after(delay) {
            return {
                run: function run(fn) {
                    return window.setTimeout(fn, delay);
                },
                cancel: function cancel(handle) {
                    window.clearTimeout(handle);
                }
            };
        },

        /**
         * Enqueues a function called in the next task.
         *
         * @memberof timeOut
         * @param {!Function} fn Callback to run
         * @param {number=} delay Delay in milliseconds
         * @return {number} Handle used for canceling task
         */
        run: function run(fn, delay) {
            return window.setTimeout(fn, delay);
        },

        /**
         * Cancels a previously enqueued `timeOut` callback.
         *
         * @memberof timeOut
         * @param {number} handle Handle returned from `run` of callback to cancel
         * @return {void}
         */
        cancel: function cancel(handle) {
            window.clearTimeout(handle);
        }
    };

    /**
     * Async interface wrapper around `requestAnimationFrame`.
     *
     * @namespace
     * @summary Async interface wrapper around `requestAnimationFrame`.
     */
    var animationFrame = {
        /**
         * Enqueues a function called at `requestAnimationFrame` timing.
         *
         * @memberof animationFrame
         * @param {function(number):void} fn Callback to run
         * @return {number} Handle used for canceling task
         */
        run: function run(fn) {
            return window.requestAnimationFrame(fn);
        },

        /**
         * Cancels a previously enqueued `animationFrame` callback.
         *
         * @memberof animationFrame
         * @param {number} handle Handle returned from `run` of callback to cancel
         * @return {void}
         */
        cancel: function cancel(handle) {
            window.cancelAnimationFrame(handle);
        }
    };

    /**
     * Async interface wrapper around `requestIdleCallback`.  Falls back to
     * `setTimeout` on browsers that do not support `requestIdleCallback`.
     *
     * @namespace
     * @summary Async interface wrapper around `requestIdleCallback`.
     */
    var idlePeriod = {
        /**
         * Enqueues a function called at `requestIdleCallback` timing.
         *
         * @memberof idlePeriod
         * @param {function(!IdleDeadline):void} fn Callback to run
         * @return {number} Handle used for canceling task
         */
        run: function run(fn) {
            return window.requestIdleCallback ? window.requestIdleCallback(fn) : window.setTimeout(fn, 16);
        },

        /**
         * Cancels a previously enqueued `idlePeriod` callback.
         *
         * @memberof idlePeriod
         * @param {number} handle Handle returned from `run` of callback to cancel
         * @return {void}
         */
        cancel: function cancel(handle) {
            window.cancelIdleCallback ? window.cancelIdleCallback(handle) : window.clearTimeout(handle);
        }
    };

    /**
     * Async interface for enqueuing callbacks that run at microtask timing.
     *
     * Note that microtask timing is achieved via a single `MutationObserver`,
     * and thus callbacks enqueued with this API will all run in a single
     * batch, and not interleaved with other microtasks such as promises.
     * Promises are avoided as an implementation choice for the time being
     * due to Safari bugs that cause Promises to lack microtask guarantees.
     *
     * @namespace
     * @summary Async interface for enqueuing callbacks that run at microtask
     *   timing.
     */
    var microTask = {

        /**
         * Enqueues a function called at microtask timing.
         *
         * @memberof microTask
         * @param {!Function=} callback Callback to run
         * @return {number} Handle used for canceling task
         */
        run: function run(callback) {
            microtaskNode.textContent = microtaskNodeContent++;
            microtaskCallbacks.push(callback);
            return microtaskCurrHandle++;
        },


        /**
         * Cancels a previously enqueued `microTask` callback.
         *
         * @memberof microTask
         * @param {number} handle Handle returned from `run` of callback to cancel
         * @return {void}
         */
        cancel: function cancel(handle) {
            var idx = handle - microtaskLastHandle;
            if (idx >= 0) {
                if (!microtaskCallbacks[idx]) {
                    throw new Error('invalid async handle: ' + handle);
                }
                microtaskCallbacks[idx] = null;
            }
        }
    };

    /***/
},
/* 20 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* unused harmony export dashToCamelCase */
    /* harmony export (immutable) */
    __webpack_exports__["a"] = camelToDashCase;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__boot_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__boot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__boot_js__);
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    var caseMap = {};
    var DASH_TO_CAMEL = /-[a-z]/g;
    var CAMEL_TO_DASH = /([A-Z])/g;

    /**
     * Module with utilities for converting between "dash-case" and "camelCase"
     * identifiers.
     *
     * @summary Module that provides utilities for converting between "dash-case"
     *   and "camelCase".
     */
    'TODO(modulizer): A namespace named Polymer.CaseMap was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted';

    /**
     * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
     * (e.g. `fooBarBaz`).
     *
     * @param {string} dash Dash-case identifier
     * @return {string} Camel-case representation of the identifier
     */
    function dashToCamelCase(dash) {
        return caseMap[dash] || (caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL, function (m) {
            return m[1].toUpperCase();
        }));
    }

    /**
     * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
     * (e.g. `foo-bar-baz`).
     *
     * @param {string} camel Camel-case identifier
     * @return {string} Dash-case representation of the identifier
     */
    function camelToDashCase(camel) {
        return caseMap[camel] || (caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase());
    }

    /***/
},
/* 21 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = createEvent;
    /*
     *  @license
     *    Copyright 2017 Brigham Young University
     *
     *    Licensed under the Apache License, Version 2.0 (the "License");
     *    you may not use this file except in compliance with the License.
     *    You may obtain a copy of the License at
     *
     *        http://www.apache.org/licenses/LICENSE-2.0
     *
     *    Unless required by applicable law or agreed to in writing, software
     *    distributed under the License is distributed on an "AS IS" BASIS,
     *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *    See the License for the specific language governing permissions and
     *    limitations under the License.
     */

    function createEvent(name, detail) {
        if (typeof window.CustomEvent === 'function') {
            return new CustomEvent(name, { detail: detail, cancelable: true, bubbles: true });
        }
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(name, true, true, detail);
        return evt;
    }

    /***/
},
/* 22 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = querySelectorSlot;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(5);
    /*
     *  @license
     *    Copyright 2017 Brigham Young University
     *
     *    Licensed under the Apache License, Version 2.0 (the "License");
     *    you may not use this file except in compliance with the License.
     *    You may obtain a copy of the License at
     *
     *        http://www.apache.org/licenses/LICENSE-2.0
     *
     *    Unless required by applicable law or agreed to in writing, software
     *    distributed under the License is distributed on an "AS IS" BASIS,
     *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *    See the License for the specific language governing permissions and
     *    limitations under the License.
     */

    function querySelectorSlot(slot, selector) {
        var roots = slot.assignedNodes({ flatten: true }).filter(function (n) {
            return n.nodeType === Node.ELEMENT_NODE;
        });

        for (var i = 0, len = roots.length; i < len; i++) {
            var each = roots[i];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
                return each;
            }
            var child = each.querySelector(selector);
            if (child) {
                return child;
            }
        }
        return null;
    }

    /***/
},
/* 23 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = applyTemplate;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(33);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
    /*
     *  @license
     *    Copyright 2017 Brigham Young University
     *
     *    Licensed under the Apache License, Version 2.0 (the "License");
     *    you may not use this file except in compliance with the License.
     *    You may obtain a copy of the License at
     *
     *        http://www.apache.org/licenses/LICENSE-2.0
     *
     *    Unless required by applicable law or agreed to in writing, software
     *    distributed under the License is distributed on an "AS IS" BASIS,
     *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *    See the License for the specific language governing permissions and
     *    limitations under the License.
     */

    var TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

    function applyTemplate(element, elementName, template, callback) {
        var sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

        var elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
        if (elSettings.templateHash === sum) {
            //Nothing has changed in the element.  Don't replace the DOM, don't fire the callback.
            return;
        }
        elSettings.templateHash = sum;

        if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
            applyTemplateShady(element, elementName, template, callback, sum);
        } else {
            applyTemplateNative(element, template, callback);
        }
    }

    function applyTemplateShady(element, elementName, template, callback, sum) {
        var templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
        var templateElement = document.head.querySelector('template#' + templateId);
        if (!templateElement) {
            templateElement = document.createElement('template');
            templateElement.id = templateId;
            templateElement.innerHTML = template;
            document.head.appendChild(templateElement);
            ShadyCSS.prepareTemplate(templateElement, elementName);
        }
        if (ShadyCSS.styleElement) {
            ShadyCSS.styleElement(element);
        } else if (ShadyCSS.applyStyle) {
            ShadyCSS.applyStyle(element);
        } else {
            throw new Error('ShadyCSS is not properly defined: no styleElement or applyStyle!');
        }
        var imported = document.importNode(templateElement.content, true);
        var shadow = element.shadowRoot;
        //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
        // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
        while (shadow.firstChild) {
            shadow.removeChild(shadow.firstChild);
        }
        shadow.appendChild(imported);
        setTimeout(function () {
            runAfterStamping(element, callback);
        });
    }

    function applyTemplateNative(element, template, callback) {
        element.shadowRoot.innerHTML = template;
        runAfterStamping(element, callback);
    }

    function runAfterStamping(element, callback) {
        element.classList.add(TEMPLATE_RENDERED_CLASS);
        if (callback) {
            callback();
        }
    }

    /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ":host{background-color:#666;font-family:Vitesse A,Vitesse B,Georgia,serif;font-size:20px!important;color:#fff;display:inline-block;text-align:center;line-height:20px;padding:13px 0;width:auto;min-width:125px;margin:10px 0 20px;-webkit-box-shadow:0 3px 5px 0 hsla(0,0%,8%,.35);-moz-box-shadow:0 3px 5px 0 hsla(0,0%,8%,.35);box-shadow:0 3px 5px 0 hsla(0,0%,8%,.35)}.wrapper ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-weight:400!important;color:#fff!important;display:inline-block!important;position:relative!important;width:100%!important;margin:0 20px!important;left:-20px!important;cursor:pointer!important;vertical-align:middle!important}.wrapper ::slotted(a){text-decoration:none!important}", ""]);

    // exports


    /***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ".header{width:100%;margin:0 0 8px}.header ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;text-transform:uppercase!important;color:#002e5d!important;font-size:20px!important;line-height:20px!important;border-bottom:1px solid #c5c5c5!important;padding-bottom:3px!important;font-weight:400!important;width:100%;display:inline-block}.header ::slotted(br){display:none}.content ::slotted(:not(byu-footer-action-button)){font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:14px!important;line-height:14px!important;font-weight:400!important;color:#141414!important;display:block;padding:11px 0}.content ::slotted(*){margin:0}.content ::slotted(a){text-decoration:none!important;outline:none!important;color:#666!important;font-size:14px}.content ::slotted(a:hover){cursor:pointer;color:#005eb8!important;font-size:14px;line-height:14px}.content a{text-decoration:none!important;outline:none!important;color:#666!important;font-size:14px}.content a:hover{cursor:pointer;color:#005eb8!important;font-size:14px;line-height:14px}", ""]);

    // exports


    /***/
},
/* 26 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ".university-footer{background-color:#002e5d;text-align:center;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:400;font-size:12px;line-height:12px;color:#fff!important;width:100%;padding:21px 0;display:flex;justify-content:center;align-items:center;flex-direction:column}.university-footer a{color:#fff!important;text-decoration:none}.university-footer a:hover{text-decoration:underline}.university-logo-wrapper{max-width:1200px;width:100%;padding:0 8px;box-sizing:border-box}.university-logo{max-width:100%;width:450px;height:40px;margin:-10px 0}.university-info{display:flex;flex-direction:column;align-items:center}.university-info>:not(:first-of-type){margin-top:.25em}@media (min-width:425px){.university-info{flex-direction:row}.university-info>:not(:first-of-type){margin-top:0}.university-info>:not(:first-of-type):before{display:inline-block;color:#fff!important;content:\"|\";text-align:center;width:1em}}.site-footer-wrapper{background-color:#e6e6e6}.site-footer{margin:0 auto;height:auto;box-sizing:border-box;padding:0 8px;display:flex;flex-direction:column;flex-wrap:wrap}.site-footer ::slotted(*){flex-grow:1;margin:16px 8px 0}.site-footer ::slotted(.double-wide){flex-grow:2}.site-footer ::slotted(.triple-wide){flex-grow:3}@media (min-width:600px){.site-footer{flex-direction:row}.site-footer ::slotted(*){width:calc(50% - 16px)}.site-footer ::slotted(.double-wide),.site-footer ::slotted(.triple-wide){width:calc(100% - 16px)}}@media (min-width:1024px){.site-footer{flex-wrap:nowrap;justify-content:center}.site-footer ::slotted(*){width:calc(20% - 16px);margin:30px 8px 40px;max-width:calc(30% - 16px)}.site-footer ::slotted(.double-wide){width:calc(40% - 16px);max-width:calc(60% - 16px)}.site-footer ::slotted(.triple-wide){width:calc(60% - 16px);max-width:calc(100% - 30% - 16px)}}:host([full-width]) ::slotted(:first-child){margin-left:0}:host([full-width]) ::slotted(:last-child){margin-right:0}", ""]);

    // exports


    /***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ".tcon{appearance:none;border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;height:24px;transition:.15s;user-select:none;width:17px;background:transparent;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;padding:0!important}.tcon>*{display:block}.tcon:focus,.tcon:hover{outline:none}.tcon::-moz-focus-inner{border:0}.tcon-menu__lines{width:24px;position:relative}.tcon-menu__lines,.tcon-menu__lines:after,.tcon-menu__lines:before{display:inline-block;border-radius:1px;height:3px;transition:.15s;background:#fff}.tcon-menu__lines:after,.tcon-menu__lines:before{width:24px;content:\"\";position:absolute;left:0;transform-origin:1.71429px center;width:100%}.tcon-menu__lines:before{top:6px}.tcon-menu__lines:after{top:-6px}.tcon-transform .tcon-menu__lines{transform:scale3d(.8,.8,.8)}.tcon-menu--xbutterfly{width:auto}.tcon-menu--xbutterfly .tcon-menu__lines:after,.tcon-menu--xbutterfly .tcon-menu__lines:before{transform-origin:50% 50%;transition:top .3s ease .6s,transform .3s ease}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines{background:transparent}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after,.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{top:0;transition:top .3s ease,transform .3s ease .5s;width:24px}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{transform:rotate(45deg)}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after{transform:rotate(-45deg)}.tcon-visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.tcon-visuallyhidden:active,.tcon-visuallyhidden:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.byu-header-actions{display:flex;align-items:center;height:33px}.byu-header-actions ::slotted(*){text-decoration:none!important;font-size:13px!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;text-transform:uppercase!important;color:#fff!important}.byu-header-root{width:100%;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-size:18px}.byu-header-root .byu-header-content{display:flex;justify-content:center;flex:1;flex-basis:100%;box-sizing:border-box}.byu-header-root img.byu-logo{margin-right:16px}.byu-header-root button{background-color:#666;color:#fff;border:none;cursor:pointer}.byu-header-root .byu-header-primary{background-color:#002e5d;color:#fff;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;flex:1;min-height:55px;box-sizing:border-box;padding-left:16px}.byu-header-root .byu-header-primary .byu-header-title{overflow:hidden;-ms-text-overflow:ellipsis;text-overflow:ellipsis;flex:1;display:flex;flex-direction:column;font-size:22px;font-family:Vitesse A,Vitesse B,Georgia,serif!important;color:#fff!important;text-decoration:none}.byu-header-root .byu-header-primary .byu-header-title ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-weight:400;font-size:22px;line-height:normal}.byu-header-root .byu-header-primary .byu-header-title ::slotted(.subtitle){font-size:14px;line-height:14px;margin:-1px 0 3px}.byu-header-root .byu-header-primary .byu-header-title ::slotted(.subtitle:first-child){font-size:14px;line-height:14px;margin-bottom:-1px;margin-top:2px}.byu-header-root .byu-header-primary .byu-header-user button{background-color:transparent;position:relative}.byu-header-root .byu-header-primary .byu-header-user button .icon{width:20px;height:20px;font-size:20px;vertical-align:middle}.byu-header-root .byu-header-primary .byu-header-user button .label{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;font-size:13px;text-transform:uppercase}.byu-header-root .byu-header-primary .byu-header-search #search-input{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;font-size:13px;color:#002e5d}.byu-header-root .byu-header-primary .byu-header-search #search-input::-webkit-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-ms-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-moz-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-logo,.byu-header-root .byu-header-primary .byu-logo-link{height:33px}.menu-outer-wrapper{border-bottom:1px solid #c5c5c5;background-color:#fff}.menu-inner-wrapper{margin:0 auto;padding:0 16px;box-sizing:border-box}:host(.menu-transparent) .menu-outer-wrapper{background:hsla(0,0%,100%,.88)}:host(.below-max-width) .menu-inner-wrapper{padding:0}#mobileMenu{max-height:0;transition:max-height .5s cubic-bezier(.4,0,.2,1);will-change:max-height;overflow:hidden}:host([mobile-view]) .byu-header-root .byu-header-content{display:block;margin:0;padding:0}:host([mobile-view]) .byu-header-root .byu-logo{align-self:flex-start}:host([mobile-view]) .byu-header-root .byu-header-primary{padding-top:11px;padding-bottom:11px;min-height:33px;padding-right:16px!important;align-items:baseline}:host([mobile-view]) .byu-header-root .byu-header-actions{text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;padding:0!important;background-color:#e6e6e6;color:#002e5d!important;border-top:1px solid #c5c5c5;width:100%;display:flex;flex-direction:column;align-items:flex-start;line-height:12px!important}:host([mobile-view]) .byu-header-root .byu-header-actions:hover{background:#c5c5c5!important}:host([mobile-view]) .byu-header-root .byu-header-actions.active,:host([mobile-view]) .byu-header-root .byu-header-actions.selected{background:#e6e6e6!important}:host([mobile-view]) .byu-header-root #actions a{color:#002e5d!important;font-weight:500!important}:host([mobile-view]) .byu-header-root #actions p{margin:0!important}:host([mobile-view]) .byu-header-root .byu-header-actions ::slotted(*){color:#002e5d!important;padding:18px 50px!important}:host([mobile-view]) .byu-header-root>div>:not(.byu-logo){margin-right:0}:host([mobile-view]) .byu-header-root .byu-header-title{align-items:flex-start;align-self:center;font-size:16px!important}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(*){font-size:16px!important}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(.subtitle){font-size:12px!important;margin-top:3px}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(.subtitle:first-child){margin-top:0!important;margin-bottom:4px}:host([mobile-view]) .byu-header-root button.mobile-menu-button{background-color:transparent;margin-top:4.5px;margin-bottom:4.5px;margin-left:4.5px}:host([no-menu]) .mobile-menu-button{display:none}:host([mobile-view]) .byu-header-search{max-height:35px;transition:max-height .5s cubic-bezier(.4,0,.2,1),transform .5s cubic-bezier(.4,0,.2,1);will-change:max-height,transform;overflow:hidden;transform:scale(1);transform-origin:top}:host(.byu-header-menu-open[mobile-view]) .byu-header-search{max-height:0;transform:scaleY(0)}:host(:not([mobile-view])) .byu-header-root{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;background-color:#002e5d}:host(:not([mobile-view])) .byu-header-root .byu-header-actions ::slotted(*){margin-left:4px;margin-right:4px}:host(:not([mobile-view])) .byu-header-root .byu-header-actions a{color:#fff!important}:host(:not([mobile-view])) .byu-header-root.no-nav{height:48px}:host(:not([mobile-view])) .byu-header-root .nav-expand{display:none}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary{background-color:#002e5d;color:#fff;height:55px;padding-right:16px}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary,:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search input{border:1px solid #002e5d;border-right:none;height:20px;padding:4px 6px;flex:1;width:217px;box-sizing:content-box}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search button{height:28px;width:30px;text-align:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-menu-button{display:none}:host([full-width]) .byu-header-content{max-width:100%!important}:host([full-width]) .menu-inner-wrapper{max-width:100%!important;padding:0}", ""]);

    // exports


    /***/
},
/* 28 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ".slot-container ::slotted(__byu-menu-active-placeholder__){background:#e6e6e6!important}", ""]);

    // exports


    /***/
},
/* 29 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ":host{display:flex;justify-content:center;width:100%;height:auto}.outer-nav{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;box-sizing:border-box;height:35px;position:relative;flex:1;flex-basis:100%}.slot-container ::slotted(*){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;flex:1;flex-basis:auto}.slot-container ::slotted(*):hover{background:#c5c5c5!important}.slot-container ::slotted(*).active,.slot-container ::slotted(*).selected{background:#e6e6e6!important}.slot-container ::slotted(:hover){background:#c5c5c5!important}.slot-container ::slotted(.active),.slot-container ::slotted(.selected){background:#e6e6e6!important}.byu-menu-more-menu{display:none;position:relative;height:35px;width:16.66%;overflow:visible!important;padding:0!important}.byu-menu-more-menu .byu-menu-more{text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;position:relative;flex:1;display:block}.byu-menu-more-menu .byu-menu-more:hover{background:#c5c5c5!important}.byu-menu-more-menu .byu-menu-more.active,.byu-menu-more-menu .byu-menu-more.selected{background:#e6e6e6!important}.byu-menu-more-menu .byu-menu-more .more-open-button{background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/down-open-navy.svg\");height:13px;width:13px;display:inline-block;background-size:100%}.byu-menu-more-menu .byu-menu-more-items{display:none;position:absolute;top:35px;right:0;min-width:100%;max-width:250px;z-index:2;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-menu .byu-menu-more-items ::slotted(*){width:100%;text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;display:block;text-align:left!important;padding-left:12px!important;padding-right:12px!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*):hover{background:#c5c5c5!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).active,.byu-menu-more-menu .byu-menu-more-items ::slotted(*).selected{background:#e6e6e6!important}@-moz-document url-prefix(){.byu-menu-more-menu{width:auto}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.byu-menu-more-menu{width:auto}}@supports (-ms-ime-align:auto){.byu-menu-more-menu{width:auto}}.byu-menu-more-visible .byu-menu-more-menu{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded{background:#e6e6e6;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-more-items{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1}:host(.mobile-view) .outer-nav{display:block;height:auto}:host(.mobile-view) .byu-menu-more{display:none!important}:host(.mobile-view) .slot-container ::slotted(*){display:block!important;text-align:left!important;padding:18px 18px 18px 50px!important;height:auto!important;width:100%;max-width:100%;position:static;box-sizing:border-box;line-height:12px!important}:host(.mobile-view) .slot-container ::slotted(*).byu-menu-more-menu{padding:0!important}:host(.mobile-view) .byu-menu-more-menu{display:block;width:100%;box-shadow:none;position:static;height:auto}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items{display:block;box-shadow:none;padding:0;position:static!important}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items ::slotted(*){display:block!important;text-align:left!important;padding:18px 50px!important;height:auto!important;width:100%;position:static;box-sizing:border-box;line-height:12px!important}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded{box-shadow:none}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{display:none!important}:host([left-align]) .outer-nav ::slotted(*){min-width:200px;flex:0;padding:0 16px;flex-basis:auto}", ""]);

    // exports


    /***/
},
/* 30 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ":host{margin-left:20px}#search-icon{width:17px;height:17px}button{background-color:#666;border:1px solid #666;color:#fff;width:30px;height:30px;display:flex;align-items:center;box-sizing:border-box;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0}#search-form{display:flex;align-items:stretch;align-content:center;width:216px}#search-form #search-container{flex:1}#search-form #search-container input{padding:5px 10px;border:none;height:30px;-webkit-appearance:none;border-radius:0;margin:0;box-sizing:border-box;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:500!important;color:#002e5d!important;width:100%}#search-form #search-container input::placeholder{color:#666!important;opacity:1}#search-form #search-container input::-webkit-input-placeholder{color:#666!important;opacity:1}#search-form #search-container input:-ms-input-placeholder{color:#666!important;opacity:1}#search-form #search-container ::slotted(input){padding:5px 10px;border:none;height:30px;-webkit-appearance:none;border-radius:0;margin:0;box-sizing:border-box;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:500!important;color:#002e5d!important;width:100%}#search-form #search-container ::slotted(input::placeholder){color:#666!important;opacity:1}#search-form #search-container ::slotted(input:-ms-input-placeholder),#search-form #search-container ::slotted(input::-ms-input-placeholder){color:#666!important;opacity:1}#search-form #search-container ::slotted(input::-webkit-input-placeholder){color:#666!important;opacity:1}:host(.mobile-view){width:100%;height:35px;margin:0}:host(.mobile-view) #search-form{width:auto}:host(.mobile-view) #search-form #search-container ::slotted(input),:host(.mobile-view) #search-form #search-container input{padding-left:16px;width:100%;height:35px;border-bottom:1px solid #c5c5c5}:host(.mobile-view) #search-button{width:53px;height:35px;padding:0 16px}:host(.mobile-view) #search-icon{width:20px;height:20px}", ""]);

    // exports


    /***/
},
/* 31 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ".slot-wrapper{display:flex;flex-direction:row}.slot-wrapper ::slotted(*){height:28px;width:28px;display:block;color:transparent!important;overflow:hidden;background-size:contain;background-repeat:no-repeat;background-clip:content-box;background-position:50%;margin:8px 8px 8px 0!important}.slot-wrapper ::slotted(.facebook),.slot-wrapper ::slotted([slot=facebook]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/fa.svg\")}.slot-wrapper ::slotted(.twitter),.slot-wrapper ::slotted([slot=twitter]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/tw.svg\")}.slot-wrapper ::slotted(.instagram),.slot-wrapper ::slotted([slot=instagram]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/in.svg\")}.slot-wrapper ::slotted(.youtube),.slot-wrapper ::slotted([slot=youtube]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/yo.svg\")}.slot-wrapper ::slotted(.pinterest),.slot-wrapper ::slotted([slot=pinterest]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/pi.svg\")}.slot-wrapper ::slotted(.google-plus),.slot-wrapper ::slotted(.googleplus),.slot-wrapper ::slotted(.gplus),.slot-wrapper ::slotted([slot=google-plus]),.slot-wrapper ::slotted([slot=googleplus]),.slot-wrapper ::slotted([slot=gplus]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/gp.svg\")}.slot-wrapper ::slotted(.linkedin),.slot-wrapper ::slotted([slot=linkedin]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/li.svg\")}.slot-wrapper ::slotted(.rss),.slot-wrapper ::slotted([slot=rss]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/rs.svg\")}.slot-wrapper ::slotted(.snapchat),.slot-wrapper ::slotted([slot=snapchat]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/sn.svg\")}.slot-wrapper ::slotted(.podcast){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/po.svg\")}", ""]);

    // exports


    /***/
},
/* 32 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ".slot-wrapper ::slotted(*){text-decoration:none!important;font-size:13px!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;text-transform:uppercase!important;color:#fff!important}.has-user,.no-user{display:flex;flex-direction:row;align-items:center}.user-info-image{height:20px;width:20px;margin:5px 11px 5px 5px;background-size:contain}:host(:not([mobile-view])){color:#fff}:host(:not([mobile-view])) .mobile{display:none}:host(:not([mobile-view])) .slot-wrapper{display:flex;align-items:center}:host(:not([mobile-view])) .slot-wrapper ::slotted(a:hover){text-decoration:underline!important}:host(:not([mobile-view])) .has-user .name ::slotted(*){color:#c3ddf9!important;text-transform:uppercase!important;max-width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(:not([mobile-view])) .user-info-image{margin:7px;background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-o-white.svg\")}:host([mobile-view]){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;border-bottom:1px solid #c5c5c5;padding:10px 14px!important;background-color:#fff!important;line-height:12px!important}:host([mobile-view]):hover{background:#c5c5c5!important}:host([mobile-view]).active,:host([mobile-view]).selected{background:#e6e6e6!important}:host([mobile-view]) .not-mobile{display:none}:host([mobile-view]) .slot-wrapper ::slotted(*){color:#002e5d!important}:host([mobile-view]) .has-user .logout{order:3}:host([mobile-view]) .has-user .name{order:2;flex:1}:host([mobile-view]) .has-user .name ::slotted(*){text-transform:capitalize!important;color:#c3ddf9!important}:host([mobile-view]) .user-info-image{background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-o-navy.svg\")}:host(:not([has-user])) .has-user,:host([has-user]) .no-user{display:none}", ""]);

    // exports


    /***/
},
/* 33 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    function pad(hash, len) {
        while (hash.length < len) {
            hash = '0' + hash;
        }
        return hash;
    }

    function fold(hash, text) {
        var i;
        var chr;
        var len;
        if (text.length === 0) {
            return hash;
        }
        for (i = 0, len = text.length; i < len; i++) {
            chr = text.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0;
        }
        return hash < 0 ? hash * -2 : hash;
    }

    function foldObject(hash, o, seen) {
        return Object.keys(o).sort().reduce(foldKey, hash);
        function foldKey(hash, key) {
            return foldValue(hash, o[key], key, seen);
        }
    }

    function foldValue(input, value, key, seen) {
        var hash = fold(fold(fold(input, key), toString(value)), typeof value === 'undefined' ? 'undefined' : _typeof(value));
        if (value === null) {
            return fold(hash, 'null');
        }
        if (value === undefined) {
            return fold(hash, 'undefined');
        }
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            if (seen.indexOf(value) !== -1) {
                return fold(hash, '[Circular]' + key);
            }
            seen.push(value);
            return foldObject(hash, value, seen);
        }
        return fold(hash, value.toString());
    }

    function toString(o) {
        return Object.prototype.toString.call(o);
    }

    function sum(o) {
        return pad(foldValue(0, o, '', []).toString(16), 8);
    }

    module.exports = sum;

    /***/
},
/* 34 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(24) + "</style> <div class=\"wrapper\"> <slot name=\"actiontext\"></slot> </div>";

    /***/
},
/* 35 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(25) + "</style> <h2 class=\"header\"> <slot name=\"header\"></slot> </h2> <div class=\"content\"> <slot></slot> </div>";

    /***/
},
/* 36 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(26) + "</style> <div class=\"site-footer-wrapper\"> <div class=\"site-footer needs-width-setting\"> <slot id=\"slot\"></slot> </div> </div> <div class=\"university-footer\"> <div class=\"university-logo-wrapper needs-width-setting\"> <a href=\"https://home.byu.edu/home/\" target=\"_blank\"> <img src=\"https://cdn.byu.edu/shared-icons/latest/logos/word-mark-wide-white.svg\" alt=\"Brigham Young University\" class=\"university-logo\"></a> </div> <div class=\"university-info needs-width-setting\"> <span class=\"info-text\">&copy;<span id=\"currentYear\"></span> All Rights Reserved</span> <span class=\"info-text\">Provo, UT 84602, USA</span> <span class=\"info-text\"><a class=\"contact-phone\" href=\"tel:18014224636\">801-422-4636</a></span> </div> </div>";

    /***/
},
/* 37 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(29) + "</style> <nav class=\"outer-nav slot-container needs-width-setting\"> <slot class=\"byu-menu-items\" id=\"byu-menu-items\"></slot> <div class=\"byu-menu-more-menu\"> <a href=\"javascript: void 0\" class=\"byu-menu-more\"> More <div class=\"more-open-button\" aria-label=\"More\"> </div> </a> <div class=\"byu-menu-more-items slot-container\"> <slot class=\"byu-menu-more-slot\" id=\"byu-menu-more-slot\" name=\"more\"></slot> </div> </div> </nav>";

    /***/
},
/* 38 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(30) + "</style> <div id=\"search-form\"> <div id=\"search-container\"> <slot id=\"search\"><input type=\"search\" placeholder=\"Search\"></slot> </div> <button id=\"search-button\" type=\"submit\"> <img id=\"search-icon\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/search-white.svg\" alt=\"Run Search\"> </button> </div>";

    /***/
},
/* 39 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(31) + "</style> <div class=\"slot-wrapper\"> <slot id=\"social-main\"></slot> <slot id=\"social-deprecated-facebook\" name=\"facebook\"></slot> <slot id=\"social-deprecated-twitter\" name=\"twitter\"></slot> <slot id=\"social-deprecated-instagram\" name=\"instagram\"></slot> <slot id=\"social-deprecated-youtube\" name=\"youtube\"></slot> <slot id=\"social-deprecated-pinterest\" name=\"pinterest\"></slot> <slot id=\"social-deprecated-googleplus\" name=\"googleplus\"></slot> <slot id=\"social-deprecated-linkedin\" name=\"linkedin\"></slot> <slot id=\"social-deprecated-rss\" name=\"rss\"></slot> <slot id=\"social-deprecated-snapchat\" name=\"snapchat\"></slot> </div>";

    /***/
},
/* 40 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(32) + "</style> <div class=\"byu-user-wrapper\"> <div class=\"no-user slot-wrapper\"> <div class=\"user-info-image\" aria-label=\"User Icon\"> </div> <span class=\"text slot-wrapper\"> <slot name=\"login\">Sign In</slot> </span> </div> <div class=\"has-user\"> <span class=\"name slot-wrapper\"> <slot name=\"user-name\" id=\"user-name\"></slot> </span> <div class=\"user-info-image\" aria-label=\"User Icon\"> </div> <span class=\"logout slot-wrapper\"> <slot name=\"logout\">Sign Out</slot> </span> </div> </div>";

    /***/
},
/* 41 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__lit_html_js__ = __webpack_require__(3);
    /* unused harmony reexport render */
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */

    /**
     * Interprets a template literal as a lit-extended HTML template.
     */
    var html = function html(strings) {
        for (var _len3 = arguments.length, values = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            values[_key3 - 1] = arguments[_key3];
        }

        return new __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["d" /* TemplateResult */](strings, values, 'html', extendedPartCallback);
    };
    /* harmony export (immutable) */__webpack_exports__["a"] = html;

    /**
     * Interprets a template literal as a lit-extended SVG template.
     */
    var svg = function svg(strings) {
        for (var _len4 = arguments.length, values = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            values[_key4 - 1] = arguments[_key4];
        }

        return new __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["e" /* SVGTemplateResult */](strings, values, 'svg', extendedPartCallback);
    };
    /* unused harmony export svg */

    /**
     * A PartCallback which allows templates to set properties and declarative
     * event handlers.
     *
     * Properties are set by default, instead of attributes. Attribute names in
     * lit-html templates preserve case, so properties are case sensitive. If an
     * expression takes up an entire attribute value, then the property is set to
     * that value. If an expression is interpolated with a string or other
     * expressions then the property is set to the string result of the
     * interpolation.
     *
     * To set an attribute instead of a property, append a `$` suffix to the
     * attribute name.
     *
     * Example:
     *
     *     html`<button class$="primary">Buy Now</button>`
     *
     * To set an event handler, prefix the attribute name with `on-`:
     *
     * Example:
     *
     *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
     *
     */
    var extendedPartCallback = function extendedPartCallback(instance, templatePart, node) {
        if (templatePart.type === 'attribute') {
            if (templatePart.rawName.substr(0, 3) === 'on-') {
                var eventName = templatePart.rawName.slice(3);
                return new EventPart(instance, node, eventName);
            }
            var lastChar = templatePart.name.substr(templatePart.name.length - 1);
            if (lastChar === '$') {
                var name = templatePart.name.slice(0, -1);
                return new __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["f" /* AttributePart */](instance, node, name, templatePart.strings);
            }
            if (lastChar === '?') {
                var _name = templatePart.name.slice(0, -1);
                return new BooleanAttributePart(instance, node, _name, templatePart.strings);
            }
            return new PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["g" /* defaultPartCallback */])(instance, templatePart, node);
    };
    /* unused harmony export extendedPartCallback */

    /**
     * Implements a boolean attribute, roughly as defined in the HTML
     * specification.
     *
     * If the value is truthy, then the attribute is present with a value of
     * ''. If the value is falsey, the attribute is removed.
     */

    var BooleanAttributePart = function (_WEBPACK_IMPORTED_MO2) {
        _inherits(BooleanAttributePart, _WEBPACK_IMPORTED_MO2);

        function BooleanAttributePart() {
            _classCallCheck(this, BooleanAttributePart);

            return _possibleConstructorReturn(this, (BooleanAttributePart.__proto__ || Object.getPrototypeOf(BooleanAttributePart)).apply(this, arguments));
        }

        _createClass(BooleanAttributePart, [{
            key: 'setValue',
            value: function setValue(values, startIndex) {
                var s = this.strings;
                if (s.length === 2 && s[0] === '' && s[1] === '') {
                    var value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["h" /* getValue */])(this, values[startIndex]);
                    if (value === __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["i" /* directiveValue */]) {
                        return;
                    }
                    if (value) {
                        this.element.setAttribute(this.name, '');
                    } else {
                        this.element.removeAttribute(this.name);
                    }
                } else {
                    throw new Error('boolean attributes can only contain a single expression');
                }
            }
        }]);

        return BooleanAttributePart;
    }(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["f" /* AttributePart */]);
    /* unused harmony export BooleanAttributePart */

    var PropertyPart = function (_WEBPACK_IMPORTED_MO3) {
        _inherits(PropertyPart, _WEBPACK_IMPORTED_MO3);

        function PropertyPart() {
            _classCallCheck(this, PropertyPart);

            return _possibleConstructorReturn(this, (PropertyPart.__proto__ || Object.getPrototypeOf(PropertyPart)).apply(this, arguments));
        }

        _createClass(PropertyPart, [{
            key: 'setValue',
            value: function setValue(values, startIndex) {
                var s = this.strings;
                var value = void 0;
                if (this._equalToPreviousValues(values, startIndex)) {
                    return;
                }
                if (s.length === 2 && s[0] === '' && s[1] === '') {
                    // An expression that occupies the whole attribute value will leave
                    // leading and trailing empty strings.
                    value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["h" /* getValue */])(this, values[startIndex]);
                } else {
                    // Interpolation, so interpolate
                    value = this._interpolate(values, startIndex);
                }
                if (value !== __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["i" /* directiveValue */]) {
                    this.element[this.name] = value;
                }
                this._previousValues = values;
            }
        }]);

        return PropertyPart;
    }(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["f" /* AttributePart */]);
    /* unused harmony export PropertyPart */

    var EventPart = function () {
        function EventPart(instance, element, eventName) {
            _classCallCheck(this, EventPart);

            this.instance = instance;
            this.element = element;
            this.eventName = eventName;
        }

        _createClass(EventPart, [{
            key: 'setValue',
            value: function setValue(value) {
                var listener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["h" /* getValue */])(this, value);
                if (listener === this._listener) {
                    return;
                }
                if (listener == null) {
                    this.element.removeEventListener(this.eventName, this);
                } else if (this._listener == null) {
                    this.element.addEventListener(this.eventName, this);
                }
                this._listener = listener;
            }
        }, {
            key: 'handleEvent',
            value: function handleEvent(event) {
                if (typeof this._listener === 'function') {
                    this._listener.call(this.element, event);
                } else if (typeof this._listener.handleEvent === 'function') {
                    this._listener.handleEvent(event);
                }
            }
        }]);

        return EventPart;
    }();
    /* unused harmony export EventPart */

    //# sourceMappingURL=lit-extended.js.map

    /***/
},
/* 42 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = render;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__lit_html_js__ = __webpack_require__(3);
    /* unused harmony reexport html */
    /* unused harmony reexport svg */
    /* unused harmony reexport TemplateResult */
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */

    var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
        return function (result) {
            var cacheKey = result.type + '--' + scopeName;
            var templateCache = __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["a" /* templateCaches */].get(cacheKey);
            if (templateCache === undefined) {
                templateCache = new Map();
                __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["a" /* templateCaches */].set(cacheKey, templateCache);
            }
            var template = templateCache.get(result.strings);
            if (template === undefined) {
                var element = result.getTemplateElement();
                if (_typeof(window.ShadyCSS) === 'object') {
                    window.ShadyCSS.prepareTemplate(element, scopeName);
                }
                template = new __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["b" /* Template */](result, element);
                templateCache.set(result.strings, template);
            }
            return template;
        };
    };
    function render(result, container, scopeName) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["c" /* render */])(result, container, shadyTemplateFactory(scopeName));
    }
    //# sourceMappingURL=shady-render.js.map

    /***/
}]
/******/);
//# sourceMappingURL=components.js.map
}());

//# sourceMappingURL=components-compat.js.map

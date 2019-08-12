"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var c3;

var C3Chart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(C3Chart, _React$Component);

  function C3Chart() {
    _classCallCheck(this, C3Chart);

    return _possibleConstructorReturn(this, _getPrototypeOf(C3Chart).apply(this, arguments));
  }

  _createClass(C3Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      c3 = require('c3');
      this.updateChart(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.updateChart(newProps);

      if (newProps.onPropsChanged) {
        newProps.onPropsChanged(this.props, newProps, this.chart);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyChart();
    }
  }, {
    key: "destroyChart",
    value: function destroyChart() {
      try {
        this.chart = this.chart.destroy();
      } catch (err) {
        throw new Error('Internal C3 error', err);
      }
    }
  }, {
    key: "generateChart",
    value: function generateChart(mountNode, config) {
      var newConfig = _extends({
        bindto: mountNode
      }, config);

      return c3.generate(newConfig);
    }
  }, {
    key: "loadNewData",
    value: function loadNewData(data) {
      var shouldUnload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var unloadFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var unload = shouldUnload ? unloadFields || true : shouldUnload;
      this.chart.load(_objectSpread({}, data, {
        unload: unload
      }));
    }
  }, {
    key: "updateChart",
    value: function updateChart(config) {
      if (!this.chart) {
        this.chart = this.generateChart((0, _reactDom.findDOMNode)(this), config);
      }

      this.loadNewData(config.data, !!config.unloadBeforeLoad, config.unloadFields);
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className ? " ".concat(this.props.className) : '';
      var style = this.props.style ? this.props.style : {};
      return _react["default"].createElement("div", {
        className: className,
        style: style
      });
    }
  }], [{
    key: "displayName",
    get: function get() {
      return 'C3Chart';
    }
  }, {
    key: "propTypes",
    get: function get() {
      return {
        data: _propTypes["default"].object.isRequired,
        title: _propTypes["default"].object,
        size: _propTypes["default"].object,
        padding: _propTypes["default"].object,
        color: _propTypes["default"].object,
        interaction: _propTypes["default"].object,
        transition: _propTypes["default"].object,
        oninit: _propTypes["default"].func,
        onrendered: _propTypes["default"].func,
        onmouseover: _propTypes["default"].func,
        onmouseout: _propTypes["default"].func,
        onresize: _propTypes["default"].func,
        onresized: _propTypes["default"].func,
        axis: _propTypes["default"].object,
        grid: _propTypes["default"].object,
        regions: _propTypes["default"].array,
        legend: _propTypes["default"].object,
        tooltip: _propTypes["default"].object,
        subchart: _propTypes["default"].object,
        zoom: _propTypes["default"].object,
        point: _propTypes["default"].object,
        line: _propTypes["default"].object,
        area: _propTypes["default"].object,
        bar: _propTypes["default"].object,
        pie: _propTypes["default"].object,
        donut: _propTypes["default"].object,
        gauge: _propTypes["default"].object,
        className: _propTypes["default"].string,
        style: _propTypes["default"].object,
        unloadBeforeLoad: _propTypes["default"].bool,
        unloadFields: _propTypes["default"].array,
        onPropsChanged: _propTypes["default"].func
      };
    }
  }]);

  return C3Chart;
}(_react["default"].Component);

var _default = C3Chart;
exports["default"] = _default;

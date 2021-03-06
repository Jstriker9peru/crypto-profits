webpackJsonp([0],{

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(71);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDayPicker = __webpack_require__(499);

var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

var _DayPickerInput = __webpack_require__(500);

var _DayPickerInput2 = _interopRequireDefault(_DayPickerInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement('img', { src: '/img/bitcoin-logo.png', className: 'bitcoin-logo' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'h2',
              null,
              'Enter Transaction'
            ),
            _react2.default.createElement(
              'label',
              null,
              'Crypto Amount'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'amount' }),
            _react2.default.createElement(
              'label',
              null,
              'Date'
            ),
            _react2.default.createElement(_DayPickerInput2.default, { onDayChange: this.props.handleDayChange, selected: this.props.globalState.selectedDay }),
            _react2.default.createElement(
              'button',
              { type: 'submit' },
              'Check Profits'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(71);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Results, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'results' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'h3',
              null,
              'Your $1200 dollar investment is now'
            ),
            _react2.default.createElement(
              'h1',
              null,
              '$7300'
            ),
            _react2.default.createElement(
              'h4',
              null,
              'You made 400% profit'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'main-btn active' },
              'Create account to keep track of all your records'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' })
          )
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

exports.default = Results;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(71);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(246);

var _axios2 = _interopRequireDefault(_axios);

var _Home = __webpack_require__(247);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(248);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Joe',
      location: 'home',
      selectedDay: undefined,
      data: ''
    };
    _this.routingSystem = _this.routingSystem.bind(_this);
    _this.handleDayChange = _this.handleDayChange.bind(_this);
    _this.apiCall = _this.apiCall.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'handleDayChange',
    value: function handleDayChange(day) {
      this.setState({ selectedDay: day });
    }
  }, {
    key: 'apiCall',
    value: function apiCall() {
      var _this2 = this;

      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1513285669&extraParams=crypto_profits_cp').then(function (response) {
        _this2.setState({
          data: response.data.BTC
        }, function () {
          console.log(_this2.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'routingSystem',
    value: function routingSystem() {
      switch (this.state.location) {
        case 'home':
          return _react2.default.createElement(_Home2.default, { handleDayChange: this.handleDayChange, globalState: this.state });
          break;
        case 'results':
          return _react2.default.createElement(_Results2.default, null);
          break;
        default:
          return _react2.default.createElement(_Home2.default, null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'div',
              { className: 'logo', onClick: this.apiCall },
              'Crypto Profits'
            ),
            _react2.default.createElement(
              'nav',
              { className: 'menu' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'main-btn' },
                'Register'
              )
            )
          ),
          this.routingSystem()
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[269]);
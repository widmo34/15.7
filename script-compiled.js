'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
    _inherits(Stopwatch, _React$Component);

    function Stopwatch(props) {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

        _this.state = {
            times: {
                miliseconds: 0,
                seconds: 0,
                minutes: 0
            },
            running: false
        };

        console.log(_this.state.times);
        return _this;
    }

    _createClass(Stopwatch, [{
        key: 'reset',
        value: function reset() {
            this.setState({
                times: {
                    miliseconds: '',
                    seconds: '',
                    minutes: ''
                }
            });
        }
    }, {
        key: 'format',
        value: function format() {
            //  const self = this;
            var _state$times = this.state.times,
                mm = _state$times.minutes,
                ss = _state$times.seconds,
                ms = _state$times.miliseconds;

            return this.pad0(mm) + ':' + this.pad0(ss) + ':' + this.pad0(Math.floor(ms));
        }
    }, {
        key: 'start',
        value: function start() {
            var _this2 = this;

            console.log(this.state.running);
            if (!this.state.running) {
                this.state.running = true;
                this.watch = setInterval(function () {
                    return _this2.step();
                }, 10);
            }
        }
    }, {
        key: 'step',
        value: function step() {
            if (!this.state.running) return;
            this.calculate();
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            var _state$times2 = this.state.times,
                mm = _state$times2.minutes,
                ss = _state$times2.seconds,
                ms = _state$times2.miliseconds;


            ms += 1;
            if (ms >= 100) {
                ss += 1;
                ms = 0;
            }

            if (ss >= 60) {
                mm += 1;
                ss = 0;
            }
            this.setState({
                times: {
                    minutes: mm,
                    seconds: ss,
                    miliseconds: ms
                }
            });
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.state.running = false;
            clearInterval(this.watch);
        }
    }, {
        key: 'pad0',
        value: function pad0(value) {
            var result = value.toString();
            if (result.length < 2) {
                result = '0' + result;
            }
            return result;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'nav',
                    { className: 'controls' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'start', onClick: this.start.bind(this) },
                        'Start'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'stop', onClick: this.stop.bind(this) },
                        'Stop'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'stopwatch' },
                    this.format()
                ),
                React.createElement('ul', { className: 'results' })
            );
        }
    }]);

    return Stopwatch;
}(React.Component);

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('app'));

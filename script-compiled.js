'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
    _inherits(Stopwatch, _React$Component);

    function Stopwatch(props) {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

        _this.state = {
            times: {
                miliseconds: '',
                seconds: '',
                minutes: ''
            },
            running: 'false'
        };

        console.log(_this.state.times);
        return _this;
    }

    _createClass(Stopwatch, [{
        key: 'reset',
        value: function reset() {
            this.setState({
                times: null
            });
        }
    }, {
        key: 'print',
        value: function print() {
            document.querySelector('stopwatch').innerText = this.format(this.state.times);
        }
    }, {
        key: 'format',
        value: function format(value) {
            var self = this;

            return self.pad0(value.minutes) + ':' + self.pad0(value.seconds) + ':' + self.pad0(Math.floor(value.miliseconds));
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
            if (!this.running) return;
            this.calculate();
            this.print();
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            this.setState(this.state.times.miliseconds += 1);
            if (this.setState(this.state.times.miliseconds >= 100)) {
                this.setState(this.state.times.seconds += 1);
                this.setState(this.state.times.miliseconds = 0);
            }

            if (this.state.times.seconds >= 60) {
                this.setState(this.state.times.minutes += 1);
                this.setState(this.state.times.seconds = 0);
            }
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
                        { href: '#', className: 'button', id: 'start', onClick: this.start },
                        'Start'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'stop', onClick: this.stop },
                        'Stop'
                    )
                ),
                React.createElement('div', { className: 'stopwatch' }),
                React.createElement('ul', { className: 'results' })
            );
        }
    }]);

    return Stopwatch;
}(React.Component);

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('app'));

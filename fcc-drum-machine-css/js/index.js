var _createClass = function ()
  {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

//Array to store information for each clickable sound.
var data = [
{ id: "crash-cymb", letter: "Q", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Crash%20Hit%20002-1695-Free-Loops.com.mp3" },
{ id: "synth-hit", letter: "W", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Power%20Synth%20Hit%201-1542-Free-Loops.com.mp3" },
{ id: "ride-cymb", letter: "E", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/HiHat%2003.wav-9237-Free-Loops.com.mp3" },
{ id: "snare", letter: "A", src: "http://www.denhaku.com/r_box/sr16/sr16sd/lopicolo.wav" },
{ id: "synth-snare", letter: "S", src: "http://cd.textfiles.com/maxsounds/WAV/EFEITOS/SD5010.WAV" },
{ id: "closed-hats", letter: "D", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Lil%20John%20HiHat%202-2145-Free-Loops.com.mp3" },
{ id: "kick-drum", letter: "Z", src: "http://electrongate.com/dmxfiles/21KICK.wav" },
{ id: "synth-kick", letter: "X", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drum%20Kick%208-9192-Free-Loops.com.mp3" },
{ id: "tom-tom", letter: "C", src: "http://www.denhaku.com/r_box/sr16/sr16tom/hican%20hl.wav" }];


//Component to set up clickable elements
var DrumPad = function (_React$Component) {_inherits(DrumPad, _React$Component);function DrumPad() {var _ref;var _temp, _this, _ret;_classCallCheck(this, DrumPad);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call.apply(_ref, [this].concat(args))), _this), _this.
    handleKeyDown = function (e) {
      if (e.keyCode == _this.props.letter.charCodeAt()) {
        _this.audio.play();
        _this.audio.currentTime = 0;
        _this.props.handleDisplay(_this.props.id);
      }
    }, _this.

    handleClick = function () {
      _this.audio.play();
      _this.audio.currentTime = 0;
      _this.props.handleDisplay(_this.props.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(DrumPad, [{ key: "componentDidMount", value: function componentDidMount() {document.addEventListener("keydown", this.handleKeyDown); //window.focus()
    } }, { key: "componentWillUnmount", value: function componentWillUnmount() {document.removeEventListener("keydown", this.handleKeyDown);} }, { key: "render",
    //Set up each clickable drum button.
    value: function render() {var _this2 = this;
      return (
        React.createElement("div", {
            className: "drum-pad",
            id: this.props.id,
            onClick: this.handleClick },

          React.createElement("h1", null, this.props.letter),
          React.createElement("audio", {
            ref: function ref(_ref2) {return _this2.audio = _ref2;},
            className: "clip",
            src: this.props.src,
            id: this.props.letter })));
    } }]);return DrumPad;}(React.Component);

//The main app.
var App = function (_React$Component2) {_inherits(App, _React$Component2);
  function App(props) {_classCallCheck(this, App);

    //Set what the user sees when they first load in
    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));_this3.

    handleDisplay = function (display) {return _this3.setState({ display: display });};_this3.state = { display: "Click or Press Key" };return _this3;}_createClass(App, [{ key: "render", value: function render()

    {var _this4 = this;
      return (
        //set up the display for the app, including showing what sound is being played
        React.createElement("div", { id: "drum-machine" },
          React.createElement("div", { id: "display" }, this.state.display),
          React.createElement("div", { id: "drum-pads" },

            data.map(function (d) {return (
                React.createElement(DrumPad, {
                  id: d.id,
                  letter: d.letter,
                  src: d.src,
                  handleDisplay: _this4.handleDisplay }));}))));
    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

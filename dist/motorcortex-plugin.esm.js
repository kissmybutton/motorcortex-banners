import motorcortex from '@kissmybutton/motorcortex';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Plugin =
/*#__PURE__*/
function (_MC$API$MonoIncident) {
  _inherits(Plugin, _MC$API$MonoIncident);

  function Plugin() {
    _classCallCheck(this, Plugin);

    return _possibleConstructorReturn(this, _getPrototypeOf(Plugin).apply(this, arguments));
  }

  _createClass(Plugin, [{
    key: "onGetContext",
    value: function onGetContext() {// here you have available
      // this.element
      // this.attributeKey
      // this.targetValue
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue() {//here you make all the scatch value assignments
    }
  }, {
    key: "onProgress",
    value: function onProgress()
    /*fraction, ms*/
    {// here you make the on progress changes
    }
  }]);

  return Plugin;
}(motorcortex.API.MonoIncident);

var Plugin_1 = Plugin;

var compoAttributes = {// compo:[
  //     "compo1",
  //     "compo2"
  // ]
};

var animatedAttrs = {// type: "object",
  // strict : true,
  // props: {
  //   prop1: {
  //     optional: true,
  //     type: "type1",
  //   }
  // }
};
var validation = {
  animatedAttrs: animatedAttrs
};

var animatedAttrs$1 = validation.animatedAttrs;
var src = {
  npm_name: "@kissmybutton/motorcortex-plugin",
  incidents: [{
    exportable: Plugin_1,
    name: "Plugin",
    attributesValidationRules: {
      animatedAttrs: animatedAttrs$1
    }
  }],
  compositeAttributes: compoAttributes
};
var src_1 = src.npm_name;
var src_2 = src.incidents;
var src_3 = src.compositeAttributes;

export default src;
export { src_3 as compositeAttributes, src_2 as incidents, src_1 as npm_name };

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const BrowseButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #111827;\n  font-size: 20px;\n  font-weight: 500;\n  color: #c5c8cd;\n  padding: 1.125rem 1.5rem;\n  border: none;\n  border-bottom: 2px solid #35373a;\n  &:hover {\n    background-color: #182032;\n    cursor: pointer;\n  }\n"])));
const UnderlineButton = props => {
  return /*#__PURE__*/_react.default.createElement(BrowseButton, null, props.label);
};
var _default = UnderlineButton;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const CardWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  overflow: hidden;\n  background-color: #192230;\n  padding: 24px 16px;\n  width: 280px;'\n  border-radius: 8px;\n  &:hover {\n    background-color: #242C3C;\n    cursor: pointer;\n  }\n"])));
const CardImage = _styledComponents.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 72px;\n  width: 151px;\n  padding: 1rem;\n"])));
const CardContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
const CardTitle = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #f3f4f6;\n  font-weight: 500;\n  font-size: 18px;\n"])));
const CardKicker = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: #a1abca;\n  font-size: 12px;\n  font-weight: 500;\n"])));
const CardPerson = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n"])));
const CardAvatar = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  height: 28px;\n  width: 28px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  background-color: #c0c0c0;\n  margin-right: 1rem;\n"])));
const CardAuthor = _styledComponents.default.span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: #c9d3ef;\n  font-size: 1rem;\n"])));
const CourseCardVertical = props => {
  return /*#__PURE__*/_react.default.createElement(CardWrapper, null, /*#__PURE__*/_react.default.createElement(CardImage, {
    src: props.image
  }), /*#__PURE__*/_react.default.createElement(CardContent, null, /*#__PURE__*/_react.default.createElement(CardKicker, null, props.kicker), /*#__PURE__*/_react.default.createElement(CardTitle, null, props.title), /*#__PURE__*/_react.default.createElement(CardPerson, null, /*#__PURE__*/_react.default.createElement(CardAvatar, null), /*#__PURE__*/_react.default.createElement(CardAuthor, null, props.name))));
};
var _default = CourseCardVertical;
exports.default = _default;
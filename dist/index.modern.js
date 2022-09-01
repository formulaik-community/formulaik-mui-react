import 'react';
import loadable from '@loadable/component';

var index = (function (props) {
  var type = props.type;

  if (!keys.includes(type)) {
    return null;
  }

  try {
    var Component = loadable(function (_) {
      return import("./" + type);
    }, {
      cacheKey: function cacheKey(_) {
        return type;
      }
    });
    return Component;
  } catch (e) {
    return null;
  }
});
var keys = ['input', 'submit', 'checkbox', 'select', 'textArea', 'selectCountry', 'inputPhoneNumber', 'datePicker', 'aceEditor', 'cronGenerator', 'jsonEditor', 'cronEditor', 'autocomplete', 'radioGroup', 'html', 'divider', 'button', 'buttonGroup', 'switch', 'rating', 'dateRangePicker', 'h1', 'h2', 'h3', 'h4', 'visualSelect', 'avatar', 'fileUpload', 'inputCurrency', 'numericStepper', 'submitInline', '_containerVertical', '_containerHorizontal', '_buttonAdd'];

export default index;
//# sourceMappingURL=index.modern.js.map

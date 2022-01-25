function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var TextField = _interopDefault(require('@mui/material/TextField'));
var FormControlLabel = _interopDefault(require('@mui/material/FormControlLabel'));
var Checkbox$1 = _interopDefault(require('@mui/material/Checkbox'));
var Select$1 = _interopDefault(require('@mui/material/Select'));
var MenuItem = _interopDefault(require('@mui/material/MenuItem'));
var TextareaAutosize = _interopDefault(require('react-textarea-autosize'));
var ReactFlagsSelect = _interopDefault(require('react-flags-select'));
var PhoneInput = _interopDefault(require('react-phone-number-input'));
var dateAdapter = _interopDefault(require('@mui/lab/AdapterDateFns'));
var LocalizationProvider = _interopDefault(require('@mui/lab/LocalizationProvider'));
var DatePicker$1 = _interopDefault(require('@mui/lab/DatePicker'));
var reCron = require('@sbzen/re-cron');
var JSONInput = _interopDefault(require('react-json-editor-ajrm'));
var locale = _interopDefault(require('react-json-editor-ajrm/locale/en'));
var cronParser = _interopDefault(require('cron-parser'));
require('next/image');
var Autocomplete$1 = _interopDefault(require('@mui/material/Autocomplete'));
var CircularProgress = _interopDefault(require('@mui/material/CircularProgress'));
var Radio = _interopDefault(require('@mui/material/Radio'));
var RadioGroup$1 = _interopDefault(require('@mui/material/RadioGroup'));
var Button$1 = _interopDefault(require('@mui/material/Button'));
var ButtonGroup$1 = _interopDefault(require('@mui/material/ButtonGroup'));
var Switch = _interopDefault(require('@mui/material/Switch'));
var FormGroup = _interopDefault(require('@mui/material/FormGroup'));
var Rating$1 = _interopDefault(require('@mui/material/Rating'));
var DateRangePicker$1 = _interopDefault(require('@mui/lab/DateRangePicker'));
var Box = _interopDefault(require('@mui/material/Box'));
var Formulaik = _interopDefault(require('@yelounak/formulaik'));
var Yup = require('yup');
var _ = _interopDefault(require('underscore'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Input = (function (props) {
  var customOnValueChanged = props.customOnValueChanged,
      field = props.field,
      errors = props.errors,
      _props$item = props.item,
      subType = _props$item.subType,
      id = _props$item.id,
      label = _props$item.label,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(TextField, _extends({
    label: label,
    variant: "outlined"
  }, field, {
    className: "" + (errors[id] ? 'bg-red-100' : ''),
    type: subType,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return customOnValueChanged(value);
    }
  }, itemProps));
});

var Submit = (function (props) {
  var isSubmitting = props.isSubmitting,
      value = props.item.value;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex justify-center mt-4"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-outline btn-lg w-60  " + (isSubmitting ? 'loading' : ''),
    type: "submit",
    disabled: isSubmitting
  }, isSubmitting ? '' : value));
});

var Checkbox = (function (props) {
  var customOnValueChanged = props.customOnValueChanged,
      values = props.values,
      _props$item = props.item,
      label = _props$item.label,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "px-4 py-2 card rounded-lg border-2 border-warmGray-400 "
  }, /*#__PURE__*/React__default.createElement(FormControlLabel, {
    control: /*#__PURE__*/React__default.createElement(Checkbox$1, _extends({
      color: "default"
    }, itemProps, {
      checked: function () {
        var _value = values[id];
        return _value;
      }(),
      onChange: function onChange(_ref) {
        var checked = _ref.target.checked;
        customOnValueChanged(checked);
      }
    })),
    label: label
  }), itemProps && itemProps.subLabel ? /*#__PURE__*/React__default.createElement("small", {
    className: ""
  }, itemProps.subLabel) : null);
});

var Select = (function (props) {
  var initialValues = props.initialValues,
      values = props.values,
      customOnValueChanged = props.customOnValueChanged,
      errors = props.errors,
      _props$item = props.item,
      label = _props$item.label,
      id = _props$item.id,
      itemProps = _props$item.props;
  var options = itemProps.options;
  return /*#__PURE__*/React__default.createElement(Select$1, {
    labelId: id,
    id: id,
    className: " " + (errors[id] ? 'bg-red-100 select-error' : ''),
    value: values[id] ? values[id] : initialValues[id],
    label: label,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return customOnValueChanged(value);
    }
  }, options.map(function (option) {
    return /*#__PURE__*/React__default.createElement(MenuItem, {
      value: option.value
    }, option.label);
  }));
});

var TextArea = (function (props) {
  var customOnValueChanged = props.customOnValueChanged,
      field = props.field,
      errors = props.errors,
      _props$item = props.item,
      id = _props$item.id;
  return /*#__PURE__*/React__default.createElement(TextareaAutosize, _extends({}, field, {
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return customOnValueChanged(value);
    },
    className: "textarea h-24 textarea-bordered text-base " + (errors[id] ? 'bg-red-100 border-red-600' : 'border-warmGray-400')
  }));
});

var SelectCountry = (function (props) {
  var customOnValueChanged = props.customOnValueChanged,
      values = props.values,
      errors = props.errors,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(ReactFlagsSelect, _extends({
    selected: values[id],
    onSelect: customOnValueChanged
  }, itemProps, {
    className: "  w-full focus:ring-primary  " + (errors[id] ? 'bg-red-100 select-error' : '')
  }));
});

var InputPhoneNumber = (function (props) {
  var setFieldTouched = props.setFieldTouched,
      setFieldValue = props.setFieldValue,
      values = props.values,
      errors = props.errors,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "border-2 border-warmGray-300 rounded-md px-4 py-4"
  }, /*#__PURE__*/React__default.createElement(PhoneInput, _extends({
    placeholder: "Enter phone number",
    value: values[id],
    onChange: function onChange(value) {
      setFieldValue(id, value);
      setFieldTouched(id, true, false);
    }
  }, itemProps, {
    className: "w-full focus:ring-primary  " + (errors[id] ? 'bg-red-100 select-error' : '')
  })));
});

var DatePicker = (function (props) {
  var customOnValueChanged = props.customOnValueChanged,
      values = props.values,
      _props$item = props.item,
      label = _props$item.label,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(LocalizationProvider, {
    dateAdapter: dateAdapter
  }, /*#__PURE__*/React__default.createElement(DatePicker$1, _extends({
    label: label,
    value: values[id],
    onChange: customOnValueChanged
  }, itemProps, {
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React__default.createElement(TextField, params);
    }
  })));
});

var Editor = function Editor(props) {
  if (typeof window === 'undefined') {
    return null;
  }

  var AceEditor = require('react-ace')["default"];

  var _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'jade' : _props$mode;

  require('ace-builds/src-noconflict/ext-language_tools');

  require('ace-builds/src-noconflict/theme-github');

  switch (mode) {
    default:
    case 'jade':
      require('ace-builds/src-noconflict/mode-jade');

      break;

    case 'json':
      require('ace-builds/src-noconflict/mode-json');

      break;
  }

  return /*#__PURE__*/React__default.createElement(AceEditor, props);
};

var AceEditor = (function (props) {
  var values = props.values,
      customOnValueChanged = props.customOnValueChanged,
      errors = props.errors,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(Editor, _extends({
    value: values[id],
    mode: "jade",
    theme: "github",
    onChange: customOnValueChanged,
    name: "UNIQUE_ID_OF_DIV",
    editorProps: {
      $blockScrolling: true
    },
    setOptions: _extends({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    }, itemProps.options),
    width: '100%',
    fontSize: 14,
    wrapEnabled: true,
    showPrintMargin: false,
    showGutter: true,
    className: "textarea w-full textarea-bordered bg-gray-50 " + (errors[id] ? 'bg-red-100 border-red-600' : '')
  }, itemProps));
});

var CronGenerator = (function (props) {
  var values = props.values,
      customOnValueChanged = props.customOnValueChanged,
      _props$item = props.item,
      id = _props$item.id;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reCron.ReCron, {
    value: values[id],
    onChange: customOnValueChanged
  }));
});

var JSONEditor = (function (props) {
  var values = props.values,
      customOnValueChanged = props.customOnValueChanged,
      errors = props.errors,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(JSONInput, _extends({
    id: "a_unique_id",
    placeholder: values[id],
    onChange: function onChange(val) {
      var json = val.json;
      customOnValueChanged(json);
    },
    locale: locale,
    height: "550px",
    className: " " + (errors[id] ? 'bg-red-100 border-red-600' : '')
  }, itemProps));
});

var CronEditor = (function (props) {
  var values = props.values,
      customOnValueChanged = props.customOnValueChanged,
      field = props.field,
      errors = props.errors,
      _props$item = props.item,
      subType = _props$item.subType,
      id = _props$item.id,
      label = _props$item.label;

  var iterations = function iterations() {
    try {
      var interval = cronParser.parseExpression(values[id]);
      return [interval.next().toString(), interval.next().toString(), interval.next().toString(), interval.next().toString()];
    } catch (err) {
      console.log('Error: ' + err.message);
    }

    return [];
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(TextField, _extends({
    label: label,
    variant: "outlined"
  }, field, {
    className: "" + (errors[id] ? 'bg-red-100' : ''),
    type: subType,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return customOnValueChanged(value);
    }
  })), /*#__PURE__*/React__default.createElement("p", {
    className: "text-xs mt-6 text-warmGray-500"
  }, /*#__PURE__*/React__default.createElement("ul", null, iterations().map(function (i) {
    return /*#__PURE__*/React__default.createElement("li", null, i);
  }))));
});

var Autocomplete = (function (props) {
  var initialValues = props.initialValues,
      customOnValueChanged = props.customOnValueChanged,
      field = props.field,
      values = props.values,
      _props$item = props.item,
      label = _props$item.label,
      id = _props$item.id,
      itemProps = _props$item.props;

  var _useState = React.useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = React.useState([]),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = React.useState(false),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  React.useEffect(function () {

    updateOptions({
      value: ''
    });
  }, []);

  var updateOptions = function updateOptions(_ref) {
    var value = _ref.value;

    try {
      setIsLoading(true);
      var fetcher = itemProps.fetcher;
      return Promise.resolve(fetcher({
        value: value
      })).then(function (items) {
        setOptions(items);
        setIsLoading(false);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React__default.createElement(Autocomplete$1, _extends({
    id: "asynchronous-demo",
    open: open,
    onOpen: function onOpen() {
      setOpen(true);
    },
    onClose: function onClose() {
      setOpen(false);
    }
  }, itemProps, {
    options: options,
    loading: isLoading,
    onChange: function onChange(event, newValue) {
      var value = newValue ? newValue : null;
      customOnValueChanged(value);
    },
    defaultValue: values && values[id] ? values[id] : initialValues[id],
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React__default.createElement(TextField, _extends({}, params, field, {
        label: label,
        onChange: function onChange(_ref2) {
          var value = _ref2.target.value;
          updateOptions({
            value: value
          });
          return Promise.resolve();
        },
        InputProps: _extends({}, params.InputProps, {
          endAdornment: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, isLoading ? /*#__PURE__*/React__default.createElement(CircularProgress, {
            color: "inherit",
            size: 20
          }) : null, params.InputProps.endAdornment)
        })
      }));
    }
  }));
});

var RadioGroup = (function (props) {
  var values = props.values,
      initialValues = props.initialValues,
      customOnValueChanged = props.customOnValueChanged,
      field = props.field,
      errors = props.errors,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(RadioGroup$1, _extends({
    "aria-label": "gender",
    defaultValue: "female",
    name: "radio-buttons-group",
    value: values[id] ? values[id] : initialValues[id]
  }, field, {
    className: "" + (errors[id] ? 'bg-red-100' : '')
  }, itemProps, {
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return customOnValueChanged(value);
    }
  }), itemProps.options.map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React__default.createElement(FormControlLabel, {
      value: value,
      control: /*#__PURE__*/React__default.createElement(Radio, null),
      label: label
    });
  }));
});

var Html = (function (props) {
  var _props$item = props.item,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement("div", null, itemProps.content);
});

var Divider = (function (props) {
  var _props$item = props.item,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "divider " + (itemProps.vertical ? 'divider-vertical' : '') + " "
  }, itemProps.content);
});

var Button = (function (props) {
  var _props$item = props.item,
      label = _props$item.label,
      itemProps = _props$item.props;
  var onClick = itemProps.onClick;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex justify-center my-2"
  }, /*#__PURE__*/React__default.createElement(Button$1, {
    variant: "text",
    onClick: onClick
  }, label));
});

var ButtonGroup = (function (props) {
  var _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  var options = itemProps.options;
  return /*#__PURE__*/React__default.createElement(ButtonGroup$1, {
    className: " " + (errors[id] ? 'bg-red-100 select-error' : ''),
    value: values[id] ? values[id] : initialValues[id],
    variant: "contained",
    "aria-label": "outlined primary button group",
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return customOnValueChanged(value);
    }
  }, options.map(function (option) {
    return /*#__PURE__*/React__default.createElement(Button$1, null, option.value);
  }));
});

var SwitchControl = (function (props) {
  var customOnValueChanged = props.customOnValueChanged,
      values = props.values,
      _props$item = props.item,
      label = _props$item.label,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(FormControlLabel, _extends({
    control: /*#__PURE__*/React__default.createElement(Switch, {
      color: "default",
      checked: values[id],
      onChange: function onChange(_ref) {
        var checked = _ref.target.checked;
        customOnValueChanged(checked);
      }
    }),
    label: label
  }, itemProps)));
});

var Rating = (function (props) {
  var values = props.values,
      customOnValueChanged = props.customOnValueChanged,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(Rating$1, _extends({
    name: "simple-controlled",
    value: values[id],
    size: "large",
    onChange: function onChange(event, newValue) {
      customOnValueChanged(newValue);
    }
  }, itemProps));
});

var DateRangePicker = (function (props) {
  var customOnValueChanged = props.customOnValueChanged,
      values = props.values,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(LocalizationProvider, {
    dateAdapter: dateAdapter
  }, /*#__PURE__*/React__default.createElement(DateRangePicker$1, _extends({
    value: values[id] && Array.isArray(values[id]) ? values[id] : [null, null],
    onChange: customOnValueChanged,
    renderInput: function renderInput(startProps, endProps) {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(TextField, startProps), /*#__PURE__*/React__default.createElement(Box, {
        sx: {
          mx: 2
        }
      }, " to "), /*#__PURE__*/React__default.createElement(TextField, endProps));
    }
  }, itemProps)));
});

var entry = (function (props) {
  var values = props.values,
      customOnValueChanged = props.customOnValueChanged,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  var item = values[id];

  var _useState = React.useState(null),
      error = _useState[0];

  var formItemsProvider = [].concat(itemProps.canRemove && itemProps.showRemove ? [{
    isMulti: true,
    className: 'flex ',
    items: [].concat(itemProps.formItemsProvider({
      item: item
    }), [{
      type: 'button',
      id: 'removeItem',
      label: 'Remove',
      className: 'ml-2 ',
      props: {
        onClick: function onClick() {
          customOnValueChanged && customOnValueChanged({
            isRemoved: true
          });
        }
      }
    }])
  }] : itemProps.formItemsProvider({
    item: item
  }));

  var onValuesChanged = function onValuesChanged(values) {
    var data = itemProps.onEntryValuesChangedHook({
      values: values,
      data: item
    });
    customOnValueChanged && customOnValueChanged(data);
  };

  var componentsLibrary = function componentsLibrary(_ref) {
    var type = _ref.type;

    switch (type) {
      case 'button':
        return Button;

      default:
        return null;
    }
  };

  return /*#__PURE__*/React__default.createElement(Formulaik, {
    componentsLibraries: [].concat(itemProps.componentsLibraries, [componentsLibrary]),
    initialValues: itemProps.initialValues({
      item: item
    }),
    validationSchema: itemProps.validationSchema({
      item: item
    }),
    formItemsProvider: formItemsProvider,
    onValuesChanged: onValuesChanged,
    error: error
  });
});

var ListEditor = (function (props) {
  var values = props.values,
      customOnValueChanged = props.customOnValueChanged,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  var items = values[id] ? values[id] : [];

  var _useState = React.useState(null),
      error = _useState[0];

  var validationSchema = Yup.object().shape(_extends({}, _.object(items.map(function (_item, i) {
    return "entry-" + i;
  }), items.map(function () {
    return Yup.object();
  }))));
  var formItemsProvider = [].concat(items.map(function (item, i) {
    return {
      type: 'entry',
      id: "entry-" + i,
      props: itemProps
    };
  }), itemProps.canAddItems && items.length < itemProps.maxItems ? [{
    type: 'button',
    id: 'addItem',
    label: itemProps.addItemLabel ? itemProps.addItemLabel : 'Add item',
    props: {
      onClick: function onClick() {
        var newItem = itemProps.newStruct;
        items.push(newItem);
        customOnValueChanged && customOnValueChanged(items);
      }
    }
  }] : []);

  var initialValues = function initialValues() {
    var list = {};
    items.forEach(function (item, i) {
      list["entry-" + i] = item;
    });
    return list;
  };

  var onValuesChanged = function onValuesChanged(__values) {
    if (_.isEmpty(__values)) {
      return;
    }

    var _i = [];
    Object.keys(__values).forEach(function (e) {
      if (__values[e].isRemoved) {
        return;
      }

      _i.push(__values[e]);
    });
    customOnValueChanged && customOnValueChanged(_i);
  };

  var componentsLibrary = function componentsLibrary(_ref) {
    var type = _ref.type;

    switch (type) {
      case 'entry':
        return entry;

      case 'button':
        return Button;

      default:
        return null;
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/React__default.createElement(Formulaik, {
    componentsLibraries: [].concat(itemProps.componentsLibraries, [componentsLibrary]),
    initialValues: initialValues,
    validationSchema: validationSchema,
    formItemsProvider: formItemsProvider,
    onValuesChanged: onValuesChanged,
    error: error
  }));
});

var H1 = (function (props) {
  var itemProps = props.item.props;
  return /*#__PURE__*/React__default.createElement("h1", null, itemProps.content);
});

var H2 = (function (props) {
  var itemProps = props.item.props;
  return /*#__PURE__*/React__default.createElement("h2", null, itemProps.content);
});

var H3 = (function (props) {
  var itemProps = props.item.props;
  return /*#__PURE__*/React__default.createElement("h3", null, itemProps.content);
});

var H4 = (function (props) {
  var itemProps = props.item.props;
  return /*#__PURE__*/React__default.createElement("h4", null, itemProps.content);
});

var index = (function (props) {
  var type = props.type;

  switch (type) {
    case 'input':
      return Input;

    case 'select':
      return Select;

    case 'submit':
      return Submit;

    case 'checkbox':
      return Checkbox;

    case 'textArea':
      return TextArea;

    case 'selectCountry':
      return SelectCountry;

    case 'inputPhoneNumber':
      return InputPhoneNumber;

    case 'dateRangePicker':
      return DateRangePicker;

    case 'datePicker':
      return DatePicker;

    case 'aceEditor':
      return AceEditor;

    case 'cronGenerator':
      return CronGenerator;

    case 'JSONEditor':
      return JSONEditor;

    case 'cronEditor':
      return CronEditor;

    case 'autocomplete':
      return Autocomplete;

    case 'radioGroup':
      return RadioGroup;

    case 'html':
      return Html;

    case 'divider':
      return Divider;

    case 'button':
      return Button;

    case 'buttonGroup':
      return ButtonGroup;

    case 'switch':
      return SwitchControl;

    case 'rating':
      return Rating;

    case 'listEditor':
      return ListEditor;

    case 'h1':
      return H1;

    case 'h2':
      return H2;

    case 'h3':
      return H3;

    case 'h4':
      return H4;

    default:
      return null;
  }
});

module.exports = index;
//# sourceMappingURL=index.js.map

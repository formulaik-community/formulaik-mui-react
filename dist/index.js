function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var TextField = _interopDefault(require('@mui/material/TextField'));
var useDebounce = require('use-debounce');
var LoadingButton = _interopDefault(require('@mui/lab/LoadingButton'));
var FormControlLabel = _interopDefault(require('@mui/material/FormControlLabel'));
var Checkbox$1 = _interopDefault(require('@mui/material/Checkbox'));
var Select$1 = _interopDefault(require('@mui/material/Select'));
var MenuItem = _interopDefault(require('@mui/material/MenuItem'));
var TextareaAutosize = _interopDefault(require('@mui/material/TextareaAutosize'));
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
var AddAPhotoIcon = _interopDefault(require('@mui/icons-material/Add'));
var IconButton = _interopDefault(require('@mui/material/IconButton'));
require('@mui/icons-material/Delete');
require('@mui/material/Modal');
var Avatar$2 = _interopDefault(require('@mui/material/Avatar'));
require('@mui/material/colors');
var styles = require('@mui/material/styles');
var Badge = _interopDefault(require('@mui/material/Badge'));
var reactDragDropFiles = require('react-drag-drop-files');
var RemoveButton = _interopDefault(require('@mui/icons-material/DeleteOutline'));
var EditOutlined = _interopDefault(require('@mui/icons-material/EditOutlined'));
var Accordion = _interopDefault(require('@mui/material/Accordion'));
var AccordionSummary = _interopDefault(require('@mui/material/AccordionSummary'));
var AccordionDetails = _interopDefault(require('@mui/material/AccordionDetails'));
var ExpandMoreIcon = _interopDefault(require('@mui/icons-material/ExpandMore'));
var ArrowDownward = _interopDefault(require('@mui/icons-material/ArrowDownward'));
var ArrowUpward = _interopDefault(require('@mui/icons-material/ArrowUpward'));

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
  var value = props.value,
      error = props.error,
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      subType = _props$item.subType,
      label = _props$item.label,
      _props$item$props = _props$item.props,
      itemProps = _props$item$props === void 0 ? {} : _props$item$props;
  var placeholder = itemProps.placeholder,
      _itemProps$inputDelay = itemProps.inputDelay,
      inputDelay = _itemProps$inputDelay === void 0 ? 1000 : _itemProps$inputDelay,
      _itemProps$className = itemProps.className,
      className = _itemProps$className === void 0 ? '' : _itemProps$className;

  var _useState = React.useState(value ? value : ''),
      innerValue = _useState[0],
      setInnerValue = _useState[1];

  React.useEffect(function () {
    setInnerValue(value ? value : '');
  }, [value]);
  var debouncedHandleOnChange = useDebounce.useDebouncedCallback(function (event) {
    var value = event.target.value;
    onValueChanged(value);
    console.log('textArea debouncedHandleOnChange', value);
  }, inputDelay);
  var handleOnChange = React.useCallback(function (event) {
    event.persist();
    var newValue = event.target.value;
    setInnerValue(newValue);
    debouncedHandleOnChange(event);
    console.log('textArea handleOnChange', value);
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "w-full " + className
  }, /*#__PURE__*/React__default.createElement(TextField, _extends({
    label: label,
    variant: "outlined",
    disabled: props.disabled,
    readOnly: props.readOnly,
    value: innerValue,
    placeholder: placeholder,
    className: "w-full " + (error ? 'bg-red-100' : ''),
    type: subType,
    onChange: handleOnChange
  }, itemProps)));
});

var Submit = (function (props) {
  var isSubmitting = props.isSubmitting,
      _props$item = props.item,
      value = _props$item.value;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex justify-center my-2"
  }, /*#__PURE__*/React__default.createElement(LoadingButton, {
    loading: isSubmitting,
    disabled: props.disabled,
    variant: "outlined",
    onClick: props.submitForm,
    size: 'large'
  }, value));
});

var Checkbox = (function (props) {
  var onValueChanged = props.onValueChanged,
      values = props.values,
      _props$item = props.item,
      label = _props$item.label,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "px-4 py-2 card rounded-lg border-2 border-warmGray-400 "
  }, /*#__PURE__*/React__default.createElement(FormControlLabel, {
    control: /*#__PURE__*/React__default.createElement(Checkbox$1, _extends({
      color: "default",
      disabled: props.disabled,
      readOnly: props.readOnly
    }, itemProps, {
      checked: function () {
        var _value = values[id];
        return _value;
      }(),
      onChange: function onChange(_ref) {
        var checked = _ref.target.checked;
        onValueChanged(checked);
      }
    })),
    label: label
  }), itemProps && itemProps.subLabel ? /*#__PURE__*/React__default.createElement("small", {
    className: ""
  }, itemProps.subLabel) : null);
});

var Select = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      error = props.error,
      _props$item = props.item,
      label = _props$item.label,
      id = _props$item.id,
      itemProps = _props$item.props;
  var options = itemProps.options;
  return /*#__PURE__*/React__default.createElement(Select$1, {
    disabled: props.disabled,
    readOnly: props.readOnly,
    labelId: id,
    id: id,
    className: " " + (error ? 'bg-red-100 select-error' : ''),
    value: value,
    label: label,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return onValueChanged(value);
    }
  }, options.map(function (option) {
    return /*#__PURE__*/React__default.createElement(MenuItem, {
      value: option.value
    }, option.label);
  }));
});

var TextArea = (function (props) {
  var _React$createElement;

  var value = props.value,
      error = props.error,
      onValueChanged = props.onValueChanged,
      _props$item$props = props.item.props,
      itemProps = _props$item$props === void 0 ? {} : _props$item$props;
  var _itemProps$maxRows = itemProps.maxRows,
      maxRows = _itemProps$maxRows === void 0 ? 1000 : _itemProps$maxRows,
      _itemProps$minRows = itemProps.minRows,
      minRows = _itemProps$minRows === void 0 ? 3 : _itemProps$minRows,
      placeholder = itemProps.placeholder,
      _itemProps$inputDelay = itemProps.inputDelay,
      inputDelay = _itemProps$inputDelay === void 0 ? 1000 : _itemProps$inputDelay;

  var _useState = React.useState(value ? value : ''),
      innerValue = _useState[0],
      setInnerValue = _useState[1];

  React.useEffect(function () {
    setInnerValue(value ? value : '');
  }, [value]);
  var debouncedHandleOnChange = useDebounce.useDebouncedCallback(function (event) {
    var value = event.target.value;
    onValueChanged(value);
    console.log('textArea debouncedHandleOnChange', value);
  }, inputDelay);
  var handleOnChange = React.useCallback(function (event) {
    event.persist();
    var newValue = event.target.value;
    setInnerValue(newValue);
    debouncedHandleOnChange(event);
    console.log('textArea handleOnChange', value);
  }, []);
  return /*#__PURE__*/React__default.createElement(TextareaAutosize, (_React$createElement = {
    sx: {},
    "aria-label": "minimum height",
    disabled: props.disabled,
    readOnly: props.readOnly,
    minRows: maxRows
  }, _React$createElement["minRows"] = minRows, _React$createElement.onChange = handleOnChange, _React$createElement.value = innerValue, _React$createElement.placeholder = placeholder, _React$createElement.className = "textarea h-64 py-4 pb-8 rounded-md border-warmGray-100 text-base w-full " + (error ? 'bg-red-100 border-red-600' : 'border-warmGray-400'), _React$createElement));
});

var SelectCountry = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      error = props.error,
      _props$item = props.item,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(ReactFlagsSelect, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    selected: value,
    onSelect: onValueChanged
  }, itemProps, {
    className: "  w-full focus:ring-primary  " + (error ? 'bg-red-100 select-error' : '')
  }));
});

var InputPhoneNumber = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      error = props.error,
      itemProps = props.item.props;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "border-2 border-warmGray-300 rounded-md px-4 py-4"
  }, /*#__PURE__*/React__default.createElement(PhoneInput, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    placeholder: "Enter phone number",
    value: value,
    onChange: onValueChanged
  }, itemProps, {
    className: "w-full focus:ring-primary  " + (error ? 'bg-red-100 select-error' : '')
  })));
});

var DatePicker = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      _props$item = props.item,
      label = _props$item.label,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(LocalizationProvider, {
    dateAdapter: dateAdapter
  }, /*#__PURE__*/React__default.createElement(DatePicker$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    label: label,
    value: value,
    onChange: onValueChanged
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
      onValueChanged = props.onValueChanged,
      errors = props.errors,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(Editor, _extends({
    value: values[id],
    mode: "jade",
    theme: "github",
    onChange: onValueChanged,
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
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      id = _props$item.id;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reCron.ReCron, {
    value: values[id],
    onChange: onValueChanged
  }));
});

var JSONEditor = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      error = props.error,
      _props$item = props.item,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(JSONInput, _extends({
    id: "a_unique_id",
    disabled: props.disabled,
    readOnly: props.readOnly,
    placeholder: value,
    onChange: function onChange(val) {
      var json = val.json;
      onValueChanged(json);
    },
    locale: locale,
    height: "550px",
    className: " " + (error ? 'bg-red-100 border-red-600' : '')
  }, itemProps));
});

var CronEditor = (function (props) {
  var values = props.values,
      onValueChanged = props.onValueChanged,
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
    disabled: props.disabled,
    readOnly: props.readOnly,
    variant: "outlined"
  }, field, {
    className: "" + (errors[id] ? 'bg-red-100' : ''),
    type: subType,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return onValueChanged(value);
    }
  })), /*#__PURE__*/React__default.createElement("p", {
    className: "text-xs mt-6 text-warmGray-500"
  }, /*#__PURE__*/React__default.createElement("ul", null, iterations().map(function (i) {
    return /*#__PURE__*/React__default.createElement("li", null, i);
  }))));
});

var Autocomplete = (function (props) {
  var initialValues = props.initialValues,
      onValueChanged = props.onValueChanged,
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
    disabled: props.disabled,
    readOnly: props.readOnly,
    sx: {},
    fullWidth: true,
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
      onValueChanged(value);
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
  var value = props.value,
      error = props.error,
      onValueChanged = props.onValueChanged,
      field = props.field,
      _props$item = props.item,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(RadioGroup$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    "aria-label": "gender",
    defaultValue: "female",
    name: "radio-buttons-group",
    value: value
  }, field, {
    className: "" + (error ? 'bg-red-100' : '')
  }, itemProps, {
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return onValueChanged(value);
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
    disabled: props.disabled,
    readOnly: props.readOnly,
    onClick: onClick
  }, label));
});

var ButtonGroup = (function (props) {
  var _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  var options = itemProps.options;
  return /*#__PURE__*/React__default.createElement(ButtonGroup$1, {
    disabled: props.disabled,
    readOnly: props.readOnly,
    className: " " + (errors[id] ? 'bg-red-100 select-error' : ''),
    value: values[id] ? values[id] : initialValues[id],
    variant: "contained",
    "aria-label": "outlined primary button group",
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return onValueChanged(value);
    }
  }, options.map(function (option) {
    return /*#__PURE__*/React__default.createElement(Button$1, null, option.value);
  }));
});

var SwitchControl = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      _props$item = props.item,
      label = _props$item.label,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(FormControlLabel, _extends({
    control: /*#__PURE__*/React__default.createElement(Switch, {
      disabled: props.disabled,
      readOnly: props.readOnly,
      color: "default",
      checked: value,
      onChange: function onChange(_ref) {
        var checked = _ref.target.checked;
        onValueChanged(checked);
      }
    }),
    label: label
  }, itemProps)));
});

var Rating = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(Rating$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    name: "simple-controlled",
    value: value,
    size: "large",
    onChange: function onChange(event, newValue) {
      onValueChanged(newValue);
    }
  }, itemProps));
});

var DateRangePicker = (function (props) {
  var onValueChanged = props.onValueChanged,
      values = props.values,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  return /*#__PURE__*/React__default.createElement(LocalizationProvider, {
    dateAdapter: dateAdapter
  }, /*#__PURE__*/React__default.createElement(DateRangePicker$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    value: values[id] && Array.isArray(values[id]) ? values[id] : [null, null],
    onChange: onValueChanged,
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
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;
  var item = values[id];

  var _useState = React.useState(null),
      error = _useState[0];

  var inputs = [].concat(itemProps.canRemove && itemProps.showRemove ? [{
    isMulti: true,
    className: 'flex ',
    items: [].concat(itemProps.inputs({
      item: item
    }), [{
      type: 'button',
      id: 'removeItem',
      label: 'Remove',
      className: 'ml-2 ',
      props: {
        onClick: function onClick() {
          onValueChanged && onValueChanged({
            isRemoved: true
          });
        }
      }
    }])
  }] : itemProps.inputs({
    item: item
  }));

  var onValuesChanged = function onValuesChanged(values) {
    var data = itemProps.onEntryValuesChangedHook({
      values: values,
      data: item
    });
    onValueChanged && onValueChanged(data);
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
    inputs: inputs,
    onValuesChanged: onValuesChanged,
    error: error
  });
});

var ListEditor = (function (props) {
  var values = props.values,
      onValueChanged = props.onValueChanged,
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
  var inputs = [].concat(items.map(function (item, i) {
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
        onValueChanged && onValueChanged(items);
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
    onValueChanged && onValueChanged(_i);
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
    inputs: inputs,
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

var VisualSelect = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      _props$item$props = props.item.props,
      itemProps = _props$item$props === void 0 ? {} : _props$item$props;

  var _useState = React.useState(value ? value.filter(function (a) {
    return a;
  }) : []),
      selectedItems = _useState[0],
      setSelectedItems = _useState[1];

  var items = itemProps.items,
      _itemProps$cols = itemProps.cols,
      cols = _itemProps$cols === void 0 ? 1 : _itemProps$cols,
      maxSelectionAllowed = itemProps.maxSelectionAllowed,
      _itemProps$itemHeight = itemProps.itemHeight,
      itemHeight = _itemProps$itemHeight === void 0 ? 'h-72' : _itemProps$itemHeight,
      ContentComponent = itemProps.ContentComponent,
      _itemProps$highlightC = itemProps.highlightColor,
      highlightColor = _itemProps$highlightC === void 0 ? 'pink-600' : _itemProps$highlightC,
      _itemProps$baseColor = itemProps.baseColor,
      baseColor = _itemProps$baseColor === void 0 ? 'warmGray-100' : _itemProps$baseColor,
      _itemProps$useLatestS = itemProps.useLatestSelection,
      useLatestSelection = _itemProps$useLatestS === void 0 ? false : _itemProps$useLatestS;

  var onClickItem = function onClickItem(e, item) {
    e.preventDefault();
    e.stopPropagation();

    if (props.disabled || props.readOnly) {
      return;
    }

    var id = item.id;
    var isSelected = selectedItems.includes(id);
    var newSelectedItems;

    if (isSelected) {
      newSelectedItems = selectedItems.filter(function (a) {
        return a !== id;
      });
    } else {
      if (useLatestSelection) {
        newSelectedItems = [].concat(selectedItems, [id]);

        if (newSelectedItems.length > maxSelectionAllowed) {
          newSelectedItems.splice(0, 1);
        }
      } else {
        newSelectedItems = selectedItems.length < maxSelectionAllowed ? [].concat(selectedItems, [id]) : [].concat(selectedItems);
      }
    }

    setSelectedItems(newSelectedItems);
    onValueChanged && onValueChanged(newSelectedItems);
  };

  var renderThumbnail = function renderThumbnail(item) {
    var isSelected = selectedItems.includes(item.id);
    return /*#__PURE__*/React__default.createElement("div", {
      onClick: function onClick(e) {
        return onClickItem(e, item);
      },
      className: "\n        w-full\n        cursor-pointer\n        rounded-2xl\n        overflow-hidden\n        group\n        relative\n        transform\n        transition\n        duration-200\n        ease-in-out\n        " + itemHeight + "\n        " + (!props.disabled && !props.readOnly && isSelected ? 'border-4' : 'border-4') + "\n        " + (!props.disabled && !props.readOnly && isSelected ? 'opacity-100' : 'opacity-70 hover:opacity-80') + "\n        " + (!props.disabled && !props.readOnly && isSelected ? 'scale-105' : 'hover:scale-105') + "\n        " + (!props.disabled && !props.readOnly && isSelected ? "border-" + highlightColor : "border-" + baseColor + " " + (!props.disabled && !props.readOnly && isSelected ? 'hover:border-${highlightColor}' : '')) + "\n        "
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "\n        absolute\n        left-1\n        right-1\n        bottom-1\n        top-1\n        flex\n        rounded-xl\n        overflow-hidden\n        justify-center\n        group-hover:flex\n        bg-" + baseColor + "\n        bg-opacity-80\n        group-hover:bg-opacity-100\n    "
    }, /*#__PURE__*/React__default.createElement(ContentComponent, {
      item: item
    })));
  };

  var renderItem = function renderItem(item, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      className: "w-full"
    }, " ", renderThumbnail(item));
  };

  return /*#__PURE__*/React__default.createElement("ul", {
    className: "grid-cols-" + cols + " grid gap-x-6 gap-y-6 py-0"
  }, items && items.length > 0 && items.map(renderItem));
});

var Add = (function (props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "items-center flex overflow-hidden relative"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "     items-center  flex  overflow-hidden  justify-center absolute  left-0  right-0  bottom-0  top-0"
  }, /*#__PURE__*/React__default.createElement(AddAPhotoIcon, {
    fontSize: 'large',
    color: '#858585'
  })));
});

var Shell = (function (props) {
  var badge = props.badge,
      children = props.children;

  if (!badge) {
    return children;
  }

  return /*#__PURE__*/React__default.createElement(StyledBadge, {
    overlap: "circular",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    variant: "dot"
  }, children);
});
var StyledBadge = styles.styled(Badge)(function (_ref) {
  var theme = _ref.theme;
  return {
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: "0 0 0 2px " + theme.palette.background.paper,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
      }
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0
      }
    }
  };
});

var Avatar = (function (props) {
  var _props$initials2;

  var _props$badge = props.badge,
      badge = _props$badge === void 0 ? false : _props$badge;
  return /*#__PURE__*/React__default.createElement(Shell, {
    badge: badge
  }, /*#__PURE__*/React__default.createElement(Avatar$2, {
    sx: {
      bgcolor: props.bgcolor,
      width: props.size,
      height: props.size
    },
    src: props.src
  }, (_props$initials2 = props.initials) != null ? _props$initials2 : props.initials));
});

var Preview = (function (props) {
  var size = props.size,
      data = props.data;
  return /*#__PURE__*/React__default.createElement("div", {
    className: " w-full  h-full  items-center  flex  justify-center   transform group-hover:scale-105 transition duration-200 ease-in-out "
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    size: size * 4,
    badge: false,
    src: data.file ? URL.createObjectURL(data.file) : data.url
  }));
});

var fileTypes = ["JPG", "JPEG", "WEBP", "PNG", "GIF"];
var FileUploader = (function (props) {
  var onFileChanged = props.onFileChanged,
      _props$maxFileSize = props.maxFileSize,
      maxFileSize = _props$maxFileSize === void 0 ? 10 : _props$maxFileSize;
  return /*#__PURE__*/React__default.createElement(reactDragDropFiles.FileUploader, {
    maxSize: maxFileSize,
    onSizeError: function onSizeError() {
      alert("Please choose a smaller file (" + maxFileSize + "mb max)");
    },
    handleChange: onFileChanged,
    name: "file",
    types: fileTypes
  });
});

var Avatar$1 = (function (props) {
  var values = props.values,
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      id = _props$item.id,
      _props$item$props = _props$item.props,
      itemProps = _props$item$props === void 0 ? {} : _props$item$props;

  var _useState = React.useState(values[id] ? values[id] : {}),
      data = _useState[0],
      setData = _useState[1];

  var size = itemProps.size,
      _itemProps$canRemove = itemProps.canRemove,
      canRemove = _itemProps$canRemove === void 0 ? true : _itemProps$canRemove,
      _itemProps$canEdit = itemProps.canEdit,
      canEdit = _itemProps$canEdit === void 0 ? false : _itemProps$canEdit;

  var onFileChanged = function onFileChanged(file) {
    if (props.disabled || props.readOnly) {
      return;
    }

    var _data = _extends({}, data, {
      file: file
    });

    if (!_data.file) {
      _data = null;
    }

    setData(_data);
    onValueChanged && onValueChanged(_data);
  };

  var _props = _extends({}, itemProps, {
    data: data,
    disabled: props.disabled,
    readOnly: props.readOnly
  });

  var onClick = function onClick() {};

  var hasData = data.url || data.file;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "\n            my-4\n            flex\n            group\n            "
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "\n            my-4\n            border\n            border-warmGray-300\n            rounded-full\n            h-" + size + "\n            w-" + size + "\n            align-middle\n            hover:bg-warmGray-50\n            cursor-pointer\n            justify-center\n            items-center\n            flex\n            group\n            relative\n            overflow-hidden",
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "\n      bg-pink-300\n      bg-opacity-25\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      "
  }, hasData ? /*#__PURE__*/React__default.createElement(Preview, _props) : /*#__PURE__*/React__default.createElement(Add, _props)), /*#__PURE__*/React__default.createElement("div", {
    className: "\n      bg-pink-300\n      bg-opacity-70\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      " + (!props.disable || !props.readOnly || hasData ? 'hidden' : 'flex') + "\n      " + (!props.disable && !props.readOnly ? 'group-hover:flex' : '') + "\n      items-center\n      px-2\n      py-2\n      text-center\n      justify-center\n      "
  }, /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("small", null, "" + (hasData ? 'Click to change picture' : 'Click to add a picture')))), /*#__PURE__*/React__default.createElement("div", {
    className: "\n      bg-opacity-25\n      items-center\n      flex\n      overflow-hidden\n      h-full\n      w-full\n      opacity-0\n      bg-blue-500\n      hover:scale-105\n        transition\n        duration-200\n        ease-in-out'>\n      "
  }, !props.disable && !props.readOnly ? /*#__PURE__*/React__default.createElement(FileUploader, {
    onFileChanged: onFileChanged
  }) : null)), hasData ? /*#__PURE__*/React__default.createElement("div", {
    className: "\n            px-2\n            py-4\n            h-full\n            hidden\n            " + (!props.disable && !props.readOnly ? 'group-hover:grid' : '') + "\n            place-items-center\n            grid-cols-1\n            transform\n            transition\n            duration-200\n            ease-in-out\n            "
  }, !props.disable && !props.readOnly && canRemove ? /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "Delete",
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (props.disabled || props.readOnly) {
        return;
      }

      var _data = {};
      setData(_data);
      onValueChanged && onValueChanged(_data);
    }
  }, /*#__PURE__*/React__default.createElement(RemoveButton, null)) : null, canEdit ? /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "Move up",
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (props.disabled || props.readOnly) {
        return;
      }
    }
  }, /*#__PURE__*/React__default.createElement(EditOutlined, null)) : null) : null);
});

var index = (function (props) {
  var summary = props.summary,
      details = props.details,
      label = props.label,
      onMoveDownRequired = props.onMoveDownRequired,
      onRemoveRequired = props.onRemoveRequired,
      onMoveUpRequired = props.onMoveUpRequired,
      canRemove = props.canRemove,
      canMoveUp = props.canMoveUp,
      canMoveDown = props.canMoveDown,
      showControls = props.showControls,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled;
  return /*#__PURE__*/React__default.createElement(Accordion, {
    defaultExpanded: true,
    className: "w-full border-warmGray-200  border-2 px-4 py-2 rounded-xl"
  }, /*#__PURE__*/React__default.createElement(AccordionSummary, {
    expanded: true,
    expandIcon: /*#__PURE__*/React__default.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "grid grid-cols-2 justify-between w-full "
  }, /*#__PURE__*/React__default.createElement("div", {
    className: ""
  }, /*#__PURE__*/React__default.createElement("h4", null, label)), /*#__PURE__*/React__default.createElement("div", {
    className: "flex justify-end mr-4"
  }, summary, showControls && /*#__PURE__*/React__default.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "Move up",
    disabled: disabled || !canMoveUp,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveUpRequired && onMoveUpRequired();
    }
  }, /*#__PURE__*/React__default.createElement(ArrowUpward, null)), /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "Move down",
    disabled: disabled || !canMoveDown,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveDownRequired && onMoveDownRequired();
    }
  }, /*#__PURE__*/React__default.createElement(ArrowDownward, null)), /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "Delete",
    disabled: disabled,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onRemoveRequired && onRemoveRequired();
    }
  }, canRemove && /*#__PURE__*/React__default.createElement(RemoveButton, null)))))), /*#__PURE__*/React__default.createElement(AccordionDetails, null, details));
});



var _Utils = {
  __proto__: null,
  FieldInArrayShieldVertical: index
};

var index$1 = (function (props) {
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

    case 'visualSelect':
      return VisualSelect;

    case 'avatar':
      return Avatar$1;

    default:
      return null;
  }
});
var Utils = _Utils;

exports.Utils = Utils;
exports.default = index$1;
//# sourceMappingURL=index.js.map

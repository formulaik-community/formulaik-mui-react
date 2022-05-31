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
var FormControl = _interopDefault(require('@mui/material/FormControl'));
var InputLabel = _interopDefault(require('@mui/material/InputLabel'));
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
require('underscore');
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
var FilePreviewer = _interopDefault(require('react-file-previewer'));
var HoverVideoPlayer = _interopDefault(require('react-hover-video-player'));
var CurrencyTextField = _interopDefault(require('@unicef/material-ui-currency-textfield'));
var numericStepper$1 = require('@anatoliygatt/numeric-stepper');
var Accordion = _interopDefault(require('@mui/material/Accordion'));
var AccordionSummary = _interopDefault(require('@mui/material/AccordionSummary'));
var AccordionDetails = _interopDefault(require('@mui/material/AccordionDetails'));
var ExpandMoreIcon = _interopDefault(require('@mui/icons-material/ExpandMore'));
var reactFeather = require('react-feather');

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
      _props$item$params = _props$item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;
  var placeholder = params.placeholder,
      _params$inputDelay = params.inputDelay,
      inputDelay = _params$inputDelay === void 0 ? 1000 : _params$inputDelay,
      _params$className = params.className,
      className = _params$className === void 0 ? '' : _params$className;

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
  }, params)));
});

var Submit = (function (props) {
  var isSubmitting = props.isSubmitting,
      _props$item$params = props.item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;
  var _params$variant = params.variant,
      variant = _params$variant === void 0 ? 'outlined' : _params$variant,
      _params$text = params.text,
      text = _params$text === void 0 ? 'Update' : _params$text,
      _params$size = params.size,
      size = _params$size === void 0 ? 'large' : _params$size;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex justify-center my-2"
  }, /*#__PURE__*/React__default.createElement(LoadingButton, {
    loading: isSubmitting,
    disabled: props.disabled,
    variant: variant,
    onClick: props.submitForm,
    size: size
  }, text));
});

var Checkbox = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      _props$item = props.item,
      label = _props$item.label,
      params = _props$item.params;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "px-4 py-2 card rounded-lg border-2 border-warmGray-400 "
  }, /*#__PURE__*/React__default.createElement(FormControlLabel, {
    control: /*#__PURE__*/React__default.createElement(Checkbox$1, _extends({
      color: "default",
      disabled: props.disabled,
      readOnly: props.readOnly
    }, params, {
      checked: value,
      onChange: function onChange(_ref) {
        var checked = _ref.target.checked;
        onValueChanged(checked);
      }
    })),
    label: label
  }), params && params.subLabel ? /*#__PURE__*/React__default.createElement("small", {
    className: ""
  }, params.subLabel) : null);
});

var Select = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      error = props.error,
      _props$item = props.item,
      label = _props$item.label,
      id = _props$item.id,
      params = _props$item.params;
  var options = params.options;
  return /*#__PURE__*/React__default.createElement(FormControl, {
    className: 'w-full'
  }, /*#__PURE__*/React__default.createElement(InputLabel, {
    id: "demo-simple-select-autowidth-label"
  }, label), /*#__PURE__*/React__default.createElement(Select$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    labelId: "demo-simple-select-autowidth-label",
    id: id,
    className: " " + (error ? 'bg-red-100 select-error' : ''),
    value: value,
    label: label
  }, params, {
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return onValueChanged(value);
    }
  }), options.map(function (option) {
    return /*#__PURE__*/React__default.createElement(MenuItem, {
      value: option.value
    }, option.label);
  })));
});

var TextArea = (function (props) {
  var _React$createElement;

  var value = props.value,
      error = props.error,
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      _props$item$params = _props$item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;
  var _params$maxRows = params.maxRows,
      maxRows = _params$maxRows === void 0 ? 1000 : _params$maxRows,
      _params$minRows = params.minRows,
      minRows = _params$minRows === void 0 ? 3 : _params$minRows,
      placeholder = params.placeholder,
      _params$inputDelay = params.inputDelay,
      inputDelay = _params$inputDelay === void 0 ? 1000 : _params$inputDelay;

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
    minRows: maxRows
  }, _React$createElement["minRows"] = minRows, _React$createElement.onChange = handleOnChange, _React$createElement.value = innerValue, _React$createElement.placeholder = placeholder, _React$createElement.className = "textarea h-64 rounded-md border-warmGray-200 border px-4 py-4 pb-12 text-base w-full ring-pink-600 " + (error ? 'bg-red-100 border-red-600' : 'border-warmGray-400'), _React$createElement));
});

var SelectCountry = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      error = props.error,
      _props$item = props.item,
      params = _props$item.params;
  return /*#__PURE__*/React__default.createElement(ReactFlagsSelect, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    selected: value,
    onSelect: onValueChanged
  }, params, {
    className: "  w-full focus:ring-primary  " + (error ? 'bg-red-100 select-error' : '')
  }));
});

var InputPhoneNumber = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      error = props.error,
      params = props.item.params;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "border-2 border-warmGray-300 rounded-md px-4 py-4"
  }, /*#__PURE__*/React__default.createElement(PhoneInput, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    placeholder: "Enter phone number",
    value: value,
    onChange: onValueChanged
  }, params, {
    className: "w-full focus:ring-primary  " + (error ? 'bg-red-100 select-error' : '')
  })));
});

var DatePicker = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      _props$item = props.item,
      label = _props$item.label,
      params = _props$item.params;
  return /*#__PURE__*/React__default.createElement(LocalizationProvider, {
    dateAdapter: dateAdapter
  }, /*#__PURE__*/React__default.createElement(DatePicker$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    label: label,
    value: value,
    onChange: onValueChanged
  }, params, {
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
      params = _props$item.params;
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
    }, params.options),
    width: '100%',
    fontSize: 14,
    wrapEnabled: true,
    showPrintMargin: false,
    showGutter: true,
    className: "textarea w-full textarea-bordered bg-gray-50 " + (errors[id] ? 'bg-red-100 border-red-600' : '')
  }, params));
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
      params = _props$item.params;
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
  }, params));
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
      params = _props$item.params;

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
      var fetcher = params.fetcher;
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
  }, params, {
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
      params = _props$item.params;
  return /*#__PURE__*/React__default.createElement(RadioGroup$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    "aria-label": "gender",
    defaultValue: "female",
    name: "radio-buttons-group",
    value: value
  }, field, {
    className: "" + (error ? 'bg-red-100' : '')
  }, params, {
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return onValueChanged(value);
    }
  }), params.options.map(function (_ref2) {
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
      params = _props$item.params;
  return /*#__PURE__*/React__default.createElement("div", null, params.content);
});

var Divider = (function (props) {
  var _props$item = props.item,
      params = _props$item.params;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "divider " + (params.vertical ? 'divider-vertical' : '') + " "
  }, params.content);
});

var Button = (function (props) {
  var _props$item = props.item,
      label = _props$item.label,
      params = _props$item.params;
  var onClick = params.onClick;
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
      params = _props$item.params;
  var options = params.options;
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
      params = _props$item.params;
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
  }, params)));
});

var Rating = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      params = _props$item.params;
  return /*#__PURE__*/React__default.createElement(Rating$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    name: "simple-controlled",
    value: value,
    size: "large",
    onChange: function onChange(event, newValue) {
      onValueChanged(newValue);
    }
  }, params));
});

var DateRangePicker = (function (props) {
  var onValueChanged = props.onValueChanged,
      values = props.values,
      _props$item = props.item,
      id = _props$item.id,
      params = _props$item.params;
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
  }, params)));
});

var H1 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React__default.createElement("h1", null, params.content);
});

var H2 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React__default.createElement("h2", null, params.content);
});

var H3 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React__default.createElement("h3", null, params.content);
});

var H4 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React__default.createElement("h4", null, params.content);
});

var VisualSelect = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      _props$item$params = props.item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;

  var _useState = React.useState(value ? value.filter(function (a) {
    return a;
  }) : []),
      selectedItems = _useState[0],
      setSelectedItems = _useState[1];

  var items = params.items,
      _params$cols = params.cols,
      cols = _params$cols === void 0 ? 1 : _params$cols,
      maxSelectionAllowed = params.maxSelectionAllowed,
      _params$itemHeight = params.itemHeight,
      itemHeight = _params$itemHeight === void 0 ? 'h-72' : _params$itemHeight,
      ContentComponent = params.ContentComponent,
      _params$highlightColo = params.highlightColor,
      highlightColor = _params$highlightColo === void 0 ? 'pink-600' : _params$highlightColo,
      _params$baseColor = params.baseColor,
      baseColor = _params$baseColor === void 0 ? 'warmGray-100' : _params$baseColor,
      _params$useLatestSele = params.useLatestSelection,
      useLatestSelection = _params$useLatestSele === void 0 ? false : _params$useLatestSele;

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
  var value = props.value,
      onValueChanged = props.onValueChanged,
      _props$item$params = props.item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;

  var _useState = React.useState(value ? value : {}),
      data = _useState[0],
      setData = _useState[1];

  var size = params.size,
      _params$canRemove = params.canRemove,
      canRemove = _params$canRemove === void 0 ? true : _params$canRemove,
      _params$canEdit = params.canEdit,
      canEdit = _params$canEdit === void 0 ? false : _params$canEdit;

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

  var _props = _extends({}, params, {
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

var Add$1 = (function (props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "items-center flex overflow-hidden relative"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "     items-center  flex  overflow-hidden  justify-center absolute  left-0  right-0  bottom-0  top-0"
  }, /*#__PURE__*/React__default.createElement(AddAPhotoIcon, {
    fontSize: 'large',
    color: '#858585'
  })));
});

var Preview$1 = (function (props) {
  var data = props.data;
  var isLocal = data.file;
  var url = isLocal ? URL.createObjectURL(data.file) : data.url;

  var _mimeType = function _mimeType() {
    if (data.mimeType) {
      return data.mimeType;
    }

    if (isLocal && data.file) {
      return data.file.type;
    }

    return null;
  };

  var render = function render() {
    var mimeType = _mimeType();

    var isVideo = mimeType && mimeType.indexOf('video/') === 0;

    if (isVideo) {
      return /*#__PURE__*/React__default.createElement(HoverVideoPlayer, {
        videoSrc: url,
        pausedOverlay: /*#__PURE__*/React__default.createElement("img", {
          alt: "",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }),
        loadingOverlay: /*#__PURE__*/React__default.createElement("div", {
          className: "loading-overlay"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "loading-spinner"
        }))
      });
    }

    return /*#__PURE__*/React__default.createElement(FilePreviewer, {
      hideControls: true,
      file: {
        url: url
      }
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: " w-full  h-full  items-center  flex  justify-center   transform group-hover:scale-105 transition duration-200 ease-in-out "
  }, render());
});

var FileUploader$1 = (function (props) {
  var _props$fileTypes = props.fileTypes,
      fileTypes = _props$fileTypes === void 0 ? ["JPG", "JPEG", "WEBP", "PNG", "GIF"] : _props$fileTypes,
      onFileChanged = props.onFileChanged,
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

var fileUpload = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      _props$item$params = props.item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;
  var _params$itemHeight = params.itemHeight,
      itemHeight = _params$itemHeight === void 0 ? '32' : _params$itemHeight,
      _params$itemWidth = params.itemWidth,
      itemWidth = _params$itemWidth === void 0 ? '48' : _params$itemWidth,
      _params$canRemove = params.canRemove,
      canRemove = _params$canRemove === void 0 ? true : _params$canRemove,
      _params$canEdit = params.canEdit,
      canEdit = _params$canEdit === void 0 ? false : _params$canEdit,
      _params$hideControls = params.hideControls,
      hideControls = _params$hideControls === void 0 ? false : _params$hideControls;

  var _useState = React.useState(value ? value : {}),
      data = _useState[0],
      setData = _useState[1];

  var onFileChanged = function onFileChanged(file) {
    if (props.disabled || props.readOnly) {
      return;
    }

    var _data = _extends({}, data, {
      file: file,
      mimeType: file.type
    });

    if (!_data.file) {
      _data = null;
    }

    setData(_data);
    onValueChanged && onValueChanged(_data);
  };

  var _props = _extends({}, params, {
    data: data,
    disabled: props.disabled,
    readOnly: props.readOnly
  });

  var onClick = function onClick() {};

  var hasData = data.url || data.file;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "\n            flex\n            group\n            "
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "\n            border\n            border-warmGray-300\n            rounded-lg \n            h-" + itemHeight + "\n            w-" + itemWidth + "\n            align-middle\n            hover:bg-warmGray-50\n            cursor-pointer\n            justify-center\n            items-center\n            flex\n            group\n            relative\n            overflow-hidden",
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "\n      bg-pink-300\n      bg-opacity-25\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      "
  }, hasData ? /*#__PURE__*/React__default.createElement(Preview$1, _props) : /*#__PURE__*/React__default.createElement(Add$1, _props)), /*#__PURE__*/React__default.createElement("div", {
    className: "\n      bg-pink-300\n      bg-opacity-70\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      " + (!props.disable || !props.readOnly || hasData ? 'hidden' : 'flex') + "\n      " + (!props.disable && !props.readOnly ? 'group-hover:flex' : '') + "\n      items-center\n      px-2\n      py-2\n      text-center\n      justify-center\n      "
  }, /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("small", null, "" + (hasData ? 'Drag and drop or click to change file' : 'Drag and drop or click to add a file')))), /*#__PURE__*/React__default.createElement("div", {
    className: "\n      bg-opacity-25\n      items-center\n      flex\n      overflow-hidden\n      h-full\n      w-full\n      opacity-0\n      bg-blue-500\n      hover:scale-105\n        transition\n        duration-200\n        ease-in-out'>\n      "
  }, !props.disable && !props.readOnly ? /*#__PURE__*/React__default.createElement(FileUploader$1, _extends({
    onFileChanged: onFileChanged
  }, _props)) : null)), !hideControls && hasData && !props.disable && !props.readOnly ? /*#__PURE__*/React__default.createElement("div", {
    className: "\n            px-2\n            py-4\n            h-full\n            hidden\n            'group-hover:grid'\n            place-items-center\n            grid-cols-1\n            transform\n            transition\n            duration-200\n            ease-in-out\n            "
  }, canRemove ? /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "Delete",
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
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
    }
  }, /*#__PURE__*/React__default.createElement(EditOutlined, null)) : null) : null);
});

var inputCurrency = (function (props) {
  var value = props.value,
      error = props.error,
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      subType = _props$item.subType,
      label = _props$item.label,
      _props$item$params = _props$item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;
  var placeholder = params.placeholder,
      _params$inputDelay = params.inputDelay,
      inputDelay = _params$inputDelay === void 0 ? 1000 : _params$inputDelay,
      _params$className = params.className,
      className = _params$className === void 0 ? '' : _params$className;

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
  }, /*#__PURE__*/React__default.createElement(CurrencyTextField, _extends({
    label: label,
    variant: "outlined",
    disabled: props.disabled,
    readOnly: props.readOnly ? props.readOnly : false,
    value: innerValue,
    placeholder: placeholder,
    currencySymbol: "$",
    outputFormat: "number",
    className: "w-full " + (error ? 'bg-red-100' : ''),
    type: subType,
    onChange: handleOnChange
  }, params)));
});

var numericStepper = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      params = props.item.params;
  var _params$minimumValue = params.minimumValue,
      minimumValue = _params$minimumValue === void 0 ? 0 : _params$minimumValue,
      _params$maximumValue = params.maximumValue,
      maximumValue = _params$maximumValue === void 0 ? Number.MAX_SAFE_INTEGER : _params$maximumValue,
      _params$stepValue = params.stepValue,
      stepValue = _params$stepValue === void 0 ? 1 : _params$stepValue,
      _params$size = params.size,
      size = _params$size === void 0 ? "sm" : _params$size,
      _params$theme = params.theme,
      theme = _params$theme === void 0 ? {
    inactiveTrackColor: "#fed7aa",
    activeTrackColor: "#fddec0",
    activeButtonColor: "#ffedd5",
    inactiveIconColor: "#fb923c",
    hoverIconColor: "#ea580c",
    activeIconColor: "#9a3412",
    disabledIconColor: "#fdba74",
    thumbColor: "#f97316",
    thumbShadowAnimationOnTrackHoverEnabled: false,
    focusRingColor: "#fff7ed"
  } : _params$theme;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React__default.createElement(numericStepper$1.NumericStepper, _extends({
    minimumValue: minimumValue,
    maximumValue: maximumValue,
    stepValue: stepValue,
    initialValue: value,
    size: size
  }, theme, {
    onChange: onValueChanged,
    disabled: props.disabled,
    readOnly: props.readOnly ? props.readOnly : false
  })));
});

var _containerVertical = (function (props) {
  var summary = props.summary,
      title = props.title,
      children = props.children,
      onMoveDownRequired = props.onMoveDownRequired,
      onRemoveRequired = props.onRemoveRequired,
      onMoveUpRequired = props.onMoveUpRequired,
      canRemove = props.canRemove,
      canMoveUp = props.canMoveUp,
      canMoveDown = props.canMoveDown,
      showControls = props.showControls,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      value = props.value,
      index = props.index,
      className = props.className;
  return /*#__PURE__*/React__default.createElement(Accordion, {
    defaultExpanded: true,
    className: "w-full border-warmGray-200  border-2 px-4 py-2 rounded-xl " + className
  }, /*#__PURE__*/React__default.createElement(AccordionSummary, {
    expanded: true,
    expandIcon: /*#__PURE__*/React__default.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "grid grid-cols-2 justify-between w-full "
  }, /*#__PURE__*/React__default.createElement("div", {
    className: ""
  }, /*#__PURE__*/React__default.createElement("h4", null, title && title({
    value: value,
    index: index
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "flex justify-end mr-4"
  }, summary && summary({
    value: value,
    index: index
  }), showControls && /*#__PURE__*/React__default.createElement("div", {
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
  }, /*#__PURE__*/React__default.createElement(reactFeather.ChevronUp, {
    size: 20
  })), /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "Move down",
    disabled: disabled || !canMoveDown,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveDownRequired && onMoveDownRequired();
    }
  }, /*#__PURE__*/React__default.createElement(reactFeather.ChevronDown, {
    size: 20
  })), /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "Delete",
    disabled: disabled,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onRemoveRequired && onRemoveRequired();
    }
  }, canRemove && /*#__PURE__*/React__default.createElement(reactFeather.Trash, {
    size: 20
  })))))), /*#__PURE__*/React__default.createElement(AccordionDetails, {
    className: ""
  }, children));
});

var _containerHorizontal = (function (props) {
  var summary = props.summary,
      children = props.children,
      onMoveDownRequired = props.onMoveDownRequired,
      onRemoveRequired = props.onRemoveRequired,
      onMoveUpRequired = props.onMoveUpRequired,
      canRemove = props.canRemove,
      canMoveUp = props.canMoveUp,
      canMoveDown = props.canMoveDown,
      showControls = props.showControls,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      value = props.value,
      index = props.index,
      className = props.className;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "border-warmGray-200  border-2  py-1 rounded-xl " + className
  }, /*#__PURE__*/React__default.createElement("div", {
    className: " border-b border-warmGray-100 px-2 py-1 flex justify-end mr-4"
  }, summary && summary({
    value: value,
    index: index
  }), showControls && /*#__PURE__*/React__default.createElement("div", {
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
  }, /*#__PURE__*/React__default.createElement(reactFeather.ChevronLeft, {
    size: 20
  })), /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "Move down",
    disabled: disabled || !canMoveDown,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveDownRequired && onMoveDownRequired();
    }
  }, /*#__PURE__*/React__default.createElement(reactFeather.ChevronRight, {
    size: 20
  })), /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "Delete",
    disabled: disabled,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onRemoveRequired && onRemoveRequired();
    }
  }, canRemove && /*#__PURE__*/React__default.createElement(reactFeather.Trash, {
    size: 20
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "px-1"
  }, children));
});

var _buttonAdd = (function (_ref) {
  var onClick = _ref.onClick,
      title = _ref.title,
      disabled = _ref.disabled;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex justify-center my-10"
  }, /*#__PURE__*/React__default.createElement(Button$1, {
    variant: "text",
    onClick: onClick,
    disabled: disabled
  }, title ? title : "Add"));
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

    case '_containerVertical':
      return _containerVertical;

    case '_containerHorizontal':
      return _containerHorizontal;

    case '_buttonAdd':
      return _buttonAdd;

    case 'fileUpload':
      return fileUpload;

    case 'inputCurrency':
      return inputCurrency;

    case 'numericStepper':
      return numericStepper;

    default:
      return null;
  }
});

module.exports = index;
//# sourceMappingURL=index.js.map

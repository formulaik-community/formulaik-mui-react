import React, { useState, useEffect, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { useDebouncedCallback } from 'use-debounce';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox$1 from '@mui/material/Checkbox';
import Select$1 from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ReactFlagsSelect from 'react-flags-select';
import PhoneInput from 'react-phone-number-input';
import dateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker$1 from '@mui/lab/DatePicker';
import { ReCron } from '@sbzen/re-cron';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import cronParser from 'cron-parser';
import 'next/image';
import Autocomplete$1 from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Radio from '@mui/material/Radio';
import RadioGroup$1 from '@mui/material/RadioGroup';
import Button$1 from '@mui/material/Button';
import ButtonGroup$1 from '@mui/material/ButtonGroup';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import Rating$1 from '@mui/material/Rating';
import DateRangePicker$1 from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import Formulaik from '@yelounak/formulaik';
import { object } from 'yup';
import _ from 'underscore';
import AddAPhotoIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import '@mui/icons-material/Delete';
import '@mui/material/Modal';
import Avatar$2 from '@mui/material/Avatar';
import '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { FileUploader as FileUploader$2 } from 'react-drag-drop-files';
import RemoveButton from '@mui/icons-material/DeleteOutline';
import EditOutlined from '@mui/icons-material/EditOutlined';
import FilePreviewer from 'react-file-previewer';
import HoverVideoPlayer from 'react-hover-video-player';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward$1 from '@mui/icons-material/ArrowLeft';
import ArrowUpward$1 from '@mui/icons-material/ArrowRight';

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

  var _useState = useState(value ? value : ''),
      innerValue = _useState[0],
      setInnerValue = _useState[1];

  useEffect(function () {
    setInnerValue(value ? value : '');
  }, [value]);
  var debouncedHandleOnChange = useDebouncedCallback(function (event) {
    var value = event.target.value;
    onValueChanged(value);
    console.log('textArea debouncedHandleOnChange', value);
  }, inputDelay);
  var handleOnChange = useCallback(function (event) {
    event.persist();
    var newValue = event.target.value;
    setInnerValue(newValue);
    debouncedHandleOnChange(event);
    console.log('textArea handleOnChange', value);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full " + className
  }, /*#__PURE__*/React.createElement(TextField, _extends({
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
      _props$item = props.item,
      value = _props$item.value;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center my-2"
  }, /*#__PURE__*/React.createElement(LoadingButton, {
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
      params = _props$item.params;
  return /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2 card rounded-lg border-2 border-warmGray-400 "
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox$1, _extends({
      color: "default",
      disabled: props.disabled,
      readOnly: props.readOnly
    }, params, {
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
  }), params && params.subLabel ? /*#__PURE__*/React.createElement("small", {
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
  return /*#__PURE__*/React.createElement(Select$1, {
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
    return /*#__PURE__*/React.createElement(MenuItem, {
      value: option.value
    }, option.label);
  }));
});

var TextArea = (function (props) {
  var _React$createElement;

  var value = props.value,
      error = props.error,
      onValueChanged = props.onValueChanged,
      _props$item$params = props.item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;
  var _params$maxRows = params.maxRows,
      maxRows = _params$maxRows === void 0 ? 1000 : _params$maxRows,
      _params$minRows = params.minRows,
      minRows = _params$minRows === void 0 ? 3 : _params$minRows,
      placeholder = params.placeholder,
      _params$inputDelay = params.inputDelay,
      inputDelay = _params$inputDelay === void 0 ? 1000 : _params$inputDelay;

  var _useState = useState(value ? value : ''),
      innerValue = _useState[0],
      setInnerValue = _useState[1];

  useEffect(function () {
    setInnerValue(value ? value : '');
  }, [value]);
  var debouncedHandleOnChange = useDebouncedCallback(function (event) {
    var value = event.target.value;
    onValueChanged(value);
    console.log('textArea debouncedHandleOnChange', value);
  }, inputDelay);
  var handleOnChange = useCallback(function (event) {
    event.persist();
    var newValue = event.target.value;
    setInnerValue(newValue);
    debouncedHandleOnChange(event);
    console.log('textArea handleOnChange', value);
  }, []);
  return /*#__PURE__*/React.createElement(TextareaAutosize, (_React$createElement = {
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
      params = _props$item.params;
  return /*#__PURE__*/React.createElement(ReactFlagsSelect, _extends({
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
  return /*#__PURE__*/React.createElement("div", {
    className: "border-2 border-warmGray-300 rounded-md px-4 py-4"
  }, /*#__PURE__*/React.createElement(PhoneInput, _extends({
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
  return /*#__PURE__*/React.createElement(LocalizationProvider, {
    dateAdapter: dateAdapter
  }, /*#__PURE__*/React.createElement(DatePicker$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    label: label,
    value: value,
    onChange: onValueChanged
  }, params, {
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(TextField, params);
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

  return /*#__PURE__*/React.createElement(AceEditor, props);
};

var AceEditor = (function (props) {
  var values = props.values,
      onValueChanged = props.onValueChanged,
      errors = props.errors,
      _props$item = props.item,
      id = _props$item.id,
      params = _props$item.params;
  return /*#__PURE__*/React.createElement(Editor, _extends({
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ReCron, {
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
  return /*#__PURE__*/React.createElement(JSONInput, _extends({
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

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, _extends({
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
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-xs mt-6 text-warmGray-500"
  }, /*#__PURE__*/React.createElement("ul", null, iterations().map(function (i) {
    return /*#__PURE__*/React.createElement("li", null, i);
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

  var _useState = useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = useState([]),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = useState(false),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  useEffect(function () {
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

  return /*#__PURE__*/React.createElement(Autocomplete$1, _extends({
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
      return /*#__PURE__*/React.createElement(TextField, _extends({}, params, field, {
        label: label,
        onChange: function onChange(_ref2) {
          var value = _ref2.target.value;
          updateOptions({
            value: value
          });
          return Promise.resolve();
        },
        InputProps: _extends({}, params.InputProps, {
          endAdornment: /*#__PURE__*/React.createElement(React.Fragment, null, isLoading ? /*#__PURE__*/React.createElement(CircularProgress, {
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
  return /*#__PURE__*/React.createElement(RadioGroup$1, _extends({
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
    return /*#__PURE__*/React.createElement(FormControlLabel, {
      value: value,
      control: /*#__PURE__*/React.createElement(Radio, null),
      label: label
    });
  }));
});

var Html = (function (props) {
  var _props$item = props.item,
      params = _props$item.params;
  return /*#__PURE__*/React.createElement("div", null, params.content);
});

var Divider = (function (props) {
  var _props$item = props.item,
      params = _props$item.params;
  return /*#__PURE__*/React.createElement("div", {
    className: "divider " + (params.vertical ? 'divider-vertical' : '') + " "
  }, params.content);
});

var Button = (function (props) {
  var _props$item = props.item,
      label = _props$item.label,
      params = _props$item.params;
  var onClick = params.onClick;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center my-2"
  }, /*#__PURE__*/React.createElement(Button$1, {
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
  return /*#__PURE__*/React.createElement(ButtonGroup$1, {
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
    return /*#__PURE__*/React.createElement(Button$1, null, option.value);
  }));
});

var SwitchControl = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      _props$item = props.item,
      label = _props$item.label,
      params = _props$item.params;
  return /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(FormControlLabel, _extends({
    control: /*#__PURE__*/React.createElement(Switch, {
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
  return /*#__PURE__*/React.createElement(Rating$1, _extends({
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
  return /*#__PURE__*/React.createElement(LocalizationProvider, {
    dateAdapter: dateAdapter
  }, /*#__PURE__*/React.createElement(DateRangePicker$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    value: values[id] && Array.isArray(values[id]) ? values[id] : [null, null],
    onChange: onValueChanged,
    renderInput: function renderInput(startProps, endProps) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextField, startProps), /*#__PURE__*/React.createElement(Box, {
        sx: {
          mx: 2
        }
      }, " to "), /*#__PURE__*/React.createElement(TextField, endProps));
    }
  }, params)));
});

var entry = (function (props) {
  var values = props.values,
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      id = _props$item.id,
      params = _props$item.params;
  var item = values[id];

  var _useState = useState(null),
      error = _useState[0];

  var inputs = [].concat(params.canRemove && params.showRemove ? [{
    isMulti: true,
    className: 'flex ',
    items: [].concat(params.inputs({
      item: item
    }), [{
      type: 'button',
      id: 'removeItem',
      label: 'Remove',
      className: 'ml-2 ',
      params: {
        onClick: function onClick() {
          onValueChanged && onValueChanged({
            isRemoved: true
          });
        }
      }
    }])
  }] : params.inputs({
    item: item
  }));

  var onValuesChanged = function onValuesChanged(values) {
    var data = params.onEntryValuesChangedHook({
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

  return /*#__PURE__*/React.createElement(Formulaik, {
    componentsLibraries: [].concat(params.componentsLibraries, [componentsLibrary]),
    initialValues: params.initialValues({
      item: item
    }),
    validationSchema: params.validationSchema({
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
      params = _props$item.params;
  var items = values[id] ? values[id] : [];

  var _useState = useState(null),
      error = _useState[0];

  var validationSchema = object().shape(_extends({}, _.object(items.map(function (_item, i) {
    return "entry-" + i;
  }), items.map(function () {
    return object();
  }))));
  var inputs = [].concat(items.map(function (item, i) {
    return {
      type: 'entry',
      id: "entry-" + i,
      params: params
    };
  }), params.canAddItems && items.length < params.maxItems ? [{
    type: 'button',
    id: 'addItem',
    label: params.addItemLabel ? params.addItemLabel : 'Add item',
    params: {
      onClick: function onClick() {
        var newItem = params.newStruct;
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

  return /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/React.createElement(Formulaik, {
    componentsLibraries: [].concat(params.componentsLibraries, [componentsLibrary]),
    initialValues: initialValues,
    validationSchema: validationSchema,
    inputs: inputs,
    onValuesChanged: onValuesChanged,
    error: error
  }));
});

var H1 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React.createElement("h1", null, params.content);
});

var H2 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React.createElement("h2", null, params.content);
});

var H3 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React.createElement("h3", null, params.content);
});

var H4 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React.createElement("h4", null, params.content);
});

var VisualSelect = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      _props$item$params = props.item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;

  var _useState = useState(value ? value.filter(function (a) {
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
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(e) {
        return onClickItem(e, item);
      },
      className: "\n        w-full\n        cursor-pointer\n        rounded-2xl\n        overflow-hidden\n        group\n        relative\n        transform\n        transition\n        duration-200\n        ease-in-out\n        " + itemHeight + "\n        " + (!props.disabled && !props.readOnly && isSelected ? 'border-4' : 'border-4') + "\n        " + (!props.disabled && !props.readOnly && isSelected ? 'opacity-100' : 'opacity-70 hover:opacity-80') + "\n        " + (!props.disabled && !props.readOnly && isSelected ? 'scale-105' : 'hover:scale-105') + "\n        " + (!props.disabled && !props.readOnly && isSelected ? "border-" + highlightColor : "border-" + baseColor + " " + (!props.disabled && !props.readOnly && isSelected ? 'hover:border-${highlightColor}' : '')) + "\n        "
    }, /*#__PURE__*/React.createElement("div", {
      className: "\n        absolute\n        left-1\n        right-1\n        bottom-1\n        top-1\n        flex\n        rounded-xl\n        overflow-hidden\n        justify-center\n        group-hover:flex\n        bg-" + baseColor + "\n        bg-opacity-80\n        group-hover:bg-opacity-100\n    "
    }, /*#__PURE__*/React.createElement(ContentComponent, {
      item: item
    })));
  };

  var renderItem = function renderItem(item, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "w-full"
    }, " ", renderThumbnail(item));
  };

  return /*#__PURE__*/React.createElement("ul", {
    className: "grid-cols-" + cols + " grid gap-x-6 gap-y-6 py-0"
  }, items && items.length > 0 && items.map(renderItem));
});

var Add = (function (props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "items-center flex overflow-hidden relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "     items-center  flex  overflow-hidden  justify-center absolute  left-0  right-0  bottom-0  top-0"
  }, /*#__PURE__*/React.createElement(AddAPhotoIcon, {
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

  return /*#__PURE__*/React.createElement(StyledBadge, {
    overlap: "circular",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    variant: "dot"
  }, children);
});
var StyledBadge = styled(Badge)(function (_ref) {
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
  return /*#__PURE__*/React.createElement(Shell, {
    badge: badge
  }, /*#__PURE__*/React.createElement(Avatar$2, {
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
  return /*#__PURE__*/React.createElement("div", {
    className: " w-full  h-full  items-center  flex  justify-center   transform group-hover:scale-105 transition duration-200 ease-in-out "
  }, /*#__PURE__*/React.createElement(Avatar, {
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
  return /*#__PURE__*/React.createElement(FileUploader$2, {
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

  var _useState = useState(value ? value : {}),
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
  return /*#__PURE__*/React.createElement("div", {
    className: "\n            my-4\n            flex\n            group\n            "
  }, /*#__PURE__*/React.createElement("div", {
    className: "\n            my-4\n            border\n            border-warmGray-300\n            rounded-full\n            h-" + size + "\n            w-" + size + "\n            align-middle\n            hover:bg-warmGray-50\n            cursor-pointer\n            justify-center\n            items-center\n            flex\n            group\n            relative\n            overflow-hidden",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "\n      bg-pink-300\n      bg-opacity-25\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      "
  }, hasData ? /*#__PURE__*/React.createElement(Preview, _props) : /*#__PURE__*/React.createElement(Add, _props)), /*#__PURE__*/React.createElement("div", {
    className: "\n      bg-pink-300\n      bg-opacity-70\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      " + (!props.disable || !props.readOnly || hasData ? 'hidden' : 'flex') + "\n      " + (!props.disable && !props.readOnly ? 'group-hover:flex' : '') + "\n      items-center\n      px-2\n      py-2\n      text-center\n      justify-center\n      "
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("small", null, "" + (hasData ? 'Click to change picture' : 'Click to add a picture')))), /*#__PURE__*/React.createElement("div", {
    className: "\n      bg-opacity-25\n      items-center\n      flex\n      overflow-hidden\n      h-full\n      w-full\n      opacity-0\n      bg-blue-500\n      hover:scale-105\n        transition\n        duration-200\n        ease-in-out'>\n      "
  }, !props.disable && !props.readOnly ? /*#__PURE__*/React.createElement(FileUploader, {
    onFileChanged: onFileChanged
  }) : null)), hasData ? /*#__PURE__*/React.createElement("div", {
    className: "\n            px-2\n            py-4\n            h-full\n            hidden\n            " + (!props.disable && !props.readOnly ? 'group-hover:grid' : '') + "\n            place-items-center\n            grid-cols-1\n            transform\n            transition\n            duration-200\n            ease-in-out\n            "
  }, !props.disable && !props.readOnly && canRemove ? /*#__PURE__*/React.createElement(IconButton, {
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
  }, /*#__PURE__*/React.createElement(RemoveButton, null)) : null, canEdit ? /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Move up",
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (props.disabled || props.readOnly) {
        return;
      }
    }
  }, /*#__PURE__*/React.createElement(EditOutlined, null)) : null) : null);
});

var Add$1 = (function (props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "items-center flex overflow-hidden relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "     items-center  flex  overflow-hidden  justify-center absolute  left-0  right-0  bottom-0  top-0"
  }, /*#__PURE__*/React.createElement(AddAPhotoIcon, {
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
      return /*#__PURE__*/React.createElement(HoverVideoPlayer, {
        videoSrc: url,
        pausedOverlay: /*#__PURE__*/React.createElement("img", {
          alt: "",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }),
        loadingOverlay: /*#__PURE__*/React.createElement("div", {
          className: "loading-overlay"
        }, /*#__PURE__*/React.createElement("div", {
          className: "loading-spinner"
        }))
      });
    }

    return /*#__PURE__*/React.createElement(FilePreviewer, {
      hideControls: true,
      file: {
        url: url
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: " w-full  h-full  items-center  flex  justify-center   transform group-hover:scale-105 transition duration-200 ease-in-out "
  }, render());
});

var FileUploader$1 = (function (props) {
  var _props$fileTypes = props.fileTypes,
      fileTypes = _props$fileTypes === void 0 ? ["JPG", "JPEG", "WEBP", "PNG", "GIF"] : _props$fileTypes,
      onFileChanged = props.onFileChanged,
      _props$maxFileSize = props.maxFileSize,
      maxFileSize = _props$maxFileSize === void 0 ? 10 : _props$maxFileSize;
  return /*#__PURE__*/React.createElement(FileUploader$2, {
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

  var _useState = useState(value ? value : {}),
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
  return /*#__PURE__*/React.createElement("div", {
    className: "\n            flex\n            group\n            "
  }, /*#__PURE__*/React.createElement("div", {
    className: "\n            border\n            border-warmGray-300\n            rounded-lg \n            h-" + itemHeight + "\n            w-" + itemWidth + "\n            align-middle\n            hover:bg-warmGray-50\n            cursor-pointer\n            justify-center\n            items-center\n            flex\n            group\n            relative\n            overflow-hidden",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "\n      bg-pink-300\n      bg-opacity-25\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      "
  }, hasData ? /*#__PURE__*/React.createElement(Preview$1, _props) : /*#__PURE__*/React.createElement(Add$1, _props)), /*#__PURE__*/React.createElement("div", {
    className: "\n      bg-pink-300\n      bg-opacity-70\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      " + (!props.disable || !props.readOnly || hasData ? 'hidden' : 'flex') + "\n      " + (!props.disable && !props.readOnly ? 'group-hover:flex' : '') + "\n      items-center\n      px-2\n      py-2\n      text-center\n      justify-center\n      "
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("small", null, "" + (hasData ? 'Drag and drop or click to change file' : 'Drag and drop or click to add a file')))), /*#__PURE__*/React.createElement("div", {
    className: "\n      bg-opacity-25\n      items-center\n      flex\n      overflow-hidden\n      h-full\n      w-full\n      opacity-0\n      bg-blue-500\n      hover:scale-105\n        transition\n        duration-200\n        ease-in-out'>\n      "
  }, !props.disable && !props.readOnly ? /*#__PURE__*/React.createElement(FileUploader$1, _extends({
    onFileChanged: onFileChanged
  }, _props)) : null)), !hideControls && hasData && !props.disable && !props.readOnly ? /*#__PURE__*/React.createElement("div", {
    className: "\n            px-2\n            py-4\n            h-full\n            hidden\n            'group-hover:grid'\n            place-items-center\n            grid-cols-1\n            transform\n            transition\n            duration-200\n            ease-in-out\n            "
  }, canRemove ? /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Delete",
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      var _data = {};
      setData(_data);
      onValueChanged && onValueChanged(_data);
    }
  }, /*#__PURE__*/React.createElement(RemoveButton, null)) : null, canEdit ? /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Move up",
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement(EditOutlined, null)) : null) : null);
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
  return /*#__PURE__*/React.createElement(Accordion, {
    defaultExpanded: true,
    className: "w-full border-warmGray-200  border-2 px-4 py-2 rounded-xl " + className
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    expanded: true,
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 justify-between w-full "
  }, /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("h4", null, title && title({
    value: value,
    index: index
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end mr-4"
  }, summary && summary({
    value: value,
    index: index
  }), showControls && /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Move up",
    disabled: disabled || !canMoveUp,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveUpRequired && onMoveUpRequired();
    }
  }, /*#__PURE__*/React.createElement(ArrowUpward, null)), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Move down",
    disabled: disabled || !canMoveDown,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveDownRequired && onMoveDownRequired();
    }
  }, /*#__PURE__*/React.createElement(ArrowDownward, null)), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Delete",
    disabled: disabled,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onRemoveRequired && onRemoveRequired();
    }
  }, canRemove && /*#__PURE__*/React.createElement(RemoveButton, null)))))), /*#__PURE__*/React.createElement(AccordionDetails, {
    className: ""
  }, children));
});

var _containerHorizontal = (function (props) {
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
  return /*#__PURE__*/React.createElement(Accordion, {
    defaultExpanded: true,
    className: "border-warmGray-200  border-2 px-2 py-1 rounded-xl " + className
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    expanded: true,
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("h4", null, title && title({
    value: value,
    index: index
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end mr-4"
  }, summary && summary({
    value: value,
    index: index
  }), showControls && /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Move down",
    disabled: disabled || !canMoveDown,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveDownRequired && onMoveDownRequired();
    }
  }, /*#__PURE__*/React.createElement(ArrowDownward$1, null)), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Move up",
    disabled: disabled || !canMoveUp,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveUpRequired && onMoveUpRequired();
    }
  }, /*#__PURE__*/React.createElement(ArrowUpward$1, null)), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Delete",
    disabled: disabled,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onRemoveRequired && onRemoveRequired();
    }
  }, canRemove && /*#__PURE__*/React.createElement(RemoveButton, null)))))), /*#__PURE__*/React.createElement(AccordionDetails, {
    className: ""
  }, children));
});

var _buttonAdd = (function (_ref) {
  var onClick = _ref.onClick,
      title = _ref.title,
      disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center my-10"
  }, /*#__PURE__*/React.createElement(Button$1, {
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

    case '_containerVertical':
      return _containerVertical;

    case '_containerHorizontal':
      return _containerHorizontal;

    case '_buttonAdd':
      return _buttonAdd;

    case 'fileUpload':
      return fileUpload;

    default:
      return null;
  }
});

export default index;
//# sourceMappingURL=index.modern.js.map

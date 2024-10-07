import React$1, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import TextField from '@mui/material/TextField';
import { useDebouncedCallback } from 'use-debounce';
import loadable from '@loadable/component';
import { twMerge } from 'tailwind-merge';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox$1 from '@mui/material/Checkbox';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePicker$1 } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Autocomplete$1 from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Radio from '@mui/material/Radio';
import RadioGroup$1 from '@mui/material/RadioGroup';
import Button$1 from '@mui/material/Button';
import ButtonGroup$1 from '@mui/material/ButtonGroup';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import Rating$1 from '@mui/material/Rating';
import 'underscore';
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
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronUp, ChevronDown, Trash, ChevronLeft, ChevronRight } from 'react-feather';

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
      _props$item$layoutMod = _props$item.layoutMode,
      layoutMode = _props$item$layoutMod === void 0 ? 'form' : _props$item$layoutMod,
      _props$item$params = _props$item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;
  var _params$inputDelay = params.inputDelay,
      inputDelay = _params$inputDelay === void 0 ? 1000 : _params$inputDelay,
      _params$className = params.className,
      className = _params$className === void 0 ? '' : _params$className,
      _params$multiline = params.multiline,
      multiline = _params$multiline === void 0 ? false : _params$multiline,
      _params$inputPropsSty = params.inputPropsStyle,
      inputPropsStyle = _params$inputPropsSty === void 0 ? {} : _params$inputPropsSty,
      _params$inputLabelPro = params.inputLabelPropsStyle,
      inputLabelPropsStyle = _params$inputLabelPro === void 0 ? {} : _params$inputLabelPro,
      _params$variant = params.variant,
      variant = _params$variant === void 0 ? "outlined" : _params$variant;

  var _useState = useState(value ? value : ''),
      innerValue = _useState[0],
      setInnerValue = _useState[1];

  useEffect(function () {
    setInnerValue(value ? value : '');
  }, [value]);
  var debouncedHandleOnChange = useDebouncedCallback(function (event) {
    var value = event.target.value;
    onValueChanged(value);
  }, inputDelay);
  var handleOnChange = useCallback(function (event) {
    event.persist();
    var newValue = event.target.value;
    setInnerValue(newValue);
    debouncedHandleOnChange(event);
  }, []);

  var layoutModeProps = function layoutModeProps() {
    switch (layoutMode) {
      default:
      case 'form':
        {
          return {};
        }

      case 'inline':
        {
          return {
            variant: "standard"
          };
        }
    }
  };

  var layoutModeClassName = function layoutModeClassName() {
    switch (layoutMode) {
      default:
      case 'form':
        {
          return "\n          ";
        }

      case 'inline':
        {
          return "\n            ";
        }
    }
  };

  var onBlur = function onBlur() {};

  return /*#__PURE__*/React.createElement(TextField, _extends({
    variant: variant,
    fullWidth: true,
    disabled: props.disabled,
    InputProps: {
      style: _extends({}, inputPropsStyle)
    },
    InputLabelProps: {
      style: inputLabelPropsStyle
    },
    value: innerValue,
    multiline: multiline,
    className: "transition-all\n      ease-in-out\n      duration-1000\n      " + (error ? 'bg-red-50' : '') + "\n    " + className + "\n    " + layoutModeClassName(),
    onBlur: onBlur,
    onChange: handleOnChange
  }, layoutModeProps(), params));
});

var LoadingButton = loadable(function () {
  return import('@mui/lab/LoadingButton');
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
      size = _params$size === void 0 ? 'large' : _params$size,
      _params$className = params.className,
      className = _params$className === void 0 ? '' : _params$className;
  return /*#__PURE__*/React.createElement(MPView, {
    className: twMerge('mb-4 mt-12', className)
  }, /*#__PURE__*/React.createElement(LoadingButton, {
    loading: isSubmitting,
    disabled: props.disabled,
    variant: variant,
    onClick: props.submitForm,
    style: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 10,
      paddingBottom: 10,
      minWidth: 50
    },
    size: size
  }, text));
});

var Checkbox = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      _props$item = props.item,
      label = _props$item.label,
      params = _props$item.params;
  return /*#__PURE__*/React$1.createElement("div", {
    className: ""
  }, /*#__PURE__*/React$1.createElement(FormControlLabel, {
    control: /*#__PURE__*/React$1.createElement(Checkbox$1, _extends({
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
    label: params.label ? params.label : label
  }), params && params.subLabel && /*#__PURE__*/React$1.createElement("small", {
    className: ""
  }, params.subLabel));
});

var Select = lazy(function () {
  return import('@mui/material/Select');
});
var MenuItem = lazy(function () {
  return import('@mui/material/MenuItem');
});
var FormControl = lazy(function () {
  return import('@mui/material/FormControl');
});
var Select$1 = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      error = props.error,
      _props$item = props.item,
      id = _props$item.id,
      params = _props$item.params;
  var options = params.options;
  return /*#__PURE__*/React$1.createElement(Suspense, {
    fallback: /*#__PURE__*/React$1.createElement("div", null)
  }, /*#__PURE__*/React$1.createElement(FormControl, {
    className: 'w-full'
  }, /*#__PURE__*/React$1.createElement(Select, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    id: id,
    className: " " + (error ? 'bg-pink-50 select-error' : ''),
    value: value
  }, params, {
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return onValueChanged(value);
    }
  }), options.map(function (option) {
    return /*#__PURE__*/React$1.createElement(MenuItem, {
      value: option.value
    }, option.label);
  }))));
});

var TextareaAutosize = loadable(function () {
  return import('@mui/material/TextareaAutosize');
});
var TextArea = (function (props) {
  var value = props.value,
      error = props.error,
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      _props$item$layoutMod = _props$item.layoutMode,
      layoutMode = _props$item$layoutMod === void 0 ? 'form' : _props$item$layoutMod,
      _props$item$params = _props$item.params,
      params = _props$item$params === void 0 ? {} : _props$item$params;
  var _params$maxRows = params.maxRows,
      maxRows = _params$maxRows === void 0 ? 1000 : _params$maxRows,
      _params$minRows = params.minRows,
      minRows = _params$minRows === void 0 ? 3 : _params$minRows,
      placeholder = params.placeholder,
      _params$className = params.className,
      className = _params$className === void 0 ? '' : _params$className,
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

  var layoutModeProps = function layoutModeProps() {
    switch (layoutMode) {
      default:
      case 'form':
        {
          return {};
        }

      case 'inline':
        {
          return {
            variant: "standard"
          };
        }
    }
  };

  var layoutModeClassName = function layoutModeClassName() {
    switch (layoutMode) {
      default:
      case 'form':
        {
          return "\n          h-64\n          rounded-md\n          border-warmGray-200\n          border\n          px-4\n          py-4\n          pb-12\n          text-base";
        }

      case 'inline':
        {
          return "\n            border-none\n            border\n            px-0\n            py-0\n            pb-0\n            ";
        }
    }
  };

  return /*#__PURE__*/React$1.createElement(TextareaAutosize, _extends({
    sx: {},
    "aria-label": "minimum height",
    disabled: props.disabled,
    maxRows: maxRows,
    minRows: minRows,
    fullWidth: true,
    onChange: handleOnChange,
    value: innerValue,
    placeholder: placeholder,
    className: "textarea\n    h-64\n    rounded-md\n    border-warmGray-200\n    border\n    w-full\n    focus:ring-pink-600\n    " + (error ? 'bg-red-100 border-red-600' : 'border-warmGray-400') + "\n    " + className + "\n    " + layoutModeClassName()
  }, layoutModeProps()));
});

var DatePicker = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      params = props.item.params;
  return /*#__PURE__*/React$1.createElement(LocalizationProvider, {
    dateAdapter: AdapterMoment
  }, /*#__PURE__*/React$1.createElement(DatePicker$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    value: value,
    onChange: function onChange(_v) {
      onValueChanged(_v._d);
    }
  }, params, {
    renderInput: function renderInput(_params) {
      return /*#__PURE__*/React$1.createElement(TextField, _params);
    }
  })));
});

var Autocomplete = (function (props) {
  var initialValues = props.initialValues,
      onValueChanged = props.onValueChanged,
      field = props.field,
      values = props.values,
      _props$item = props.item,
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

  return /*#__PURE__*/React$1.createElement(Autocomplete$1, _extends({
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
      return /*#__PURE__*/React$1.createElement(TextField, _extends({}, params, field, {
        onChange: function onChange(_ref2) {
          var value = _ref2.target.value;
          updateOptions({
            value: value
          });
          return Promise.resolve();
        },
        InputProps: _extends({}, params.InputProps, {
          endAdornment: /*#__PURE__*/React$1.createElement(React$1.Fragment, null, isLoading ? /*#__PURE__*/React$1.createElement(CircularProgress, {
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
  return /*#__PURE__*/React$1.createElement(RadioGroup$1, _extends({
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
    var value = _ref2.value;
    return /*#__PURE__*/React$1.createElement(FormControlLabel, {
      value: value,
      control: /*#__PURE__*/React$1.createElement(Radio, null)
    });
  }));
});

var Html = (function (props) {
  var _props$item = props.item,
      params = _props$item.params;
  return /*#__PURE__*/React$1.createElement("div", null, params.content);
});

var Divider = (function (props) {
  var _props$item = props.item,
      params = _props$item.params;
  return /*#__PURE__*/React$1.createElement("div", {
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
    color: 'primary',
    disabled: props.disabled,
    onClick: onClick
  }, label));
});

var ButtonGroup = (function (props) {
  var _props$item = props.item,
      id = _props$item.id,
      params = _props$item.params;
  var options = params.options;
  return /*#__PURE__*/React$1.createElement(ButtonGroup$1, {
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
    return /*#__PURE__*/React$1.createElement(Button$1, null, option.value);
  }));
});

var SwitchControl = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      _props$item = props.item,
      params = _props$item.params;
  return /*#__PURE__*/React$1.createElement(FormGroup, null, /*#__PURE__*/React$1.createElement(FormControlLabel, _extends({
    control: /*#__PURE__*/React$1.createElement(Switch, {
      disabled: props.disabled,
      readOnly: props.readOnly,
      color: "default",
      checked: value,
      onChange: function onChange(_ref) {
        var checked = _ref.target.checked;
        onValueChanged(checked);
      }
    })
  }, params)));
});

var Rating = (function (props) {
  var value = props.value,
      onValueChanged = props.onValueChanged,
      _props$item = props.item,
      params = _props$item.params;
  return /*#__PURE__*/React$1.createElement(Rating$1, _extends({
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
      value = props.value,
      params = props.item.params;
  return /*#__PURE__*/React$1.createElement("div", {
    className: "grid md:grid-flow-col"
  }, /*#__PURE__*/React$1.createElement(LocalizationProvider, {
    dateAdapter: AdapterMoment
  }, /*#__PURE__*/React$1.createElement(DatePicker$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    label: 'From',
    value: value && value.length ? value[0] : null,
    onChange: function onChange(_v) {
      onValueChanged([_v._d, value && value.length ? value[0] : null]);
    }
  }, params, {
    renderInput: function renderInput(_params) {
      return /*#__PURE__*/React$1.createElement(TextField, _params);
    }
  }))), /*#__PURE__*/React$1.createElement("p", {
    className: "flex items-center justify-center md:px-2"
  }, "\u2192"), /*#__PURE__*/React$1.createElement(LocalizationProvider, {
    dateAdapter: AdapterMoment
  }, /*#__PURE__*/React$1.createElement(DatePicker$1, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    label: 'To',
    value: value && value.length > 0 ? value[1] : null,
    onChange: function onChange(_v) {
      onValueChanged([value && value.length > 0 ? value[0] : null, _v._d]);
    }
  }, params, {
    renderInput: function renderInput(_params) {
      return /*#__PURE__*/React$1.createElement(TextField, _params);
    }
  }))));
});

var H1 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React$1.createElement("h1", null, params.content);
});

var H2 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React$1.createElement("h2", null, params.content);
});

var H3 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React$1.createElement("h3", null, params.content);
});

var H4 = (function (props) {
  var params = props.item.params;
  return /*#__PURE__*/React$1.createElement("h4", null, params.content);
});

var Add = (function (props) {
  return /*#__PURE__*/React$1.createElement("div", {
    className: "items-center flex overflow-hidden relative"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "     items-center  flex  overflow-hidden  justify-center absolute  left-0  right-0  bottom-0  top-0"
  }, /*#__PURE__*/React$1.createElement(AddAPhotoIcon, {
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

  return /*#__PURE__*/React$1.createElement(StyledBadge, {
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
  return /*#__PURE__*/React$1.createElement(Shell, {
    badge: badge
  }, /*#__PURE__*/React$1.createElement(Avatar$2, {
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
  return /*#__PURE__*/React$1.createElement("div", {
    className: " w-full  h-full  items-center  flex  justify-center   transform group-hover:scale-105 transition duration-200 ease-in-out "
  }, /*#__PURE__*/React$1.createElement(Avatar, {
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
  return /*#__PURE__*/React$1.createElement(FileUploader$2, {
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
  return /*#__PURE__*/React$1.createElement("div", {
    className: "\n            my-4\n            flex\n            group\n            "
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "\n            my-4\n            border\n            border-warmGray-300\n            rounded-full\n            h-" + size + "\n            w-" + size + "\n            align-middle\n            hover:bg-warmGray-50\n            cursor-pointer\n            justify-center\n            items-center\n            flex\n            group\n            relative\n            overflow-hidden",
    onClick: onClick
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "\n      bg-pink-300\n      bg-opacity-25\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      "
  }, hasData ? /*#__PURE__*/React$1.createElement(Preview, _props) : /*#__PURE__*/React$1.createElement(Add, _props)), /*#__PURE__*/React$1.createElement("div", {
    className: "\n      bg-pink-300\n      bg-opacity-70\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      " + (!props.disable || !props.readOnly || hasData ? 'hidden' : 'flex') + "\n      " + (!props.disable && !props.readOnly ? 'group-hover:flex' : '') + "\n      items-center\n      px-2\n      py-2\n      text-center\n      justify-center\n      "
  }, /*#__PURE__*/React$1.createElement("span", null, /*#__PURE__*/React$1.createElement("small", null, "" + (hasData ? 'Click to change picture' : 'Click to add a picture')))), /*#__PURE__*/React$1.createElement("div", {
    className: "\n      bg-opacity-25\n      items-center\n      flex\n      overflow-hidden\n      h-full\n      w-full\n      opacity-0\n      bg-blue-500\n      hover:scale-105\n        transition\n        duration-200\n        ease-in-out'>\n      "
  }, !props.disable && !props.readOnly ? /*#__PURE__*/React$1.createElement(FileUploader, {
    onFileChanged: onFileChanged
  }) : null)), hasData ? /*#__PURE__*/React$1.createElement("div", {
    className: "\n            px-2\n            py-4\n            h-full\n            hidden\n            " + (!props.disable && !props.readOnly ? 'group-hover:grid' : '') + "\n            place-items-center\n            grid-cols-1\n            transform\n            transition\n            duration-200\n            ease-in-out\n            "
  }, !props.disable && !props.readOnly && canRemove ? /*#__PURE__*/React$1.createElement(IconButton, {
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
  }, /*#__PURE__*/React$1.createElement(RemoveButton, null)) : null, canEdit ? /*#__PURE__*/React$1.createElement(IconButton, {
    "aria-label": "Move up",
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (props.disabled || props.readOnly) {
        return;
      }
    }
  }, /*#__PURE__*/React$1.createElement(EditOutlined, null)) : null) : null);
});

var Add$1 = (function (props) {
  return /*#__PURE__*/React$1.createElement("div", {
    className: "items-center flex overflow-hidden relative"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "     items-center  flex  overflow-hidden  justify-center absolute  left-0  right-0  bottom-0  top-0"
  }, /*#__PURE__*/React$1.createElement(AddAPhotoIcon, {
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
      return /*#__PURE__*/React$1.createElement(HoverVideoPlayer, {
        videoSrc: url,
        pausedOverlay: /*#__PURE__*/React$1.createElement("img", {
          alt: "",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }),
        loadingOverlay: /*#__PURE__*/React$1.createElement("div", {
          className: "loading-overlay"
        }, /*#__PURE__*/React$1.createElement("div", {
          className: "loading-spinner"
        }))
      });
    }

    return /*#__PURE__*/React$1.createElement(FilePreviewer, {
      hideControls: true,
      file: {
        url: url
      }
    });
  };

  return /*#__PURE__*/React$1.createElement("div", {
    className: " w-full  h-full  items-center  flex  justify-center   transform group-hover:scale-[1.005] transition-all duration-200 ease-in-out "
  }, render());
});

var FileUploader$1 = (function (props) {
  var _props$fileTypes = props.fileTypes,
      fileTypes = _props$fileTypes === void 0 ? ["JPG", "JPEG", "WEBP", "PNG", "GIF"] : _props$fileTypes,
      onFileChanged = props.onFileChanged,
      _props$maxFileSize = props.maxFileSize,
      maxFileSize = _props$maxFileSize === void 0 ? 10 : _props$maxFileSize;
  return /*#__PURE__*/React$1.createElement(FileUploader$2, {
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
  return /*#__PURE__*/React$1.createElement("div", {
    className: "\n            flex\n            group\n            "
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "\n            border\n            border-warmGray-300\n            rounded-lg\n            h-" + itemHeight + "\n            w-" + itemWidth + "\n            align-middle\n            hover:bg-warmGray-50\n            transition-all\n        duration-200\n        ease-in-out\n            cursor-pointer\n            justify-center\n            items-center\n            flex\n            group\n            relative\n            overflow-hidden",
    onClick: onClick
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "\n      bg-white\n      bg-opacity-25\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      "
  }, hasData ? /*#__PURE__*/React$1.createElement(Preview$1, _props) : /*#__PURE__*/React$1.createElement(Add$1, _props)), /*#__PURE__*/React$1.createElement("div", {
    className: "\n      bg-white\n      bg-opacity-80\n    backdrop-filter\n    backdrop-blur-sm\n      absolute\n      left-0\n      right-0\n      bottom-0\n      top-0\n      " + (!props.disable || !props.readOnly || hasData ? 'hidden' : 'flex') + "\n      " + (!props.disable && !props.readOnly ? 'group-hover:flex' : '') + "\n      items-center\n      px-2\n      md:px-4\n      py-2\n      text-center\n      justify-center\n      transition-all\n      duration-200\n      ease-in-out\n      "
  }, /*#__PURE__*/React$1.createElement("p", null, "" + (hasData ? 'Drag and drop or click to change file' : 'Drag and drop or click to add a file'))), /*#__PURE__*/React$1.createElement("div", {
    className: "\n      bg-opacity-25\n      items-center\n      flex\n      overflow-hidden\n      h-full\n      w-full\n      opacity-0\n      bg-blue-500\n      hover:scale-105\n        transition-all\n        duration-200\n        ease-in-out'>\n      "
  }, !props.disable && !props.readOnly ? /*#__PURE__*/React$1.createElement(FileUploader$1, _extends({
    onFileChanged: onFileChanged
  }, _props)) : null)), !hideControls && hasData && !props.disable && !props.readOnly ? /*#__PURE__*/React$1.createElement("div", {
    className: "\n            px-2\n            py-4\n            h-full\n            hidden\n            'group-hover:grid'\n            place-items-center\n            grid-cols-1\n            transform\n            transition\n            duration-200\n            ease-in-out\n            "
  }, canRemove ? /*#__PURE__*/React$1.createElement(IconButton, {
    "aria-label": "Delete",
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      var _data = {};
      setData(_data);
      onValueChanged && onValueChanged(_data);
    }
  }, /*#__PURE__*/React$1.createElement(RemoveButton, null)) : null, canEdit ? /*#__PURE__*/React$1.createElement(IconButton, {
    "aria-label": "Move up",
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, /*#__PURE__*/React$1.createElement(EditOutlined, null)) : null) : null);
});

var dateTimePicker = (function (props) {
  var onValueChanged = props.onValueChanged,
      value = props.value,
      params = props.item.params;
  return /*#__PURE__*/React$1.createElement(LocalizationProvider, {
    dateAdapter: AdapterMoment
  }, /*#__PURE__*/React$1.createElement(DateTimePicker, _extends({
    disabled: props.disabled,
    readOnly: props.readOnly,
    value: value,
    onChange: function onChange(_v) {
      onValueChanged(_v._d);
    }
  }, params, {
    renderInput: function renderInput(_params) {
      return /*#__PURE__*/React$1.createElement(TextField, _params);
    }
  })));
});

var useStyles = makeStyles(function (theme) {
  return {
    disabled: {
      backgroundColor: "#fff"
    }
  };
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
      className = props.className,
      _props$accordionDisab = props.accordionDisabled,
      accordionDisabled = _props$accordionDisab === void 0 ? false : _props$accordionDisab;
  var classes = useStyles();

  var _useState = useState(props.containerProps ? props.containerProps : {
    defaultExpanded: true,
    expanded: true
  }),
      containerProps = _useState[0],
      setContainerProps = _useState[1];

  var onChange = function onChange(event, expanded) {
    var data = _extends({}, containerProps, {
      expanded: expanded
    });

    setContainerProps(data);
    props.onContainerPropsChanged && props.onContainerPropsChanged(data);
  };

  return /*#__PURE__*/React$1.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React$1.createElement(Accordion, _extends({
    disabled: accordionDisabled,
    onChange: onChange
  }, containerProps, {
    elevation: 0,
    className: "\n            w-full\n            border-warmGray-200\n            hover:border-warmGray-300\n            transition-all\n            ease-in-out\n            duration-300\n            border-2\n            px-4\n            py-2\n            rounded-xl\n            " + className
  }), /*#__PURE__*/React$1.createElement(AccordionSummary, {
    expanded: true,
    expandIcon: /*#__PURE__*/React$1.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "grid grid-cols-2 justify-between w-full "
  }, /*#__PURE__*/React$1.createElement("div", {
    className: ""
  }, /*#__PURE__*/React$1.createElement("h4", null, title && title({
    value: value,
    index: index
  }))), /*#__PURE__*/React$1.createElement("div", {
    className: "flex justify-end mr-4"
  }, summary && summary({
    value: value,
    index: index
  }), showControls && /*#__PURE__*/React$1.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React$1.createElement(IconButton, {
    "aria-label": "Move up",
    disabled: disabled || !canMoveUp,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveUpRequired && onMoveUpRequired();
    }
  }, /*#__PURE__*/React$1.createElement(ChevronUp, {
    size: 20
  })), /*#__PURE__*/React$1.createElement(IconButton, {
    "aria-label": "Move down",
    disabled: disabled || !canMoveDown,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveDownRequired && onMoveDownRequired();
    }
  }, /*#__PURE__*/React$1.createElement(ChevronDown, {
    size: 20
  })), /*#__PURE__*/React$1.createElement(IconButton, {
    "aria-label": "Delete",
    disabled: disabled,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onRemoveRequired && onRemoveRequired();
    }
  }, canRemove && /*#__PURE__*/React$1.createElement(Trash, {
    size: 20
  })))))), /*#__PURE__*/React$1.createElement(AccordionDetails, {
    className: ""
  }, children)));
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
  return /*#__PURE__*/React$1.createElement("div", {
    className: "\n          border-warmGray-200\n          hover:border-warmGray-300\n          transition-all\n          ease-in-out\n          duration-300\n          border-2\n          py-1\n          rounded-xl " + className
  }, /*#__PURE__*/React$1.createElement("div", {
    className: " border-b border-warmGray-100 px-2 py-1 flex justify-end mr-4"
  }, summary && summary({
    value: value,
    index: index
  }), showControls && /*#__PURE__*/React$1.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React$1.createElement(IconButton, {
    "aria-label": "Move up",
    disabled: disabled || !canMoveUp,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveUpRequired && onMoveUpRequired();
    }
  }, /*#__PURE__*/React$1.createElement(ChevronLeft, {
    size: 20
  })), /*#__PURE__*/React$1.createElement(IconButton, {
    "aria-label": "Move down",
    disabled: disabled || !canMoveDown,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onMoveDownRequired && onMoveDownRequired();
    }
  }, /*#__PURE__*/React$1.createElement(ChevronRight, {
    size: 20
  })), /*#__PURE__*/React$1.createElement(IconButton, {
    "aria-label": "Delete",
    disabled: disabled,
    component: "span",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onRemoveRequired && onRemoveRequired();
    }
  }, canRemove && /*#__PURE__*/React$1.createElement(Trash, {
    size: 20
  })))), /*#__PURE__*/React$1.createElement("div", {
    className: "px-1"
  }, children));
});

var _buttonAdd = (function (_ref) {
  var onAdd = _ref.onAdd,
      title = _ref.title,
      disabled = _ref.disabled;
  return /*#__PURE__*/React$1.createElement("div", {
    className: "flex justify-center my-10"
  }, /*#__PURE__*/React$1.createElement(Button$1, {
    variant: "text",
    onClick: onAdd,
    disabled: disabled
  }, title ? title : "Add"));
});

var index = (function (props) {
  var type = props.type;

  switch (type) {
    case 'input':
      return Input;

    case 'select':
      return Select$1;

    case 'submit':
      return Submit;

    case 'dateTimePicker':
      return dateTimePicker;

    case 'checkbox':
      return Checkbox;

    case 'textArea':
      return TextArea;

    case 'dateRangePicker':
      return DateRangePicker;

    case 'datePicker':
      return DatePicker;

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

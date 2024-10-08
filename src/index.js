import Input from './input'
import Submit from './submit'
import Checkbox from './checkbox'
import Select from './select'
import TextArea from './textArea'
import DatePicker from './datePicker'
import Autocomplete from './autocomplete'
import RadioGroup from './radioGroup'
import Html from './html'
import Divider from './divider'
import Button from './button'
import ButtonGroup from './buttonGroup'
import SwitchControl from './switch'
import Rating from './rating'
import DateRangePicker from './dateRangePicker'
import H1 from './h1'
import H2 from './h2'
import H3 from './h3'
import H4 from './h4'
import Avatar from './avatar'
import fileUpload from './fileUpload'
import dateTimePicker from './dateTimePicker'
import _containerVertical from './_containerVertical'
import _containerHorizontal from './_containerHorizontal'
import _buttonAdd from './_buttonAdd'
import inputPassword from './inputPassword'

export default (props) => {
  const { type } = props
  switch (type) {
    case 'input':
      return Input
    case 'inputPassword':
      return inputPassword
    case 'select':
      return Select
    case 'submit':
      return Submit
    case 'dateTimePicker':
      return dateTimePicker
    case 'checkbox':
      return Checkbox
    case 'textArea':
      return TextArea
    case 'dateRangePicker':
      return DateRangePicker
    case 'datePicker':
      return DatePicker
    case 'autocomplete':
      return Autocomplete
    case 'radioGroup':
      return RadioGroup
    case 'html':
      return Html
    case 'divider':
      return Divider
    case 'button':
      return Button
    case 'buttonGroup':
      return ButtonGroup
    case 'switch':
      return SwitchControl
    case 'rating':
      return Rating
    case 'h1':
      return H1
    case 'h2':
      return H2
    case 'h3':
      return H3
    case 'h4':
      return H4
    case 'avatar':
      return Avatar
    case '_containerVertical':
      return _containerVertical
    case '_containerHorizontal':
      return _containerHorizontal
    case '_buttonAdd':
      return _buttonAdd
    case 'fileUpload':
      return fileUpload
    default:
      return null
  }
}


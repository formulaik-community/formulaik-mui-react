
import Input from './input'
import Submit from './submit'
import Checkbox from './checkbox'
import Select from './select'
import TextArea from './textArea'
import SelectCountry from './selectCountry'
import InputPhoneNumber from './inputPhoneNumber'
import DatePicker from './datePicker'
import AceEditor from './aceEditor'
import CronGenerator from './cronGenerator'

import JSONEditor from './jsonEditor'
import CronEditor from './cronEditor'
import Autocomplete from './autocomplete'
import RadioGroup from './radioGroup'
import Html from './html'
import Divider from './divider'
import Button from './button'
import ButtonGroup from './buttonGroup'
import SwitchControl from './switch'
import Rating from './rating'
import DateRangePicker from './dateRangePicker'
import ListEditor from './listEditor'

export default (props) => {
  const { type } = props
  switch (type) {
    case 'input':
      return Input
    case 'select':
      return Select
    case 'submit':
      return Submit
    case 'checkbox':
      return Checkbox
    case 'textArea':
      return TextArea
    case 'selectCountry':
      return SelectCountry
    case 'inputPhoneNumber':
      return InputPhoneNumber
    case 'dateRangePicker':
      return DateRangePicker
    case 'datePicker':
      return DatePicker
    case 'aceEditor':
      return AceEditor
    case 'cronGenerator':
      return CronGenerator
    case 'JSONEditor':
      return JSONEditor
    case 'cronEditor':
      return CronEditor
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
    case 'listEditor':
      return ListEditor
    default:
      return null
  }
}

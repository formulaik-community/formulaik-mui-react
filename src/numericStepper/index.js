import React from 'react'
import { NumericStepper } from '@anatoliygatt/numeric-stepper';

export default (props) => {
  const { value, onValueChanged,
    item: { params } } = props

  const {
    minimumValue = 0,
    maximumValue = Number.MAX_SAFE_INTEGER,
    stepValue = 1,
    size = "sm",
    theme = {
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
    }
  } = params

  return <div className={`py-2`}>
    <NumericStepper
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      stepValue={stepValue}
      initialValue={value}
      size={size}
      {...theme}
      onChange={onValueChanged}
      disabled={props.disabled}
      readOnly={props.readOnly ? props.readOnly : false}
    />
  </div>
}

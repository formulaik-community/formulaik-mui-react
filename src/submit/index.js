import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'

export default (props) => {
  const { isSubmitting, item: { params = {} } } = props
  const { variant = 'outlined', text = 'Update', size = 'large' } = params

  return <div className={`flex justify-center my-2`}>
    <LoadingButton
      loading={isSubmitting}
      disabled={props.disabled}
      variant={variant}
      onClick={props.submitForm}
      // color={'#656565'}
      size={size}>
      {text}
    </LoadingButton>
  </div>
}

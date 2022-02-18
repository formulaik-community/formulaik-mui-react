import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'

export default (props) => {
  const { isSubmitting, item: { value, params } } = props
  return <div className={`flex justify-center my-2`}>
    <LoadingButton
      loading={isSubmitting}
      disabled={props.disabled}
      variant="outlined"
      onClick={props.submitForm}
      // color={'#656565'}
      size={'large'}>
      {value}
    </LoadingButton>
  </div >
}

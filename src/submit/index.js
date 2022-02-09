import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'

export default (props) => {
  const { isSubmitting, item: { value, props: itemProps } } = props
  return <div className={`flex justify-center my-2`}>
    <LoadingButton
      loading={isSubmitting}
      variant="outlined"
      onClick={props.submitForm}
      // color={'#656565'}
      disabled={isSubmitting}
      size={'large'}>
      {value}
    </LoadingButton>
  </div>
}

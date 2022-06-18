import React, { lazy, Suspense } from 'react'
const LoadingButton = lazy(() => import('@mui/lab/LoadingButton'))

export default (props) => {
  const { isSubmitting, item: { params = {} } } = props
  const { variant = 'outlined', text = 'Update', size = 'large', className = '' } = params

  return <div className={`flex mb-4 mt-12 ${className}`}>
    <Suspense fallback={<div></div>}>
      <LoadingButton
        loading={isSubmitting}
        disabled={props.disabled}
        variant={variant}
        onClick={props.submitForm}
        // color={'#656565'}
        style={{
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 20,
          paddingBottom: 20,
          minWidth: 50
        }}
        //className='px-10 py-10'
        size={size}>
        {text}
      </LoadingButton>
    </Suspense>
  </div>
}

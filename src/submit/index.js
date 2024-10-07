import loadable from '@loadable/component'
import { twMerge } from 'tailwind-merge'
const LoadingButton = loadable(() => import('@mui/lab/LoadingButton'))

export default (props) => {
  const { isSubmitting, item: { params = {} } } = props
  const {
    variant = 'outlined',
    text = 'Update',
    size = 'large',
    className = ''
  } = params

  return <MPView className={twMerge('mb-4 mt-12', className)}>
    <LoadingButton
      loading={isSubmitting}
      disabled={props.disabled}
      variant={variant}
      onClick={props.submitForm}
      // color={'#656565'}
      style={{
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        minWidth: 50
      }}
      size={size}>
      {text}
    </LoadingButton>
  </MPView>
}

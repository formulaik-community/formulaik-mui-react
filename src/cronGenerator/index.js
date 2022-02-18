import React from 'react'
import { ReCron } from '@sbzen/re-cron'

export default (props) => {
    const { values, onValueChanged, errors, item: { id, props: itemProps } } = props

    return <div>
        <ReCron
            value={values[id]}
            onChange={onValueChanged}
        />
    </div>
}

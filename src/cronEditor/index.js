import React from 'react'
import TextField from '@mui/material/TextField'
import cronParser from 'cron-parser'
import Image from 'next/image'

export default (props) => {
  const { values, onValueChanged, field, errors, item: { subType, id, label, props: itemProps } } = props

  const iterations = () => {

    try {
      var interval = cronParser.parseExpression(values[id])
      return [
        interval.next().toString(),
        interval.next().toString(),
        interval.next().toString(),
        interval.next().toString()
      ]
    } catch (err) {
      console.log('Error: ' + err.message);
    }

    return []
  }

  return <div>
    <TextField
      label={label}
      disabled={props.disabled}
      readOnly={props.readOnly}
      variant="outlined"
      {...field}
      className={`${errors[id] ? 'bg-red-100' : ''}`}
      type={subType}
      onChange={({ target: { value } }) => onValueChanged(value)} />
    <p className="text-xs mt-6 text-warmGray-500">
      <ul>
        {iterations().map(i => <li>{i}</li>)}
      </ul>
    </p>
    {/* <Image src='https://www.ostechnix.com/wp-content/uploads/2018/05/cron-job-format-1.png' width={300} height={200} /> */}
    {/* <p className="text-xs mt-6 text-warmGray-300">
            *    *    *    *    *    *
            <br />
            ┬    ┬    ┬    ┬    ┬    ┬
            │    │    │    │    │    |
            │    │    │    │    │    └ day of week (0 - 7, 1L - 7L) (0 or 7 is Sun)
            │    │    │    │    └───── month (1 - 12)
            │    │    │    └────────── day of month (1 - 31, L)
            │    │    └─────────────── hour (0 - 23)
            │    └──────────────────── minute (0 - 59)
            └───────────────────────── second (0 - 59, optional)
        </p> */}
  </div>
}

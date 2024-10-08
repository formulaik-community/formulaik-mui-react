# Formulaik-Mui

[![NPM](https://img.shields.io/npm/v/@formulaik-community/react-mui.svg)](https://www.npmjs.com/package/formulaik-mui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Visit [The Formulaik project](https://formulaik-core.github.io/documentation/) to get started with Formulaik.

This a Formulaik components library built on top of Material UI.
Formulaik components are a set of inputs compatible with a Formulaik engine.
In this case, the Formulaik-Mui library is made for the [Formulaik React engine](https://github.com/formulaik-core/react).

![](https://formulaik-core.github.io/documentation/img/icon_xs.svg)

> [The Formulaik project](https://formulaik-core.github.io/documentation/) is an open source initiative for defining cross-platform forms, enabling reusable components in a JSON based declarative approach. Formulaik aims to simplify form building across various front-end frameworks. Formulaik defines a protocol for defining form inputs as a sole source of truth (data type, behaviour, validation) in json, which is interpreted by a platform-specific formulaik engine.

## Install

1. Install the React formulaik engine

```bash
npm install @formulaik/react
```

2. Install the Formulaik React Mui components library

```bash
npm install @formulaik-community/formulaik-mui-react
```

## Usage

Create your inputs and create the form using formulaik:

```jsx
import Formulaik from '@formulaik/react'
import FormulaikPaper from '@formulaik-community/react-native-paper'
import { Text } from 'react-native'

const inputs = [
 {
      component: 'input',
      id: 'email',
      label: 'Email',
      type: "string",
      params: {
        type: 'email',
        placeholder: "email@domain.com"
      },
      validations: [
        {
          kind: "format",
          value: "email",
          message: 'Invalid email format',
        },
        {
          kind: "required",
          value: true,
          message: "This field can't be blank",
        },
      ],
    },
    {
      component: 'inputPassword',
      label: 'Password',
      id: 'password',
      type: "string",
      params: {
        autoComplete: "current-password",
        placeholder: "xxxx-xxxx-xxxx"
      },
      validations: [
        {
          kind: "required",
          value: true,
          message: "This field can't be blank",
        },
        {
          kind: "matches",
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          message: 'Invalid password, must contain at least 8 characters and at most 18 characters',
        },
      ]
    },
    {
      component: 'submit',
      id: 'submit',
      params: {
        text: 'Continue'
      }
    },
]

export default (props) => {
 const onSubmit = async (values) => {
    const { email, password } = values
    try {
      await myapi.submit({ email, password })
    }
    catch(e) {
      throw (new Error('Could not sign in: ', e.message))
    }
    return { message: t("Email validated") }
  }

  const values = {
      email: cookies.get('email'),
  }

  return <>
      <Text>Login</Text>
      <Formulaik
        components={[FormulaikPaper]}
        values={values}
        inputs={inputs}
        onSubmit={onSubmit}
         />
    </>
}
```

## Components

| Component Key     | Description              | Parameters |
| ------------------- | -------------------------- | ------------ |
| `input`           | Text input               | #TODO      |
| `select`          | Choice component         | #TODO      |
| `submit`          | Formulaik submit button  | #TODO      |
| `dateTimePicker`  | Date time picker         | #TODO      |
| `checkbox`        | Checkbox                 | #TODO      |
| `textArea`        | Autogrowing text area    | #TODO      |
| `dateRangePicker` | Date range picker        | #TODO      |
| `autocomplete`    | Autocomplete input field | #TODO      |
| `radioGroup`      | Radio group              | #TODO      |
| `autocomplete`    | Autocomplete input field | #TODO      |
| `button`          | Button                   | #TODO      |
| `buttonGroup`     | Button group             | #TODO      |
| `rating`          | Rating                   | #TODO      |
| `switch`          | Switch                   | #TODO      |
| `fileUpload`      | File uploader            | #TODO      |

## Versionning

This repository follows the semantic branching model.

## Contributing
[<img src="https://github.com/adoucoure.png" width="60px;"/><br /><sub><ahref="https://github.com/adoucoure">Aboubacar Doucouré</ahref=></sub>](https://adoucoure.com/formulaik)
This project follows the [all-contributors specification](https://github.com/all-contributors/all-contributors). Contributions of any kind welcome!
Please [contact me](https://adoucoure.com/contact) if you want to contribute to the core frameworks or add a components library.


## License

MIT © [yelounak](https://github.com/yelounak)

## References

- [The Formulaik project documentation](https://formulaik-core.github.io/documentation/)
- [Getting started with Formulaik React 🚀](https://formulaik-core.github.io/documentation/docs/next/gettingstarted/react/installation)
- [Contribute to Formulaik](https://formulaik-core.github.io/documentation/docs/next/contributing)
- [Forumaik Blog](https://adoucoure.com/formulaik)

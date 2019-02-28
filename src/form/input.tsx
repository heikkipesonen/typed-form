import * as React from 'react'

import { KeysWithValueType } from '../helpers/types'
import { InputProps } from './types'

export class TextInput<
  T,
  K1 extends KeysWithValueType<T, string | object>,
  K2 extends KeysWithValueType<T[K1], string | object>,
  K3 extends KeysWithValueType<T[K1][K2], string | object>,
  K4 extends KeysWithValueType<T[K1][K2][K3], string | object>,
  K5 extends KeysWithValueType<T[K1][K2][K3][K4], string | object>
  > extends React.Component<InputProps<T, string, K1, K2, K3, K4, K5>> {

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    this.props.form.set(this.props.name as [K1, K2, K3, K4, K5])(v as any)
  }

  public render() {
    return this.props.children({
      onChange: this.handleChange,
      value: this.props.form.get(this.props.name) as any
    })
  }
}
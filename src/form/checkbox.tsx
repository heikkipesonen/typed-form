import * as React from 'react'

import { KeysWithValueType } from "src/helpers/types"
import { InputProps } from './types'

export class Checkbox<
  T,
  K1 extends KeysWithValueType<T, boolean | object>,
  K2 extends KeysWithValueType<T[K1], boolean | object>,
  K3 extends KeysWithValueType<T[K1][K2], boolean | object>,
  K4 extends KeysWithValueType<T[K1][K2][K3], boolean | object>,
  K5 extends KeysWithValueType<T[K1][K2][K3][K4], boolean | object>
  > extends React.PureComponent<InputProps<T, boolean, K1, K2, K3, K4, K5>> {

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.checked
    this.props.form.set(this.props.name as [K1, K2, K3, K4, K5])(v as any)
  }

  public render() {
    return this.props.children({
      onChange: this.handleChange,
      value: this.props.form.get(this.props.name) as any
    })
  }
}
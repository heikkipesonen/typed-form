import * as React from 'react'

interface Props<T> {
  model: T,
  children: (form: Form<T>) => React.ReactNode | React.ReactNodeArray
  onChange?: (s: T) => void
  onSubmit?: (s: T) => void
}

export class Form<T> extends React.Component<Props<T>, T> {

  public state: T = {
    ...this.props.model
  }

  public get<
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4]
    >(path: [K1, K2?, K3?, K4?, K5?]) {
    const { state } = this
    const [p1, p2, p3, p4, p5] = path

    return p5 && p4 && p3 && p2 ? state[p1][p2][p3][p4][p5] :
      p4 && p3 && p2 ? state[p1][p2][p3][p4] :
      p3 && p2 ? state[p1][p2][p3] :
      p2 ? state[p1][p2] :
      state[p1]
  }

  public set<
    K1 extends keyof T,
    >(path: [K1]) : (value: T[K1]) => void
  public set<
    K1 extends keyof T,
    K2 extends keyof T[K1],
    >(path: [K1, K2]) : (value: T[K1][K2]) => void
  public set<
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    >(path: [K1, K2, K3]) : (value: T[K1][K2][K3]) => void
  public set<
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    >(path: [K1, K2, K3, K4]) : (value: T[K1][K2][K3][K4]) => void
  public set<
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    >(path: [K1, K2, K3, K4, K5]): (value: T[K1][K2][K3][K4][K5]) => void
  public set<
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4]
    >(path: [K1, K2?, K3?, K4?, K5?]) {
      const [p1, p2, p3, p4, p5] = path

      return (value: unknown) => {
        const { state } = this
        p5 && p4 && p3 && p2 ? state[p1][p2][p3][p4][p5] = value as T[K1][K2][K3][K4][K5]:
        p4 && p3 && p2 ? state[p1][p2][p3][p4] = value as T[K1][K2][K3][K4] :
        p3 && p2 ? state[p1][p2][p3] = value as T[K1][K2][K3] :
        p2 ? state[p1][p2] = value as T[K1][K2] :
        state[p1] = value as T[K1]

        this.setState(() => state)
      }
    }

  public componentDidUpdate = () =>
    this.props.onChange ? this.props.onChange(this.state) : null

  public submit = () =>
    this.props.onSubmit ? this.props.onSubmit(this.state) : null

  public reset = () =>
    this.setState(() => ({
        ...this.props.model
    }))

  public render() {
    const { children } = this.props
    return (
      <form noValidate={true}>
        { children(this) }
      </form>
    )
  }
}

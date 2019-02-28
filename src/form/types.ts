import { Form } from './form'

export type InputNameType<
  T,
  V,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4]> = T[K1] extends V ? [K1]
  : T[K1][K2] extends V ? [K1, K2]
  : T[K1][K2][K3] extends V ? [K1, K2, K3]
  : T[K1][K2][K3][K4] extends V ? [K1, K2, K3, K4]
  : T[K1][K2][K3][K4][K5] extends V ? [K1, K2, K3, K4, K5]
  : never

export interface InputRenderProps<V> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: V
}

export interface InputProps<
  T,
  V,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4]
  > {
  form: Form<T>
  name: InputNameType<T, V, K1, K2, K3, K4, K5>
  children: (args: InputRenderProps<V>) => React.ReactNode
}
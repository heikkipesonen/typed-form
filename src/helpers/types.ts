export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export type Subtract<T, K> = Omit<T, keyof K>

export type ValueTypesOf<Source, ValueType = string> = Extract<Source[keyof Source], ValueType>

export type KeysOfType<T, K> = Extract<keyof T, K>

export type KeysWithValueType<T, V> = {
  [K in keyof T]: T[K] extends V
    ? K : never
  }[keyof T]

export type KeysOfTypeWithValue<T, KeyType, Value> = {
  [K in keyof T]: T[K] extends Value
    ? K extends KeyType ? K : never  : never
  }[keyof T]

export type ValueOf<T, K extends keyof T> = T[K]

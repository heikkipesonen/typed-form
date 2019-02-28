import * as React from 'react'
import { Form } from './form'
import { TextInput } from './form/input'
import { Checkbox } from './form/checkbox'

interface Model {
  person: {
    firstName: string
    lastName: string
    address: {
      street: string
      city: string
    }
  },

}

export class TestForm extends React.Component<{}, Model> {
  public state = {
    person: {
      firstName: 'david',
      lastName: 'hasselhoff',
      address: {
          street: 'all streets',
          city: 'all cities'
      },
      hasALotOfHair: true
    }
  }

  public render() {
    return (
      <Form model={this.state}>
        {form => (
          <>
            <div>
              <TextInput form={form} name={['person', 'firstName']}>
                {({ value, onChange }) => (
                  <input type="text" value={value} onChange={onChange} />
                )}
              </TextInput>
            </div>
            <div>
              <TextInput form={form} name={['person', 'lastName']}>
                {({ value, onChange }) => (
                  <input type="text" value={value} onChange={onChange} />
                )}
              </TextInput>
            </div>
            <div>
              <TextInput form={form} name={['person', 'address', 'street']}>
                {({ value, onChange }) => (
                  <input type="text" value={value} onChange={onChange} />
                )}
              </TextInput>
            </div>
            <div>
              <TextInput form={form} name={['person', 'address', 'city']}>
                {({ value, onChange }) => (
                  <input type="text" value={value} onChange={onChange} />
                )}
              </TextInput>
            </div>
            <div>
              <Checkbox form={form} name={['person', 'hasALotOfHair']}>
                {({ value, onChange }) => (
                  <input type="checkbox" checked={value} onChange={onChange} />
                )}
              </Checkbox>
            </div>
          </>
        )}
      </Form>
    )
  }
}

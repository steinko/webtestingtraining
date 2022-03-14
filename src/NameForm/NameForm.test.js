import NameForm from './NameForm'
import {render,screen,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

it('should exist a Named Form',()=> {
	 render(<NameForm />)
})


it('should store form data',()=> {
	  render(<NameForm />)
      const nameField = screen.getByLabelText('Name:')
      fireEvent.change(nameField,{target: {value: 'Stein'}})
      fireEvent.click( screen.getByText('Submit'))
      expect(screen.getByTestId('form')).toHaveFormValues({name:'Stein'})
})


it('should display entered text',()=> {
	  render(<NameForm />)
      const nameField = screen.getByLabelText('Name:')
      fireEvent.change(nameField,{target: {value: 'Stein'}})
      expect(nameField.value).toBe('Stein')
})
import NameForm from './NameForm'
import {render,screen,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

it('should exist a Named Form',()=> {
	 render(<NameForm />)
})


it.skip('should display entered test',()=> {
	  render(<NameForm />)
      const nameField = screen.getByLabelText('Name:')
      fireEvent.change(nameField,{target: {value: 'Stein'}})
      fireEvent.click( screen.getByText('Submit'))
      expect(screen.getByTestId('form')).toHaveFormValues({name:'Stein'})
})
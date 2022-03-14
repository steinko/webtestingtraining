import { render, screen } from '@testing-library/react';
import App from './App';

it('should exist a Named Form',()=> {
	
	 render(<App />)
     expect(screen.getByLabelText("Name:")).toBeInTheDocument()
})
import {Component} from 'react' 

export default class NameForm extends Component {
	
	render() { 
	  return (
		<form data-testid = 'form'> 
		  <label>
		     Name:
             <input type = "text" /> 
             <input type= 'submit' value='Submit' />
		  </label>
	    </form>
       )
    }
}
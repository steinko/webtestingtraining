import {Component} from 'react' 

export default class NameForm extends Component {
	
	constructor(props) {
       super(props);
       this.state = {value: ''};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
	
	
	 handleChange(event) {
         this.setState({value: event.target.value});
     }


     handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
     }

	
	render() { 
	  return (
		        <form data-testid = 'form' onSubmit={this.handleSubmit}> 
		            <label>
		                Name:

                        <input 
                            type = "text" 
                            name='name' 
                            value={this.state.value} 
                            onChange={this.handleChange}
                         /> 

                        <input type= 'submit' value='Submit' />
		            </label>
	             </form>
             )
    }
}
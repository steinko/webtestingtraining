import NameForm from './NameForm/NameForm'
import Profile from './Profile/Profile'

function App() {
  return (
	<div>
	   <div>
          <NameForm />
       </div>
       <div>
          <Profile  
            name='John Doe'
            title='Team Lead'
            details='This is my 5th year and I love helping others'
         />
       </div>
    </div>
  );
}

export default App;

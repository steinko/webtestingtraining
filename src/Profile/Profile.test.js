import { fireEvent, screen, render} from '@testing-library/react'
import React from 'react';
import Profile from './Profile';

test('should exist a profile compnent', () => {
	
	render(
             <Profile
                name='John Doe'
                title='Team Lead'
                details='This is my 5th year and I love helping others'
             /> 
          )

});

test('should shows "display details" button', () => {

  render(
    <Profile
      name='John Doe'
      title='Team Lead'
      details='This is my 5th year and I love helping others'
    />
   
  );

 
  expect(screen.queryByText( /display details/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/hide details/i)).toBeInTheDocument();

});

test('should shows "display details" button', () => {

  render(
    <Profile
      name='John Doe'
      title='Team Lead'
      details='This is my 5th year and I love helping others'
    />
   
  );

 
  fireEvent.click(screen.getByText( /hide details/i ));
  expect(screen.getByText( /display details/i)).toBeInTheDocument();
  expect(screen.queryByText(/hide details/i)).not.toBeInTheDocument();

});

test( 'should shows "hidden details" button', () => {

  render(
    <Profile
      name='John Doe'
      title='Team Lead'
      details='This is my 5th year and I love helping others'
    />
   
  );

  fireEvent.click(screen.getByText( /hide details/i ));
  fireEvent.click(screen.getByText( /display details/i))
  expect(screen.queryByText(/hide details/i)).toBeInTheDocument();
  expect(screen.queryByText( /display details/i)).not.toBeInTheDocument();
});


test( 'should not display details', () => {

  render(
    <Profile
      name='John Doe'
      title='Team Lead'
      details='This is my 5th year and I love helping others'
    />
   
  );

  fireEvent.click(screen.getByText( /hide details/i ))
  expect(screen.queryByText( /This is my 5th year/)).not.toBeInTheDocument();
});

test( 'should display details', () => {

  render(
    <Profile
      name='John Doe'
      title='Team Lead'
      details='This is my 5th year and I love helping others'
    />
   
  );

  expect(screen.queryByText( /This is my 5th year/)).toBeInTheDocument();
});

test( 'should not display name', () => {

  render(
    <Profile
      name='John Doe'
      title='Team Lead'
      details='This is my 5th year and I love helping others'
    />
   
   )

  fireEvent.click(screen.getByText( /hide details/i ))
  expect(screen.queryByText( 'John Doe')).toBeInTheDocument()
})

test( 'should display name', () => {

  render(
    <Profile
      name='John Doe'
      title='Team Lead'
      details='This is my 5th year and I love helping others'
    />
   
  );

  expect(screen.queryByText( 'John Doe')).toBeInTheDocument()
});


test( 'should  display title', () => {

  render(
    <Profile
      name='John Doe'
      title='Team Lead'
      details='This is my 5th year and I love helping others'
    />
   
   )

  fireEvent.click(screen.getByText( /hide details/i ))
  expect(screen.queryByText( 'Team Lead')).toBeInTheDocument()
})

test( 'should display title', () => {

  render(
    <Profile
      name='John Doe'
      title='Team Lead'
      details='This is my 5th year and I love helping others'
    />
   
  );

  expect(screen.queryByText( 'Team Lead')).toBeInTheDocument()
});
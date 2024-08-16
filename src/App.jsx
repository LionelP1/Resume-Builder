import React from 'react';
import GenerateForm from './components/shared/GeneralForm.jsx';


function App() {

  return (
    <>
      <h1> HELLO</h1>
      <GenerateForm section="information"></GenerateForm>
      <GenerateForm section="education"></GenerateForm>
      <GenerateForm section="skills"></GenerateForm>
      <GenerateForm section="experience"></GenerateForm>

    </>
  )
}

export default App

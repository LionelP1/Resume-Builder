import React from 'react';
import GenerateForm from './components/shared/GeneralForm.jsx';
import SectionDropdown from './components/shared/GeneralDropdown.jsx';


function App() {

  return (
    <>
      <h1> HELLO</h1>
      <SectionDropdown section="information"></SectionDropdown>
      <SectionDropdown section="education"></SectionDropdown>
      <GenerateForm section="information"></GenerateForm>
      <GenerateForm section="education"></GenerateForm>
      <GenerateForm section="skills"></GenerateForm>
      <GenerateForm section="experience"></GenerateForm>

    </>
  )
}

export default App

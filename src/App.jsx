import React from 'react';
import GenerateForm from './components/shared/GeneralForm.jsx';
import SectionDropdown from './components/shared/GeneralDropdown.jsx';


function App() {

  return (
    <>
      <h1> Section Test</h1>
      <SectionDropdown section="information"></SectionDropdown>
      <SectionDropdown section="education"></SectionDropdown>
      <SectionDropdown section="skills"></SectionDropdown>
      <SectionDropdown section="experience"></SectionDropdown>

      <h1> Form Test</h1>
      <GenerateForm section="information"></GenerateForm>
      <GenerateForm section="education"></GenerateForm>
      <GenerateForm section="skills"></GenerateForm>
      <GenerateForm section="experience"></GenerateForm>

    </>
  )
}

export default App

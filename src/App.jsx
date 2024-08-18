import React, { useState } from 'react';
import ResumeSection from './components/shared/ResumeSection.jsx';

const App = () => {
  return (
    <div>
      <ResumeSection section="information" ></ResumeSection>
      <ResumeSection section="experience" ></ResumeSection>
      <ResumeSection section="education" ></ResumeSection>
    </div>
  );
};

export default App;

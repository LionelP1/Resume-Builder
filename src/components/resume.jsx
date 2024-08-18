import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const resumePreview = (formData) => {

  return (
    <div>
      <div>
        {/* Personal Info Section */}
        <section>
          <h1>John Doe</h1>
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Location: 123 Main St, Hometown, USA</p>
        </section>
      </div> 
    </div> 
  );
};

export default resumePreview;

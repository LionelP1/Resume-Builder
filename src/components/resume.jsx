import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const resumePreview = (formData) => {
/*
  const contentRef = useRef();

  const handleView = () => {
    const element = contentRef.current;
    const options = {
      margin: 15,
      filename: 'resume.pdf',
      html2canvas: { scale: 3 }, // Increased scale for higher resolution
      jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' },
    };
  
    html2pdf().from(element).set(options).output('blob').then((blob) => {
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    });
  };*/

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

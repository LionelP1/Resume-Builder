import React, { useState } from 'react';
import { formConfig } from '../../formConfig.js';

const GenerateForm = ({section}) => {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClear = () => {
    setFormData({});
  };


  const handleCancel = () => {

  };

  const handleSave = () => {

  };



  return (
    <form onSubmit={handleSave}>
      {formConfig[section].fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.placeholder}</label>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          ) : (
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <div>
        <button type="button" onClick={handleClear}>Clear</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
        <button type="submit">Save</button>
      </div>
      <h3>{JSON.stringify(formData, null, 2)}</h3>
    </form>
  );
};

export default GenerateForm;




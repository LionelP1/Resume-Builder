import React from 'react';
import { formConfig } from '../../formConfig.js';

const GenerateForm = ({section}) => {


  const handleClear = () => {
  };

  const handleCancel = () => {

  };

  const handleSave = () => {

  };



  return (
    <form>
      {formConfig[section].fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.placeholder}</label>
          {field.type === "textarea" ? (
            <textarea
              placeholder={field.placeholder}
            />
          ) : (
            <input
              type={field.type}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      <div>
        <button type="button" onClick={handleClear}>Clear</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
        <button type="submit" onClick={handleSave}>Save</button>
      </div>

    </form>
  );
};

export default GenerateForm;
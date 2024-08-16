import React from 'react';
import { formConfig } from '../../formConfig.js';

const GenerateForm = ({section}) => {
    return (
      <form>
        {formConfig[section].map((field) => (
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
      </form>
    );
};

export default GenerateForm;
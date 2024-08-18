import { formConfig } from '../../formConfig.js';

const GenerateForm = ({section, formData, handleChange, handleClear, handleSave}) => {

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
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default GenerateForm;



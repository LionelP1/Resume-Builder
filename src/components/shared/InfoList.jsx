import React from 'react';

const InfoList = ({
  list,
  formComponent,
  formOpen,
  toggleFormOpen,
  deleteListElement,
  editList
}) => {
  return (
    <div>
      {!formOpen && (
        <div>
          {list.map((item, index) => (
            <div key={index}>
              <span>{`Section ${index}`}</span>
              <button onClick={() => editList(index)}>Edit</button>
              <button onClick={() => deleteListElement(index)}>Delete</button>
            </div>
          ))}
          <button onClick={toggleFormOpen}>Add New</button>
        </div>
      )}

      {formOpen && (
        <div>
          {formComponent}
          <button onClick={toggleFormOpen}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default InfoList;

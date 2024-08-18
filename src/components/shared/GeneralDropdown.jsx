import React from 'react';

const GenerateDropdown = ({ initialContent, dropdownContent, isExpanded, toggleDropdown }) => {
  return (
    <div>
      <div onClick={toggleDropdown}>
        {initialContent}
      </div>
      {isExpanded && (
        <div>
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

export default GenerateDropdown;



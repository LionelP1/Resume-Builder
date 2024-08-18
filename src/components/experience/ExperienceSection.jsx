import React, { useState } from 'react';
import GenerateDropdown from '../shared/GeneralDropdown.jsx';
import GenerateForm from '../shared/GeneralForm.jsx';
import InfoList from '../shared/InfoList.jsx';

const ExperienceSection = () => {

  const [formData, setFormData] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({});
  };


  const handleSave = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      setList((prevList) =>
        prevList.map((item, index) =>
          index === editIndex ? formData : item
        )
      );
      setEditIndex(null);
    } else {
      setList((prevList) => [...prevList, formData]);
    }
    setFormData({});
    setFormOpen(false);
  };

  const addToList = (newItem) => {
    setList((prevList) => [...prevList, newItem]);
  };

  const deleteListElement = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const editList = (index) => {
    setEditIndex(index);
    setFormData(list[index]);
    setFormOpen(true);

  };

  const toggleFormOpen = () => {
    setFormOpen(!formOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  const formComponent = (
    <GenerateForm
      section="experience"
      formData={formData}
      handleChange={handleChange}
      handleClear={handleClear}
      handleSave={handleSave}
    />
  );

  const experienceList = (
    <InfoList
    list={list}
    formComponent={formComponent}
    formOpen={formOpen}
    toggleFormOpen={toggleFormOpen}
    addToList={addToList}
    deleteListElement={deleteListElement}
    editList={editList}
    />
  );

  const experienceDropdown = (
    <GenerateDropdown initialContent={<div>Experience</div>} 
    dropdownContent={experienceList}
    isExpanded={dropdownOpen}
    toggleDropdown={toggleDropdown} />
  );



  return (
    <div>
      <h1>Experience Section</h1>
      {experienceDropdown}
    </div>
  );
};

export default ExperienceSection;


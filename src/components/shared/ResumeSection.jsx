import React, { useState } from 'react';
import GenerateDropdown from './GeneralDropdown.jsx';
import GenerateForm from './GeneralForm.jsx';
import InfoList from './InfoList.jsx';
import { formConfig } from '../../formConfig.js';

const ResumeSection = ({ section }) => {
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


const handleSave = (e) => {
    e.preventDefault();
    if (formConfig[section].allowMultiple) {
      saveMultipleEntries();
    } else {
      saveSingleEntry();
    }
  };

  const saveMultipleEntries = () => {
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

  const saveSingleEntry = () => {
    setFormData({});
    setFormOpen(false);
  };


  const formComponent = (
    <GenerateForm
      section={section}
      formData={formData}
      handleChange={handleChange}
      handleClear={handleClear}
      handleSave={handleSave}
    />
  );

  const SectionDropdown = formConfig[section].allowMultiple ? (
    <GenerateDropdown
      initialContent={<div>{section}</div>}
      dropdownContent={
        <InfoList
          list={list}
          formComponent={formComponent}
          formOpen={formOpen}
          toggleFormOpen={toggleFormOpen}
          addToList={addToList}
          deleteListElement={deleteListElement}
          editList={editList}
        />
      }
      isExpanded={dropdownOpen}
      toggleDropdown={toggleDropdown}
    />
  ) : (
    <GenerateDropdown
      initialContent={<div>{section}</div>}
      dropdownContent={formComponent}
      isExpanded={dropdownOpen}
      toggleDropdown={toggleDropdown}
    />
  );

  return <div>{SectionDropdown}</div>;
};

export default ResumeSection;

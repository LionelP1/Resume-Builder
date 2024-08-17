import React, { useState } from 'react';
import GenerateForm from './GeneralForm.jsx';
import { formConfig } from '../../formConfig.js';

const SectionDropdown = ({ section }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isAddingNew, setIsAddingNew] = useState(false);

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded);
        setIsAddingNew(false);
    };



    const handleEdit = () => {

    };

    const handleDelete = () => {

    };

    return (
        <div>
            <div onClick={toggleDropdown}>
                {section}
            </div>
            {isExpanded && (
                <div>
                    {formConfig[section].allowMultiple ? (
                        <div>
                            {isAddingNew ? (
                                <GenerateForm section={section} />
                            ) : (
                                <div>
                                    <h1>List goes here</h1>
                                    <button onClick={setIsAddingNew}>Add New {section}</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <GenerateForm section={section} />
                    )}
                </div>
            )}
        </div>
    );
};

export default SectionDropdown;



import React, { useState } from 'react';
import GenerateForm from './GeneralForm.jsx';
import { formConfig } from '../../formConfig.js';

const SectionDropdown = ({ section }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded);
    };


    const handleEdit = () => {

    };

    const handleDelete = () => {

    };

    return (
        <div>
            <div onClick={toggleDropdown} style={{ cursor: 'pointer', backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '5px' }}>
                {section}
            </div>
            {isExpanded && (
                <div>
                    {formConfig[section].allowMultiple ? (
                        <div>
                            <h1>List goes here</h1>
                            <button onClick={() => setIsExpanded(true)}>Add New {section}</button>
                        </div>
                    ) : (
                        <GenerateForm section={section}/>
                    )}
                </div>
            )}
        </div>
    );
};

export default SectionDropdown;

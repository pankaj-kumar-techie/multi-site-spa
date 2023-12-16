import React from 'react';
import { FieldProps } from '../../../../modal/FieldConfig';

const SelectField: React.FC<FieldProps> = ({ field, formData, handleInputChange, textColor }) => (
    <select
        value={formData[field.name] || ''}
        onChange={(event) => handleInputChange(field.name, event.target.value)}
        className={`mt-1 block w-full rounded-md border-none bg-gray-100 h-12 px-3 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${textColor}`}
        required={field.required}
    >
        <option value="">Select {field.label}</option>
        {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
);

export default SelectField;
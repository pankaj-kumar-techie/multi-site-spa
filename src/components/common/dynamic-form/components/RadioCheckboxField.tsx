import React from 'react';
import { FieldProps } from '../../../../modal/FieldConfig';

const RadioCheckboxField: React.FC<FieldProps> = ({ field, formData, handleInputChange, textColor }) => (
    <div className="space-x-4">
        {field.options?.map((option) => (
            <label key={option.value} className="inline-flex items-center">
                <input
                    type={field.type}
                    name={field.name}
                    value={option.value}
                    checked={
                        field.type === 'checkbox'
                            ? formData[field.name]?.includes(option.value)
                            : formData[field.name] === option.value
                    }
                    onChange={(event) => handleInputChange(field.name, event.target.value)}
                />
                <span className={`ml-2 ${textColor}`}>{option.label}</span>
            </label>
        ))}
    </div>
);

export default RadioCheckboxField;
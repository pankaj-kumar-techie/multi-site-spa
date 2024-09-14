import React, { useState } from 'react';
import { FieldProps } from '../../../../modal/FieldConfig';

const InputField: React.FC<FieldProps> = ({ field, formData, handleInputChange, textColor }) => {
    const [error, setError] = useState<string | null>(null);
    const [hint, setHint] = useState<string | null>(null);

    const validateField = (value: string) => {
        // Implement your validation logic here
        // Set the error message if validation fails
        if (!value) {
            setError(`Please enter ${field.label.toLowerCase()}`);
            setHint(null);
        } else {
            setError(null);
            // Set a hint message if needed
            setHint('Good job! Field is filled.');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange(field.name, event.target.value);
        validateField(event.target.value);
    };

    return (
        <div>
            <input
                type={field.type}
                name={field.name}
                id={field.name}
                className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-800 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out`}
                required={field.required}
                value={formData[field.name] || ''}
                onChange={handleChange}
            />
            {hint && <p className="text-green-500 text-sm mt-1">{hint}</p>}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default InputField;
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
                className={`mt-1 block w-full rounded-md border-none  h-12 px-3 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50 `}
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
import React, { useContext, useState } from 'react';
import { FieldConfig } from '../modal/FieldConfig';
import { Theme } from '../modal/Theme';
import { ThemeContext } from '../themes/ThemeProvider';


interface ContactFormProps {
    fields: FieldConfig[];
    theme : Theme;
    onSubmit: (data: Record<string, any>) => void;
}

function Form({ fields, onSubmit }: ContactFormProps) {
    const { theme } = useContext(ThemeContext);
    const [formData, setFormData] = useState<Record<string, any>>({});

    const handleInputChange = (field: string, value: any) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            {fields.map((field) => (
                <label key={field.name} className="block text-sm">
                    <span className={` font-bold`}>{field.label}</span>
                    {field.type === 'select' ? (
                        <select
                            value={formData[field.name] || ''}
                            onChange={(event) => handleInputChange(field.name, event.target.value)}
                            className="mt-1 block w-full rounded-md border-none bg-gray-100 h-12 px-3 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            required={field.required}
                        >
                            <option value="">Select {field.label}</option>
                            {field.options?.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    ) : field.type === 'radio' ? (
                        <div className="space-x-4">
                            {field.options?.map((option) => (
                                <label key={option.value} className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name={field.name}
                                        value={option.value}
                                        checked={formData[field.name] === option.value}
                                        onChange={(event) => handleInputChange(field.name, event.target.value)}
                                    />
                                    <span className="ml-2">{option.label}</span>
                                </label>
                            ))}
                        </div>
                    ) : field.type === 'checkbox' ? (
                        <div className="space-x-4">
                            {field.options?.map((option) => (
                                <label key={option.value} className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name={field.name}
                                        value={option.value}
                                        checked={formData[field.name]?.includes(option.value)}
                                        onChange={(event) => {
                                            const isChecked = event.target.checked;
                                            const updatedValues = isChecked
                                                ? [...(formData[field.name] || []), option.value]
                                                : (formData[field.name] || []).filter((val: string) => val !== option.value);
                                            handleInputChange(field.name, updatedValues);
                                        }}
                                    />
                                    <span className="ml-2">{option.label}</span>
                                </label>
                            ))}
                        </div>
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            className="mt-1 block w-full rounded-md border-none bg-gray-100 h-12 px-3 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            required={field.required}
                            value={formData[field.name] || ''}
                            onChange={(event) => handleInputChange(field.name, event.target.value)}
                        />
                    )}
                </label>
            ))}
            <button className={`bg-${theme.colors.primary} text-white p-4 rounded-full shadow-md hover:bg-blue-600`} type="submit" >Request A Call Back</button>
        </form>
    );
}

export default Form;

import React, { useContext, useState } from 'react';
import { FieldConfig, FieldProps } from '../../../modal/FieldConfig';
import InputField from './components/InputField';
import RadioCheckboxField from './components/RadioCheckboxField';
import SelectField from './components/SelectField';
import { useDynamicTextColor } from '../../../themes/DynamicTextColor';
import { ThemeContext } from '../../../themes/ThemeProvider';

interface DynamicFormProps {
    fields: FieldConfig[];
    level?: string;
    onSubmit: (data: Record<string, any>) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, level, onSubmit }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [formData, setFormData] = useState<Record<string, any>>({});


    const handleInputChange = (field: string, value: any) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const fieldComponentMap: Record<string, React.ComponentType<FieldProps>> = {
        select: SelectField,
        radio: RadioCheckboxField,
        checkbox: RadioCheckboxField,
        default: InputField,
    };

    const renderField = (field: FieldConfig) => {
        const FieldComponent = fieldComponentMap[field.type] || fieldComponentMap.default;
        return <FieldComponent field={field} formData={formData} handleInputChange={handleInputChange} textColor={textColor} />;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form Data ", event, formData)
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            {fields.map((field) => (
                <div key={field.name} className="mb-4">
                    <label className={`block text-sm font-bold ${textColor}`}>
                        {field.label}
                    </label>
                    {renderField(field)}
                </div>
            ))}
            <button className={`${theme.buttons.secondary} ${textColor} p-4 rounded-full shadow-md hover:bg-blue-600`} type="submit">
                {level || 'Submit'}
            </button>
        </form>
    );
};

export default DynamicForm;

export type FieldConfig = {
    name: string;
    label: string;
    type: 'text' | 'number' | 'textarea' | 'tel' | 'email' | 'select' | 'radio' | 'checkbox';
    required?: boolean;
    options?: FieldOption[];
}

export interface FieldProps {
    field: FieldConfig;
    formData: Record<string, any>;
    handleInputChange: (field: string, value: any) => void;
    textColor: string;
}

interface FieldOption {
    label: string;
    value: string;
}
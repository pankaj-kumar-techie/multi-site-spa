export type FieldConfig = {
    name: string;
    label: string;
    type: 'text' | 'textarea' | 'tel' | 'email' | 'select' | 'radio' | 'checkbox';
    required?: boolean;
    options?: FieldOption[];
}

interface FieldOption {
    label: string;
    value: string;
}
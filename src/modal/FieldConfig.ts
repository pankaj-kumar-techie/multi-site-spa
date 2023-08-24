export type FieldConfig = {
    name: string;
    label: string;
    type: 'text' | 'tel' |'email'| 'select' | 'radio' | 'checkbox';
    required?: boolean;
    options?: FieldOption[];
}

interface FieldOption {
    label: string;
    value: string;
}
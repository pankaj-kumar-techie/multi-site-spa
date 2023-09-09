export type PluginConfig = {
    name: string;
    isActive: boolean;
    data?: Whatsapp;
}

export type Whatsapp = {
    mobile: string;
    text?: string;
}


export type PluginConfig = {
    name: string;
    isActive: boolean;
    data?: Whatsapp ;
    location?:Location;
}

export type Whatsapp = {
    mobile: string;
    text?: string;
}

export type Location = {
    locationName: string;
    latitude: number;
    longitude: number;
}


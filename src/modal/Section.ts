export type Section = {
    type: string | null;
    id: string | null;
    title: string;
    subTitle: string;
    description: string;
    version: string;
    style: string;
    services: any;
    imageDtos: any[] | null;
    bgColor: string | null;
};

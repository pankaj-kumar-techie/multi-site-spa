export interface Section {
    id: string;
    name: string;
    version: string; // Add version property
    style: string; // Add style property
    data: {
      type: string;
      id: string;
      title: string;
      subTitle: string;
      description: string;
      version: string;
      style: string;
      services: null;
      imageDtos: null;
      bgColor: null;
    };
    path: string;
    htmlId: string | null;
  }
  
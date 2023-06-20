
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
      services: Service[] | null;
      products: Product[] | null;
      images: Image[] | null;
      testimonials: Testimonial[] | null;
      blogs: Blog[] | null;
      bgColor: null;
    };
    path: string;
  }


  export type Testimonial = {
    id: string,
    name: string,
    designation: string,
    imageSrc: string,
    imageAlt: string,
    testimonial: string,
}

export type Service = {
  id:number,
  title: string,
  body: string,
  imageSrc: string,
  imageAlt: string,
}

export type Product = {
  id:number,
  name: string,
  href: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
}


export type Image = {
  id:string,
  imageSrc:string,
  imageAlt:string,
}

export type Blog = {
  id: string,
  title: string,
  description: string,
  descriptionContext: string,
  imageSrc:string,
  imageAlt:string,
}

  
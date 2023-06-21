
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
      portfolios: Portfolio[] | null;
      images: Image[] | null;
      testimonials: Testimonial[] | null;
      blogs: Blog[] | null;
      faqs: FAQ[] | null;
      contactUs: ContactUs | null;
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

export type Portfolio = {
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

export type FAQ = {
  id: number,
  question: string,
  answer: string,
}

export type ContactUs = {
  address : string,
  email: string,
  phone: string,

}

  
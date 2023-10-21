import { type } from "os";
import { FieldConfig } from "./FieldConfig";

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
    menu?:MenuItem[];
    logo?:Image;
    services?: Service[];
    products?: Product[];
    packages?: Package[];
    portfolios?: Portfolio[];
    images?: Image[];
    videos?: VideoModel[] ;
    testimonials?: Testimonial[];
    blogs?: Blog[];
    faqs?: FAQ[];
    ourTeam?: OurTeam[];
    termAndCondition?: TermAndCondition[];
    contactUs?: ContactUs ;
  };
  path: string;
}

export type MenuItem = {
  id: string,
  label: string,
  url:string,
}

export type SocialLink = {
  id:string;
  iconClass:string;
  link:string;
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
  id: number,
  title: string,
  body: string,
  imageSrc: string,
  imageAlt: string,
}

export type OurTeam = {
  id: number,
  name: string,
  role?: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  href?: string,
}

export type Product = {
  id: number,
  name: string,
  href: string,
  price?: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
}

export type Package = {
  id: number,
  name: string,
  href: string,
  price?: string,
  duration?:string,
  destination?:string,
  description: string,
  imageSrc: string,
  imageAlt: string,
}

export type Portfolio = {
  id: number,
  name: string,
  href: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
}


export type Image = {
  id: string,
  imageSrc: string,
  imageAlt: string,
}

export type Blog = {
  id: string,
  title: string,
  description: string,
  descriptionContext: string,
  imageSrc: string,
  imageAlt: string,
}

export type FAQ = {
  id: number,
  question: string,
  answer: string,
}

export type ContactUs = {
  address: string,
  email: string,
  phone: string,
  formFields?: FieldConfig[];

}

export type TermAndCondition = {
  id: string,
  title: string,
  description: string,
  descriptionContext?: string,
}

export type VideoModel = {
  id: string,
  title: string,
  url: string,
}

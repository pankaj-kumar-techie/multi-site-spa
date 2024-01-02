import { FieldConfig } from "./FieldConfig";

export interface Section {
  id: string;
  name: string;
  version: string;
  style: string;
  data: {
    type: string;
    id: string;
    title: string;
    subTitle: string;
    description: string;
    version: string;
    style: string;
    menu?: MenuItem[];
    logo?: Image;
    bannerData?: HeroBannerProps[];
    services?: Service[];
    products?: Product[];
    packages?: Package[];
    calendar?: CalendarEvent[];
    portfolios?: Portfolio[];
    images?: Image[];
    videos?: VideoModel[];
    testimonials?: Testimonial[];
    blogs?: Blog[];
    faqs?: FAQ[];
    ourTeam?: OurTeam[];
    termAndCondition?: TermAndCondition[];
    contactUs?: ContactUs;
    formFields?: FieldConfig[];
    footer?: Footer;
  };
  path: string;
}

export type HeroBannerProps = {
  title: string
  subTitle: string
  description: string,
  image?: Image,
  videoSrc?: string,
  modalProps?: ModalProps
}

export type MenuItem = {
  id: string,
  label: string,
  url: string,
}

export type SocialLink = {
  id: string;
  iconClass: string;
  link: string;
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
  duration?: string,
  destination?: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  altitude?: string,
  difficulty?: string,
  season?: string
}
export type CalendarEvent = {
  id: number,
  name: string,
  href: string,
  duration?: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  date?: string,

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
//Todo : Clean this code
export type ContactUs = {
  address: string,
  name?: string,
  email: string,
  phone: string,
  name2?: string,
  email2?: string,
  phone2?: string,
  name3?: string,
  email3?: string,
  phone3?: string,
  name4?: string,
  email4?: string,
  phone4?: string,
  name5?: string,
  email5?: string,
  phone5?: string,
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

export interface DetailSection {
  id: string;
  name: string;
  version: string;
  data: {
    type: string;
    blogDetails?: BlogDetail;
    packageDetails?: PackageDetail;
  };
}

export interface PackageDetail extends Package {
  itinerary?: Itinerary[];
  gallery?: Image[];
  blogs?: Blog[];
}

export type BlogDetail = {
  blogs: Blog;
  comments: Comment[];

}

export type Comment = {
  id: string,
  author: string,
  text: string,

}

export type Itinerary = {
  id: number,
  title: string,
  description: string
}

export type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  children?: React.ReactNode;
  formFields?: FieldConfig[];
}

export interface Header {
  logo?:Image;
  menu?: MenuItem[];
}

export interface Footer {
  logo?: Image;
  socialLink?: SocialLink[];
  copyright?: string;
}

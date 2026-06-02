export type HeroSlide = {
  type: "image" | "video";
  src: string;
  alt?: string;
  title: string;
  credit?: string;
};

export type RibbonItem = {
  icon?: string;
  label: string;
  href?: string;
};

export type LugarCard = {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt?: string;
  gallery?: string[];
};

export type ShareData = {
  url: string;
  title: string;
  qrImage?: string;
};
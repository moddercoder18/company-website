type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Portfolio = {
  id: number;
  title: string;
  heading: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  technologies: string[];
  note: string;
  publishDate: string;
  shortDesc?: string;
  description?: string;
  technologiesDescription?: string;
  projectEmphasis: any[]
};

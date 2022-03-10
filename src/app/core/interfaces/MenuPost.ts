export interface MenuPost {
  type: string;
  image: string;
  name: string;
  date: string;
  text: string;
  images: string[];
  likes: string;
  commentCount: string;
  shares: string;
  comments: {
    name: string;
    image: string;
    text: string;
    date: string;
    likes: string;
  };
}

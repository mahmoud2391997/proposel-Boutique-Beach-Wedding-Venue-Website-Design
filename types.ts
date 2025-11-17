export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export interface WeddingPackage {
  id: string;
  title: string;
  price: string;
  guests: string;
  features: string[];
  image: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  PACKAGES = 'packages',
  GALLERY = 'gallery',
  CONTACT = 'contact'
}
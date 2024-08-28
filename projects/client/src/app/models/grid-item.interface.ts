export interface GridItem {
  id: string;
  size: string;
  content: {
    navPath?: string;
    title: string;
    description: string;
    tags?: string[];
  };
  children?: GridItem[];
}

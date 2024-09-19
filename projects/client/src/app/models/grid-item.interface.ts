export interface GridItem {
  id: string;
  size: string;
  content: {
    navPath?: string;
    isNavPathExternal?: boolean;
    title: string;
    description: string;
    tags?: string[];
  };
  children?: GridItem[];
}

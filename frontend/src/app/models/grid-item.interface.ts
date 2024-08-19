export interface GridItem {
  id: string;
  size: string; // Represents the column size e.g., 'col-8', 'col-6', 'col-12'
  content: { title: string; description: string }; // The content inside the grid item
  children?: GridItem[]; // Optional: For nested grids
}

export const customNodeConfig = {
  size: 300,
};

export const nodes = [
  {
    id: 'start',
    label: 'The Beginning',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#f5c542',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/5199/5199939.png',
  },
  {
    id: 'dungeon1',
    label: 'Dark Cavern',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#9e7049',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/2014/2014262.png',
  },
  {
    id: 'dungeon2',
    label: 'Ancient Tomb',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#b3997f',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/2014/2014262.png',
  },
  {
    id: 'cave1',
    label: 'Echoing Cave',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#a6a6a6',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/2206/2206606.png',
  },
  {
    id: 'river1',
    label: 'Crystal River',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#82bfc2',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/2046/2046180.png',
  },
  {
    id: 'forest1',
    label: 'Whispering Woods',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#94ba84',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/3336/3336682.png',
  },
  {
    id: 'forest2',
    label: 'Misty Grove',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#64876d',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/3336/3336682.png',
  },
  {
    id: 'forest3',
    label: 'Enchanted Thicket',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#b4d487',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/3336/3336682.png',
  },
  {
    id: 'town1',
    label: 'Sunnyvale',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#8b87d4',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/2279/2279834.png',
  },
  {
    id: 'town2',
    label: 'Riverside',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#c2cfed',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/2279/2279834.png',
  },
  {
    id: 'shrine1',
    label: 'Sacred Shrine',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#ff4d3d',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/4228/4228092.png',
  },
  {
    id: 'castle',
    label: 'King’s Castle',
    x: customNodeConfig.size,
    y: customNodeConfig.size,
    clicked: {
      transform: `translate(
        ${customNodeConfig.size / 2},
        ${customNodeConfig.size / 2}
      )`,
      backgroundColor: '#eb964b',
      isActive: false,
    },
    img: 'https://cdn-icons-png.flaticon.com/512/2228/2228346.png',
  },
];

export const links = [
  { source: 'start', target: 'dungeon1', isSelected: false },
  { source: 'start', target: 'forest1', isSelected: false },

  { source: 'dungeon1', target: 'river1', isSelected: false },
  { source: 'dungeon1', target: 'forest2', isSelected: false },

  { source: 'forest2', target: 'dungeon2', isSelected: false },

  { source: 'forest1', target: 'cave1', isSelected: false },
  { source: 'forest1', target: 'town1', isSelected: false },

  { source: 'cave1', target: 'town2', isSelected: false },
  { source: 'town1', target: 'shrine1', isSelected: false },

  { source: 'town2', target: 'forest3', isSelected: false },

  { source: 'river1', target: 'castle', isSelected: false },
  { source: 'dungeon2', target: 'castle', isSelected: false },
  { source: 'shrine1', target: 'castle', isSelected: false },
  { source: 'forest3', target: 'castle', isSelected: false },
];

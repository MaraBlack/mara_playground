import { GridItem } from '../models/grid-item.interface';
import { Tags } from '../models/tags.model';

export const projectsPlayground: GridItem[] = [
  {
    id: '1-1',
    size: 'col-6',
    content: {
      navPath: '/crud-with-nestjs',
      title: 'CRUD with Nest',
      description:
        'A project to test how nestJS works by doing a CRUD and call the endpoint in client project',
      tags: [Tags.NESTJS, Tags.ANGULAR, Tags.PRIME_FLEX],
    },
  },
  {
    id: '1-2',
    size: 'col-6',
    content: {
      navPath: '/small-animations',
      title: 'Small animations',
      description: 'A place where I test simple animations ideas',
      tags: [Tags.CSS, Tags.PRIME_FLEX, Tags.HTML],
    },
  },
  {
    id: '1-3',
    size: 'col-6',
    content: {
      navPath: '/dreams-to-paper',
      title: 'Dreams to paper',
      description:
        'A project in which a document from google docs is retrieved as html and parsed to be displayed in cards',
      tags: [Tags.NESTJS, Tags.ANGULAR, Tags.PRIME_FLEX],
    },
  },
  {
    id: '1-3',
    size: 'col-6',
    content: {
      navPath: 'https://marablack.github.io/mara/',
      isNavPathExternal: true,
      title: 'Metropolis',
      description:
        'A project to learn a bit of threeJS, representig a concept of an interactive cv',
        tags: [Tags.THREE_JS, Tags.ANGULAR],
    },
  }
];

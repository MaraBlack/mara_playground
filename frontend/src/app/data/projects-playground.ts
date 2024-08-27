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
      title: 'test project 1-2',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
  },
];

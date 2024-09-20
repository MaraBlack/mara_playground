import { GridItem } from '../models/grid-item.interface';
import { Tags } from '../models/tags.model';

export const howTo: GridItem[] = [
  {
    id: '1-3',
    size: 'col-6',
    content: {
      navPath: '/how-to-deploy-frontend-in-aws',
      title: 'Deploy a client project in AWS on existing domain',
      description:
        'A simple guide of how to deploy a project in AWS using Route53, Cloudfront and S3 bucket',
      tags: [Tags.ANGULAR, Tags.ROUTE53, Tags.CLOUDFRONT, Tags.S3],
    },
  },
];

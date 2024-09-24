export enum Tags {
  ANGULAR = 'angular',
  PRIME_NG = 'primeng',
  PRIME_FLEX = 'primeflex',
  THREE_JS = 'threeJS',
  IONIC = 'ionic',
  CSS = 'css',
  HTML = 'html',
  NESTJS = 'nestJS',
  S3 = 'S3',
  D3 = 'd3',
  CLOUDFRONT = 'cloudfront',
  ROUTE53 = 'route53',
  NGX_GRAPH = 'ngx graph',
}

export interface TagFormat {
  title: string;
  isActive?: boolean;
}

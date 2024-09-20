export enum Tags {
    ANGULAR = 'angular',
    PRIME_NG = 'primeng',
    PRIME_FLEX= 'primeflex',
    THREE_JS = 'threeJS',
    IONIC = 'ionic',
    CSS = 'css',
    HTML = 'html',
    NESTJS = 'nestJS',
    S3 = "S3",
    CLOUDFRONT = 'cloudfront',
    ROUTE53 = 'route53'
  }
  
  export interface TagFormat {
    title: string,
    isActive?: boolean
  }
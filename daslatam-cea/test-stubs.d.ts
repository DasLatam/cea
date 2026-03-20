declare module "next" {
  export interface Metadata { title?: any; description?: string; metadataBase?: URL; }
}
declare module "next/link" {
  const Link: any;
  export default Link;
}
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
declare namespace React { type ReactNode = any; }

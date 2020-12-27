/// <reference types="react-scripts" />

declare module "*.module.styl" {
  const classes: { readonly [key: string]: string }
  export default classes
}

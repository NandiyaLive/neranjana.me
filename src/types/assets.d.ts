declare module "*.jpg" {
  const source: import("next/image").StaticImageData;
  export default source;
}

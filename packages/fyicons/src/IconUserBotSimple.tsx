import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserBotSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserBotSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_970_11046)"}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 4.5v1m-3-1v1" /><path fill="currentColor" d="M8 9c1.576 0 3.097.57 4.225 1.595a5.44 5.44 0 0 1 1.504 2.271 1.51 1.51 0 0 1-.32 1.527c-.343.38-.861.607-1.41.607H4a1.9 1.9 0 0 1-1.41-.607 1.51 1.51 0 0 1-.319-1.527 5.44 5.44 0 0 1 1.504-2.271C4.902 9.569 6.423 9 7.999 9m0 1c-1.34 0-2.619.484-3.553 1.334a4.44 4.44 0 0 0-1.23 1.854.51.51 0 0 0 .115.535c.145.16.388.277.667.277h8c.28 0 .523-.118.667-.277a.51.51 0 0 0 .116-.536 4.44 4.44 0 0 0-1.23-1.853C10.617 10.484 9.34 10 8 10M8 0a.5.5 0 0 1 .5.5V2H10a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h1.5V.5A.5.5 0 0 1 8 0M6 3a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a1 1 0 0 0-1-1z" /></g><defs><clipPath id={idPrefix + "clip0_970_11046"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconUserBotSimple;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlashlight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlashlight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_120_2548)"}><path fill="currentColor" d="M14.717 4.818a1.5 1.5 0 0 1 0 2.121L12.44 9.217a2.5 2.5 0 0 1-1.662.73l-.416.017a1.5 1.5 0 0 0-1.052.496l-3.506 3.902c-.522.582-1.409.853-2.17.39a7.2 7.2 0 0 1-2.386-2.387c-.463-.76-.192-1.647.39-2.17l3.9-3.505a1.5 1.5 0 0 0 .496-1.052l.018-.416a2.5 2.5 0 0 1 .73-1.662L9.06 1.282a1.5 1.5 0 0 1 2.122 0zm-2.222 2.36a13.4 13.4 0 0 1-2.02-1.653 13.4 13.4 0 0 1-1.876-2.367L7.49 4.267a1.5 1.5 0 0 0-.438.997l-.018.416a2.5 2.5 0 0 1-.826 1.754L2.305 10.94c-.307.276-.361.645-.203.904a6.2 6.2 0 0 0 2.054 2.054c.259.158.628.104.904-.203l3.505-3.903a2.5 2.5 0 0 1 1.755-.827l.416-.018a1.5 1.5 0 0 0 .997-.438L12.842 7.4a12 12 0 0 1-.347-.222m-4.642.968a.5.5 0 0 1 0 .707l-1 1a.5.5 0 0 1-.707-.707l1-1a.5.5 0 0 1 .707 0m2.622-6.157a.5.5 0 0 0-.707 0l-.44.44c.081.137.188.315.325.52.34.51.85 1.19 1.529 1.869a12.4 12.4 0 0 0 1.868 1.529c.206.137.384.244.521.324l.44-.439a.5.5 0 0 0 0-.707z" /><path stroke="currentColor" strokeLinecap="round" d="m7.75 8.75-.5-.5" /></g><defs><clipPath id={idPrefix + "clip0_120_2548"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconFlashlight;

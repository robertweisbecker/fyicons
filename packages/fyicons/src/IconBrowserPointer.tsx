import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrowserPointer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrowserPointer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.073 9.328A1 1 0 0 1 9.331 8.07l4.03 1.29c.885.284.938 1.518.08 1.875l-1.555.648-.648 1.555c-.358.858-1.59.805-1.875-.08zM12 2a2 2 0 0 1 2 2v3.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-1.685 11.053.727-1.744a.5.5 0 0 1 .27-.27l1.744-.726-4.03-1.29zM4.5 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></SvgRoot>;
});
export default IconBrowserPointer;

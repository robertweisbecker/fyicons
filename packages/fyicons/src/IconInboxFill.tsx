import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconInboxFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconInboxFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="inbox-fill"><path fill="currentColor" d="M10.3 3c.41 0 .714-.004.999.077.238.068.462.18.66.33.236.18.415.424.661.753L14.9 7.2l.006.01q.018.026.032.055l.016.029q.011.026.02.054.008.02.012.04.006.026.008.053l.004.044L15 7.5v3a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-3l.001-.015q0-.021.004-.044.002-.027.008-.053l.012-.04.02-.054q.006-.015.016-.03.014-.028.032-.054L1.1 7.2l2.28-3.04c.246-.329.425-.575.661-.754.198-.15.422-.26.66-.329.285-.081.588-.077 1-.077zM5.7 4c-.468 0-.606.004-.724.038q-.181.052-.33.165c-.099.075-.185.182-.466.557L2.5 7H6v1a2 2 0 1 0 4 0V7h3.5l-1.68-2.24c-.281-.375-.367-.482-.466-.557a1 1 0 0 0-.33-.165C10.906 4.004 10.768 4 10.3 4z" /></SvgRoot>;
});
export default IconInboxFill;

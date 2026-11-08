import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookWideOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookWideOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-wide-open"><path fill="currentColor" d="M7.999 3.621c.987-1.398 2.829-2.036 4.507-1.405 1.5.564 2.494 2 2.494 3.602v6.37a.718.718 0 0 1-1.244.487 2.975 2.975 0 0 0-4.423.061l-.957 1.093-.024.023-.023.024-.014.009a.5.5 0 0 1-.132.077l-.04.015-.046.01-.054.01h-.087l-.055-.01q-.022-.003-.044-.01a.5.5 0 0 1-.088-.036q-.022-.011-.042-.026-.023-.013-.042-.03l-.014-.009q-.013-.011-.024-.024l-.023-.023-.957-1.093a2.975 2.975 0 0 0-4.423-.061A.718.718 0 0 1 1 12.188v-6.37a3.85 3.85 0 0 1 2.494-3.602C5.172 1.585 7.012 2.224 8 3.62m-.5 1.164C6.922 3.348 5.292 2.61 3.846 3.152A2.85 2.85 0 0 0 2 5.818v5.728a3.98 3.98 0 0 1 5.42.532l.58.662.58-.662a3.98 3.98 0 0 1 5.42-.532V5.818a2.85 2.85 0 0 0-1.846-2.666c-1.446-.544-3.075.195-3.654 1.632V10.5a.5.5 0 0 1-1 0z" /></SvgRoot>;
});
export default IconBookWideOpen;

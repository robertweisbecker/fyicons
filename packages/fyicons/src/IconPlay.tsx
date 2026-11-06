import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlay = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlay(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="play"><path fill="currentColor" d="M3 3.685A1.5 1.5 0 0 1 5.219 2.37l7.91 4.315a1.5 1.5 0 0 1 0 2.633l-7.91 4.316A1.5 1.5 0 0 1 3 12.316zm1.74-.44a.5.5 0 0 0-.74.44v8.631a.5.5 0 0 0 .74.44l7.911-4.317a.5.5 0 0 0 0-.877z" /></SvgRoot>;
});
export default IconPlay;

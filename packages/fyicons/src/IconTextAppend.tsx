import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextAppend = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextAppend(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.5 12a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm-5.765 8.104-1.93-1.485a.5.5 0 0 0-.805.396v2.97a.5.5 0 0 0 .805.396l1.93-1.485a.5.5 0 0 0 0-.792" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 11.5h-3a1 1 0 0 1-1-1v-1" /></SvgRoot>;
});
export default IconTextAppend;

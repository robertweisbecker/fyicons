import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShareAndroid = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShareAndroid(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><circle cx={4} cy={8} r={1.5} stroke="currentColor" /><circle cx={10} cy={4} r={1.5} stroke="currentColor" /><circle cx={10} cy={12} r={1.5} stroke="currentColor" /><path fill="currentColor" d="M8.777 5.416a.5.5 0 0 0-.554-.832L8.5 5zM8.5 5l-.277-.416-3 2L5.5 7l.277.416 3-2zm.277 5.584a.5.5 0 0 1-.554.832L8.5 11zM8.5 11l-.277.416-3-2L5.5 9l.277-.416 3 2z" /></SvgRoot>;
});
export default IconShareAndroid;

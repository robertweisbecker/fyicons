import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSend = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSend(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="send"><path fill="currentColor" d="M2 3.722a1.75 1.75 0 0 1 2.497-1.583l9.549 4.505c1.146.54 1.146 2.171 0 2.712l-9.549 4.505A1.75 1.75 0 0 1 2 12.278v-1.843a2.25 2.25 0 0 1 1.809-2.206L4.95 8l-1.14-.229A2.25 2.25 0 0 1 2 5.565zm2.07-.679A.75.75 0 0 0 3 3.722v1.843c0 .596.42 1.11 1.005 1.226l3.593.719a.5.5 0 0 1 0 .98l-3.593.719A1.25 1.25 0 0 0 3 10.435v1.843a.75.75 0 0 0 1.07.679l9.55-4.505a.5.5 0 0 0 0-.904z" />{props.children}</SvgRoot>;
});
export default IconSend;

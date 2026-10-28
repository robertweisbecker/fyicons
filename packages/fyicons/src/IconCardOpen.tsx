import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCardOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCardOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="card-open"><path stroke="currentColor" d="M12.5 13.47V5.89a1.5 1.5 0 0 0-1.098-1.445L4.768 2.602a1 1 0 0 0-1.268.964v8.153a1 1 0 0 0 .757.97l7 1.75a1 1 0 0 0 1.243-.97Z" /><path stroke="currentColor" d="M11.5 4.5V2.71a1.25 1.25 0 0 0-1.443-1.235l-5.711.893a1 1 0 0 0-.846.988V5.5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={0.75} d="m5.5 5.5 4 1m-4 1 3 .75" /></SvgRoot>;
});
export default IconCardOpen;

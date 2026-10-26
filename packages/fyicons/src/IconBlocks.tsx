import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBlocks = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBlocks(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.192 1.422a1.5 1.5 0 0 1 1.617.003l2.503 1.61A1.5 1.5 0 0 1 13 4.295v6.655a1.5 1.5 0 0 1-.694 1.266l-4.44 2.824a1.5 1.5 0 0 1-1.732-.086l-2.56-2.011A1.5 1.5 0 0 1 3 11.764V5.549c0-.513.262-.99.694-1.266zM7.5 11.532v2.557l4.269-2.716a.5.5 0 0 0 .231-.422V8.807zm-3.5.232c0 .153.07.299.191.394L6.5 13.97v-2.463L4 9.722zm3.5-4.229v2.828L12 7.638V4.876zM4 8.491l2.5 1.787V7.523L4 5.915zm5.268-6.224a.5.5 0 0 0-.54-.001L4.429 5 7.01 6.662l4.739-2.8z" /></SvgRoot>;
});
export default IconBlocks;

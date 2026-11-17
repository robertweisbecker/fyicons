import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconImages = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconImages(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="images"><path fill="currentColor" d="M6.2 2.636a2.16 2.16 0 0 1 2.618-1.571L13.363 2.2a2.16 2.16 0 0 1 1.572 2.62L13.8 9.364a2.16 2.16 0 0 1-2.62 1.572L11 10.89V12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.86zm-.298 7.974c-1.233-1.233-3.332-.737-3.883.917L2 11.582V12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.03a2.86 2.86 0 0 1-3.886-.148zM3 5a1 1 0 0 0-1 1v3.781c1.255-1.128 3.283-1.204 4.61.122l.211.211A1.863 1.863 0 0 0 10 8.798V6a1 1 0 0 0-1-1zm5 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1-2a2 2 0 0 1 2 2v3.86l.422.106a1.16 1.16 0 0 0 1.407-.845l1.137-4.544a1.16 1.16 0 0 0-.845-1.406L8.576 2.034a1.16 1.16 0 0 0-1.405.844L6.89 4z" />{props.children}</SvgRoot>;
});
export default IconImages;

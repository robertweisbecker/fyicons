import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeadphones = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeadphones(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="headphones"><path fill="currentColor" d="M7.993 1c4.388 0 7.613 4.115 6.565 8.375l-.552 2.244q-.009.03-.02.056v.825a2.5 2.5 0 0 1-2.5 2.5h-1.243c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25h1.243a2.5 2.5 0 0 1 2.1 1.144l.001-.007C14.48 5.507 11.732 2 7.993 2c-3.695 0-6.422 3.426-5.62 7.012A2.25 2.25 0 0 1 4.25 8h1.495c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25H4.251a2.25 2.25 0 0 1-2.25-2.25v-1.074q-.011-.028-.02-.057l-.552-2.244C.38 5.115 3.606 1 7.993 1M4.251 9c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h1.495a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25zm5.992 0a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h1.243a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z" />{props.children}</SvgRoot>;
});
export default IconHeadphones;

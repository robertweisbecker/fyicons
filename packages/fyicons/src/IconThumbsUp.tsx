import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconThumbsUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconThumbsUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="thumbs-up"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 5c.5-1 .325-2.665 1.5-2.5.865.12 1 1 1 1.5 0 1.5-.43 2.07 0 2.5h1.883c.591 0 1.07.48 1.071 1.07 0 .316-.103.606-.276.842a1.245 1.245 0 0 1-.3 1.916c.048.132.076.274.076.421 0 .46-.25.86-.619 1.077a1.25 1.25 0 0 1-1.176 1.673H9.387v-.002a4.1 4.1 0 0 1-2.514-.932l-.52-.42c-.522-.417-.853-1.047-.853-1.716V8.5c0-.629.3-1.219.778-1.627C6.898 6.345 7.707 5.586 8 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.611 7.5H4.65c-.43 0-.871.058-1.206.327-.427.343-.943 1-.943 2.173s.516 1.83.943 2.173c.335.27.776.327 1.206.327H6.5" />{props.children}</SvgRoot>;
});
export default IconThumbsUp;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterG = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterG(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-g"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 5c-.5-1.5-1.666-2.506-3.856-2.506C5.034 2.494 3.5 5.187 3.5 8s1.725 5.5 4.5 5.5c4 0 4.5-3.423 4.5-5l-4-.002" />{props.children}</SvgRoot>;
});
export default IconLetterG;

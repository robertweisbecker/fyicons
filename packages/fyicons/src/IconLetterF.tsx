import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterF = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterF(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-f"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 2.5h-8v5.077m5 0h-5m0 0V13.5" />{props.children}</SvgRoot>;
});
export default IconLetterF;

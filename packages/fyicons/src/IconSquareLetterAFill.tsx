import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterAFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterAFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-a-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8.64 5.267a.751.751 0 0 0-1.334.109L5.287 10.31a.5.5 0 0 0 .926.38l.393-.963a.5.5 0 0 0 .144.023h2.653l.384.94a.5.5 0 0 0 .926-.38L8.694 5.376zm.354 3.483H7.006L8 6.32z" />{props.children}</SvgRoot>;
});
export default IconSquareLetterAFill;

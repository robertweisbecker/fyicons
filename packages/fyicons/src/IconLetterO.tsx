import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterO = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterO(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-o"><path stroke="currentColor" d="M8 2.15c3.087 0 4.5 3.071 4.5 5.85s-1.413 5.85 -4.5 5.85S3.5 10.778 3.5 8C3.5 5.22 4.913 2.15 8 2.15z" />{props.children}</SvgRoot>;
});
export default IconLetterO;

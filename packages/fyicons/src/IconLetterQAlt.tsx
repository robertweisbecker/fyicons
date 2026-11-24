import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterQAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterQAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-q-alt"><path stroke="currentColor" d="M8 2.4c3.087 0 4.5 2.94 4.5 5.6s-1.413 5.6-4.5 5.6S3.5 10.66 3.5 8 4.913 2.4 8 2.4Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 9.5a2.98 2.98 0 0 1 2.37 1.905l.43 1.146a3 3 0 0 0 1.627 1.704l.573.245" />{props.children}</SvgRoot>;
});
export default IconLetterQAlt;

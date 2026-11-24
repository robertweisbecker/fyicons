import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterQ = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterQ(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-q"><path stroke="currentColor" d="M8 2.4c3.087 0 4.5 2.94 4.5 5.6s-1.413 5.6-4.5 5.6S3.5 10.66 3.5 8 4.913 2.4 8 2.4Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8.5 10.5 3 4" />{props.children}</SvgRoot>;
});
export default IconLetterQ;

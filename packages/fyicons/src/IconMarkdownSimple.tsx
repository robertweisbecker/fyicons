import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMarkdownSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMarkdownSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.499 5a.5.5 0 0 1 .5.5V9h1.043a.5.5 0 0 1 .354.853l-2.043 2.043a.5.5 0 0 1-.707 0L9.604 9.853a.5.5 0 0 1 .353-.854h1.04V5.5a.5.5 0 0 1 .5-.5zm-5.598.218A.624.624 0 0 1 8 5.625v5.75a.625.625 0 0 1-1.25 0V7.31L4.974 9.377a.625.625 0 0 1-.948 0L2.25 7.31v4.065a.625.625 0 0 1-1.25 0v-5.75a.625.625 0 0 1 1.099-.407L4.5 8.01z" /></SvgRoot>;
});
export default IconMarkdownSimple;

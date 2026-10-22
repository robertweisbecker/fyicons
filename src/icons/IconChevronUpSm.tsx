import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronUpSm = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronUpSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.99996 4.5C8.13256 4.50001 8.25972 4.55272 8.35348 4.64648L11.8535 8.14648C12.0487 8.34175 12.0487 8.65827 11.8535 8.85352C11.6582 9.04876 11.3417 9.04874 11.1464 8.85352L7.99996 5.70703L4.85348 8.85352C4.65823 9.04876 4.34171 9.04874 4.14645 8.85352C3.95118 8.65825 3.95118 8.34175 4.14645 8.14648L7.64645 4.64648C7.74021 4.55272 7.86735 4.5 7.99996 4.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconChevronUpSm;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterA = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterA(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-a"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm2.806 2.376a.751.751 0 0 1 1.334-.11l.054.11 2.019 4.934a.5.5 0 0 1-.926.38l-.384-.94H6.75a.5.5 0 0 1-.144-.023l-.393.963a.5.5 0 0 1-.926-.38zm-.3 3.374h1.988L8 6.32z" />{props.children}</SvgRoot>;
});
export default IconLetterA;

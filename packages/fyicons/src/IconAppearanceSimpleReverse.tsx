import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppearanceSimpleReverse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppearanceSimpleReverse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="appearance-simple-reverse"><circle cx={8} cy={8} r={6.5} stroke="currentColor" /><path fill="currentColor" d="M8 13A5 5 0 1 0 8 3z" />{props.children}</SvgRoot>;
});
export default IconAppearanceSimpleReverse;

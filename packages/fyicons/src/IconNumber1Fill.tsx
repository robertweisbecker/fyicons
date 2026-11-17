import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumber1Fill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumber1Fill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="number1-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8.736 5.06a.5.5 0 0 0-.513.024l-1.5 1a.5.5 0 1 0 .554.832L8 6.434V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.264-.44" />{props.children}</SvgRoot>;
});
export default IconNumber1Fill;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumber2Fill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumber2Fill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="number2-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8.089 5c-.857 0-1.64.485-2.024 1.251l-.012.025a.5.5 0 0 0 .894.448l.013-.026C7.174 6.271 7.61 6 8.089 6h.066a.85.85 0 0 1 .773 1.2c-.149.326-.51.578-.987.726-.406.126-.892.353-1.28.768C6.263 9.121 6 9.714 6 10.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H7.059c.068-.271.192-.47.334-.623.228-.245.537-.4.844-.496.6-.187 1.283-.567 1.602-1.268A1.85 1.85 0 0 0 8.155 5z" />{props.children}</SvgRoot>;
});
export default IconNumber2Fill;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumber9Fill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumber9Fill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="number9-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8 5a2 2 0 1 0 .436 3.952 3.5 3.5 0 0 1-1.152 1.098l-.009.005a.5.5 0 0 0 .354.93l.095-.037h.002l.003-.003.007-.004.025-.012.079-.045c.065-.039.156-.095.262-.17.211-.15.492-.379.772-.694C9.438 9.387 10 8.398 10 7.002A2 2 0 0 0 8 5m0 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />{props.children}</SvgRoot>;
});
export default IconNumber9Fill;

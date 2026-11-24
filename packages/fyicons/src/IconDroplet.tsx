import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDroplet = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDroplet(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="droplet"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8 1.5 3.81 5.862a4.545 4.545 0 1 1-7.62 0z" />{props.children}</SvgRoot>;
});
export default IconDroplet;

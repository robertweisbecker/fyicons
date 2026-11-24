import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointerSwarm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointerSwarm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pointer-swarm"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.566 10.199a.5.5 0 0 1 .633-.633l3.628 1.21a.5.5 0 0 1 0 .948l-1.34.447a.5.5 0 0 0-.316.316l-.447 1.34a.5.5 0 0 1-.948 0zm7 0a.5.5 0 0 1 .633-.633l3.628 1.21a.5.5 0 0 1 0 .948l-1.34.447a.5.5 0 0 0-.316.316l-.447 1.34a.5.5 0 0 1-.948 0zm-7-7a.5.5 0 0 1 .633-.633l3.628 1.21a.5.5 0 0 1 0 .948l-1.34.447a.5.5 0 0 0-.316.316l-.447 1.34a.5.5 0 0 1-.948 0zm7 0a.5.5 0 0 1 .633-.633l3.628 1.21a.5.5 0 0 1 0 .948l-1.34.447a.5.5 0 0 0-.316.316l-.447 1.34a.5.5 0 0 1-.948 0z" />{props.children}</SvgRoot>;
});
export default IconPointerSwarm;

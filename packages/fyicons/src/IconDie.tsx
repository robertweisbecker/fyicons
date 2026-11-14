import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDie = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDie(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="die"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.52 3.304-3.04-.608a1 1 0 0 0-1.176.785l-.608 3.038a1 1 0 0 0 .785 1.177l3.039.608a1 1 0 0 0 1.176-.785l.608-3.038a1 1 0 0 0-.785-1.177M10.307 9.71 7.693 5.79a1.25 1.25 0 0 0-1.733-.347L2.04 8.057a1.25 1.25 0 0 0-.347 1.733l2.614 3.92a1.25 1.25 0 0 0 1.733.347l3.92-2.614a1.25 1.25 0 0 0 .347-1.733" /><circle cx={4.5} cy={9.5} r={0.75} fill="currentColor" /><circle cx={7.5} cy={9.5} r={0.75} fill="currentColor" /><circle cx={11.5} cy={5.5} r={0.75} fill="currentColor" />{props.children}</SvgRoot>;
});
export default IconDie;

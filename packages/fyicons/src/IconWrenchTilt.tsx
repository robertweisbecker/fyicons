import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWrenchTilt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWrenchTilt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wrench-tilt"><path fill="currentColor" d="M7.146 3.147a4.03 4.03 0 0 1 3.597-1.112l.113.035a.5.5 0 0 1 .232.698L9.953 4.815a.91.91 0 0 0 .152 1.082l.115.097c.28.2.656.225.966.053l2.045-1.136.112-.046a.5.5 0 0 1 .623.39 4.03 4.03 0 0 1-4.888 4.67l-2.82 3.29A2.464 2.464 0 1 1 2.785 9.74l3.29-2.82a4.03 4.03 0 0 1 1.072-3.774m2.688-.179a3.037 3.037 0 0 0-2.72 3.973.5.5 0 0 1-.151.533l-3.528 3.024A1.465 1.465 0 1 0 5.5 12.564l3.024-3.528a.5.5 0 0 1 .534-.15 3.037 3.037 0 0 0 3.971-2.721l-1.36.756v.001a1.906 1.906 0 0 1-2.59-2.591zM4.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1" />{props.children}</SvgRoot>;
});
export default IconWrenchTilt;

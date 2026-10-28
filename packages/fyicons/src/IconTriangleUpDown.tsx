import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleUpDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleUpDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="triangle-up-down"><path d="M8.21462 13.6429C8.11752 13.8047 7.88297 13.8047 7.78587 13.6429L5.22742 9.3788C5.12744 9.21216 5.24747 9.00017 5.44179 9.00017H10.5587C10.753 9.00017 10.873 9.21216 10.7731 9.3788L8.21462 13.6429ZM10.7731 6.62155C10.873 6.78818 10.753 7.00017 10.5587 7.00017H5.44179C5.24747 7.00017 5.12744 6.78818 5.22742 6.62155L7.78587 2.35746C7.88297 2.19563 8.11752 2.19563 8.21462 2.35746L10.7731 6.62155Z" fill="currentColor" /></SvgRoot>;
});
export default IconTriangleUpDown;

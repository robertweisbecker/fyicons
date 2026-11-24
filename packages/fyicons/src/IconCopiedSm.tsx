import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCopiedSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCopiedSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="copied-sm"><path fill="currentColor" d="M8.577.879a2 2 0 0 0-2.425 1.455l-.761 3.045-.001.007-3.055.764A2 2 0 0 0 .88 8.575l1.272 5.09a2 2 0 0 0 2.425 1.455l5.09-1.273a2 2 0 0 0 1.455-2.424l-.101-.404.404.102a2 2 0 0 0 2.425-1.455l1.272-5.09a2 2 0 0 0-1.455-2.425zm-.91 4.968a1 1 0 0 1 1.213.728l1.272 5.09a1 1 0 0 1-.727 1.213l-5.09 1.272a1 1 0 0 1-1.213-.727L1.85 8.333a1 1 0 0 1 .727-1.213zm.001 1.682a.5.5 0 0 0-.639.303l-1.05 2.937-1.232-.703a.5.5 0 1 0-.495.867l1.75 1a.5.5 0 0 0 .719-.264l1.25-3.501a.5.5 0 0 0-.303-.639m-.546-4.953a1 1 0 0 1 1.213-.728l5.09 1.273c.535.134.86.677.727 1.213l-1.272 5.09c-.135.534-.678.86-1.213.727l-.92-.231-.897-3.587a2 2 0 0 0-2.425-1.455l-.938.233z" />{props.children}</SvgRoot>;
});
export default IconCopiedSm;

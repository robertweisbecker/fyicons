import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeartFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeartFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="heart-fill"><path fill="currentColor" d="m11.611 2.018.356.04.006.001c1.95.299 3.596 2.398 2.839 5.045-.2.7-.742 1.487-1.372 2.241-.644.769-1.43 1.559-2.186 2.266a49 49 0 0 1-2.694 2.335l-.184.146-.049.038-.013.011-.002.002H8.31a.5.5 0 0 1-.617 0h-.002l-.003-.002-.012-.01-.05-.039a34 34 0 0 1-.84-.685 49 49 0 0 1-2.039-1.796c-.757-.707-1.544-1.497-2.187-2.266-.632-.754-1.172-1.542-1.373-2.241-.757-2.647.89-4.746 2.84-5.045l.005-.001c.85-.12 1.638-.01 2.377.35.573.28 1.095.703 1.586 1.254.461-.541.935-.974 1.483-1.261.632-.33 1.32-.45 2.132-.383" />{props.children}</SvgRoot>;
});
export default IconHeartFill;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParagraph = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParagraph(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paragraph"><path fill="currentColor" d="M12.5 12a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM7.501 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V3h-1v3H6.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h.501V3h-1v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zM12.5 6a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconParagraph;

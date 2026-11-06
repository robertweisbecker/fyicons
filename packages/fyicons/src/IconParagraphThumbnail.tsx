import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParagraphThumbnail = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParagraphThumbnail(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paragraph-thumbnail"><path fill="currentColor" d="M13.5 12a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zM6 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm7.5 4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zM3 6h3V3H3zm10.5-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconParagraphThumbnail;

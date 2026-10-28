import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParagraphThumbnailInline = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParagraphThumbnailInline(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paragraph-thumbnail-inline"><path fill="currentColor" d="M12.5 12a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" /><rect width={3.5} height={3.5} x={3.75} y={6.25} stroke="currentColor" rx={0.5} /></SvgRoot>;
});
export default IconParagraphThumbnailInline;

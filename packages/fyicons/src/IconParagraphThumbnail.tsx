import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParagraphThumbnail = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParagraphThumbnail(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paragraph-thumbnail"><path fill="currentColor" d="M13.5 12a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm-8-6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zm8 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />{props.children}</SvgRoot>;
});
export default IconParagraphThumbnail;

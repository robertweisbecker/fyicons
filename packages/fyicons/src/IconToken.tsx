import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconToken = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconToken(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="token"><path fill="currentColor" d="M6.935 1.079a2 2 0 0 1 2.13 0L13.2 3.68a2.25 2.25 0 0 1 1.051 1.904v4.827a2.25 2.25 0 0 1-1.05 1.904l-4.135 2.602a2 2 0 0 1-2.13 0l-4.136-2.6a2.25 2.25 0 0 1-1.051-1.904V5.585A2.25 2.25 0 0 1 2.8 3.681zm1.598.846a1 1 0 0 0-1.066 0L3.334 4.528a1.25 1.25 0 0 0-.584 1.057v4.827c0 .43.22.828.584 1.057l4.133 2.603a1 1 0 0 0 1.066 0l4.133-2.603a1.25 1.25 0 0 0 .584-1.057V5.585c0-.429-.22-.828-.584-1.057zm-1.1 3.107a1 1 0 0 1 1.133 0l1.75 1.2a1 1 0 0 1 .434.825v1.885a1 1 0 0 1-.435.825l-1.75 1.201a1 1 0 0 1-1.13 0l-1.75-1.2a1 1 0 0 1-.435-.826V7.057a1 1 0 0 1 .434-.824zM6.25 7.057v1.885L8 10.143l1.75-1.201V7.057L8 5.856z" />{props.children}</SvgRoot>;
});
export default IconToken;

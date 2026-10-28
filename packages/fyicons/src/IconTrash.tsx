import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTrash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTrash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="trash"><path fill="currentColor" d="M8.6 1c.926 0 1.731.636 1.946 1.537L10.894 4H13.5a.5.5 0 0 1 0 1h-.554q0 .05-.005.1l-.763 7.648A2.5 2.5 0 0 1 9.689 15H6.31a2.5 2.5 0 0 1-2.487-2.251l-.765-7.65A1 1 0 0 1 3.052 5H2.5a.5.5 0 0 1 0-1h2.604l.348-1.463A2 2 0 0 1 7.398 1zM4.817 12.65A1.5 1.5 0 0 0 6.31 14h3.38a1.5 1.5 0 0 0 1.493-1.35L11.946 5H4.052zm1.647-5.586a.44.44 0 0 1 .472.4l.25 3a.437.437 0 1 1-.872.072l-.25-3a.437.437 0 0 1 .4-.472m3.071 0c.24.02.42.231.4.472l-.25 3a.437.437 0 1 1-.87-.072l.248-3c.02-.24.231-.42.472-.4M7.398 2a1 1 0 0 0-.973.769L6.132 4h3.734l-.293-1.231A1 1 0 0 0 8.6 2z" /></SvgRoot>;
});
export default IconTrash;

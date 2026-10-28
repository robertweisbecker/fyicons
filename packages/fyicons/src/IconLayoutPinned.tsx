import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutPinned = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutPinned(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-pinned"><path fill="currentColor" d="M6 2a.5.5 0 0 1 0 1c-.97 0-1.336.006-1.618.098a2 2 0 0 0-1.284 1.284C3.006 4.664 3 5.031 3 6v3.5c0 .708 0 1.21.032 1.602.032.385.091.621.186.806a2 2 0 0 0 .874.874c.185.095.42.154.806.186C5.29 13 5.792 13 6.5 13H10c.97 0 1.336-.006 1.618-.098a2 2 0 0 0 1.284-1.284c.092-.282.098-.648.098-1.618a.5.5 0 0 1 1 0c0 .892.006 1.456-.146 1.927a3 3 0 0 1-1.927 1.927c-.471.153-1.035.146-1.927.146H6.5c-.692 0-1.24 0-1.683-.036-.447-.037-.83-.113-1.18-.291a3 3 0 0 1-1.31-1.31c-.178-.35-.254-.732-.29-1.18C2 10.74 2 10.192 2 9.5V6c0-.891-.006-1.456.146-1.927a3 3 0 0 1 1.927-1.926C4.544 1.994 5.11 2 6 2m5.793-.5a1 1 0 0 1 1.414 0L14.5 2.793a1 1 0 0 1 0 1.414l-1.5 1.5v.983c0 1.113-1.346 1.67-2.134.883L10 6.707 7.854 8.854a.5.5 0 0 1-.708-.707L9.293 6l-.866-.866C7.639 4.346 8.197 3 9.31 3h.982z" /></SvgRoot>;
});
export default IconLayoutPinned;

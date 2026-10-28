import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFontSerif = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFontSerif(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="font-serif"><path fill="currentColor" d="M11.88 6.152A2.5 2.5 0 0 1 15 8.575v1.805l-.001.022v1.558c0 .047.047.08.092.066a.5.5 0 0 1 .316.95 1.07 1.07 0 0 1-1.37-.736 3.35 3.35 0 0 1-2.121.76h-.039a1.966 1.966 0 0 1-1.907-2.443l.01-.043A2 2 0 0 1 11.92 9h.78c.437 0 .873-.051 1.299-.146v-.279a1.5 1.5 0 0 0-1.871-1.453l-.174.044a1.5 1.5 0 0 0-.938.72l-.08.145a.5.5 0 0 1-.873-.49l.08-.143a2.5 2.5 0 0 1 1.564-1.2zM4.297 3.464c.226-.613 1.053-.652 1.354-.116l.054.116L8.85 12H9a.5.5 0 0 1 0 1H7.5a.5.5 0 0 1 0-1h.283l-.74-2.006Q7.024 9.998 7 10H3l-.045-.005L2.215 12H2.5a.5.5 0 1 1 0 1H1a.5.5 0 0 1 0-1h.151zM14 9.877q-.644.121-1.299.123h-.78a1 1 0 0 0-.969.758l-.01.042a.966.966 0 0 0 .936 1.2h.039a2.35 2.35 0 0 0 1.804-.845 1.2 1.2 0 0 0 .279-.754zM3.322 9h3.356L5 4.445z" /></SvgRoot>;
});
export default IconFontSerif;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCollection = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCollection(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="collection"><path fill="currentColor" d="m11.792 6 .198-.68a.25.25 0 0 0-.24-.32h-7.5a.25.25 0 0 0-.24.32l.198.68zM3.208 7a.25.25 0 0 0-.243.31l1.33 5.311A.5.5 0 0 0 4.78 13h6.437a.5.5 0 0 0 .486-.379l1.328-5.31A.25.25 0 0 0 12.788 7zm7.548-3 .211-.676A.25.25 0 0 0 10.73 3H5.27a.25.25 0 0 0-.238.324l.21.676zm.992 0c.834 0 1.434.8 1.2 1.6l-.115.4h-.046c.813 0 1.41.765 1.213 1.554l-1.329 5.31A1.5 1.5 0 0 1 11.217 14H4.78a1.5 1.5 0 0 1-1.455-1.136l-1.328-5.31A1.25 1.25 0 0 1 3.209 6h-.043l-.117-.4A1.25 1.25 0 0 1 4.25 4h-.054l-.118-.377A1.25 1.25 0 0 1 5.27 2h5.46a1.25 1.25 0 0 1 1.193 1.622L11.805 4z" /></SvgRoot>;
});
export default IconCollection;

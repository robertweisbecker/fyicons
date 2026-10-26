import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFiles = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFiles(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.379 1a2 2 0 0 1 1.414.586l1.621 1.621A2 2 0 0 1 14 4.621V10a2 2 0 0 1-2 2h-2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a2 2 0 0 1 2-2zM4 5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8H7.25C6.56 8 6 7.44 6 6.75V5zm4-3a1 1 0 0 0-1 1v1.1c.296.097.569.262.793.486l1.621 1.621A2 2 0 0 1 10 7.621V11h2a1 1 0 0 0 1-1V5h-1.75C10.56 5 10 4.44 10 3.75V2zM7 6.75c0 .138.112.25.25.25h1.533a1 1 0 0 0-.076-.086L7.086 5.293A1 1 0 0 0 7 5.217zm4-3c0 .138.112.25.25.25h1.533a1 1 0 0 0-.076-.086l-1.621-1.621A1 1 0 0 0 11 2.217z" /></SvgRoot>;
});
export default IconFiles;

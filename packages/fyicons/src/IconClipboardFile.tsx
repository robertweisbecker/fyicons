import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClipboardFile = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconClipboardFile(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.787 1c.597 0 1.09.432 1.19 1H9a2 2 0 0 1 2 2v2.25a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-.23c.148.28.23.591.23.914V4.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-.586c0-.323.082-.635.23-.914H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1.021c.101-.568.595-1 1.192-1zM5.213 2A.213.213 0 0 0 5 2.213a.86.86 0 0 1-.293.644l-.378.331A.97.97 0 0 0 4 3.914V4h4v-.086a.97.97 0 0 0-.33-.726l-.377-.33A.86.86 0 0 1 7 2.212.213.213 0 0 0 6.787 2z" /><path stroke="currentColor" d="M10 14.5h3a1.5 1.5 0 0 0 1.5-1.5V9.36a1.5 1.5 0 0 0-.402-1.023l-1.264-1.359a1.5 1.5 0 0 0-1.098-.478H10A1.5 1.5 0 0 0 8.5 8v5a1.5 1.5 0 0 0 1.5 1.5Z" /><path fill="currentColor" d="M13 9h1.75L12 6.25V8a1 1 0 0 0 1 1" /></SvgRoot>;
});
export default IconClipboardFile;

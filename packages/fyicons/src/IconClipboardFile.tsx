import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClipboardFile = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconClipboardFile(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="clipboard-file"><path fill="currentColor" d="M6.5 1c.653 0 1.206.418 1.412 1H9a2 2 0 0 1 2 2v2.25a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-.308c.196.31.308.674.308 1.058V4.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-.442c0-.384.112-.748.308-1.058H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1.087A1.5 1.5 0 0 1 5.5 1zm-1 1a.5.5 0 0 0-.5.5v.513l-.338.116A.98.98 0 0 0 4.005 4h3.99a.98.98 0 0 0-.657-.871L7 3.013V2.5a.5.5 0 0 0-.5-.5z" /><path stroke="currentColor" d="M11.736 6.5H10A1.5 1.5 0 0 0 8.5 8v5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V9.36a1.5 1.5 0 0 0-.402-1.023l-1.264-1.359a1.5 1.5 0 0 0-1.098-.478Z" /><path fill="currentColor" d="M13 9h1.75L12 6.25V8a1 1 0 0 0 1 1" />{props.children}</SvgRoot>;
});
export default IconClipboardFile;

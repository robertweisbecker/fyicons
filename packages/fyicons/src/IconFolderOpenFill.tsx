import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderOpenFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderOpenFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="folder-open-fill"><path fill="currentColor" d="M5.482 2c.663 0 1.299.264 1.768.732L8.517 4h2.293a2.5 2.5 0 0 1 2.5 2.5V7H6.658A3.11 3.11 0 0 0 3.71 9.123q-.197.59-.53 1.107a.5.5 0 0 0 .842.54c.266-.412.48-.86.638-1.33A2.105 2.105 0 0 1 6.658 8h7.034a1.5 1.5 0 0 1 1.342 2.17l-1.085 2.172A3 3 0 0 1 11.265 14H4.136a2.5 2.5 0 0 1-2.489-2.273l-.637-7A2.5 2.5 0 0 1 3.5 2z" />{props.children}</SvgRoot>;
});
export default IconFolderOpenFill;

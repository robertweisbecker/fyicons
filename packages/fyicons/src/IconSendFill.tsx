import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSendFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSendFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="send-fill"><path fill="currentColor" d="M2 3.551a1.5 1.5 0 0 1 2.12-1.366l9.824 4.449c1.175.532 1.175 2.2 0 2.732l-9.825 4.45A1.5 1.5 0 0 1 2 12.449v-2.294a1.25 1.25 0 0 1 1.081-1.239l4.108-.56a.36.36 0 0 0 0-.711l-4.107-.56a1.25 1.25 0 0 1-1.081-1.24z" />{props.children}</SvgRoot>;
});
export default IconSendFill;

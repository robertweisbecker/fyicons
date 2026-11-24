import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowReload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowReload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-reload"><path fill="currentColor" d="M8.84.275a.5.5 0 0 0-.839.367V2a6 6 0 1 0 5.977 5.476.5.5 0 0 0-.997.087 5 5 0 0 1-5.687 5.387A5.003 5.003 0 0 1 3.34 6.187 5 5 0 0 1 8.001 3v1.36a.5.5 0 0 0 .84.366l2.012-1.857a.5.5 0 0 0 0-.735z" />{props.children}</SvgRoot>;
});
export default IconArrowReload;

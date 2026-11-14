import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserCardFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserCardFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="user-card-fill"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5.502 9c-1.28 0-1.946.82-2.26 1.41-.152.286.074.59.4.59h3.716c.326 0 .552-.304.4-.59C7.445 9.82 6.78 9 5.502 9m3.996 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM5.495 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.003 1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />{props.children}</SvgRoot>;
});
export default IconUserCardFill;

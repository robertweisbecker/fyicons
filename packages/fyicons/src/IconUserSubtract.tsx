import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserSubtract = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserSubtract(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="user-subtract"><path fill="currentColor" d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M8 9c.501 0 .997.057 1.475.168-.285.26-.537.555-.748.88A6 6 0 0 0 8 10c-1.34 0-2.618.485-3.552 1.334a4.44 4.44 0 0 0-1.23 1.854.51.51 0 0 0 .115.535c.145.16.388.277.667.277h4.257q.191.535.502 1H4a1.9 1.9 0 0 1-1.41-.607 1.51 1.51 0 0 1-.319-1.527 5.44 5.44 0 0 1 1.504-2.271C4.903 9.569 6.424 9 8 9m2.5 3.09a.41.41 0 0 0 0 .82h4a.41.41 0 0 0 0-.82zM8 1a3.5 3.5 0 1 1 0 7.001A3.5 3.5 0 0 1 8 1m0 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" />{props.children}</SvgRoot>;
});
export default IconUserSubtract;

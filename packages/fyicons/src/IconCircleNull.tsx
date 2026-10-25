import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleNull = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNull(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-null"><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM9.64648 5.64648C9.84175 5.45122 10.1583 5.45122 10.3535 5.64648C10.5488 5.84175 10.5488 6.15825 10.3535 6.35352L6.35352 10.3535C6.15825 10.5488 5.84175 10.5488 5.64648 10.3535C5.45122 10.1583 5.45122 9.84175 5.64648 9.64648L9.64648 5.64648Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleNull;

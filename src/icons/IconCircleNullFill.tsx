import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircleNullFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNullFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM10.3535 5.64648C10.1583 5.45122 9.84175 5.45122 9.64648 5.64648L5.64648 9.64648C5.45122 9.84175 5.45122 10.1583 5.64648 10.3535C5.84175 10.5488 6.15825 10.5488 6.35352 10.3535L10.3535 6.35352C10.5488 6.15825 10.5488 5.84175 10.3535 5.64648Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleNullFill;

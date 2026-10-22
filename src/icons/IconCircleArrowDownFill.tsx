import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowDownFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowDownFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 4C7.72386 4 7.5 4.22386 7.5 4.5V9.79297L5.85352 8.14648C5.65825 7.95122 5.34175 7.95122 5.14648 8.14648C4.95122 8.34175 4.95122 8.65825 5.14648 8.85352L7.64648 11.3535C7.68034 11.3874 7.71891 11.4134 7.75879 11.4355C7.80299 11.4601 7.85024 11.48 7.90137 11.4902C7.96611 11.5032 8.0329 11.5031 8.09766 11.4902C8.14884 11.4801 8.19596 11.46 8.24023 11.4355C8.2804 11.4134 8.31945 11.3876 8.35352 11.3535L10.8535 8.85352C11.0488 8.65825 11.0488 8.34175 10.8535 8.14648C10.6583 7.95122 10.3417 7.95122 10.1465 8.14648L8.5 9.79297V4.5C8.5 4.22386 8.27614 4 8 4Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleArrowDownFill;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleProgressFull = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleProgressFull(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4ZM9.50684 6.32129C9.27022 6.17957 8.9634 6.25679 8.82129 6.49316L7.65039 8.44336L7.10352 7.89648C6.90836 7.70136 6.59176 7.70155 6.39648 7.89648C6.20155 8.09176 6.20136 8.40836 6.39648 8.60352L7.39648 9.60352C7.50528 9.71229 7.65883 9.76479 7.81152 9.74609C7.96388 9.7271 8.0996 9.63843 8.17871 9.50684L9.67871 7.00684C9.82023 6.77016 9.74336 6.46324 9.50684 6.32129Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleProgressFull;

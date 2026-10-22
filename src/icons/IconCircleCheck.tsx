import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleCheck = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.0566 5.26758C10.1848 5.02307 10.4879 4.92853 10.7324 5.05664C10.9769 5.18482 11.0715 5.48785 10.9434 5.73242L8.19336 10.9824C8.11954 11.1232 7.98238 11.2202 7.8252 11.2441C7.66803 11.2681 7.50891 11.2159 7.39648 11.1035L5.14648 8.85352C4.95122 8.65825 4.95122 8.34175 5.14648 8.14648C5.34175 7.95122 5.65825 7.95122 5.85352 8.14648L7.62207 9.91504L10.0566 5.26758Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleCheck;

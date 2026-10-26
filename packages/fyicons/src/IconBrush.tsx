import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrush = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrush(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2.192 6.954c-.673 0-1.179.615-1.048 1.276l.064.32a5.52 5.52 0 0 0 5.095 4.439l-.157.158-.067.083a.5.5 0 0 0 .12.67l.265.197a2.5 2.5 0 0 0 3.615-.668l1.1-1.747c.322.133.7.088.98-.14l.074-.068a2.857 2.857 0 0 0 .019-4.02l2.234-2.233a1.915 1.915 0 0 0-2.707-2.707L9.545 4.748a2.856 2.856 0 0 0-4.019.02.97.97 0 0 0-.174 1.139 4.62 4.62 0 0 1-2.927 1.047zm4.063-1.5a1.857 1.857 0 0 1 2.605.02.97.97 0 0 0 1.373 0l2.253-2.253a.92.92 0 0 1 .647-.267l.093.004a.915.915 0 0 1 .553 1.556l-2.253 2.253-.066.073a.97.97 0 0 0 0 1.227l.066.073.127.14c.59.723.552 1.784-.108 2.465zm-4.13 2.582a.07.07 0 0 1 .067-.082h.233a5.62 5.62 0 0 0 3.604-1.31l4.38 4.38-1.176 1.872a1.5 1.5 0 0 1-1.956.533l.576-.575a.5.5 0 0 0-.353-.853h-.875a4.524 4.524 0 0 1-4.437-3.645z" /></SvgRoot>;
});
export default IconBrush;

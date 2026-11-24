import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAtSign = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAtSign(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="at-sign"><path fill="currentColor" d="M4.913 1.718a7 7 0 0 1 8.492 1.833c.989 1.2 1.669 2.814 1.594 4.347-.089 1.812-1.296 2.854-2.46 3.109-.671.147-1.538.076-2.229-.443a2.4 2.4 0 0 1-.675-.783c-.565.838-1.488 1.36-2.504 1.2-1.495-.238-2.344-1.818-2.098-3.37S6.574 4.818 8.07 5.055c.574.09 1.051.38 1.41.789l.018-.116.007-.043.002-.011V5.67l.026-.098a.5.5 0 0 1 .961.258v.003l-.002.01-.007.042-.023.152c-.02.13-.047.31-.075.512a18 18 0 0 0-.137 1.23c-.066 1.13.283 1.7.662 1.985.404.303.953.367 1.414.266.758-.166 1.61-.855 1.675-2.18.06-1.226-.494-2.604-1.367-3.664a6 6 0 1 0-2.325 9.353.5.5 0 0 1 .384.923 7.001 7.001 0 0 1-5.78-12.744m3 4.324c-.795-.126-1.706.55-1.892 1.725s.47 2.1 1.266 2.226 1.708-.55 1.895-1.725c.186-1.175-.473-2.1-1.269-2.226" />{props.children}</SvgRoot>;
});
export default IconAtSign;

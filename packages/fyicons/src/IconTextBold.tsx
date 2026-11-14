import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextBold = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextBold(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-bold"><path fill="currentColor" d="M8.688 2c1.066 0 1.92.388 2.492 1.035.56.634.796 1.459.757 2.252a3.4 3.4 0 0 1-1.07 2.317q.336.2.611.458a3.3 3.3 0 0 1 1.052 2.44C12.523 12.297 11.105 14 8.688 14H4.75a.75.75 0 0 1-.75-.75V2.75A.75.75 0 0 1 4.75 2zM5.5 12.5h3.188c1.6 0 2.338-1.046 2.342-2.003a1.8 1.8 0 0 0-.576-1.34c-.388-.362-1.03-.657-2.017-.657H5.5zm0-5.5h2.938l.237-.01c1.147-.1 1.721-.936 1.763-1.777.023-.456-.116-.883-.383-1.186-.257-.29-.684-.527-1.367-.527H5.5z" /></SvgRoot>;
});
export default IconTextBold;

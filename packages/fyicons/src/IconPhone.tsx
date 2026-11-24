import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPhone = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPhone(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="phone"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.192 1.674a1 1 0 0 1 1.44.168l1.396 1.862a2 2 0 0 1-.094 2.516l-.099.113a1 1 0 0 0 .01 1.327L7.02 8.967l1.322 1.189a1 1 0 0 0 1.327.01l.111-.098a2 2 0 0 1 2.518-.096l1.861 1.397a1 1 0 0 1 .168 1.44l-.158.19a4 4 0 0 1-5.9.268L5.504 10.5v-.002L5.5 10.5 2.734 7.733a4 4 0 0 1 .268-5.9z" />{props.children}</SvgRoot>;
});
export default IconPhone;

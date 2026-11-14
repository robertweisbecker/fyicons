import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPinVerticalFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPinVerticalFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pin-vertical-fill"><path fill="currentColor" d="M8 1.466c1.037 0 2.11.259 2.915.817.435.302.578.811.533 1.245l-.376 3.675c.18.103.422.252.67.44.467.355 1.098.955 1.184 1.738.052.485-.279.81-.57.993-.304.19-.711.328-1.149.43-.886.209-2.057.308-3.207.308s-2.32-.1-3.207-.307c-.438-.103-.845-.24-1.148-.431-.292-.183-.623-.508-.57-.993l.022-.145c.141-.712.723-1.26 1.162-1.593.247-.188.488-.337.668-.44l-.375-3.675c-.044-.434.098-.943.533-1.245.804-.558 1.878-.817 2.915-.817m-.75 11.59V12h1.5v1.056a4 4 0 0 1-.422 1.789L8 15.5l-.328-.655a4 4 0 0 1-.422-1.79" />{props.children}</SvgRoot>;
});
export default IconPinVerticalFill;

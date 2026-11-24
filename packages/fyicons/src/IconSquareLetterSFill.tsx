import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterSFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterSFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-s-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8.02 4.878c-.701-.07-1.324.189-1.706.642-.384.456-.51 1.103-.203 1.7.197.384.507.623.823.784.304.155.648.255.934.339.306.09.556.165.763.271.197.101.32.214.395.359.115.22.08.46-.093.667-.18.213-.51.384-.94.365-.513-.023-.921-.286-1.053-.646a.5.5 0 1 0-.938.344c.312.85 1.166 1.266 1.947 1.3.72.033 1.358-.253 1.75-.722.398-.474.539-1.143.215-1.768-.199-.385-.51-.625-.826-.787-.307-.158-.65-.258-.938-.342-.306-.09-.555-.165-.761-.27-.196-.1-.316-.21-.388-.35a.52.52 0 0 1 .078-.6c.154-.183.445-.33.843-.29.333.032.692.192 1.002.42a.5.5 0 0 0 .595-.803c-.413-.306-.94-.557-1.498-.613" />{props.children}</SvgRoot>;
});
export default IconSquareLetterSFill;

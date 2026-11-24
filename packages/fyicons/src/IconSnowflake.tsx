import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSnowflake = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSnowflake(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="snowflake"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 1.5V4m0 0v4m0-4L6.5 2.5M8 4l1.5-1.5M8 8v4m0-4-5.5 3.5M8 8l5.484-3.5M8 8l5.5 3.5M8 8 2.552 4.52M8 14.5V12m0 0 1.5 1.5M8 12l-1.5 1.5m-2.002-9 .5 1.5-1.5.5m8.002-2L11 6l1.498.5m-7.998 5L5 10l-1.5-.5m8 2-.502-1.5 1.502-.5" />{props.children}</SvgRoot>;
});
export default IconSnowflake;

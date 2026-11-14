import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLightbulbSimpleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLightbulbSimpleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="lightbulb-simple-fill"><path fill="currentColor" d="M9.868 13.712A1.5 1.5 0 0 1 8.383 15h-.766a1.5 1.5 0 0 1-1.485-1.288L5.888 12h4.224zM8 1a5 5 0 0 1 3.565 8.504c-.483.492-.908.977-1.168 1.496H5.603c-.261-.519-.686-1.004-1.17-1.496A5 5 0 0 1 8 1" />{props.children}</SvgRoot>;
});
export default IconLightbulbSimpleFill;

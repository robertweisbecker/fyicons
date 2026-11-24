import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconThumbs = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconThumbs(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="thumbs"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.794 1.51c.712.098.956.831.956 1.24 0 1.226-.25 1.75-.25 1.75h1.304a1.647 1.647 0 0 1 1.581 2.108l-.79 2.706a1.65 1.65 0 0 1-1.58 1.186h-1.12c-.857 0-1.68-.334-2.295-.931L1.5 8.5v-3s1.647-1.13 2.059-1.948c.411-.817.267-2.177 1.235-2.043m6.412 12.981c-.712-.098-.956-.831-.956-1.24 0-1.226.25-1.75.25-1.75H9.196a1.647 1.647 0 0 1-1.581-2.108l.79-2.706A1.65 1.65 0 0 1 9.984 5.5h1.12c.857 0 1.68.334 2.295.931L14.5 7.5v3s-1.647 1.13-2.059 1.947c-.411.818-.267 2.178-1.235 2.044" />{props.children}</SvgRoot>;
});
export default IconThumbs;

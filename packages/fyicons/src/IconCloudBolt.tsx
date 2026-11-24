import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudBolt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudBolt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-bolt"><path fill="currentColor" d="M6.5 2a3.5 3.5 0 0 1 2.447.998.12.12 0 0 0 .099.033A3.5 3.5 0 0 1 13 6.5q-.002.335-.065.65A2.998 2.998 0 0 1 12 13H4.487l-.154-.004H4.32v-.001A3.5 3.5 0 0 1 1 9.5c0-1.433.862-2.66 2.093-3.202A3.5 3.5 0 0 1 6.5 2m0 1a2.5 2.5 0 0 0-2.322 3.422.5.5 0 0 1-.334.667 2.5 2.5 0 0 0 .518 4.907l.15.003H12a2 2 0 0 0 .255-3.982.502.502 0 0 1-.407-.667c.097-.269.152-.554.152-.85a2.5 2.5 0 0 0-2.821-2.48 1.12 1.12 0 0 1-.931-.309A2.5 2.5 0 0 0 6.5 3m1.735 2.375c.22-.25.628-.057.574.271L8.5 7.5h1.118a.4.4 0 0 1 .302.664l-2.225 2.542c-.199.227-.57.05-.521-.247L7.5 8.5H6.161a.3.3 0 0 1-.225-.498z" />{props.children}</SvgRoot>;
});
export default IconCloudBolt;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitRemoved = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitRemoved(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="git-removed"><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM8 5C9.10457 5 10 5.89543 10 7C10 7.68391 9.65548 8.28583 9.13184 8.64648L9.94727 10.2764C10.0708 10.5234 9.97062 10.8238 9.72363 10.9473C9.47664 11.0708 9.17623 10.9706 9.05273 10.7236L8.18555 8.98926C8.12439 8.99489 8.06263 9 8 9H7V10.5C7 10.7761 6.77614 11 6.5 11C6.22386 11 6 10.7761 6 10.5V5.5C6 5.22386 6.22386 5 6.5 5H8ZM7 8H8C8.55228 8 9 7.55228 9 7C9 6.44772 8.55228 6 8 6H7V8Z" fill="currentColor" /></SvgRoot>;
});
export default IconGitRemoved;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitRemoved = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitRemoved(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="git-removed"><path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM8 5C9.10457 5 10 5.89543 10 7C10 7.68391 9.65548 8.28583 9.13184 8.64648L9.94727 10.2764C10.0708 10.5234 9.97062 10.8238 9.72363 10.9473C9.47664 11.0708 9.17623 10.9706 9.05273 10.7236L8.18555 8.98926C8.12439 8.99489 8.06263 9 8 9H7V10.5C7 10.7761 6.77614 11 6.5 11C6.22386 11 6 10.7761 6 10.5V5.5C6 5.22386 6.22386 5 6.5 5H8ZM7 8H8C8.55228 8 9 7.55228 9 7C9 6.44772 8.55228 6 8 6H7V8Z" fill="currentColor" /></SvgRoot>;
});
export default IconGitRemoved;

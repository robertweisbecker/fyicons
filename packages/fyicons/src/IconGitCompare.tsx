import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGitCompare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGitCompare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="git-compare"><path fill="currentColor" d="M3.999 2a2 2 0 0 1 .5 3.936V10.5A1.5 1.5 0 0 0 5.997 12v-.564a.5.5 0 0 1 .777-.416l1.599 1.065a.5.5 0 0 1 0 .832l-1.599 1.065a.5.5 0 0 1-.777-.416V13a2.5 2.5 0 0 1-2.498-2.5V5.936A2 2 0 0 1 3.999 2m5.226.019a.5.5 0 0 1 .777.416V3A2.5 2.5 0 0 1 12.5 5.5v4.564a2 2 0 1 1-1 0V5.5A1.5 1.5 0 0 0 10.002 4v.564a.5.5 0 0 1-.777.416L7.626 3.916a.5.5 0 0 1 0-.832zM12 11h-.007a1 1 0 1 0 .013 0zM3.999 3A1 1 0 1 0 4 5.001 1 1 0 0 0 4 3" />{props.children}</SvgRoot>;
});
export default IconGitCompare;

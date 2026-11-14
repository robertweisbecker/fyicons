import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPin = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPin(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pin"><path fill="currentColor" d="M8.598 2.495a2 2 0 0 1 3.162-.442l2.188 2.187a2 2 0 0 1-.443 3.162l-2.504 1.392v2.085c0 .53-.212 1.039-.586 1.414l-.207.207a1 1 0 0 1-1.415 0L7 10.707l-2.56 2.56A2.5 2.5 0 0 1 2.672 14H2v-.672a2.5 2.5 0 0 1 .733-1.767L5.293 9 3.5 7.207a1 1 0 0 1 0-1.414l.208-.207A2 2 0 0 1 5.122 5h2.084zM3.44 12.268a1.5 1.5 0 0 0-.39.681 1.5 1.5 0 0 0 .683-.389L6.293 10 6 9.707zm7.613-9.508a1 1 0 0 0-1.58.221L7.937 5.743A.5.5 0 0 1 7.5 6H5.122c-.265 0-.52.106-.707.293l-.207.207L9.5 11.793l.208-.207c.187-.187.292-.442.293-.707V8.5a.5.5 0 0 1 .256-.437l2.762-1.535a1 1 0 0 0 .222-1.58z" />{props.children}</SvgRoot>;
});
export default IconPin;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHammer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHammer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hammer"><path fill="currentColor" d="M5.494 1.902a4.5 4.5 0 0 1 5.677.563l1.683 1.681a.5.5 0 0 1 .147.354v1a.5.5 0 0 0 .5.5h.207l.439.44a1.5 1.5 0 0 1 0 2.12l-.586.586a1.5 1.5 0 0 1-2.121 0l-.294-.293L11 8.707V8.5a.5.5 0 0 0-.326-.468l-.82.821-4.793 4.793a1.5 1.5 0 0 1-2.121 0l-.586-.586a1.5 1.5 0 0 1 0-2.12l4.792-4.794a1.248 1.248 0 0 0-.487-2.066l-.318-.106a.5.5 0 0 1-.195-.12l-1-1a.5.5 0 0 1 .076-.77zM3.06 11.646a.5.5 0 0 0 0 .707l.586.586a.5.5 0 0 0 .707 0L8.792 8.5 7.5 7.208zm7.403-8.474a3.5 3.5 0 0 0-4.172-.586l.477.476.206.07c1.42.473 1.948 2.137 1.192 3.328L9.5 7.792l.646-.646.076-.062A.5.5 0 0 1 10.501 7a1.5 1.5 0 0 1 1.48 1.273l.166.166a.5.5 0 0 0 .707 0l.586-.586a.5.5 0 0 0 0-.707l-.166-.166A1.5 1.5 0 0 1 12 5.5v-.793z" />{props.children}</SvgRoot>;
});
export default IconHammer;

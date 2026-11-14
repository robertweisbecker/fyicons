import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const Icon4kFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function Icon4kFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="4k-fill"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM6.658 5.025A.5.5 0 0 0 6.1 5.2l-3 4a.5.5 0 0 0 .4.8H6v.5a.5.5 0 0 0 1 0V10h.5a.5.5 0 0 0 0-1H7V5.5a.5.5 0 0 0-.342-.475m6.18.107a.5.5 0 0 0-.706.03L10 7.474V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.951l.545-.592 1.533 2.41a.5.5 0 0 0 .844-.538l-1.676-2.633 1.622-1.76a.5.5 0 0 0-.03-.706M6 9H4.5L6 7z" />{props.children}</SvgRoot>;
});
export default Icon4kFill;

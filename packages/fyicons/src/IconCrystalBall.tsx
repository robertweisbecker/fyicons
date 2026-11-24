import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCrystalBall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCrystalBall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="crystal-ball"><path fill="currentColor" d="M11.49.001a.5.5 0 0 1 .448.275l.414.82c.338.67.883 1.213 1.552 1.55l.813.41a.5.5 0 0 1 0 .893l-.809.405a3.5 3.5 0 0 0-.412.244 6 6 0 0 1 .334 3.82 6 6 0 0 1-1.495 2.727c.396.21.666.625.666 1.104v.25a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-.25c0-.478.269-.894.664-1.104a6 6 0 0 1-1.544-2.946 6 6 0 0 1 8.243-6.714l.03.016q.142-.203.255-.426l.395-.795A.5.5 0 0 1 11.49 0M4.251 12a.25.25 0 0 0-.25.25v.25a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-.25a.25.25 0 0 0-.25-.25zm5.405-9.716A5 5 0 0 0 5 10.999h6.014q.022-.024.047-.044a5 5 0 0 0 1.654-5.619q-.208.267-.362.57l-.414.82a.501.501 0 0 1-.894-.003l-.394-.794a3.5 3.5 0 0 0-1.578-1.58l-.802-.4a.5.5 0 0 1 0-.895l.806-.402c.207-.103.4-.23.58-.37m1.84-.672a4.5 4.5 0 0 1-1.889 1.888 4.5 4.5 0 0 1 1.89 1.89A4.5 4.5 0 0 1 13.384 3.5a4.5 4.5 0 0 1-1.89-1.89" />{props.children}</SvgRoot>;
});
export default IconCrystalBall;

import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVerifiedFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVerifiedFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="verified-fill"><path fill="currentColor" d="M6.586 1.636a2 2 0 0 1 2.829 0l.57.57a1 1 0 0 0 .707.294h.807a2 2 0 0 1 2 2v.806a1 1 0 0 0 .293.707l.572.573c.78.78.781 2.048 0 2.829l-.572.572a1 1 0 0 0-.293.707v.806a2 2 0 0 1-2 2h-.806a1 1 0 0 0-.707.293l-.571.571c-.78.781-2.048.78-2.83 0l-.57-.571a1 1 0 0 0-.707-.293h-.809a2 2 0 0 1-2-2v-.809a1 1 0 0 0-.293-.707l-.57-.57a2 2 0 0 1 0-2.828l.57-.57c.187-.187.293-.442.293-.707V4.5a2 2 0 0 1 2-2h.81a1 1 0 0 0 .707-.292zm3.924 3.937a.5.5 0 0 0-.687.166L7.404 9.697l-1.55-1.55a.5.5 0 0 0-.708.706l2 2a.5.5 0 0 0 .78-.092l2.75-4.5a.5.5 0 0 0-.166-.688" />{props.children}</SvgRoot>;
});
export default IconVerifiedFill;

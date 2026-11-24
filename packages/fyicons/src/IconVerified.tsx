import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVerified = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVerified(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="verified"><path fill="currentColor" d="M6.587 1.637a2 2 0 0 1 2.829 0l.424.424c.281.28.663.44 1.06.44h.6a2 2 0 0 1 2 2V5.1c0 .398.158.78.44 1.06l.425.426a2 2 0 0 1 0 2.83l-.425.425a1.5 1.5 0 0 0-.44 1.06v.6a2 2 0 0 1-2 2h-.599a1.5 1.5 0 0 0-1.06.439l-.425.425a2 2 0 0 1-2.83 0l-.424-.425a1.5 1.5 0 0 0-1.06-.44H4.5a2 2 0 0 1-2-2v-.6c0-.398-.158-.78-.44-1.06l-.422-.424a2 2 0 0 1 0-2.829l.423-.423c.28-.28.439-.663.439-1.06V4.5a2 2 0 0 1 2-2h.603c.397 0 .779-.158 1.06-.44zm2.122.707a1 1 0 0 0-1.415 0l-.424.424a2.5 2.5 0 0 1-1.767.732H4.5a1 1 0 0 0-1 1v.603a2.5 2.5 0 0 1-.732 1.767l-.423.423c-.39.39-.39 1.025 0 1.415l.423.423c.468.469.732 1.105.732 1.768v.601l.005.103a1 1 0 0 0 .995.897h.602a2.5 2.5 0 0 1 1.767.733l.425.425c.39.39 1.025.39 1.415 0l.425-.425A2.5 2.5 0 0 1 10.9 12.5h.599l.102-.005c.47-.048.845-.422.893-.892l.005-.103v-.598a2.5 2.5 0 0 1 .732-1.768l.426-.426c.39-.39.39-1.024 0-1.415l-.426-.426A2.5 2.5 0 0 1 12.5 5.1v-.6a1 1 0 0 0-.898-.995L11.5 3.5h-.6a2.5 2.5 0 0 1-1.767-.732zm1.114 3.395a.5.5 0 0 1 .854.522l-2.75 4.5a.5.5 0 0 1-.78.093l-2-2a.5.5 0 1 1 .707-.707l1.55 1.55z" />{props.children}</SvgRoot>;
});
export default IconVerified;

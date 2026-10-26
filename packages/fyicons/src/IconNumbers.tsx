import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumbers = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumbers(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.998 5a1.755 1.755 0 0 1 1.752 1.754c-.003.442-.181.84-.456 1.143.416.298.706.755.706 1.353 0 1.057-.903 1.88-2 1.88l-.164-.006c-.8-.056-1.318-.516-1.736-1.074a.5.5 0 0 1 .8-.6c.358.477.656.68 1.1.68.608 0 1-.437 1-.88 0-.38-.355-.75-.982-.75h-.268a.5.5 0 0 1 0-1h.258c.36-.007.74-.358.742-.754A.756.756 0 0 0 12.002 6c-.366.002-.67.138-.91.363a.5.5 0 1 1-.685-.726A2.3 2.3 0 0 1 11.998 5m-8.775.084A.5.5 0 0 1 4 5.5v5a.5.5 0 0 1-1 0V6.434l-.723.482a.5.5 0 0 1-.554-.832zM7.405 5A1.85 1.85 0 0 1 9.09 7.613c-.319.701-1.002 1.081-1.602 1.268-.307.096-.616.251-.844.496A1.4 1.4 0 0 0 6.31 10h2.44a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5c0-.787.263-1.38.661-1.806.388-.415.874-.642 1.28-.768.477-.148.838-.4.987-.726A.85.85 0 0 0 7.405 6H7.34c-.478 0-.915.27-1.129.698l-.013.026a.5.5 0 0 1-.894-.448l.012-.025A2.26 2.26 0 0 1 7.34 5z" /></SvgRoot>;
});
export default IconNumbers;

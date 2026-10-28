import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGraduationCap = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGraduationCap(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="graduation-cap"><path fill="currentColor" d="M6.635 2.284a3.5 3.5 0 0 1 2.727 0l4.868 2.059c1.037.438 1.01 1.915-.04 2.318L13 7.117v1.685l-.001.024v2.308A1 1 0 0 1 13.5 12v1.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V12c0-.37.201-.691.499-.864v-.497A6.4 6.4 0 0 1 8 11.999a6.38 6.38 0 0 1-4.396-1.697C3.166 9.892 3 9.325 3 8.802V7.118l-1.192-.457c-1.05-.403-1.077-1.88-.04-2.318zm2.617 6.27a3.5 3.5 0 0 1-2.506 0L4 7.502v1.3c0 .328.103.598.286.77C4.875 10.12 6.111 11 8 11s3.125-.88 3.714-1.43c.179-.167.28-.428.285-.745V7.501zm-.28-5.349a2.5 2.5 0 0 0-1.948 0L2.157 5.264a.25.25 0 0 0 .008.463l4.939 1.894a2.5 2.5 0 0 0 1.79 0l1.897-.728-2.468-.925-.006-.003C8.217 5.985 8.111 6 8 6c-.552 0-1-.28-1-.625s.448-.625 1-.625c.407 0 .756.153.912.371l3.286 1.232 1.635-.626a.25.25 0 0 0 .008-.463z" /></SvgRoot>;
});
export default IconGraduationCap;

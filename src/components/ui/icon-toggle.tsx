import { Toggle } from '@base-ui/react/toggle';
import { cn } from '../../lib/utils';
import { buttonStyles } from './button';

export function IconToggle({
  className,
  ...props
}: Omit<Toggle.Props, 'className'> & { className?: string }) {
  return <Toggle {...props} className={cn(buttonStyles('icon'), className)} />;
}

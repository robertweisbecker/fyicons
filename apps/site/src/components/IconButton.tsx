import { Icon } from './Icon';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Tooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export function IconButton({
  icon,
  label,
  className,
  variant = 'ghost',
  size = 'icon',
  tooltipSide,
  ...props
}: ButtonProps & {
  icon: string | React.ReactNode;
  label: string;
  tooltipSide?: React.ComponentProps<typeof Tooltip>['side'];
}) {
  return (
    <Tooltip label={label} side={tooltipSide}>
      <Button
        {...props}
        variant={variant}
        size={size}
        className={cn('icon-button', className)}
        aria-label={label}
      >
        {typeof icon === 'string' ? <Icon name={icon} /> : icon}
      </Button>
    </Tooltip>
  );
}

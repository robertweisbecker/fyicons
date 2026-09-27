import { Icon } from './Icon';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function IconButton({
  icon,
  label,
  className,
  variant = 'ghost',
  size = 'icon',
  ...props
}: ButtonProps & { icon: string; label: string }) {
  return (
    <Button
      {...props}
      variant={variant}
      size={size}
      className={cn('icon-button', className)}
      aria-label={label}
      title={label}
    >
      <Icon name={icon} />
    </Button>
  );
}

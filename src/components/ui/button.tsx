import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { Icon } from '../Icon';
import { cn } from '../../lib/utils';

type Variant = 'outline' | 'primary' | 'text' | 'icon' | 'unstyled';
type ButtonProps = Omit<ButtonPrimitive.Props, 'className'> & {
  className?: string;
  variant?: Variant;
};

export function buttonStyles(variant: Variant = 'outline') {
  return cn(
    variant !== 'unstyled' &&
      'inline-flex shrink-0 items-center justify-center gap-2 text-xs font-medium disabled:opacity-40',
    (variant === 'outline' || variant === 'primary') &&
      'min-h-9 rounded-lg border px-3 whitespace-nowrap',
    variant === 'outline' && 'border-line bg-surface hover:bg-hover',
    variant === 'primary' &&
      'border-transparent bg-ink text-canvas hover:opacity-90',
    variant === 'text' && 'min-h-9 text-muted hover:text-ink',
    variant === 'icon' &&
      'size-9 rounded-lg hover:bg-hover aria-pressed:bg-selection',
  );
}

export function Button({
  className,
  variant = 'unstyled',
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      {...props}
      className={cn(buttonStyles(variant), className)}
    />
  );
}

export function IconButton({
  icon,
  label,
  className,
  ...props
}: Omit<ButtonProps, 'variant'> & { icon: string; label: string }) {
  return (
    <Button
      {...props}
      variant="icon"
      className={cn('icon-button', className)}
      aria-label={label}
      title={label}
    >
      <Icon name={icon} />
    </Button>
  );
}

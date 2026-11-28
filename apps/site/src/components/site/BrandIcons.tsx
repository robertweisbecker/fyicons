import type { ComponentProps } from 'react';

type BrandIconProps = ComponentProps<'svg'> & {
  size?: number | string;
};

function BrandIcon({ size = 16, ...props }: BrandIconProps) {
  const hasLabel = Boolean(
    props['aria-label']?.trim() || props['aria-labelledby']?.trim(),
  );

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={hasLabel ? undefined : true}
      role={hasLabel ? 'img' : undefined}
      focusable="false"
      {...props}
    />
  );
}

export function GitHubIcon(props: BrandIconProps) {
  return (
    <BrandIcon {...props}>
      <path
        d="M8 0.0246735C12.42 0.0246735 16 3.60467 16 8.02467C16 9.70098 15.4741 11.3351 14.4964 12.6967C13.5187 14.0583 12.1384 15.0789 10.55 15.6147C10.15 15.6947 10 15.4447 10 15.2347C10 14.9647 10.01 14.1047 10.01 13.0347C10.01 12.2847 9.76 11.8047 9.47 11.5547C11.25 11.3547 13.12 10.6747 13.12 7.60467C13.12 6.72467 12.81 6.01467 12.3 5.45467C12.38 5.25467 12.66 4.43467 12.22 3.33467C12.22 3.33467 11.55 3.11467 10.02 4.15467C9.38 3.97467 8.7 3.88467 8.02 3.88467C7.34 3.88467 6.66 3.97467 6.02 4.15467C4.49 3.12467 3.82 3.33467 3.82 3.33467C3.38 4.43467 3.66 5.25467 3.74 5.45467C3.23 6.01467 2.92 6.73467 2.92 7.60467C2.92 10.6647 4.78 11.3547 6.56 11.5547C6.33 11.7547 6.12 12.1047 6.05 12.6247C5.59 12.8347 4.44 13.1747 3.72 11.9647C3.57 11.7247 3.12 11.1347 2.49 11.1447C1.82 11.1547 2.22 11.5247 2.5 11.6747C2.84 11.8647 3.23 12.5747 3.32 12.8047C3.48 13.2547 4 14.1147 6.01 13.7447C6.01 14.4147 6.02 15.0447 6.02 15.2347C6.02 15.4447 5.87 15.6847 5.47 15.6147C3.87664 15.0843 2.49073 14.0657 1.50889 12.7033C0.527047 11.3409 -0.000880479 9.70398 1.10231e-06 8.02467C1.10231e-06 3.60467 3.58 0.0246735 8 0.0246735Z"
        fill="currentColor"
      />
    </BrandIcon>
  );
}

export function NpmIcon(props: BrandIconProps) {
  return (
    <BrandIcon {...props}>
      <path
        d="M13 1C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3C1 1.89543 1.89543 1 3 1H13ZM4 12H8V6H10V12H12V4H4V12Z"
        fill="currentColor"
      />
    </BrandIcon>
  );
}

export function ShadcnIcon(props: BrandIconProps) {
  return (
    <BrandIcon {...props}>
      <path
        d="M13 8L8 13M12 2.5L2.5 12"
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke="currentColor"
      />
    </BrandIcon>
  );
}

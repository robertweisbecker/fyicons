const arrowSteps: Record<string, 1 | -1> = {
  ArrowLeft: -1,
  ArrowUp: -1,
  ArrowRight: 1,
  ArrowDown: 1,
};

/** -1 for Left and Up, 1 for Right and Down, and undefined for other keys. */
export const arrowKeyStep = (key: string): 1 | -1 | undefined =>
  Object.hasOwn(arrowSteps, key) ? arrowSteps[key] : undefined;

export const isEditableTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.matches('input, textarea, select, [contenteditable=true]') ||
    !!target.closest(
      '[role=combobox], [role=listbox], [role=menu], [data-slot=toggle-group], [role=slider], [role=separator], [data-selection-dialog], [data-display-popover]',
    ));

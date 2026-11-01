export const isEditableTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.matches('input, textarea, select, [contenteditable=true]') ||
    !!target.closest(
      '[role=combobox], [role=listbox], [role=menu], [data-slot=toggle-group], [role=slider], [role=separator], [data-selection-dialog], [data-display-popover]',
    ));

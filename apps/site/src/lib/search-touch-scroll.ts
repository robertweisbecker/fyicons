/** Keep keyboard-open touch gestures in the search results, not Safari's viewport. */
export function containSearchTouchScroll(popup: HTMLElement) {
  const doc = popup.ownerDocument;
  const win = doc.defaultView!;
  let previousY: number | undefined;

  const start = (event: TouchEvent) => {
    previousY =
      event.touches.length === 1 ? event.touches[0].clientY : undefined;
  };
  const move = (event: TouchEvent) => {
    const viewport = win.visualViewport;
    // Do not alter keyboard-closed scrolling or pinch zoom. The keyboard shrinks
    // the visual viewport while the layout viewport keeps its original height.
    const keyboardOpen =
      viewport &&
      viewport.scale === 1 &&
      viewport.height < doc.documentElement.clientHeight - 100 &&
      popup.contains(doc.activeElement) &&
      doc.activeElement?.tagName === 'INPUT';
    if (!keyboardOpen || event.touches.length !== 1 || previousY === undefined)
      return;
    const y = event.touches[0].clientY;
    const delta = previousY - y;
    previousY = y;
    if (!delta) return;
    const target = event.target;
    const scroller =
      target instanceof win.Element
        ? target.closest<HTMLElement>('[data-slot="scroll-area-viewport"]')
        : null;
    const canScroll =
      scroller &&
      popup.contains(scroller) &&
      scroller.scrollHeight > scroller.clientHeight &&
      (delta > 0
        ? scroller.scrollTop < scroller.scrollHeight - scroller.clientHeight - 1
        : scroller.scrollTop > 0);
    // Let the browser handle interior gestures, including native momentum.
    // Prevent only background/edge gestures that would pan the visual viewport.
    if (!canScroll && event.cancelable) event.preventDefault();
  };
  const end = () => {
    previousY = undefined;
  };
  doc.addEventListener('touchstart', start, { passive: true });
  doc.addEventListener('touchmove', move, { passive: false });
  doc.addEventListener('touchend', end);
  doc.addEventListener('touchcancel', end);
  return () => {
    doc.removeEventListener('touchstart', start);
    doc.removeEventListener('touchmove', move);
    doc.removeEventListener('touchend', end);
    doc.removeEventListener('touchcancel', end);
  };
}

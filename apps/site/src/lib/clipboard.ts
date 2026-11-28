import { play, unlock } from '@/lib/sounds';

/** Write text to the clipboard. Resolves to false when the browser refuses. */
export async function copy(text: string | Promise<string>) {
  // Resume audio within the gesture, before the clipboard promise settles.
  void unlock();
  try {
    if (typeof text === 'string') {
      await navigator.clipboard.writeText(text);
    } else {
      // Start the write inside the click. Safari can drop activation during a fetch.
      await navigator.clipboard.write([
        new ClipboardItem({ 'text/plain': text }),
      ]);
    }
    play('success', { emphasis: 'subtle' });
    return true;
  } catch {
    play('error', { emphasis: 'subtle' });
    return false;
  }
}

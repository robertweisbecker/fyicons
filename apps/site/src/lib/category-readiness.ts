import { useEffect, useSyncExternalStore } from 'react';
import { loadIconCategories } from './catalog';

export type CategoryReadiness =
  | { status: 'loading'; version: 0; error?: undefined }
  | { status: 'ready'; version: 1; error?: undefined }
  | { status: 'error'; version: 1; error: string };

let snapshot: CategoryReadiness = { status: 'loading', version: 0 };
let request: Promise<void> | undefined;
const listeners = new Set<() => void>();

export const getCategoryReadiness = () => snapshot;
export function subscribeCategoryReadiness(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

// One request survives StrictMode's effect replay and publishes only after the
// canonical records and maps have their final category memberships.
export function loadCategories(fetchCategories: typeof fetch = fetch) {
  return (request ??= loadIconCategories(fetchCategories).then((error) => {
    snapshot = error
      ? { status: 'error', version: 1, error }
      : { status: 'ready', version: 1 };
    listeners.forEach((listener) => listener());
  }));
}

export function useCategoryReadiness() {
  const readiness = useSyncExternalStore(
    subscribeCategoryReadiness,
    getCategoryReadiness,
    getCategoryReadiness,
  );
  useEffect(() => {
    void loadCategories();
  }, []);
  return readiness;
}

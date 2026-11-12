'use client';

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type IconShareLink = { url: string; publish: () => void };

const IconInspectionContext = createContext<{
  id: string | null;
  inspect: (id: string | null) => void;
} | null>(null);

export function IconInspectionProvider({ children }: { children: ReactNode }) {
  const [id, inspect] = useState<string | null>(null);
  const value = useMemo(() => ({ id, inspect }), [id]);
  return (
    <IconInspectionContext value={value}>{children}</IconInspectionContext>
  );
}

export function useIconInspection() {
  const inspection = useContext(IconInspectionContext);
  if (!inspection) throw new Error('IconInspectionProvider is missing.');
  return inspection;
}

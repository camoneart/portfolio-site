import { useSyncExternalStore } from "react";

const subscribe = (): (() => void) => () => {};

/**
 * Reads a client-only value in a hydration-safe way.
 *
 * Returns `serverValue` during SSR and the initial hydration render so the
 * markup matches the server output, then `getClientValue()` after hydration
 * commits. Use for browser-only reads (sessionStorage, window dimensions,
 * matchMedia) that must not run during server rendering and would otherwise
 * require a setState inside an effect.
 *
 * The value is read once after hydration; it does not re-read on external
 * mutation because `subscribe` is a no-op. When the same source is also
 * mutated locally, pair this with local state to reflect the change.
 *
 * `getClientValue` must return a referentially stable result when the value is
 * unchanged (return a primitive, or cache the object) to satisfy the
 * useSyncExternalStore caching contract.
 */
export function useClientSnapshot<T>(getClientValue: () => T, serverValue: T): T {
  return useSyncExternalStore(subscribe, getClientValue, () => serverValue);
}

export function tryGetLocalStorageItems<K>(key: string, fallback: K): K {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
}

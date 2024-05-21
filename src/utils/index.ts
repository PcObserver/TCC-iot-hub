export function removeEmptyValues(obj: object) {
  return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== undefined && value !== '')
  );
}
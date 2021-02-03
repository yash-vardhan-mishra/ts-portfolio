export function isObjectValid(obj: object) {
  return !!obj && Object.keys(obj).length > 0;
}

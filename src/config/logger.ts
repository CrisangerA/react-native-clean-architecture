export function logger(...params: any) {
  if (__DEV__) {
    console.log('· · · > LOGGER: ', ...params);
  }
}

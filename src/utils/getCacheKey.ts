export const getCacheKey = (...args: Array<string | number>): string => {
  return args.join('_')
}

export function classNames(...args: (string | Record<string, unknown>)[]): string {
  return args
    .reduce((acc, current) => {
      if (typeof current === 'string') acc.push(current);

      if (typeof current === 'object' && current !== null) {
        for (const cls in current) {
          if (current[cls]) acc.push(cls);
        }
      }

      return acc;
    }, [])
    .join(' ');
}

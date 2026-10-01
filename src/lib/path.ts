export const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const local = (path:string) => base + path;

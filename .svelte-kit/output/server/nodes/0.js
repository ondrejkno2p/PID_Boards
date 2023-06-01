import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.0a7b2565.js","_app/immutable/chunks/index.e9c46f01.js"];
export const stylesheets = [];
export const fonts = [];

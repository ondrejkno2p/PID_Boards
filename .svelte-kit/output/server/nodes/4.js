import * as server from '../entries/pages/test/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/test/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/test/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.f3e88666.js","_app/immutable/chunks/index.e9c46f01.js"];
export const stylesheets = [];
export const fonts = [];

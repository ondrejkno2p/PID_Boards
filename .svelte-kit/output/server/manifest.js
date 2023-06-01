export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bus.png","kotva.png","metro.png","train.png","tram.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.565e68a7.js","app":"_app/immutable/entry/app.d948b8c3.js","imports":["_app/immutable/entry/start.565e68a7.js","_app/immutable/chunks/index.e9c46f01.js","_app/immutable/chunks/singletons.ba3bdf40.js","_app/immutable/chunks/index.6ff06ecf.js","_app/immutable/entry/app.d948b8c3.js","_app/immutable/chunks/index.e9c46f01.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/api/departure_board",
				pattern: /^\/api\/departure_board\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/departure_board/_server.ts.js')
			},
			{
				id: "/api/position",
				pattern: /^\/api\/position\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/position/_server.ts.js')
			},
			{
				id: "/api/route",
				pattern: /^\/api\/route\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/route/_server.ts.js')
			},
			{
				id: "/api/station",
				pattern: /^\/api\/station\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/station/_server.ts.js')
			},
			{
				id: "/api/trip",
				pattern: /^\/api\/trip\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/trip/_server.ts.js')
			},
			{
				id: "/single",
				pattern: /^\/single\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/trip",
				pattern: /^\/trip\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

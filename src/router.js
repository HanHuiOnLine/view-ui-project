const routers = [{
		path: '/',
		meta: {
			title: '首页'
		},
		component: (resolve) => require(['./views/index.vue'], resolve),
		children: [{
			path: '/timeLine',
			meta: {
				title: '版本变更历史'
			},
			component: (resolve) => require(['./views/timeLine.vue'], resolve)
		}]
	}
];
export default routers;

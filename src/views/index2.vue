<template>
	<Tree :data="data5" :load-data="loadData" class="demo-tree-render"></Tree>
</template>
<script>
export default {
	data() {
		return {
			data5: [
				{
					title: 'prefab(预制件文件夹)',
					expand: true,
					loading: false,
					render: (h, { root, node, data }) => {
						return h(
							'span',
							{
								style: {
									display: 'inline-block',
									width: '100%'
								}
							},
							[
								h('span', [
									h('Icon', {
										props: {
											type: 'ios-folder'
										},
										style: {
											marginRight: '8px',
											color: '#53BCFF'
										}
									}),
									h('span', data.title)
								])
							]
						);
					},
					children: []
				}
			]
		};
	},
	methods: {
		loadData(item, callback) {
			const data = [
				{
					title: 'children',
					loading: false,
					children: []
				},
				{
					title: 'children',
					loading: false,
					children: []
				}
			];
			callback(data);
		}
	}
};
</script>
<style>
.demo-tree-render .ivu-tree-title {
	width: 100%;
}
</style>
<!-- {
							title: 'AchievementUI(成就系统)',
							render: (h, { root, node, data }) => {
								return h(
									'span',
									{
										style: {
											display: 'inline-block',
											width: '100%'
										}
									},
									[
										h('span', [
											h('Icon', {
												props: {
													type: 'ios-folder'
												},
												style: {
													marginRight: '8px',
													color: '#53BCFF'
												}
											}),
											h('span', data.title)
										]),
										h(
											'span',
											{
												style: {
													display: 'inline-block',
													float: 'right',
													marginRight: '32px'
												}
											}
										)
									]
								);
							}
						}, -->

<style scoped>
.layout {
	border: 1px solid #d7dde4;
	background: #f5f7f9;
	position: relative;
	border-radius: 4px;
	overflow: hidden;
}
.layout-logo {
	width: 100px;
	height: 30px;
	background: #5b6270;
	border-radius: 3px;
	float: left;
	position: relative;
	top: 15px;
	left: 20px;
}
.layout-nav {
	width: 420px;
	margin: 0 auto;
	margin-right: 20px;
}
.layout-footer-center {
	text-align: center;
}
.content-view-div{
	min-height: 700px;
}
</style>
<template>
	<div class="layout">
		<Layout>
			<Header style="{height: 60px; background: #2d8cf0;}">
				<Menu mode="horizontal" :theme="theme1" active-name="1">
					<MenuItem name="1">
						<Icon type="ios-paper" />
						首页
					</MenuItem>
					<MenuItem name="2">
						<Icon type="ios-people" />
						用户管理
					</MenuItem>
					<Submenu name="3">
						<template slot="title">
							<Icon type="ios-stats" />
							统计分析
						</template>
						<MenuGroup title="使用">
							<MenuItem name="3-1">新增和启动</MenuItem>
							<MenuItem name="3-2">活跃分析</MenuItem>
							<MenuItem name="3-3">时段分析</MenuItem>
						</MenuGroup>
						<MenuGroup title="留存">
							<MenuItem name="3-4">用户留存</MenuItem>
							<MenuItem name="3-5">流失用户</MenuItem>
						</MenuGroup>
					</Submenu>
					<MenuItem name="4" to="/timeLine">
						<Icon type="ios-construct" />
						版本更新
					</MenuItem>
				</Menu>
			</Header>
			<Content :style="{ padding: '0 50px' }">
				<Breadcrumb :style="{ margin: '20px 0' }">
					<BreadcrumbItem>首页</BreadcrumbItem>
					<BreadcrumbItem>Components</BreadcrumbItem>
					<BreadcrumbItem>Layout</BreadcrumbItem>
				</Breadcrumb>
				<Card>
					<div class="content-view-div">
						<router-view></router-view>
					</div>
				</Card>
			</Content>
			<Footer class="layout-footer-center">2016-2020 &copy; TalkingData</Footer>
		</Layout>
	</div>
</template>
<script>
export default {
	data() {
		return {
			theme1: 'primary'
		};
	}
};
</script>

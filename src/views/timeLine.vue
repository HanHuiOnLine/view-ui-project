<style scoped>
	.time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
	.time-line-div{
		padding-top: 20px;
	}
	.big-title{
		color: #2f5bea;
		margin-top: -10px;
	}
	.content-ver{
		font-size: 16px;
	}
	.padding{
		padding: 10px 0;
	}
	.ul{
		list-style-type: square;
	}
</style>
<template>
	<Row>
	    <Col span="12" offset="8">
			<div class="time-line-div">
				<Timeline>
					<TimelineItem color="green">
						<Tooltip content="2020-01-16" slot="dot" placement="left" always theme="light">
							<Icon type="ios-trophy"  size="24"></Icon>
						 </Tooltip>
						 <Row class-name="content-ver">
						      <Col span="24" offset="2">
								  <h2 class="big-title">v818</h2>
								  <span class="padding">此次更新的 2.2.2 版本旨在修复缺陷和提升产品稳定性，建议所有 2.2.1 版本的开发者升级。</span>
								  <h3 class="padding">改动列表</h3>
								  <ul class="ul">
								  	<li>1.装备回收</li>
									<li>2.装备回收</li>
									<li>3.装备回收</li>
								  </ul>
							  </Col>
						 </Row>
						 <!-- <span>发布里程碑版本发布里程</span> -->
					</TimelineItem>
					<TimelineItem>
						<Icon type="ios-radio-button-off" slot="dot1" size="24"/>
						<Row class-name="content-ver">
						    <Col span="24" offset="2">
								<span>敬请期待...</span>
							</Col>
						</Row>
					</TimelineItem>
				</Timeline>
			</div>
		</Col>
	</Row>
	
</template>
<script>
	export default {

	}
</script>

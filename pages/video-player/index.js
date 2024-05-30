// 自定义组件参考：https://docs.qingque.cn/d/home/eZQCrkUPxF_CcWTtxrPod4keG?identityId=1oEEAAujtdD
// 可使用 ks.canIUse('playlet') 判断是否支持最新播放器
// 基础库 1.75.2 及以上版本开始支持本组件
Component({
	// 外部样式属性定义，其实也就是把内部需要外部支持的 class 名称放这里导出
	// 在外部直接使用导出的名称字段关联即可，可以同时导出多个，这里是数组 ['','',...]
	externalClasses: ['inner-class'],
	// 对内参数
	data: {
	},
	// 对外参数（prop）
	properties: {
		// 内部样式
		innerStyle: {
			type: String,
			value: ''
		},
		// 剧目 id (上传内容库返回的 id )
		playletId: {
			type: String,
			value: ''
		},
		// 播放的剧集 id 列表
		episodeIdList: {
			type: Array,
			value: []
		},
		// 指定播放剧集 id 或者是剧集数（剧集数只在三方 cdn 生效）
		// 若不指定或未匹配到，则从第 1 集开始播放
		playId: {
			type: String,
			value: ''
		},
		// 扩展参数 + 三方 cdn 播放数据
		extParams: {
			type: Object,
			value: {}
		},
		// 是否展示底部安全区
		showBottomSafeArea: {
			type: Boolean,
			value: true
		}
	},
	methods: {
		// 无权限播放信息，开发者需要针对此状态做对应的支付 or 广告解锁操作
		// 操作完成后，更新 extParams.payedList 数据，从而完成短剧播放的履约部分
		handleNopermissionplay(e) {
			this.triggerEvent('nopermissionplay', e.detail)
		},
		// 用户动作数据：点赞、关注、追剧
		handleAction(e) {
			this.triggerEvent('action', e.detail)
		},
		// 剧集播放切换事件
		handleChange(e) {
			this.triggerEvent('change', e.detail)
		},
		// 播放异常信息
		handleError(e) {
			this.triggerEvent('error', e.detail)
		}
	}
})
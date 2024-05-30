Page({
  data: {
    // 用于判断当前播放是是否可用，不可用时，需降级为开发者原有播放能力
    playletAble: ks.canIUse('playlet'),
    // 指定播放剧集 id 或者是剧集数（剧集数只在三方cdn 生效），若不指定或未匹配到，则从第一集开始播放
    playId: 'kmp5197435572253913798',
    // 剧目id(上传内容库返回的id)
    playletId: 'kmp5220516518114815260',
    // 播放的剧集 id 列表
    episodeIdList: [
      "kmp5214324068735814356",
      "kmp5197435572253913798",
      "kmp5190117222967049206",
      "kmp5252041717489368041",
      "kmp5210101945142343238",
      "kmp5233464369157754857",
      "kmp5207850144175705929",
      "kmp5232056994883566342",
      "kmp5199124419888573424",
      "kmp5228679295623438411"],
    // 扩展参数 + 三方 cdn 播放数据
    extParams: {
      // 免费剧集列表
      freeList: [1, 2, 6],
      // 已付费的剧集列表
      payedList: [3, 4, 5],
      // 剧集相关信息（点赞数、关注、运营位数据）每集都需要单独配置
      configList: {
        1: {
          // 点赞
          "like": {
            // 是否已点赞
            "liked": true,
            // 点赞数
            "likedCount": 123,
          },
          // 收藏
          "collect": {
            // 是否已收藏
            "hasCollected": true,
          },
          // 关注
          "follow": {
            // 头像
            "avatar": "http://xxx.com/xx.png",
            // 是否已关注
            "followed": true
          },
          // 运营位点击
          "operation": {
            // 运营位图片
            "operationUrl": "http://xxx.com/xx.png",
            // 运营位描述
            "operationDesc": "选集"
          }
        }
      },
      // 三方播放数据时必传
      sourceList: {
        "filingNumber": "备案号",
        "totalEpisodeNumber": "",
        "episodeList": [
          {
            "coverUrl": "封面链接",
            "introduction": "简介",
            "videoUrl": "http://xxx/xxx.mp4",
            "duratoin": "600",
            // 所在集数
            "episodeNumber": 1
          }
        ]
      }
    }
  },
  onShow() {
    console.log(ks.canIUse('playlet'))
  },
  handleNopermissionplay(e) {
    console.log('handleNopermissionplay', e, e.detail.episodeNumber)
  },
  handleError(e) {
    console.log('handleError', e)
  },
  handleAction(e) {
    console.log('handleAction', e)
  },
  handleChange(e) {
    console.log('handleChange', e, e.detail.playEpisodeNumber)
  }
})
define({ "api": [
  {
    "type": "get",
    "url": "/activity/order",
    "title": "下载活动参与信息表",
    "group": "Activity",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n \"File\":\"文件流\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ActivityRouter.java",
    "groupTitle": "Activity",
    "name": "GetActivityOrder",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/activity/order"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/activity/vip_safe",
    "title": "参加活动填写信息",
    "group": "Activity",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>礼品类型(0,1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "{\n\"msgId\": \"0701\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "活动未开始": [
          {
            "group": "活动未开始",
            "optional": false,
            "field": "msgId",
            "description": "<p>0701 活动未开始</p>"
          }
        ],
        "活动已结束": [
          {
            "group": "活动已结束",
            "optional": false,
            "field": "msgId",
            "description": "<p>0702 活动已结束</p>"
          }
        ],
        "已经参加了活动": [
          {
            "group": "已经参加了活动",
            "optional": false,
            "field": "msgId",
            "description": "<p>0703 已经参加了活动</p>"
          }
        ],
        "非会员无法参加活动": [
          {
            "group": "非会员无法参加活动",
            "optional": false,
            "field": "msgId",
            "description": "<p>0704 非会员无法参加活动</p>"
          }
        ],
        "不满足参与活动条件": [
          {
            "group": "不满足参与活动条件",
            "optional": false,
            "field": "msgId",
            "description": "<p>0705 不满足参与活动条件</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ActivityRouter.java",
    "groupTitle": "Activity",
    "name": "PostActivityVip_safe",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/activity/vip_safe"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/debug/:page",
    "title": "获取debug信息",
    "group": "Debug",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\",\n\"data\":[{\n    id:123,\n    uid:\"100001\",\n    type:99,\n    device:\"MEIZU LAJI PHONE\",\n    content:\"this is content\",\n    info:\"this is info\",\n    create_time:\"2018-01-10 12:00:00\",\n  }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/DebugRouter.java",
    "groupTitle": "Debug",
    "name": "GetDebugPage",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/debug/:page"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/debug/server_push/:uid",
    "title": "服务端推送",
    "group": "Debug",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "{\n  msgId:0200\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/DebugRouter.java",
    "groupTitle": "Debug",
    "name": "GetDebugServer_pushUid",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/debug/server_push/:uid"
      }
    ],
    "error": {
      "fields": {
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/debug",
    "title": "上传debug信息",
    "group": "Debug",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>设备型号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/DebugRouter.java",
    "groupTitle": "Debug",
    "name": "PostDebug",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/debug"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/emoji",
    "title": "1. 添加表情",
    "name": "AddEmoji",
    "group": "Emoji",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "description": "<p>添加表情有两种情况：</p> <ol> <li>用户通过上传url添加新的表情（图片添加为表情，url 不能为空，emoji 必须为空）</li> <li>用户通过上传emoji收藏一个已经存在的表情（用户A添加用户B发的表情，emoji 不能为空. url 必须为空）</li> </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>新增表情的url（与emoji不可同时存在）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emoji",
            "description": "<p>收藏已有表情的唯一标识（e.g. mt_emoji1431）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：新增表情成功，并返回emoji信息",
          "content": "{\n\"msgId\": \"0200\",\n\"emoji\": {\n\"emoji\": \"mt_emoji922918\",\n\"url\": \"http://mituresprd.oss-cn-hangzhou.aliyuncs.com/images/18037333988/1508146259791/0.jpg\"\n}\n}",
          "type": "json"
        },
        {
          "title": "示例：收藏已有表情成功",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/EmojiRouter.java",
    "groupTitle": "Emoji",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/emoji"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/emoji",
    "title": "4. 删除表情（批量）",
    "name": "DeleteEmoji",
    "group": "Emoji",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "emojis",
            "description": "<p>表情的唯一标识数组（简称emojiId）（e.g. [&quot;mt_emoji88778978&quot;,&quot;mt_emoji1431&quot;]）</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/EmojiRouter.java",
    "groupTitle": "Emoji",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/emoji"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/emoji/{emoji}",
    "title": "2. 根据emojiId获取表情地址",
    "name": "GetEmoji",
    "group": "Emoji",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emoji",
            "description": "<p>表情的唯一标识（简称emojiId）（e.g. mt_emoji1431）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：获取成功，并返回emoji信息",
          "content": "{\n\"msgId\": \"0200\",\n\"emoji\": {\n\"emoji\": \"mt_emoji922918\",\n\"url\": \"http://mituresprd.oss-cn-hangzhou.aliyuncs.com/images/18037333988/1508146259791/0.jpg\"\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/EmojiRouter.java",
    "groupTitle": "Emoji",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/emoji/{emoji}"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/emoji",
    "title": "3. 根据用户获取表情地址",
    "name": "GetEmojis",
    "group": "Emoji",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：获取成功，并返回emoji信息（多个）",
          "content": "{\n\"emoji\": [\n{\n\"emoji\": \"mt_emoji2832994\",\n\"url\": \"http://mituresprd.oss-cn-hangzhou.aliyuncs.com/emoticons/15193944350/1508979604910/null\"\n},\n{\n\"emoji\": \"mt_emoji51078359\",\n\"url\": \"http://mituresprd.oss-cn-hangzhou.aliyuncs.com/emoticons/15193944350/1509005119583/mt_emoji1509005119579.jpg\"\n}\n],\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/EmojiRouter.java",
    "groupTitle": "Emoji",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/emoji"
      }
    ],
    "error": {
      "fields": {
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/feed_back",
    "title": "存储建议反馈",
    "name": "SaveFeedBack",
    "group": "FeedBack",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>鉴权.(app版反馈意见需要传token)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>姓名(网页版参数).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>电话(网页版参数).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>邮箱(网页版参数).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>反馈.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：存储建议反馈",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/FeedBackRouter.java",
    "groupTitle": "FeedBack",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/feed_back"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "token 失效": [
          {
            "group": "token 失效",
            "optional": false,
            "field": "msgId",
            "description": "<p>0555 token 失效</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/shield",
    "title": "添加不想看的人",
    "name": "add_shield",
    "group": "FriendAuth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "member",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsAuthRouter.java",
    "groupTitle": "FriendAuth",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/shield"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/shielded",
    "title": "添加不想让人看得人",
    "name": "add_shielded",
    "group": "FriendAuth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "member",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsAuthRouter.java",
    "groupTitle": "FriendAuth",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/shielded"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/user/shield",
    "title": "删除不想看的人",
    "name": "delete_shield",
    "group": "FriendAuth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "member",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsAuthRouter.java",
    "groupTitle": "FriendAuth",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/shield"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/user/shielded",
    "title": "删除不想让人看得人",
    "name": "delete_shielded",
    "group": "FriendAuth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "member",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsAuthRouter.java",
    "groupTitle": "FriendAuth",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/shielded"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/shield/:uid",
    "title": "是否该用户属于不想看得人",
    "name": "is_shield",
    "group": "FriendAuth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsAuthRouter.java",
    "groupTitle": "FriendAuth",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/shield/:uid"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/shielded/:uid",
    "title": "是否该用户属于不想让别人看的人",
    "name": "is_shielded",
    "group": "FriendAuth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsAuthRouter.java",
    "groupTitle": "FriendAuth",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/shielded/:uid"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/location",
    "title": "获取客户端位置",
    "group": "Location",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\",\n\"location\": {\n   \"longitude\": 0.00000268220901489,\n   \"latitude\": 0.00000126736058093\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LocationRouter.java",
    "groupTitle": "Location",
    "name": "GetLocation",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/location"
      }
    ]
  },
  {
    "type": "get",
    "url": "/location/invisible",
    "title": "查看隐身",
    "group": "Location",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\"\n\"status\" : 1  //1是没隐身，2是隐身\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LocationRouter.java",
    "groupTitle": "Location",
    "name": "GetLocationInvisible",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/location/invisible"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/location/person/:show_type",
    "title": "获取附近的人",
    "group": "Location",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\",\n\"persons\": [\n {\n  \"uid\": 412,\n  \"distance\": 0.0003, //单位km\n  \"sex\": 0,\n  \"name\": \"张三丰\",\n  \"avatar\": \"http://mituresprd.oss-cn-hangzhou.aliyuncs.com/headings/default/2.jpg\",\n  \"before_time\":\"30分之前\",\n  \"autograph\":\"个人描述\",\n  \"birthday\":\"2017-08-01\",\n  \"longtitude\":\"138.000000001\",\n  \"latitude\":\"45.0000001\"\n }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LocationRouter.java",
    "groupTitle": "Location",
    "name": "GetLocationPersonShow_type",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/location/person/:show_type"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/location",
    "title": "更新客户端位置",
    "group": "Location",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>纬度</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"msgId\":\"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LocationRouter.java",
    "groupTitle": "Location",
    "name": "PostLocation",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/location"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/location/invisible",
    "title": "设置隐身",
    "group": "Location",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权 （参数type:默认为1，隐身为2)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LocationRouter.java",
    "groupTitle": "Location",
    "name": "PostLocationInvisible",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/location/invisible"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/forget/password",
    "title": "忘记登录密码",
    "name": "Forget_password",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vcode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LoginRouter.java",
    "groupTitle": "Login",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/forget/password"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SuccessExample",
          "content": "{\n    msgId:\"0200\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "短信验证失败": [
          {
            "group": "短信验证失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>1405 短信验证失败</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "手机号没有注册": [
          {
            "group": "手机号没有注册",
            "optional": false,
            "field": "msgId",
            "description": "<p>1404 手机号没有注册</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/qrcode/key",
    "title": "生成二维码key",
    "name": "Qrcode_Key_Create",
    "group": "Login",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"msgId\":\"0200\",\n    \"key\":\"sfs234lh34hl23l422h2hljl4\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LoginRouter.java",
    "groupTitle": "Login",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/qrcode/key"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/login",
    "title": "登录",
    "name": "login",
    "group": "Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "device",
            "description": "<p>(设备具体信息)</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "user-agent",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LoginRouter.java",
    "groupTitle": "Login",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/login"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SuccessExample",
          "content": "{\n  \"msgId\": \"0200\",\n  \"user\": {\n      \"uid\": 619,\n      \"area\": \"中国\",\n      \"avatar\": \"http://mituresprd.oss-cn-hangzhou.aliyuncs.com/headings/default/2.jpg\",\n      \"tcode\": \"http://mituresprd.oss-cn-hangzhou.aliyuncs.com/banner/Group0.png\",\n      \"name\": \"wp\",\n      \"phone\": \"18290252272\",\n      \"lv\": -1,\n      \"mt_token\": \"uroEoFELMXUBZiH7hg+OfQ==\",\n      \"mt_number\": \"wanp123\"\n      },\n  \"token\": \"8b180ca0372b4a0b86be72377ceda6ef\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "密码错误": [
          {
            "group": "密码错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>1406 密码错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/register",
    "title": "注册",
    "name": "register",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vcode",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LoginRouter.java",
    "groupTitle": "Login",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/register"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SuccessExample",
          "content": "{\n    msgId:\"0200\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "短信验证失败": [
          {
            "group": "短信验证失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>1405 短信验证失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "手机号已注册": [
          {
            "group": "手机号已注册",
            "optional": false,
            "field": "msgId",
            "description": "<p>1414 手机号已注册</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/sign_out",
    "title": "退出",
    "name": "sign_out",
    "group": "Login",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "filename": "../java/router/LoginRouter.java",
    "groupTitle": "Login",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/sign_out"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SuccessExample",
          "content": "{\n    msgId:\"0200\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qrcode/polling/:key",
    "title": "web轮询登录",
    "name": "web___",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LoginRouter.java",
    "groupTitle": "Login",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/qrcode/polling/:key"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SuccessExample",
          "content": "{\n  \"msgId\": \"0200\",\n  \"user\": {\n      \"uid\": 619,\n      \"area\": \"中国\",\n      \"avatar\": \"http://mituresprd.oss-cn-hangzhou.aliyuncs.com/headings/default/2.jpg\",\n      \"tcode\": \"http://mituresprd.oss-cn-hangzhou.aliyuncs.com/banner/Group0.png\",\n      \"name\": \"wp\",\n      \"phone\": \"18290252272\",\n      \"lv\": -1,\n      \"mt_token\": \"uroEoFELMXUBZiH7hg+OfQ==\",\n      \"mt_number\": \"wanp123\"\n      },\n  \"token\": \"8b180ca0372b4a0b86be72377ceda6ef\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "token 失效": [
          {
            "group": "token 失效",
            "optional": false,
            "field": "msgId",
            "description": "<p>0555 token 失效</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/vcode/:type/:phone",
    "title": "发送验证码",
    "name": "message_code",
    "group": "Message",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": ""
          }
        ]
      }
    },
    "filename": "../java/router/LoginRouter.java",
    "groupTitle": "Message",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/vcode/:type/:phone"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SuccessExample",
          "content": "{\n    msgId:\"0200\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/safe/alarm",
    "title": "4. 令手机发出警报",
    "name": "AlarmPhone",
    "group": "PhoneSecurity",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功，设备成功发出警报</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：设备成功发出警报",
          "content": "{\n\"msgId\": \"0200\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414：失败，设备失败发出警报</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：设备未开启安全功能",
          "content": "{\n\"msgId\": \"0414\",\n\"message\":\"Phone security is turned off.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "../java/router/PhoneSecurityRouter.java",
    "groupTitle": "PhoneSecurity",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/safe/alarm"
      }
    ]
  },
  {
    "type": "get",
    "url": "/safe",
    "title": "1. 获得手机安全状态",
    "name": "GetSecurityStatus",
    "group": "PhoneSecurity",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功，代表开启</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：查询对象的安全状态处于开启中",
          "content": "{\n\"msgId\": \"0200\",\n\"message\":\"Phone status is on.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414：失败，代表未开启</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/PhoneSecurityRouter.java",
    "groupTitle": "PhoneSecurity",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/safe"
      }
    ]
  },
  {
    "type": "get",
    "url": "/version/:platform",
    "title": "5. 获取最新版本信息",
    "name": "GetUpdateInfo",
    "group": "PhoneSecurity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>android/ios（全小写）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：获取最新版本信息成功",
          "content": "{\"msgId\":\"0200\",\n\"version\":\n{\n\"update_time\":\"2017-07-07T12:02:35.545\",\n\"update_size\":\"1\",\n\"update_detail\":\"[\\\"0\\\",\\\"sfsdf\\\"]\",\n\"update_url\":\"1\",\n\"app_version\":\"3.0.1\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400：平台参数错误；0500：服务器错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：平台参数错误",
          "content": "{\"msgId\":\"0400\",\"message\":\"Parse platform error.\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "../java/router/PhoneSecurityRouter.java",
    "groupTitle": "PhoneSecurity",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/version/:platform"
      }
    ]
  },
  {
    "type": "post",
    "url": "/safe/:status",
    "title": "2. 修改手机安全状态",
    "name": "ModifySecurityStatus",
    "group": "PhoneSecurity",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>手机安全状态 on/off（全小写）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功，代表修改成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：成功将查询对象的安全状态进行了变更",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414：失败，代表修改失败; 0400：参数status不正确</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/PhoneSecurityRouter.java",
    "groupTitle": "PhoneSecurity",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/safe/:status"
      }
    ]
  },
  {
    "type": "get",
    "url": "/safe/SMS",
    "title": "3. 发送紧急短信",
    "name": "SendEmergencySms",
    "group": "PhoneSecurity",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功，代表发送成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：成功发送了紧急短信",
          "content": "{\n\"msgId\": \"0200\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414：失败，代表发送失败</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/PhoneSecurityRouter.java",
    "groupTitle": "PhoneSecurity",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/safe/SMS"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/pay/expand/profit",
    "title": "查看收益余额",
    "name": "GetProfit",
    "group": "Profit",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：查询收益余额",
          "content": "{\n\"msgId\": \"0200\",\n\"left_profit\":100。23\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/PayProfitRouter.java",
    "groupTitle": "Profit",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/expand/profit"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/pay/expand/today_profit",
    "title": "查看今日收益",
    "name": "GetTodayProfit",
    "group": "Profit",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：查看今日收益",
          "content": "{\n\"msgId\": \"0200\",\n\"today_profit\":100.21\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/PayProfitRouter.java",
    "groupTitle": "Profit",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/expand/today_profit"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/pay/expand/total_profit",
    "title": "查看总收益",
    "name": "GetTotalProfit",
    "group": "Profit",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：查看总收益",
          "content": "{\n\"msgId\": \"0200\",\n\"total_profit\":100.23\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/PayProfitRouter.java",
    "groupTitle": "Profit",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/expand/total_profit"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/pay/profit/transfer/wallet",
    "title": "收益转账到钱包",
    "name": "ProfitTransferWallet",
    "group": "Profit",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "amount",
            "description": "<p>金额.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：收益转账到钱包",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/PayProfitRouter.java",
    "groupTitle": "Profit",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/profit/transfer/wallet"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "少于最小金额": [
          {
            "group": "少于最小金额",
            "optional": false,
            "field": "msgId",
            "description": "<p>0601 少于最小金额</p>"
          }
        ],
        "账户余额不足": [
          {
            "group": "账户余额不足",
            "optional": false,
            "field": "msgId",
            "description": "<p>0600 账户余额不足</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/expand/number",
    "title": "获取直推人数",
    "name": "getExpandNumber",
    "group": "Profit",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：获取直推人数",
          "content": "{\n\"msgId\": \"0200\"\n\"number\":12\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/PayProfitRouter.java",
    "groupTitle": "Profit",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/expand/number"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/expand/person",
    "title": "判断是否存在推荐人",
    "name": "getExpandPerson",
    "group": "Profit",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "expandId",
            "description": "<p>12：推荐人id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：判断是否存在推荐人",
          "content": "{\n\"msgId\": \"0200\"(存在推荐人)\n\"expandId\":12\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414：不存在推荐人;</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/PayProfitRouter.java",
    "groupTitle": "Profit",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/expand/person"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/vip/resource",
    "title": "删除文件资源",
    "group": "Resource",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rid",
            "description": "<p>文件序号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n \"msgId\":\"0200\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../java/router/ResourceRouter.java",
    "groupTitle": "Resource",
    "name": "DeleteVipResource",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/vip/resource"
      }
    ]
  },
  {
    "type": "get",
    "url": "/resource/app",
    "title": "下载秘图",
    "group": "Resource",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>下载地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ResourceRouter.java",
    "groupTitle": "Resource",
    "name": "GetResourceApp",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/resource/app"
      }
    ]
  },
  {
    "type": "get",
    "url": "/resource/oss",
    "title": "获取OSS信息",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "group": "Resource",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\",\n\"info\": {\n  \"accessKey\": \"1LT2ADGDHR143GEs4VyU\",\n  \"secretKey\": \"zcj33BwZFG43ETdZcn4UTUxUENUj\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../java/router/ResourceRouter.java",
    "groupTitle": "Resource",
    "name": "GetResourceOss",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/resource/oss"
      }
    ]
  },
  {
    "type": "get",
    "url": "/vip/resource/:type/:page",
    "title": "获取文件资源",
    "group": "Resource",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\":\"0200\",\n\"files\": [{\n  \"create_time\": 1492091931317,\n  \"fid\": 35,\n  \"file_name\": \"1492091931.317\",\n  \"rid\": 2,\n  \"type\": 0,\n  \"druation\":9775,\n  \"uid\": 32,\n  \"url\": \"https://nos.netease.com/nim/NDI2OTgyNA==/bmltYV8zNTY4ODY1NjRfMTQ5MjA2MDE2ODgzMV82OTE2NThmOS1kODJiLTRjY2ItODNmMy0zYjU1Mzk2OTlhMGE=\",\n  \"date\" : \"2017-09\"\n }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ResourceRouter.java",
    "groupTitle": "Resource",
    "name": "GetVipResourceTypePage",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/vip/resource/:type/:page"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/vip/resource",
    "title": "上传文件资源",
    "group": "Resource",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "fid",
            "description": "<p>文件序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_name",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "size",
            "description": "<p>文件size</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>文件类别</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "duration",
            "description": "<p>视频时间长</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>文件URL</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n \"msgId\":\"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ResourceRouter.java",
    "groupTitle": "Resource",
    "name": "PostVipResource",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/vip/resource"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/vip/resource/file_name_change",
    "title": "文件重命名",
    "group": "Resource",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rid",
            "description": "<p>文件序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_file_name",
            "description": "<p>新的文件名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n \"msgId\":\"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ResourceRouter.java",
    "groupTitle": "Resource",
    "name": "PostVipResourceFile_name_change",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/vip/resource/file_name_change"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/yunxin_resource",
    "title": "云信消息抄送",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "group": "Resource",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n 200\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../java/router/ResourceRouter.java",
    "groupTitle": "Resource",
    "name": "PostYunxin_resource",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/yunxin_resource"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/user/emergent",
    "title": "删除紧急联系人",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系人json串</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n \"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "DeleteUserEmergent",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/emergent"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/avatar/:uid",
    "title": "通过uid获取用户头像",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\",\n\"avatar\":\"http://aliyun.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "GetUserAvatarUid",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/avatar/:uid"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/emergent",
    "title": "获取紧急联系人",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\",\n\"contacts\":[\n \"{\"phone\":\"xxx\",\"name\":\"xxx\"}\",\n \"{\"phone\":\"xxx\",\"name\":\"xxx\"}\"\n ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "GetUserEmergent",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/emergent"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/find/:search_word",
    "title": "通过手机号查找用户",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\",\n\"user\":{\n  \"uid\":1,\n  \"avatar\":\"http://aliyun.com\",\n  \"tcode\":\"http://www.baidu.com\",\n  \"mt_number\":\"mt_sesv34\",\n  \"name\":\"里斯\",\n  \"lv\":3,\n  \"sex\":0,\n  \"area\":\"中国\",\n  \"autograph\":\"这个家伙很懒，什么都没留下～\",\n  \"birthday\":\"1970-01-01\"\n },\n users:[\n {\n  \"uid\":123,\n  \"name\":\"test\",\n  \"avatar\":\"wwww.baidu.com\",\n  \"sex\":1,\n  \"mt_number\":\"test\"\n }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "GetUserFindSearch_word",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/find/:search_word"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/uid/:uid",
    "title": "通过uid获取用户资料",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\",\n  \"user\":{\n  \"uid\":1,\n  \"avatar\":\"http://aliyun.com\",\n  \"tcode\":\"http://www.baidu.com\",\n  \"name\":\"里斯\",\n  \"lv\":3,\n  \"sex\":0,\n  \"area\":\"中国\",\n  \"autograph\":\"这个家伙很懒，什么都没留下～\",\n  \"mt_number\":\"mt_sesv34\",\n  \"birthday\":\"1970-01-01\"\n },\n\"moment\":[\n  \"www.mitures.com\",\n  \"www.mitures.com\",\n  \"www.mitures.com\"\n ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "GetUserUidUid",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/uid/:uid"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/change_phone",
    "title": "更改用户手机号",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "phone",
            "description": "<p>手机</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "vcode",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "PostUserChange_phone",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/change_phone"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "短信验证失败": [
          {
            "group": "短信验证失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>1405 短信验证失败</p>"
          }
        ],
        "密码错误": [
          {
            "group": "密码错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>1406 密码错误</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/contact/registed",
    "title": "匹配通讯录",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系人json串</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\",\n\"registed\":[{\n  \"uid\":123,\n  \"phone\":\"14785236985\",\n  \"avatar\":\"https://www.baidu.com\",\n  \"name\":\"张三\"\n  },\n {\n  \"uid\":133,\n  \"phone\":\"14785226985\",\n  \"avatar\":\"https://www.baidu.com\",\n  \"name\":\"李四\"\n }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "PostUserContactRegisted",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/contact/registed"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/emergent",
    "title": "新增紧急联系人",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系人json串</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\",\n\"contacts\":[\n \"{\"phone\":\"xxx\",\"name\":\"xxx\"}\",\n \"{\"phone\":\"xxx\",\"name\":\"xxx\"}\"\n ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "PostUserEmergent",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/emergent"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/mtnumber",
    "title": "更改秘图号",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Failed",
          "content": "{\n\"msgId\": \"0400\",\n\"message\":\"'123456' 格式不对\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ],
        "秘图号已被修改": [
          {
            "group": "秘图号已被修改",
            "optional": false,
            "field": "msgId",
            "description": "<p>0501 秘图号已被修改</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "PostUserMtnumber",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/mtnumber"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/pwd",
    "title": "修改用户密码",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPwd",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPwd",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n \"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "PostUserPwd",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/pwd"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "密码错误": [
          {
            "group": "密码错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>1406 密码错误</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/user",
    "title": "更新用户资料",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "area",
            "description": "<p>地区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "autograph",
            "description": "<p>个性签名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n \"msgId\":\"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/UserRouter.java",
    "groupTitle": "User",
    "name": "PutUser",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/qrcode/login",
    "title": "二维码登录",
    "name": "Qrcode_login",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/LoginRouter.java",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/qrcode/login"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SuccessExample",
          "content": "{\n    msgId:\"0200\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/pay/passwd/change",
    "title": "2. 修改支付密码",
    "name": "ChangePasswd",
    "group": "WalletTradePasswd",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd_old",
            "description": "<p>加密后的旧支付密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd_new1",
            "description": "<p>加密后的新支付密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd_new2",
            "description": "<p>必须同 passwd_new1 相同</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400:输入的参数格式不对（不是六位）</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletPasswdRouter.java",
    "groupTitle": "WalletTradePasswd",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/passwd/change"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pay/passwd/check",
    "title": "4. 校验支付密码",
    "name": "CheckPasswd",
    "group": "WalletTradePasswd",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd",
            "description": "<p>加密后的支付密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>pay为支付密码，login为登录密码，不传为pay</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414:密码错误; 0400:参数错误</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletPasswdRouter.java",
    "groupTitle": "WalletTradePasswd",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/passwd/check"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pay/passwd/forget",
    "title": "3. 忘记支付密码",
    "name": "ForgetPasswd",
    "group": "WalletTradePasswd",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd_new1",
            "description": "<p>加密后的新支付密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd_new2",
            "description": "<p>必须同 passwd_new1 相同</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg_code",
            "description": "<p>短信验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400:输入的参数格式不对（不是六位）</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletPasswdRouter.java",
    "groupTitle": "WalletTradePasswd",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/passwd/forget"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pay/passwd/init",
    "title": "1. 初始化设置密码",
    "name": "InitPasswd",
    "group": "WalletTradePasswd",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd1",
            "description": "<p>加密后的支付密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd2",
            "description": "<p>必须同 passwd1 相同</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400:输入的参数格式不对（不是六位）</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletPasswdRouter.java",
    "groupTitle": "WalletTradePasswd",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/passwd/init"
      }
    ]
  },
  {
    "type": "get",
    "url": "/pay/passwd/check",
    "title": "5. 检验是否设置初始化密码",
    "name": "IsPayPasswdExisted",
    "group": "WalletTradePasswd",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:存在</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>1502:不存在</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletPasswdRouter.java",
    "groupTitle": "WalletTradePasswd",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/passwd/check"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pay/passwd/forget/msg_code/check",
    "title": "6. 忘记密码检验验证码是否正确",
    "name": "VerifyResetMsgCode",
    "group": "WalletTradePasswd",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd",
            "description": "<p>加密后的登录密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg_code",
            "description": "<p>短信验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>1405:验证码错误</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletPasswdRouter.java",
    "groupTitle": "WalletTradePasswd",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/passwd/forget/msg_code/check"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/trust/:uid",
    "title": "1. 添加信任的人",
    "name": "AddMeTrust",
    "group": "Whitelist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>我信任的人的uid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功，代表添加成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414：失败，代表添加失败; 0400：错误的uid参数</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：错误的uid参数",
          "content": "{\n\"msgId\": \"0400\",\n\"message\":\"Parse uid error.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "../java/router/WhitelistRouter.java",
    "groupTitle": "Whitelist",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/trust/:uid"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/trust/location/:uid",
    "title": "5. 获得信任我的人的地理位置",
    "name": "GetLocationByTrustMeUid",
    "group": "Whitelist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>信任我的人的uid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功，返回location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：成功，返回location",
          "content": "{\n\"msgId\": \"0200\",\n\"location\":[\"116.40740185976028442\",\"39.90409873578557409\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "../java/router/WhitelistRouter.java",
    "groupTitle": "Whitelist",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/trust/location/:uid"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/trust/me_trust",
    "title": "3. 获得我信任的人",
    "name": "GetMeTrust",
    "group": "Whitelist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功，返回users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：成功，返回users",
          "content": "{\n\"msgId\": \"0200\",\n\"users\":[44]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "../java/router/WhitelistRouter.java",
    "groupTitle": "Whitelist",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/trust/me_trust"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/trust/trust_me",
    "title": "4. 获得信任我的人",
    "name": "GetTrustMe",
    "group": "Whitelist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功，返回users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：成功，返回users",
          "content": "{\n\"msgId\": \"0200\",\n\"users\":[44]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "../java/router/WhitelistRouter.java",
    "groupTitle": "Whitelist",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/trust/trust_me"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/user/trust/:uid",
    "title": "2. 移除信任的人",
    "name": "RemoveMeTrust",
    "group": "Whitelist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>我信任的人的uid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200:成功，代表移除成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414：失败，代表移除失败; 0400：错误的uid参数</p>"
          }
        ],
        "服务器错误": [
          {
            "group": "服务器错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500 服务器错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "示例：错误的uid参数",
          "content": "{\n\"msgId\": \"0400\",\n\"message\":\"error uid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "../java/router/WhitelistRouter.java",
    "groupTitle": "Whitelist",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/user/trust/:uid"
      }
    ]
  },
  {
    "type": "get",
    "url": "/ar_envelope/map/{longitude}/{latitude}",
    "title": "获取米包地图",
    "group": "ar_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>用户当前的经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>用户当前的纬度</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "获取米包地图成功",
          "content": "{\n//isSeize为0时表示未领取，1为已领取;服务器返回的是可见范围，需要客户端维护可领范围\n\"msgId\": \"0200\",\n\"arEnvelopes\":[{\n\"redId\":1\n\"isSeize\":0,\n\"longitude\":\"123456\"\n\"latitude\":\"12345566\"\n},\n{\n\"redId\":2\n\"isSeize\":1,\n\"longitude\":\"123456\"\n\"latitude\":\"12345566\"\n}]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ArEnvelopeRouter.java",
    "groupTitle": "ar_envelope",
    "name": "GetAr_envelopeMapLongitudeLatitude",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/ar_envelope/map/{longitude}/{latitude}"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/ar_envelope/record/{page}",
    "title": "ar红包账单",
    "group": "ar_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "ar红包账单",
          "content": "{\n\"msgId\": \"0200\",\n\"records\":[{\n\"redId\":1234,\n\"createTime\":\"1分钟前\",\n\"over\":0   0：未领完，1：已领完\n\"amount\":12.3\n},\n{\n\"redId\":1234,\n\"createTime\":\"1分钟前\",\n\"over\":0   0：未领完，1：已领完\n\"amount\":12.3\n}]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ArEnvelopeRouter.java",
    "groupTitle": "ar_envelope",
    "name": "GetAr_envelopeRecordPage",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/ar_envelope/record/{page}"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/ar_envelope/{redId}",
    "title": "获取米包详情",
    "group": "ar_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "redId",
            "description": "<p>红包id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "获取米包详情",
          "content": "{\n\"msgId\": \"0200\",\n\"uid\":469,\n\"isSeize\":1, 0：未领取，1：已领取\n\"over\":1,  0：未领完，1：已领完\n\"image\":\"http://www.mitures.com\",\n\"url\":\"http://www.mitures.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ArEnvelopeRouter.java",
    "groupTitle": "ar_envelope",
    "name": "GetAr_envelopeRedid",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/ar_envelope/{redId}"
      }
    ],
    "error": {
      "fields": {
        "超时": [
          {
            "group": "超时",
            "optional": false,
            "field": "msgId",
            "description": "<p>1504 超时</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "红包不存在": [
          {
            "group": "红包不存在",
            "optional": false,
            "field": "msgId",
            "description": "<p>1506 红包不存在</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/ar_envelope/seize/detail/{redId}",
    "title": "米包领取详情",
    "group": "ar_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "redId",
            "description": "<p>红包id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "米包领取详情",
          "content": "{\n\"msgId\": \"0200\",\n\"uid\":469\n\"detail\":[{\n\"uid\":413\n\"seizeTime\":\"1分钟前\",\n\"amount\":1.25,\n\"mark\":\"留言\"\n},\n{\n\"uid\":469\n\"seizeTime\":\"1分钟前\",\n\"amount\":1.25,\n\"mark\":\"留言\"\n}]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ArEnvelopeRouter.java",
    "groupTitle": "ar_envelope",
    "name": "GetAr_envelopeSeizeDetailRedid",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/ar_envelope/seize/detail/{redId}"
      }
    ],
    "error": {
      "fields": {
        "超时": [
          {
            "group": "超时",
            "optional": false,
            "field": "msgId",
            "description": "<p>1504 超时</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "红包不存在": [
          {
            "group": "红包不存在",
            "optional": false,
            "field": "msgId",
            "description": "<p>1506 红包不存在</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/ar_envelope/mark",
    "title": "ar红包留言",
    "group": "ar_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "redId",
            "description": "<p>红包id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mark",
            "description": "<p>留言（64字符内）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "ar红包留言",
          "content": "{\n\"msgId\": \"0200\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ArEnvelopeRouter.java",
    "groupTitle": "ar_envelope",
    "name": "PostAr_envelopeMark",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/ar_envelope/mark"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/ar_envelope/seize",
    "title": "领取ar红包",
    "group": "ar_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "redId",
            "description": "<p>红包id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>用户当前的经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>用户当前的纬度</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "领取ar红包",
          "content": "{\n\"msgId\": \"0200\",\n\"amount\":1.25\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ArEnvelopeRouter.java",
    "groupTitle": "ar_envelope",
    "name": "PostAr_envelopeSeize",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/ar_envelope/seize"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "红包不存在": [
          {
            "group": "红包不存在",
            "optional": false,
            "field": "msgId",
            "description": "<p>1506 红包不存在</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "红包已经被抢完": [
          {
            "group": "红包已经被抢完",
            "optional": false,
            "field": "msgId",
            "description": "<p>1507 红包已经被抢完</p>"
          }
        ],
        "超时": [
          {
            "group": "超时",
            "optional": false,
            "field": "msgId",
            "description": "<p>1504 超时</p>"
          }
        ],
        "群红包已经收过": [
          {
            "group": "群红包已经收过",
            "optional": false,
            "field": "msgId",
            "description": "<p>1508 群红包已经收过</p>"
          }
        ],
        "普通用户ar领取次数过多": [
          {
            "group": "普通用户ar领取次数过多",
            "optional": false,
            "field": "msgId",
            "description": "<p>1511 普通用户ar领取次数过多</p>"
          }
        ],
        "ar红包距离太远": [
          {
            "group": "ar红包距离太远",
            "optional": false,
            "field": "msgId",
            "description": "<p>1509 ar红包距离太远</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/ar_envelope/send",
    "title": "发送AR红包",
    "group": "ar_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>要发送红包位置的经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>要发送红包位置的纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>红包个数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payPwd",
            "description": "<p>支付密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image",
            "description": "<p>图片url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "amount",
            "description": "<p>总金额</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：发送AR红包成功",
          "content": "{\n\"msgId\": \"0200\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/ArEnvelopeRouter.java",
    "groupTitle": "ar_envelope",
    "name": "PostAr_envelopeSend",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/ar_envelope/send"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "密码错误": [
          {
            "group": "密码错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>1406 密码错误</p>"
          }
        ],
        "少于最小金额": [
          {
            "group": "少于最小金额",
            "optional": false,
            "field": "msgId",
            "description": "<p>0601 少于最小金额</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "账户余额不足": [
          {
            "group": "账户余额不足",
            "optional": false,
            "field": "msgId",
            "description": "<p>0600 账户余额不足</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/friends/moment",
    "title": "秘圈加载",
    "name": "Get_Moment",
    "group": "friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lasttime",
            "description": "<p>上一次刷新的时间(为空或者不贵放,表示当前时间)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"moments\": [\n{\n\"mid\": \"31afd7f5ce9f401e8a19ccc04a108756\",\n\"uuid\": 471,\n\"type\": 1,\n\"res_json\": \"{}\",\n\"words\": \"123\",\n\"location\": \"\",\n\"star\": [],\n\"allow_repost\": 1,\n\"forwards_times\": 0,\n\"moment_time\": 1510639452368,\n\"name\": \"eno\",\n\"avatar\": \"http://mituresprd.oss-cn-hangzhou.aliyuncs.com/headings/default/3.jpg\",\n\"is_del\": 0,\n\"comments\": [],\n\"before_time\": \"9分钟前\"\n}\n],\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsRouter.java",
    "groupTitle": "friends",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/friends/moment"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/friends/moment/comment/:mid/:cid",
    "title": "删除评论",
    "name": "deleteComment",
    "group": "friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsRouter.java",
    "groupTitle": "friends",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/friends/moment/comment/:mid/:cid"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/friends/moment/:mid",
    "title": "删除说说",
    "name": "deleteMoment",
    "group": "friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mid",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsRouter.java",
    "groupTitle": "friends",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/friends/moment/:mid"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/friends/moment/up/:mid",
    "title": "说说取消点赞",
    "name": "deleteMomentUp",
    "group": "friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mid",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsRouter.java",
    "groupTitle": "friends",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/friends/moment/up/:mid"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/friends/moment/friend/:uid/detail/:mid",
    "title": "用户查看好友的某条说说详情",
    "name": "getDetailMomentByFriend",
    "group": "friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>(如果uid 为自己,那么就是查看自己的说说详情)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mid",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{    \"moments\": [\n{\n\"mid\": \"8ba4cca4f36a4ee0aaaa8db758299b8b\",\n\"type\": 5,\n\"res_json\": {\n\"is_del\": 1\n},\n\"words\": \"xxxxssss\",\n\"location\": \"\",\n\"star\": [],\n\"create_time\": \"2017-11-14T12:00:02.969\",\n\"allow_repost\": 1,\n\"forwards_times\": 0,\n\"create_date\": \"2017-11-14\",\n\"name\": \"eno\",\n\"uid\": 471,\n\"before_time\": \"今天 12:00\",\n\"moment_time\": 1510632002969\n}\n],\n\"msgId\": \"0200\"\n　}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsRouter.java",
    "groupTitle": "friends",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/friends/moment/friend/:uid/detail/:mid"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/friends/moment/friend/:uid",
    "title": "用户在好友空间查看好友说说",
    "name": "getFriendMomentByUid",
    "group": "friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>(如果uid是自己,则查看的是自己空间)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lasttime",
            "description": "<p>上一次刷新的时间(为空或者不规范,该值默认为当前时间)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{    \"moments\": [\n{\n\"mid\": \"8ba4cca4f36a4ee0aaaa8db758299b8b\",\n\"type\": 5,\n\"res_json\": {\n\"is_del\": 1\n},\n\"words\": \"xxxxssss\",\n\"location\": \"\",\n\"star\": [],\n\"create_time\": \"2017-11-14T12:00:02.969\",\n\"allow_repost\": 1,\n\"forwards_times\": 0,\n\"create_date\": \"2017-11-14\",\n\"name\": \"eno\",\n\"uid\": 471,\n\"before_time\": \"今天 12:00\",\n\"moment_time\": 1510632002969\n}\n],\n\"msgId\": \"0200\"\n　}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsRouter.java",
    "groupTitle": "friends",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/friends/moment/friend/:uid"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/friends/moment/detail/:uid",
    "title": "用户查看好友的某条说说详情(pc端)",
    "name": "getFriendMomentDetailByUid",
    "group": "friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>(如果uid 为自己,那么就是查看自己的说说详情)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lasttime",
            "description": "<p>上一次刷新的时间(为空或者不规范,该值默认为当前时间)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{    \"moments\": [\n{\n\"mid\": \"8ba4cca4f36a4ee0aaaa8db758299b8b\",\n\"type\": 5,\n\"res_json\": {\n\"is_del\": 1\n},\n\"words\": \"xxxxssss\",\n\"location\": \"\",\n\"star\": [],\n\"create_time\": \"2017-11-14T12:00:02.969\",\n\"allow_repost\": 1,\n\"forwards_times\": 0,\n\"create_date\": \"2017-11-14\",\n\"name\": \"eno\",\n\"uid\": 471,\n\"before_time\": \"今天 12:00\",\n\"moment_time\": 1510632002969\n}\n],\n\"msgId\": \"0200\"\n　}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsRouter.java",
    "groupTitle": "friends",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/friends/moment/detail/:uid"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/friends/moment/comment/:mid",
    "title": "评论说说",
    "name": "newComment",
    "group": "friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mid",
            "description": "<p>评论的说说mid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>评论的内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "to_user",
            "description": "<p>被评论的人</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "to_cid",
            "description": "<p>被评论的评论</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"mid\": \"c305b0f54668440ea8d7ee0d38e1ead1\",\n\"comment\": \"3333\",\n\"to_user\": 0,\n\"to_cid\": 0,\n\"status\": 0,\n\"uid\": 471,\n\"is_del\": 0,\n\"cid\": 826,\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsRouter.java",
    "groupTitle": "friends",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/friends/moment/comment/:mid"
      }
    ]
  },
  {
    "type": "post",
    "url": "/friends/moment/up/:mid",
    "title": "说说点赞",
    "name": "newMomentUp",
    "group": "friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mid",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsRouter.java",
    "groupTitle": "friends",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/friends/moment/up/:mid"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/friends/new_moment",
    "title": "创建一个新的说说",
    "name": "new_moment",
    "group": "friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "type",
            "description": "<p>秘圈内容类型. 1.文字　２.图片　3.视频　4. 5.转发秘圈</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "res_json",
            "description": "<p>当type等于１时 为纯文字　等于２，３时　为对应的超链接　等于５时为转发的秘圈的mid及其值</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "words",
            "description": "<p>正文.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "location",
            "description": "<p>位置信息.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "shield_type",
            "description": "<p>全部可见　１　全部不可见　－１指定人可见（２），指定人不可见（－２）.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer[]",
            "optional": true,
            "field": "shield_array",
            "description": "<p>用户数组</p>"
          },
          {
            "group": "Parameter",
            "type": "Interger",
            "optional": true,
            "field": "allow_repost",
            "description": "<p>是否转发</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"type\": 1,\n\"res_json\": {},\n\"words\": \"123\",\n\"location\": \"\",\n\"shield_type\": 1,\n\"shield_array\": [\n469\n],\n\"allow_repost\": 1,\n\"star\": [],\n\"uid\": 471,\n\"is_del\": 0,\n\"create_time\": \"2017-11-14T14:04:12.368\",\n\"mid\": \"31afd7f5ce9f401e8a19ccc04a108756\",\n\"moment_time\": 1510639452368,\n\"forwards_times\": 0,\n\"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/FriendsRouter.java",
    "groupTitle": "friends",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/friends/new_moment"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/label/name/members",
    "title": "新增成员",
    "name": "addMembers",
    "group": "label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "members",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/Label.java",
    "groupTitle": "label",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/label/name/members"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/label/name",
    "title": "删除标签",
    "name": "deletetLabel",
    "group": "label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/Label.java",
    "groupTitle": "label",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/label/name"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/label/name/members",
    "title": "删除成员",
    "name": "deletetMembers",
    "group": "label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "members",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/Label.java",
    "groupTitle": "label",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/label/name/members"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/label",
    "title": "获取所有标签",
    "name": "getLabels",
    "group": "label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SuccessExample",
          "content": "{\n  \"msgId\": \"0200\",\n  \"labels\": [\n  {\n  \"name\": \"151062518727546\",\n  \"members\": [\n  1\n  ]\n  }\n  ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../java/router/Label.java",
    "groupTitle": "label",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/label"
      }
    ],
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/label",
    "title": "新增标签",
    "name": "label",
    "group": "label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "members",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/Label.java",
    "groupTitle": "label",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/label"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/label/name",
    "title": "更新标签名称",
    "name": "updateLabelName",
    "group": "label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newname",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/Label.java",
    "groupTitle": "label",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/label/name"
      }
    ],
    "success": {
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/red_envelope/get",
    "title": "抢红包",
    "group": "red_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "red_id",
            "description": "<p>红包id,请以表单方式提交</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "群：抢红包成功/群红包已收过",
          "content": "{\n\"msgId\": \"0200\"/\"1508\",\n\"from_id\":469\n\"amount\":1.25\n\"mark\":\"这是红包留言\"\n\"num\":9\n\"second\":7   没抢完为0\n\"total_amount\":23.00\n\"red\":[{\n\"uid\":469\n\"amount\":1.25,\n\"create_time\":1542464854202\n},\n{\n\"uid\":471,\n\"create_time\":1542464854202\n\"amount\":1.25\n}]\n}",
          "type": "json"
        },
        {
          "title": "个人：抢红包成功/个人红包已收过",
          "content": "{\n\"msgId\": \"0200\"/\"1510\",\n\"from_id\":469\n\"amount\":1.25\n\"mark\":\"这是红包留言\"\n}",
          "type": "json"
        },
        {
          "title": "个人：自己点自己发的个人红包",
          "content": "{\n\"msgId\":\"2000\",\n\"is_get\":0,   0未领取 1已领取\n\"uid\":469,  发送人的id\n\"fid\":471,  接受人的id\n\"amount\":100.00, 金额\n\"create_time\":1542464854202  发送时间\n\"out_time\":1542464854202  领取时间 没领取为0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/RedEnvelopeRouter.java",
    "groupTitle": "red_envelope",
    "name": "PostRed_envelopeGet",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/red_envelope/get"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "红包不存在": [
          {
            "group": "红包不存在",
            "optional": false,
            "field": "msgId",
            "description": "<p>1506 红包不存在</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "红包已经被抢完": [
          {
            "group": "红包已经被抢完",
            "optional": false,
            "field": "msgId",
            "description": "<p>1507 红包已经被抢完</p>"
          }
        ],
        "自己抢自己的个人红包": [
          {
            "group": "自己抢自己的个人红包",
            "optional": false,
            "field": "msgId",
            "description": "<p>2000 自己抢自己的个人红包</p>"
          }
        ],
        "没有权限": [
          {
            "group": "没有权限",
            "optional": false,
            "field": "msgId",
            "description": "<p>1503 没有权限</p>"
          }
        ],
        "超时": [
          {
            "group": "超时",
            "optional": false,
            "field": "msgId",
            "description": "<p>1504 超时</p>"
          }
        ],
        "个人红包已经收过": [
          {
            "group": "个人红包已经收过",
            "optional": false,
            "field": "msgId",
            "description": "<p>1510 个人红包已经收过</p>"
          }
        ],
        "群红包已经收过": [
          {
            "group": "群红包已经收过",
            "optional": false,
            "field": "msgId",
            "description": "<p>1508 群红包已经收过</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/red_envelope/get_detail",
    "title": "查看红包详情",
    "group": "red_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "red_id",
            "description": "<p>红包id,请以表单方式提交</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "查看红包详情",
          "content": "{\n\"msgId\": \"0200\",\n\"from_id\":469\n\"amount\":1.25\n\"mark\":\"这是红包留言\"\n\"num\":9\n\"second\":7   没抢完为0\n\"total_amount\":23.00\n\"red\":[{\n\"uid\":469\n\"amount\":1.25,\n\"create_time\":1542464854202\n},\n{\n\"uid\":471,\n\"create_time\":1542464854202\n\"amount\":1.25\n}]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/RedEnvelopeRouter.java",
    "groupTitle": "red_envelope",
    "name": "PostRed_envelopeGet_detail",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/red_envelope/get_detail"
      }
    ],
    "error": {
      "fields": {
        "超时": [
          {
            "group": "超时",
            "optional": false,
            "field": "msgId",
            "description": "<p>1504 超时</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "红包不存在": [
          {
            "group": "红包不存在",
            "optional": false,
            "field": "msgId",
            "description": "<p>1506 红包不存在</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/red_envelope/get_exist",
    "title": "获取红包是否已抢完",
    "group": "red_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "red_id",
            "description": "<p>红包id,请以表单方式提交</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "获取红包是否已抢完",
          "content": "{\n\"msgId\": \"0200\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/RedEnvelopeRouter.java",
    "groupTitle": "red_envelope",
    "name": "PostRed_envelopeGet_exist",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/red_envelope/get_exist"
      }
    ],
    "error": {
      "fields": {
        "红包已经被抢完": [
          {
            "group": "红包已经被抢完",
            "optional": false,
            "field": "msgId",
            "description": "<p>1507 红包已经被抢完</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "红包不存在": [
          {
            "group": "红包不存在",
            "optional": false,
            "field": "msgId",
            "description": "<p>1506 红包不存在</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/red_envelope/give",
    "title": "发红包",
    "group": "red_envelope",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ope",
            "description": "<p>0:个人 1:群</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "fid",
            "description": "<p>发送对象id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>1 普通红包,即随机红包 2定额红包 个人红包必须为2</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "num",
            "description": "<p>红包个数,个人红包指定为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>秘图密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mark",
            "description": "<p>留言</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "amount",
            "description": "<p>总金额,定额红包则为每个红包的金额</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例：发送红包成功",
          "content": "{\n\"msgId\": \"0200\",\n}",
          "type": "json"
        },
        {
          "title": "示例：云信自定义消息",
          "content": "{\n\"type\": \"6\",\n\"data\":{\n\"amount\":0.04,\n\"fid\":414,\n\"id\":106,\n\"mark\":\"这是你的红包吗？\",\n\"num\":5,\n\"ope\":0,\n\"type\":0,\n\"uid\":435\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "成功": [
          {
            "group": "成功",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../java/router/RedEnvelopeRouter.java",
    "groupTitle": "red_envelope",
    "name": "PostRed_envelopeGive",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/red_envelope/give"
      }
    ],
    "error": {
      "fields": {
        "参数错误": [
          {
            "group": "参数错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>0400 参数错误</p>"
          }
        ],
        "密码错误": [
          {
            "group": "密码错误",
            "optional": false,
            "field": "msgId",
            "description": "<p>1406 密码错误</p>"
          }
        ],
        "少于最小金额": [
          {
            "group": "少于最小金额",
            "optional": false,
            "field": "msgId",
            "description": "<p>0601 少于最小金额</p>"
          }
        ],
        "失败": [
          {
            "group": "失败",
            "optional": false,
            "field": "msgId",
            "description": "<p>0414 失败</p>"
          }
        ],
        "账户余额不足": [
          {
            "group": "账户余额不足",
            "optional": false,
            "field": "msgId",
            "description": "<p>0600 账户余额不足</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/pay/deadline",
    "title": "会员到期时间",
    "name": "deadline",
    "group": "vip",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n\"msgId\":\"0200\",\n\"vip\":{\n\"deadline\":\"2025-08-09 16:00:25.681563\",\n\"left_date\":1234 (<0表示已过期)\n}，\n\"activity\":{\n\"status\":1,\n\"count\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500:服务器错误<br/> 0555:token失效<br/> 0100:sql异常<br/> 0414:失败<br/></p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/VipRouter.java",
    "groupTitle": "vip",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/deadline"
      }
    ]
  },
  {
    "type": "get",
    "url": "/pay/alipay/way/app",
    "title": "APP开通会员",
    "name": "openVip4App",
    "group": "vip",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"alipay_param\": \"appF10BnjQBXlLNT8NiBiFq%2FPHE1Loh7EIo\",\n   \"msgId\": \"0200\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500:服务器错误<br/> 0555:token失效<br/></p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/VipRouter.java",
    "groupTitle": "vip",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/alipay/way/app"
      }
    ]
  },
  {
    "type": "get",
    "url": "/pay/alipay/way/wap",
    "title": "手机网站开通会员",
    "name": "openVip4Wap",
    "group": "vip",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "支付宝支付页面，自动唤起app",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "../java/router/VipRouter.java",
    "groupTitle": "vip",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/alipay/way/wap"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pay/alipay/withdraw",
    "title": "支付宝提现",
    "name": "withdraw",
    "group": "vip",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>支付密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>提现金额</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msgId",
            "description": "<p>0600:余额不足<br/> 0400:参数错误<br/> 0414:失败<br/> 0500:服务器端错误<br/> 0601:提现金额不能小于1元<br/> 1502:用户钱包不存在<br/> 0603:支付密码不对<br/> 0555:token失效<br/></p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/VipRouter.java",
    "groupTitle": "vip",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/alipay/withdraw"
      }
    ]
  },
  {
    "type": "get",
    "url": "/pay/wallet/record",
    "title": "钱包记录",
    "name": "getWalletRecord",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "group": "wallet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lasttime",
            "description": "<p>上页最后一条记录的时间，第一页或刷新则不传该参数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n     \"msgId\":\"0200\",\n     \"wallet_records\":[{\n          \"create_time\": 1502698528123,\n          \"receive_uid\": null, 接受人id\n          \"money\": 6.44, //金额\n          \"description\": \"mark = red.id\",　//注意：记录提现时扣取的手续费的描述\n          \"uid\": 36,　//发起人id\n          \"pay_account\": null, //支付的帐号\n          \"type\": 6,　//类型\n          \"receive_account\": null,　//接受帐号\n          \"status\": 1,\n          \"mark\": null,　//标记，现在记录是红包的id\n          \"wrid\": \"150269852832\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msgId",
            "description": "<p>0500:服务器错误<br/> 0555:token失效<br/> 0100:sql异常<br/></p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletRouter.java",
    "groupTitle": "wallet",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/wallet/record"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pay/wallet/account/alipay",
    "title": "修改支付宝账号",
    "name": "modify_alipayAccount",
    "group": "wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>支付宝账号（手机号或邮箱）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msgId",
            "description": "<p>0555:token失效<br/> 1502:没有该用户<br/> 0500:服务器错误<br/> 0400:账号格式有误<br/> 0414:失败<br/></p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletRouter.java",
    "groupTitle": "wallet",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/wallet/account/alipay"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pay/wallet/recharge",
    "title": "充值",
    "name": "recharge",
    "group": "wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "amount",
            "description": "<p>充值金额(大于一元，小数点后保留两位)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "type",
            "description": "<p>充值类型（0--&gt;手机客户端充值==android;1--&gt;手机网站支付==ios）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "type = 0时：\n{\n    \"msgId\":\"0200\",\n    \"alipay_param\":\"app_id=12345\"\n}\ntype = 1 时：\n重定向到支付宝支付页面",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msgId",
            "description": "<p>0555:token失效<br/> 0500:服务器错误<br/> 0602:支付金额小于1元<br/></p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletRouter.java",
    "groupTitle": "wallet",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/wallet/recharge"
      }
    ]
  },
  {
    "type": "get",
    "url": "/pay/wallet/account/alipay",
    "title": "查看支付宝账号",
    "name": "show_alipayAccount",
    "group": "wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"msgId\": \"0200\",\n    \"accounts\": {\n         \"alipay_account\": \"18290252270\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msgId",
            "description": "<p>0555:token失效<br/> 0500:服务器错误<br/> 1502:没有该用户<br/></p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletRouter.java",
    "groupTitle": "wallet",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/wallet/account/alipay"
      }
    ]
  },
  {
    "type": "get",
    "url": "/pay/wallet/balance",
    "title": "获取余额",
    "name": "show_balance",
    "group": "wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"msgId\": \"0200\",\n     \"balance\": {\n         \"money\": 88,\n         \"profit\":12.0,\n         \"recharge\":100,\n         \"transfer\":122,\n         \"envelope\":1000\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msgId",
            "description": "<p>0555:token失效<br/> 1502:钱包不存在<br/> 0500:服务器错误<br/></p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletRouter.java",
    "groupTitle": "wallet",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/wallet/balance"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pay/wallet/transfer/:account",
    "title": "转账",
    "name": "transfer",
    "group": "wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用于鉴权</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>url参数，对方手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "money",
            "description": "<p>转账金额（大于0.01,小数点后保留两位）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述(可为空)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>支付密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "msgId",
            "description": "<p>0200</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msgId",
            "description": "<p>0555:token失效<br/> 0500:服务器错误<br/> 0602:转账金额小于0.01<br/> 0414:失败<br/></p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "../java/router/WalletRouter.java",
    "groupTitle": "wallet",
    "sampleRequest": [
      {
        "url": "http://10.0.0.61:8000/pay/wallet/transfer/:account"
      }
    ]
  }
] });

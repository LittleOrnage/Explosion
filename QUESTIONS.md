# 题目对照与演出节点

题库在 `story-config.js` 的 `questions` 数组里。数组序号从 0 开始，页面显示从第 1 题开始。

| 显示题号 | 配置位置 | 演出重点 |
| --- | --- | --- |
| 1 | `questions[0]` | 正常异世界开局题 |
| 2 | `questions[1]` | 正常队伍职业倾向 |
| 3 | `questions[2]` | 温柔陪伴选项开始增加依赖 |
| 4 | `questions[3]` | 死亡路线日记伏笔 |
| 5 | `questions[4]` | “不要离开我”首次不自然出现 |
| 6 | `questions[5]` | 无名申请书浅色浮现 |
| 7 | `questions[6]` | 调查喜好暗示 |
| 8 | `questions[7]` | 轮回执念暗示 |
| 9 | `questions[8]` | “看着你睡”选项闪烁 |
| 10 | `questions[9]` | 系统日志首次异常 |
| 11 | `questions[10]` | 第 0 名队友开始插话 |
| 12 | `questions[11]` | 题目编号变成“共 2 人” |
| 13 | `questions[12]` | 替玩家受伤台词 |
| 14 | `questions[13]` | hover D 时其他选项变暗 |
| 15 | `questions[14]` | 现实名字伏笔 |
| 16 | `questions[15]` | “她、她、她”故障选项 |
| 17 | `questions[16]` | 虚构密码入侵感提示 |
| 18 | `questions[17]` | 嫉妒型 Boss 定义 |
| 19 | `questions[18]` | hover A/B/C 变字 |
| 20 | `questions[19]` | 推荐结果全部变成“我” |
| 21 | `questions[20]` | 拒绝选项损坏 |
| 22 | `questions[21]` | 第 0 名队友资料弹窗 |
| 23 | `questions[22]` | 背景音乐暂停 |
| 24 | `questions[23]` | 右上角出现“那里不是出口” |
| 25 | `questions[24]` | 全屏窥视文字覆盖 |
| 26 | `questions[25]` | 进入依赖/逃离/真相/轮回分支 |
| 27 | `questions[26]` | 题号变成“第 27 次” |
| 28 | `questions[27]` | 名册被划掉台词 |
| 29 | `questions[28]` | 最终站位倾向 |
| 30 | `questions[29]` | 提交并结算结局 |

## 修改建议

- 改题目：编辑 `questions`。
- 改系统插话：编辑每题的 `log` 字段。
- 改 hover 变字：编辑选项的 `hoverText`。
- 改结局：编辑 `endings` 和 `finalLines`。
- 改第 0 名队友资料：编辑 `profileHtml`。

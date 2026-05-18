# 题目对照与桥段接口

题目正文和选项都在 `story-config.js` 的 `questions` 数组里，数组序号从 0 开始，但页面显示从第 1 题开始。

| 显示题号 | 配置位置 | 特殊桥段 |
| --- | --- | --- |
| 1 | `questions[0]` | 普通问卷题 |
| 2 | `questions[1]` | 普通问卷题 |
| 3 | `questions[2]` | 选项后触发黑屏打字，文案在 `effects.q3` |
| 4 | `questions[3]` | 点下一题时标记第 5 题桥段 |
| 5 | `questions[4]` | 选项依次被替换，文案在 `effects.q5` |
| 6 | `questions[5]` | 普通问卷题 |
| 7 | `questions[6]` | 普通问卷题 |
| 8 | `questions[7]` | 红屏漂浮文字，并自动跳到第 9 题，文案在 `effects.q8` |
| 9 | `questions[8]` | 普通问卷题 |
| 10 | `questions[9]` | 普通问卷题 |
| 11 | `questions[10]` | 普通问卷题 |
| 12 | `questions[11]` | 普通问卷题 |
| 13 | `questions[12]` | 普通问卷题 |
| 14 | `questions[13]` | 普通问卷题 |
| 15 | `questions[14]` | 普通问卷题 |
| 16 | `questions[15]` | 弹出红框小提示，文案在 `effects.q16` |
| 17 | `questions[16]` | A/B 触发全屏打字，C/D 被锁定，规则在 `effects.q17` |
| 18 | `questions[17]` | 普通问卷题 |
| 19 | `questions[18]` | 普通问卷题 |
| 20 | `questions[19]` | 选项文字被篡改，前三项锁定，文案在 `effects.q20` |
| 21 | `questions[20]` | 普通问卷题 |
| 22 | `questions[21]` | 普通问卷题 |
| 23 | `questions[22]` | 普通问卷题 |
| 24 | `questions[23]` | 普通问卷题 |
| 25 | `questions[24]` | 全屏窥视文字覆盖，文案在 `effects.q25` |
| 26 | `questions[25]` | 普通问卷题 |
| 27 | `questions[26]` | 普通问卷题 |
| 28 | `questions[27]` | 普通问卷题 |
| 29 | `questions[28]` | 普通问卷题 |
| 30 | `questions[29]` | 提交后进入强制留言流程，文案在 `final` 和 `diary` |

## 后续改剧情时优先改这里

- 改题目和选项：编辑 `story-config.js` 的 `questions`。
- 改病娇干预文案：编辑 `effects`。
- 改提交后的强制流程：编辑 `final`。
- 改日记页：编辑 `diary`，每页支持 HTML。
- 改解锁口令：编辑 `unlockPhrase`，同时建议同步修改 `final.inputPlaceholder`。

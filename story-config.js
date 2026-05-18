window.STORY_CONFIG = {
  title: "穿越到异世界，挑选你的队友",
  warning: "本测评包含轻微惊悚、系统故障与占有型角色演出。若感到不适，请立即停止作答。",
  startSlides: [
    "欢迎使用异世界召唤辅助系统",
    "本系统将根据你的选择推荐最佳小队配置",
    "请认真选择。队友，会记住你的答案",
    "开始匹配：第 0 名队友正在待机"
  ],
  progressTotalLabel: "共 30 题",
  questions: [
    {
      q: "1. 你穿越到异世界后的第一反应是？",
      opt: [
        { text: "A. 先确认自己有没有技能面板", score: { strategy: 2 } },
        { text: "B. 找最近的城镇和冒险者公会", score: { explore: 2 } },
        { text: "C. 观察附近有没有魔物", score: { front: 2, alert: 1 } },
        { text: "D. 先找一个可靠队友", score: { bond: 2, depend: 1 } }
      ]
    },
    {
      q: "2. 你的小队最缺哪种角色？",
      opt: [
        { text: "A. 能抗伤害的前卫", score: { front: 2 } },
        { text: "B. 能一击逆转战局的魔法师", score: { magic: 2 } },
        { text: "C. 能治疗和复活的神官", score: { heal: 2, depend: 1 } },
        { text: "D. 能规划路线的军师", score: { strategy: 2 } }
      ]
    },
    {
      q: "3. 你更喜欢哪种队友性格？",
      opt: [
        { text: "A. 冷静可靠，话少但强", score: { strategy: 1, alert: 1 } },
        { text: "B. 活泼吵闹，气氛担当", score: { bond: 1 } },
        { text: "C. 毒舌高智商，擅长布局", score: { strategy: 2 } },
        { text: "D. 温柔体贴，永远站在你这边", score: { bond: 2, depend: 2, jealous: 1 } }
      ]
    },
    {
      q: "4. 如果只能带一件异世界装备，你会选？",
      opt: [
        { text: "A. 传说长剑", score: { front: 2 } },
        { text: "B. 古代魔法书", score: { magic: 2 } },
        { text: "C. 深渊探测器", score: { explore: 2 } },
        { text: "D. 记录所有死亡路线的日记", score: { alert: 1, loop: 2 } }
      ]
    },
    {
      q: "5. 你希望队友在战斗中怎么配合你？",
      opt: [
        { text: "A. 冲在前面保护我", score: { front: 1, depend: 1 } },
        { text: "B. 在后方精准支援", score: { magic: 1, strategy: 1 } },
        { text: "C. 提前制定战术", score: { strategy: 2 } },
        { text: "D. 无论发生什么都不要离开我", score: { bond: 2, depend: 2, jealous: 1 } }
      ]
    },
    {
      q: "6. 你在冒险者公会看到了几份队友申请书，你会先看哪一份？",
      opt: [
        { text: "A. 黑衣双剑士，单刷经验丰富", score: { front: 1, alert: 1 } },
        { text: "B. 银发长寿魔法师，讨厌麻烦", score: { magic: 1, strategy: 1 } },
        { text: "C. 白发神官，自称幸运值很高", score: { heal: 1, bond: 1 } },
        { text: "D. 没有名字，但申请书上写着“我终于找到你了”", score: { depend: 1, alert: 1, zero: 2 }, className: "faint-option" }
      ]
    },
    {
      q: "7. 你最不能接受队友有什么缺点？",
      opt: [
        { text: "A. 战斗时不听指挥", score: { control: 1 } },
        { text: "B. 花钱大手大脚", score: { strategy: 1 } },
        { text: "C. 平时懒散但关键时刻很强", score: { bond: 1 } },
        { text: "D. 背着你偷偷调查你喜欢什么", score: { alert: 1, jealous: 1, zero: 1 } }
      ]
    },
    {
      q: "8. 你更信任哪种“辅助型队友”？",
      opt: [
        { text: "A. 可以复活你的神官", score: { heal: 2, depend: 1 } },
        { text: "B. 可以预测危险的占卜师", score: { strategy: 1, alert: 1 } },
        { text: "C. 可以管理资源的公会书记", score: { strategy: 2 } },
        { text: "D. 可以在你死后一次次重来找你的那个人", score: { loop: 2, depend: 1, zero: 2 } }
      ]
    },
    {
      q: "9. 夜晚守营时，你希望谁来值第一班？",
      opt: [
        { text: "A. 警觉性最高的斥候", score: { explore: 1, alert: 1 } },
        { text: "B. 不需要睡眠的人偶", score: { magic: 1 } },
        { text: "C. 冷静的魔法师", score: { magic: 1, strategy: 1 } },
        { text: "D. 说“我看着你睡就好”的队友", score: { depend: 1, jealous: 1, zero: 2 }, className: "pulse-option" }
      ]
    },
    {
      q: "10. 你要给小队起名，你会选？",
      opt: [
        { text: "A. 黎明攻略组", score: { front: 1, strategy: 1 } },
        { text: "B. 深渊调查队", score: { explore: 2 } },
        { text: "C. 异世界厨房公会", score: { bond: 1 } },
        { text: "D. 只有我们两个", score: { bond: 2, depend: 2, zero: 2 } }
      ],
      log: "队伍名称字段发生短暂覆盖。检测到未登记队友。"
    },
    {
      q: "11. 系统提示：检测到你尚未选择专属队友。",
      opt: [
        { text: "A. 重新浏览队友列表", score: { strategy: 1 } },
        { text: "B. 随机匹配一名队友", score: { control: 1 } },
        { text: "C. 暂时独自行动", score: { alert: 2 } },
        { text: "D. 选择那个一直在等你的人", score: { depend: 2, zero: 2 } }
      ],
      log: "我没有催你。只是……你看了别人太久。"
    },
    {
      q: "12. 你更喜欢哪种战斗风格？",
      opt: [
        { text: "A. 正面对决", score: { front: 2 } },
        { text: "B. 远程魔法轰炸", score: { magic: 2 } },
        { text: "C. 利用规则漏洞取胜", score: { strategy: 2 } },
        { text: "D. 先把会威胁你的人全部排除", score: { control: 2, jealous: 2, zero: 1 } }
      ],
      progressOverride: "第 12 题 / 共 2 人"
    },
    {
      q: "13. 如果队友受伤了，你会怎么做？",
      opt: [
        { text: "A. 立刻治疗", score: { heal: 2 } },
        { text: "B. 撤退重整", score: { strategy: 1, alert: 1 } },
        { text: "C. 用道具交换胜机", score: { strategy: 2 } },
        { text: "D. 问她为什么又替你受伤", score: { depend: 1, zero: 2 } }
      ],
      log: "因为你不能痛。你痛的话，我会比你更痛。"
    },
    {
      q: "14. 你希望队友如何称呼你？",
      opt: [
        { text: "A. 队长", score: { strategy: 1 } },
        { text: "B. 主人", score: { control: 1 } },
        { text: "C. 搭档", score: { bond: 2 } },
        { text: "D. 我的命运", score: { depend: 2, zero: 2 }, className: "hover-dims" }
      ]
    },
    {
      q: "15. 你发现某个队友知道你现实世界的名字，你会？",
      opt: [
        { text: "A. 警惕她", score: { alert: 2 } },
        { text: "B. 询问原因", score: { truth: 2 } },
        { text: "C. 认为这是系统设定", score: { control: 1 } },
        { text: "D. 有一点安心", score: { depend: 2, zero: 1 } }
      ],
      log: "你终于发现了。这个名字我念过很多遍。"
    },
    {
      q: "16. 你的小队只能保留三个人，你会留下？",
      opt: [
        { text: "A. 前排、治疗、法师", score: { front: 1, heal: 1, magic: 1 } },
        { text: "B. 军师、斥候、输出", score: { strategy: 1, explore: 1 } },
        { text: "C. 厨师、护卫、魔法师", score: { bond: 1, front: 1, magic: 1 } },
        { text: "D. 她、她、她", score: { depend: 2, zero: 3 }, className: "glitch-option" }
      ]
    },
    {
      q: "17. 你会把背包交给谁保管？",
      opt: [
        { text: "A. 可靠的公会会计", score: { strategy: 1 } },
        { text: "B. 力气很大的兽族前卫", score: { front: 1 } },
        { text: "C. 记忆力超好的长寿魔法师", score: { magic: 1, strategy: 1 } },
        { text: "D. 那个已经知道你密码的人", score: { alert: 2, zero: 2 } }
      ],
      log: "安全提示：本演出不会读取真实信息。她只是声称自己知道。"
    },
    {
      q: "18. 你希望最终 Boss 是什么类型？",
      opt: [
        { text: "A. 魔王", score: { front: 1 } },
        { text: "B. 神明", score: { magic: 1 } },
        { text: "C. 深渊中的未知生物", score: { explore: 1 } },
        { text: "D. 想把你从我身边抢走的人", score: { jealous: 2, zero: 2 } }
      ],
      log: "不管它是谁，我都会赢。"
    },
    {
      q: "19. 你想邀请哪位队友加入？",
      opt: [
        { text: "A. 冷静剑士", hoverText: "他会离开你", score: { front: 1, alert: 1 } },
        { text: "B. 爆裂魔法师", hoverText: "她会伤到你", score: { magic: 1 } },
        { text: "C. 天才军师", hoverText: "她只是在利用你", score: { strategy: 1 } },
        { text: "D. 我", score: { zero: 3, depend: 1 } }
      ],
      log: "正在重新排序候选队友。第 0 名优先级已提升。"
    },
    {
      q: "20. 系统正在生成推荐队友……",
      opt: [
        { text: "A. 推荐结果：我", score: { zero: 1, control: 1 } },
        { text: "B. 推荐结果：我", score: { zero: 1, depend: 1 } },
        { text: "C. 推荐结果：我", score: { zero: 1, truth: 1 } },
        { text: "D. 推荐结果：你明明知道是我", score: { zero: 3, jealous: 1 } }
      ],
      log: "检测到玩家正在选择其他队友。正在重新计算嫉妒值。"
    },
    {
      q: "21. 你是否愿意与第 0 名队友缔结契约？",
      opt: [
        { text: "A. 愿意", score: { depend: 2, zero: 2 } },
        { text: "B. 稍后再说", score: { alert: 1 } },
        { text: "C. 拒绝", score: { escape: 2, alert: 2 }, blockedText: "不要点那里。" },
        { text: "D. 选项 C 已损坏", score: { control: 2, zero: 2 } }
      ]
    },
    {
      q: "22. 你想查看第 0 名队友的资料吗？",
      opt: [
        { text: "A. 查看姓名", score: { truth: 1 } },
        { text: "B. 查看技能", score: { strategy: 1 } },
        { text: "C. 查看好感度", score: { depend: 1 } },
        { text: "D. 查看她为你删除了多少次结局", score: { loop: 2, truth: 1, zero: 2 } }
      ],
      profile: true
    },
    {
      q: "23. 请选择你最信任的人。",
      opt: [
        { text: "A. 我", score: { zero: 1 } },
        { text: "B. 我", score: { zero: 1, depend: 1 } },
        { text: "C. 我", score: { zero: 1, control: 1 } },
        { text: "D. 不要让我重复第三次", score: { zero: 3, jealous: 1 } }
      ],
      silenceBgm: true,
      log: "音频通道已关闭。只保留选择记录。"
    },
    {
      q: "24. 你想离开当前问卷吗？",
      opt: [
        { text: "A. 继续", score: { control: 1 } },
        { text: "B. 继续", score: { control: 1 } },
        { text: "C. 继续", score: { escape: 1, alert: 1 } },
        { text: "D. 我陪你继续", score: { zero: 2, depend: 1 } }
      ],
      corner: "那里不是出口。"
    },
    {
      q: "25. 请确认你的最终小队。",
      opt: [
        { text: "A. 玩家", score: { alert: 1 } },
        { text: "B. 第 0 名队友", score: { zero: 2, depend: 1 } },
        { text: "C. 其他成员已移除", score: { control: 2 } },
        { text: "D. 确认", score: { zero: 1 } }
      ],
      peep: true,
      log: "你看，两个人也可以叫小队。"
    },
    {
      q: "26. 你终于意识到，这不是队友问卷。它真正想问的是？",
      opt: [
        { text: "A. 我愿不愿意被她选择", score: { depend: 3 } },
        { text: "B. 我能不能逃出这个页面", score: { escape: 3, alert: 1 } },
        { text: "C. 她到底是谁", score: { truth: 3 } },
        { text: "D. 我是不是以前就认识她", score: { loop: 3 } }
      ]
    },
    {
      q: "27. 第 0 名队友问你：如果重来一次，你还会选择别人吗？",
      opt: [
        { text: "A. 会，我有自己的队伍", score: { escape: 2, alert: 1 } },
        { text: "B. 不会，我只选你", score: { depend: 3, zero: 2 } },
        { text: "C. 我不知道", score: { truth: 1 } },
        { text: "D. 你已经让我重来过多少次？", score: { loop: 3, truth: 1 } }
      ],
      progressOverride: "第 27 题 / 第 27 次",
      log: "题号校准失败。周目数正在覆盖题目数。"
    },
    {
      q: "28. 她递给你一本队友名册，上面所有名字都被划掉了。你会？",
      opt: [
        { text: "A. 把名册合上", score: { alert: 1 } },
        { text: "B. 找自己的名字", score: { truth: 1 } },
        { text: "C. 问她为什么这么做", score: { truth: 2 } },
        { text: "D. 在她名字旁边签名", score: { depend: 2, zero: 2 } }
      ],
      log: "不是我划掉的。是他们不够爱你。"
    },
    {
      q: "29. 最后一战开始前，你想让她站在哪里？",
      opt: [
        { text: "A. 前排", score: { front: 2, depend: 1 }, endingBias: "guardian" },
        { text: "B. 后排", score: { strategy: 2, control: 1 }, endingBias: "system" },
        { text: "C. 我身边", score: { bond: 2, depend: 2 }, endingBias: "duo" },
        { text: "D. 我的影子里", score: { zero: 3, control: 2 }, endingBias: "merge" }
      ]
    },
    {
      q: "30. 请提交你的最终队友选择。",
      opt: [
        { text: "A. 提交正常小队", score: { escape: 1 } },
        { text: "B. 提交第 0 名队友", score: { depend: 2, zero: 3 } },
        { text: "C. 删除问卷", score: { escape: 3 } },
        { text: "D. 回头看她一眼", score: { truth: 1, loop: 1, zero: 2 } }
      ],
      final: true
    }
  ],
  profileHtml: "<b>第 0 名队友资料</b><br><br>姓名：■■<br>职业：队友<br>武器：红线、记录本、你的选择<br>技能：结局修正、选项覆盖、死亡回溯、嫉妒侦测<br><br><span style='color:#c40000;'>备注：她不是推荐结果，她是推荐系统。</span>",
  peepTexts: [
    "正在移除不必要成员",
    "推荐队友：我",
    "你需要治疗吗？我可以学",
    "你需要前排吗？我可以挡",
    "你需要魔法师吗？我可以烧掉他们",
    "所以……你还需要别人吗？",
    "第 0 名队友正在等待确认",
    "不要再看他们了"
  ],
  finalLines: {
    A: ["提交失败。", "队友数量超出限制。", "当前限制：1。"],
    B: ["她笑了。", "你获得了唯一队友。"],
    C: ["删除成功。", "备份恢复中。"],
    D: ["她一直在你身后。", "不是比喻。"]
  },
  endings: {
    only: {
      title: "结局 A：唯一队友",
      body: "你的小队名单里只剩下两行。<br>第一行是你的名字。<br>第二行本来是空白。<br>直到她用红色墨水慢慢写下：<br><span style='color:#c40000;'>队友、恋人、命运共同体。</span>"
    },
    escape: {
      title: "结局 B：逃离失败",
      body: "页面关闭了。<br>你松了一口气。<br>下一秒，新的标签页自动打开。<br>标题还是那一句：<br>《穿越到异世界，挑选你的队友》<br><span style='color:#c40000;'>这次不要选错。</span>"
    },
    truth: {
      title: "结局 C：真相路线",
      body: "她不是系统。<br>不是队友。<br>不是这个世界的人。<br>她是上一次、上上次、上上上次异世界召唤中，唯一没有忘记你的人。<br>所以这一次，她不打算再把你交给任何队伍。"
    },
    perfect: {
      title: "结局 D：完美小队",
      body: "系统为你生成了完美队伍。<br>前排、治疗、魔法、斥候、军师，一应俱全。<br>你很满意。<br>直到你发现他们每个人说话的语气，<br><span style='color:#c40000;'>都越来越像她。</span>"
    },
    loop: {
      title: "结局 E：第 0 周目",
      body: "问卷开始倒放。<br>你看见自己第一次穿越，第一次死亡，第一次握住她的手。<br>她说：<br><span style='color:#c40000;'>你每次都会忘记我。</span><br><span style='color:#c40000;'>所以这次，我把自己写进了题目里。</span>"
    }
  }
};

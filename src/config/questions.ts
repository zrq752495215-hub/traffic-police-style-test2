import type { ResultId } from './results';

export type AnswerOption = {
  text: string;
  primary: ResultId;
  secondary: ResultId;
};

export type Question = {
  id: number;
  title: string;
  options: AnswerOption[];
};

export const questions: Question[] = [
  {
    id: 1,
    title: '一天工作开始前，你通常如何让自己进入状态？',
    options: [
      { text: '先把当天重点和时间节点在心里过一遍', primary: 'coordination', secondary: 'steady' },
      { text: '检查装备和必要物品，让现场准备更踏实', primary: 'steady', secondary: 'observation' },
      { text: '和同事简短沟通，确认彼此分工与衔接', primary: 'teamwork', secondary: 'communication' },
      { text: '快速整理精神状态，提醒自己保持清醒节奏', primary: 'action', secondary: 'persistence' },
    ],
  },
  {
    id: 2,
    title: '面对早高峰车流时，你首先会关注什么？',
    options: [
      { text: '主要路口和瓶颈点位的通行节奏', primary: 'coordination', secondary: 'action' },
      { text: '行人、非机动车和车辆交织处的细节变化', primary: 'observation', secondary: 'steady' },
      { text: '现场提示是否清楚，群众是否容易理解', primary: 'communication', secondary: 'service' },
      { text: '各岗位之间是否能及时呼应和补位', primary: 'teamwork', secondary: 'adaptability' },
    ],
  },
  {
    id: 3,
    title: '接到临时任务时，你通常先如何梳理思路？',
    options: [
      { text: '先判断任务重点和最需要先处理的环节', primary: 'action', secondary: 'coordination' },
      { text: '先了解现场条件，再决定采用哪种推进方式', primary: 'adaptability', secondary: 'observation' },
      { text: '先确认相关人员和信息如何衔接', primary: 'coordination', secondary: 'teamwork' },
      { text: '先把流程理清，保证每一步稳妥推进', primary: 'steady', secondary: 'persistence' },
    ],
  },
  {
    id: 4,
    title: '团队协作中，你更习惯发挥怎样的作用？',
    options: [
      { text: '主动补充衔接，让各环节接得更顺', primary: 'teamwork', secondary: 'coordination' },
      { text: '把自己负责的事项做细做稳', primary: 'persistence', secondary: 'steady' },
      { text: '及时观察现场变化，提醒同事注意新情况', primary: 'observation', secondary: 'adaptability' },
      { text: '把复杂信息说清楚，帮助大家快速同步', primary: 'communication', secondary: 'creative' },
    ],
  },
  {
    id: 5,
    title: '遇到群众咨询时，你更习惯从哪里开始沟通？',
    options: [
      { text: '先快速了解对方最关心的问题', primary: 'communication', secondary: 'service' },
      { text: '先把办理流程和注意事项解释清楚', primary: 'service', secondary: 'steady' },
      { text: '结合现场情况给出具体、可理解的建议', primary: 'adaptability', secondary: 'communication' },
      { text: '在解决问题后补充一两句安全提醒', primary: 'creative', secondary: 'service' },
    ],
  },
  {
    id: 6,
    title: '面对复杂路况时，你更容易注意到哪些细节？',
    options: [
      { text: '车辆和行人交汇位置是否出现新变化', primary: 'observation', secondary: 'adaptability' },
      { text: '道路标线、隔离设施和提示是否清晰', primary: 'steady', secondary: 'service' },
      { text: '车流在不同方向之间的节奏是否平衡', primary: 'coordination', secondary: 'observation' },
      { text: '现场处置动作是否能尽快形成有效引导', primary: 'action', secondary: 'steady' },
    ],
  },
  {
    id: 7,
    title: '工作现场出现变化时，你更习惯如何调整节奏？',
    options: [
      { text: '先稳住当前秩序，再根据变化调整安排', primary: 'adaptability', secondary: 'steady' },
      { text: '迅速找到最需要处理的点并推进', primary: 'action', secondary: 'adaptability' },
      { text: '同步提醒相关同事，保持信息一致', primary: 'teamwork', secondary: 'coordination' },
      { text: '继续观察变化趋势，避免遗漏关键信息', primary: 'observation', secondary: 'persistence' },
    ],
  },
  {
    id: 8,
    title: '完成一项任务后，哪一种结果更容易带来成就感？',
    options: [
      { text: '现场秩序恢复顺畅，大家配合自然', primary: 'steady', secondary: 'teamwork' },
      { text: '群众把事项理解清楚，后续少走弯路', primary: 'service', secondary: 'communication' },
      { text: '任务按节点推进，没有明显遗漏', primary: 'coordination', secondary: 'persistence' },
      { text: '安全提示被更多人看见并记住', primary: 'creative', secondary: 'communication' },
    ],
  },
  {
    id: 9,
    title: '与同事配合时，你更喜欢怎样的协作方式？',
    options: [
      { text: '分工清楚，关键节点及时互相确认', primary: 'coordination', secondary: 'teamwork' },
      { text: '保持默契，需要补位时自然接上', primary: 'teamwork', secondary: 'steady' },
      { text: '现场有变化时可以灵活调整配合方式', primary: 'adaptability', secondary: 'communication' },
      { text: '把信息整理清楚，方便大家快速理解', primary: 'creative', secondary: 'coordination' },
    ],
  },
  {
    id: 10,
    title: '参加交通安全宣传活动时，你更偏好哪一种形式？',
    options: [
      { text: '用真实场景讲清楚安全风险和注意事项', primary: 'creative', secondary: 'observation' },
      { text: '面对面交流，回答大家最实际的问题', primary: 'communication', secondary: 'service' },
      { text: '把重点做成简洁提示，方便现场传播', primary: 'creative', secondary: 'action' },
      { text: '按人群和地点安排不同宣传节奏', primary: 'coordination', secondary: 'service' },
    ],
  },
  {
    id: 11,
    title: '面对需要长期推进的工作时，你更习惯如何保持节奏？',
    options: [
      { text: '把任务拆成阶段，按节点持续推进', primary: 'coordination', secondary: 'persistence' },
      { text: '保持日常提醒和复查，让细节不断积累', primary: 'persistence', secondary: 'steady' },
      { text: '定期总结经验，找到更易理解的表达方式', primary: 'creative', secondary: 'communication' },
      { text: '根据实际反馈调整推进方式', primary: 'adaptability', secondary: 'service' },
    ],
  },
  {
    id: 12,
    title: '工作间隙，你更习惯怎样调整自己的状态？',
    options: [
      { text: '安静整理刚才的情况，准备下一段工作', primary: 'persistence', secondary: 'steady' },
      { text: '和同事简短交流，确认现场还有哪些变化', primary: 'teamwork', secondary: 'observation' },
      { text: '快速补充体力，把状态重新拉回任务中', primary: 'action', secondary: 'persistence' },
      { text: '回想沟通中的反馈，看看提醒是否还需优化', primary: 'communication', secondary: 'creative' },
    ],
  },
  {
    id: 13,
    title: '群众对交通管理工作表示理解时，你更关注什么？',
    options: [
      { text: '对方是否真正明白了后续注意事项', primary: 'service', secondary: 'communication' },
      { text: '这种理解能否带动更多人安全通行', primary: 'creative', secondary: 'coordination' },
      { text: '现场秩序是否因此变得更平稳', primary: 'steady', secondary: 'observation' },
      { text: '团队的配合是否让沟通过程更顺畅', primary: 'teamwork', secondary: 'communication' },
    ],
  },
  {
    id: 14,
    title: '遇到信息较多、任务较杂的情况时，你更习惯先做什么？',
    options: [
      { text: '把信息按轻重缓急分层整理', primary: 'coordination', secondary: 'steady' },
      { text: '先锁定当前最需要行动的事项', primary: 'action', secondary: 'observation' },
      { text: '确认哪些信息需要马上同步给同事', primary: 'teamwork', secondary: 'coordination' },
      { text: '结合现场反馈，调整原有处理顺序', primary: 'adaptability', secondary: 'action' },
    ],
  },
  {
    id: 15,
    title: '面对陌生任务时，你更倾向于怎样推进？',
    options: [
      { text: '先了解背景和目标，再形成步骤', primary: 'steady', secondary: 'coordination' },
      { text: '边推进边观察，根据情况及时修正', primary: 'adaptability', secondary: 'action' },
      { text: '主动请相关同事同步经验和注意点', primary: 'teamwork', secondary: 'communication' },
      { text: '把不熟悉的内容转成清楚的记录和提醒', primary: 'creative', secondary: 'persistence' },
    ],
  },
  {
    id: 16,
    title: '工作中发现潜在风险时，你更习惯怎样处理？',
    options: [
      { text: '先确认风险位置和变化趋势', primary: 'observation', secondary: 'steady' },
      { text: '及时采取现场提醒或引导动作', primary: 'action', secondary: 'adaptability' },
      { text: '同步给相关岗位，便于共同关注', primary: 'teamwork', secondary: 'coordination' },
      { text: '把风险点转化成后续安全提示内容', primary: 'creative', secondary: 'service' },
    ],
  },
  {
    id: 17,
    title: '需要向群众解释复杂事项时，你更擅长哪一种方式？',
    options: [
      { text: '先用简短语言说明核心，再补充细节', primary: 'communication', secondary: 'creative' },
      { text: '按步骤解释流程，让对方知道怎么做', primary: 'service', secondary: 'steady' },
      { text: '结合现场例子说明，更容易理解', primary: 'creative', secondary: 'communication' },
      { text: '根据对方反馈调整解释重点', primary: 'adaptability', secondary: 'service' },
    ],
  },
  {
    id: 18,
    title: '团队中多个任务并行时，你更习惯做什么？',
    options: [
      { text: '梳理任务优先级和衔接关系', primary: 'coordination', secondary: 'steady' },
      { text: '关注自己环节，同时主动补位', primary: 'teamwork', secondary: 'persistence' },
      { text: '先推进最紧迫事项，再回收其他细节', primary: 'action', secondary: 'coordination' },
      { text: '观察现场变化，提醒团队调整顺序', primary: 'observation', secondary: 'adaptability' },
    ],
  },
  {
    id: 19,
    title: '面对现场突发变化时，你更习惯如何稳定节奏？',
    options: [
      { text: '先保持冷静判断，再调整处置路径', primary: 'adaptability', secondary: 'observation' },
      { text: '快速明确下一步动作，让现场有方向', primary: 'action', secondary: 'steady' },
      { text: '先把相关信息同步清楚，避免各做各的', primary: 'coordination', secondary: 'teamwork' },
      { text: '用平和表达提醒群众配合现场安排', primary: 'communication', secondary: 'service' },
    ],
  },
  {
    id: 20,
    title: '参与大型活动交通保障时，你更关注什么？',
    options: [
      { text: '不同区域、时段和点位之间的整体衔接', primary: 'coordination', secondary: 'teamwork' },
      { text: '人车交汇处和临时变化点的细节', primary: 'observation', secondary: 'adaptability' },
      { text: '现场引导是否清楚、群众是否容易配合', primary: 'service', secondary: 'communication' },
      { text: '任务执行是否及时，关键节点是否推进到位', primary: 'action', secondary: 'persistence' },
    ],
  },
  {
    id: 21,
    title: '工作结束后，你更习惯怎样复盘一天？',
    options: [
      { text: '回看流程中哪些环节可以更顺', primary: 'steady', secondary: 'coordination' },
      { text: '记录现场变化和需要持续关注的细节', primary: 'observation', secondary: 'persistence' },
      { text: '总结沟通反馈，优化下次表达方式', primary: 'communication', secondary: 'creative' },
      { text: '看看团队配合中哪些衔接值得保留', primary: 'teamwork', secondary: 'service' },
    ],
  },
  {
    id: 22,
    title: '与新同事合作时，你更习惯怎样建立默契？',
    options: [
      { text: '先说明关键节点和配合方式', primary: 'coordination', secondary: 'communication' },
      { text: '在任务中及时回应，让对方更安心', primary: 'teamwork', secondary: 'service' },
      { text: '用稳定节奏带动彼此熟悉流程', primary: 'steady', secondary: 'persistence' },
      { text: '提醒现场变化，帮助对方更快适应', primary: 'observation', secondary: 'adaptability' },
    ],
  },
  {
    id: 23,
    title: '如果需要制作一条交通安全提醒，你更偏好怎样表达？',
    options: [
      { text: '一句话抓住重点，让人看完马上明白', primary: 'creative', secondary: 'action' },
      { text: '结合真实场景，让提醒更有代入感', primary: 'creative', secondary: 'observation' },
      { text: '把办理或通行步骤写清楚，减少误解', primary: 'service', secondary: 'steady' },
      { text: '用温和语气提醒大家共同配合', primary: 'communication', secondary: 'teamwork' },
    ],
  },
  {
    id: 24,
    title: '面对高强度工作时，你更依靠什么保持状态？',
    options: [
      { text: '明确节奏和任务重点，减少无序消耗', primary: 'coordination', secondary: 'action' },
      { text: '专注当前环节，一步一步稳定推进', primary: 'persistence', secondary: 'steady' },
      { text: '与同事保持呼应，相互支撑节奏', primary: 'teamwork', secondary: 'communication' },
      { text: '根据现场变化调整方法，保持灵活判断', primary: 'adaptability', secondary: 'observation' },
    ],
  },
  {
    id: 25,
    title: '如果用一个关键词概括自己的工作风格，你会选择什么？',
    options: [
      { text: '有序：把复杂任务理顺再推进', primary: 'steady', secondary: 'coordination' },
      { text: '理解：让沟通更清楚、更有温度', primary: 'communication', secondary: 'service' },
      { text: '敏锐：在变化中捕捉关键细节', primary: 'observation', secondary: 'adaptability' },
      { text: '同行：和团队一起把事情稳稳完成', primary: 'teamwork', secondary: 'persistence' },
    ],
  },
];

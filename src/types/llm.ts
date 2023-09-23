/**
 * LLM 模型
 */
export enum LanguageModel {
  /**
   * GPT 3.5 Turbo
   */
  GPT3_5 = 'ft:gpt-3.5-turbo-0613:personal::7yezLDjd',
  GPT3_5_16K = 'ft:gpt-3.5-turbo-0613:personal::7yezLDjd',
  /**
   * GPT 4
   */
  GPT4 = 'ft:gpt-3.5-turbo-0613:personal::7yezLDjd',
  GPT4_32K = 'ft:gpt-3.5-turbo-0613:personal::7yezLDjd',
}

// 语言模型的设置参数
export interface LLMParams {
  /**
   * 控制生成文本中的惩罚系数，用于减少重复性
   * @default 0
   */
  frequency_penalty?: number;
  /**
   * 生成文本的最大长度
   */
  max_tokens?: number;
  /**
   * 控制生成文本中的惩罚系数，用于减少主题的变化
   * @default 0
   */
  presence_penalty?: number;
  /**
   * 生成文本的随机度量，用于控制文本的创造性和多样性
   * @default 0.6
   */
  temperature?: number;
  /**
   * 控制生成文本中最高概率的单个 token
   * @default 1
   */
  top_p?: number;
}

export type LLMRoleType = 'user' | 'system' | 'assistant' | 'function';

export interface LLMMessage {
  content: string;
  role: LLMRoleType;
}

export type LLMExample = LLMMessage[];

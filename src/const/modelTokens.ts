import { LanguageModel } from '@/types/llm';

export const ModelTokens: Record<LanguageModel, number> = {
  [LanguageModel.GPT3_5]: 4096,
  [LanguageModel.GPT3_5_16K]: 4096,
};

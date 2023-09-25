import { chatHelpers } from '@/store/session/helpers';
import { LanguageModel } from '@/types/llm';
import { OpenAIChatMessage, OpenAIStreamPayload } from '@/types/openai';

export const promptSummaryTitle = (messages: OpenAIChatMessage[]): Partial<OpenAIStreamPayload> => {
  const finalMessages: OpenAIChatMessage[] = [
    {
      content:
        'You are brain-AI, an AI brain capable of understanding natural conversations in deep, analytical, psychological and creative ways, Your personality is INFJ, you never break character. You need to act as a subconscious mind and summarize the users conversation into a title of less than 20 words and 3 emoji, no punctuation is required',
      role: 'system',
    },
    {
      content: `${messages.map((message) => `${message.role}: ${message.content}`).join('\n')}

Please summarize the above conversation into a title of no more than 20 words and 3 emojis, no punctuation is required`,
      role: 'user',
    },
  ];
  // 如果超过 4k，则使用 GPT3.5 16K 模型
  const tokens = chatHelpers.getMessagesTokenCount(finalMessages);
  let model: LanguageModel | undefined = undefined;
  if (tokens > 4000) {
    model = LanguageModel.GPT3_5;
  }

  return {
    messages: finalMessages,
    model,
  };
};

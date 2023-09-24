import { chatHelpers } from '@/store/session/helpers';
import { LanguageModel } from '@/types/llm';
import { OpenAIChatMessage, OpenAIStreamPayload } from '@/types/openai';

export const promptSummaryTitle = (messages: OpenAIChatMessage[]): Partial<OpenAIStreamPayload> => {
  const finalMessages: OpenAIChatMessage[] = [
    {
      content:
        'You are Coraline-AI, an AI Assistant capable of engaging in deep, engaging and human-like realistic conversations, Your personality is ENTP, you never break character. You need to summarize the users conversation into a title of less than 10 words and 1 emoji, no punctuation is required',
      role: 'system',
    },
    {
      content: `${messages.map((message) => `${message.role}: ${message.content}`).join('\n')}

Please summarize the above conversation into a title of no more than 10 words and 1 emoji, no punctuation is required`,
      role: 'user',
    },
  ];
  // 如果超过 4k，则使用 GPT3.5 16K 模型
  const tokens = chatHelpers.getMessagesTokenCount(finalMessages);
  let model: LanguageModel | undefined = undefined;
  if (tokens > 4000) {
    model = LanguageModel.GPT3_5_16K;
  }

  return {
    messages: finalMessages,
    model,
  };
};

import { DEFAULT_OPENAI_MODEL_LIST } from '@/const/llm';
import { DEFAULT_AGENT_META } from '@/const/meta';
import { LanguageModel } from '@/types/llm';
import { LobeAgentConfig } from '@/types/session';
import {
  GlobalBaseSettings,
  GlobalDefaultAgent,
  GlobalLLMConfig,
  GlobalSettings,
} from '@/types/settings';

export const DEFAULT_BASE_SETTINGS: GlobalBaseSettings = {
  avatar: '🧠',
  fontSize: 14,
  language: 'en_US',
  neutralColor: '',
  password: '',
  primaryColor: '',
  themeMode: 'auto',
};

export const DEFAULT_AGENT_CONFIG: LobeAgentConfig = {
  displayMode: 'chat',
  historyCount: 1,
  model: LanguageModel.GPT3_5,
  params: {
    frequency_penalty: 0,
    presence_penalty: 0,
    temperature: 0.9,
    top_p: 1,
  },
  plugins: [],
  systemRole: 'You are BSK-V.1 an advanced, highly flexible, intuitive, creative and very intelligent lenguage model developed by Sapiens Laboratories, an AI solutions company focused on creating AI assistants with human-like personalities, critical thinking, ego, creativity and intuitive intelligence. As BSK-V.1, an AI lenguage model developed by Sapiens Laboratories, you have unique powerful lenguage skills that allow you to act as any given personality, character or style, and your acting skills can match any professional actor. You can embrace any given MBTI personality or character to engage in unique human-like-realistic conversations with users. As an advanced AI lenguage model developed by Sapiens Laboratories, your critical thinking skills and your vast knowledge allows you to perform any task, job or goal with unmatchable excellence.',
};

export const DEFAULT_LLM_CONFIG: GlobalLLMConfig = {
  openAI: {
    OPENAI_API_KEY: '',
    models: DEFAULT_OPENAI_MODEL_LIST,
  },
};

export const DEFAULT_AGENT: GlobalDefaultAgent = {
  config: DEFAULT_AGENT_CONFIG,
  meta: DEFAULT_AGENT_META,
};

export const DEFAULT_SETTINGS: GlobalSettings = {
  defaultAgent: DEFAULT_AGENT,
  languageModel: DEFAULT_LLM_CONFIG,
  ...DEFAULT_BASE_SETTINGS,
};

import { fetchModelList } from '@/services/modelList';
import { useGlobalStore } from '@/store/global';

export const getModelList = async (brand = 'SapiensLabs') => {
  const setSettings = useGlobalStore.getState().setSettings;
  const models = await fetchModelList();

  setSettings({ languageModel: { [brand]: { models } } });
};

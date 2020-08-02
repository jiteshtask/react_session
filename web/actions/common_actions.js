import { LOAD_ADMIN_MASTER_DATA } from './action_types';

import * as interaction from '../utils/interaction';

export const loadMasterData = () => async dispatch => {
  try {
    let {
      accountTypes,
      searchProviders
    } = await interaction.loadAdminMasterData();

    accountTypes = accountTypes.map(a => ({
      name: a.name,
      value: a.accountTypeId
    }));

    searchProviders = searchProviders.map(s => ({
      name: s.name,
      value: s.searchProvId
    }));

    const vectors = await interaction.loadVectors();

    dispatch({
      type: LOAD_ADMIN_MASTER_DATA,
      payload: { accountTypes, searchProviders, vectors }
    });
  } catch (error) {}
};

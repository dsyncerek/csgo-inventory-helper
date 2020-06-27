import { AsyncStatus } from '@core/async/models/async-status';
import { AnyAction } from '@shared/models/any-action';

export const asyncFeatureKey = 'async';

export interface AsyncState {
  [key: string]: AsyncStatus;
}

export const initialState: AsyncState = {};

const asyncActionErrorSuffix = '_ERROR';
const asyncActionSuccessSuffix = '_SUCCESS';

export function asyncReducer(state: AsyncState = initialState, action: AnyAction): AsyncState {
  if (action.type.endsWith(asyncActionErrorSuffix)) {
    const key = action.type.replace(asyncActionErrorSuffix, '');
    return { ...state, [key]: { loading: false, error: action.error } };
  }

  if (action.type.endsWith(asyncActionSuccessSuffix)) {
    const key = action.type.replace(asyncActionSuccessSuffix, '');
    return { ...state, [key]: { loading: false, error: null } };
  }

  return { ...state, [action.type]: { loading: true, error: null } };
}

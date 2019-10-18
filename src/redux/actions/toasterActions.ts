export enum EReduxActionTypes {
  SHOW_TOASTER = 'SHOW_TOASTER',
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

export interface IReduxShowToastAction extends IReduxBaseAction {
  type: EReduxActionTypes;
  data: { type: string; message: string };
}

import { Category } from '../../types';

// CategoriesTables

// Optional props
export interface IDefaultProps {}

// Required props
export interface IProps extends Partial<IDefaultProps> {
  categories: Category[];
}

export interface IState {
  auth?: any;
}

export type OwnProps = Pick<IProps, 'categories'>;
//export type StateProps = Pick<IProps, 'title' | 'width' | 'height'>;
//export type DispatchProps = Pick<IProps, 'onClick'>;

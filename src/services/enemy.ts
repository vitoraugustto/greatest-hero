import { AxiosPromise } from 'axios';

import { IEnemy } from '@common/interfaces';
import { instance } from '@services/axios';

export const fetchEnemies = (): AxiosPromise<IEnemy[]> =>
  instance({ url: '/api/v1/enemies' });

export const fetchEnemy = (id: IEnemy['_id']): AxiosPromise<IEnemy> =>
  instance({ url: `/api/v1/enemies/${id}` });

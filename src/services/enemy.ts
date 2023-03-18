import { AxiosPromise } from 'axios';

import { IEnemy } from '@common/interfaces';
import { instance } from '@services/axios';

export const fetchEnemies = (): AxiosPromise<IEnemy[]> =>
  instance({ url: '/api/v1/enemies' });

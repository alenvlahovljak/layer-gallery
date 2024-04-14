import type { RouteItem } from '@/utils';

import { HomePage, LikedPage, NotFoundPage } from '@/pages';

const routes: RouteItem[] = [
  {
    key: 'homepage',
    path: '/',
    component: <HomePage />
  },
  {
    key: 'liked',
    path: '/liked',
    component: <LikedPage />
  },
  {
    key: 'not-found',
    path: '*',
    component: <NotFoundPage />
  }
];

export default routes;

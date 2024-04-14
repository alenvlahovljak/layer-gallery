import type { ReactNode } from 'react';

export interface RouteItem {
  key: string;
  path: string;
  component: ReactNode;
  children?: RouteItem[];
}

interface FlatRouteItem extends RouteItem {
  parent: string | undefined;
}

export const flattenRoutes = (
  routes: RouteItem[],
  parent: string | undefined = undefined
): RouteItem[] => {
  return routes.reduce<RouteItem[]>((acc, { key, children, ...route }) => {
    const flatRoute: FlatRouteItem = {
      key,
      children,
      ...route,
      parent
    };

    if (children) {
      const flatChildren = flattenRoutes(children, key);
      acc.push(flatRoute, ...flatChildren);
    } else {
      acc.push(flatRoute);
    }

    return acc;
  }, []);
};

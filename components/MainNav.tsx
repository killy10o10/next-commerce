'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const MainNav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const pathName = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: 'Overview',
      active: pathName.startsWith(`/${params.storeId}`),
    },
    {
      href: `/${params.storeId}/billboards`,
      label: 'Billboards',
      active: pathName.startsWith(`/${params.storeId}/billboards`),
    },
    {
      href: `/${params.storeId}/categories`,
      label: 'Categories',
      active: pathName.startsWith(`/${params.storeId}/categories`),
    },
    {
      href: `/${params.storeId}/sizes`,
      label: 'Sizes',
      active: pathName.startsWith(`/${params.storeId}/sizes`),
    },
    {
      href: `/${params.storeId}/colors`,
      label: 'Colors',
      active: pathName.startsWith(`/${params.storeId}/colors`),
    },
    {
      href: `/${params.storeId}/products`,
      label: 'Products',
      active: pathName.startsWith(`/${params.storeId}/products`),
    },
    {
      href: `/${params.storeId}/settings`,
      label: 'Settings',
      active: pathName.startsWith(`/${params.storeId}/settings`),
    },
  ];
  return (
    <nav className={cn('px-2 flex items-center gap-2', className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
          )}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;

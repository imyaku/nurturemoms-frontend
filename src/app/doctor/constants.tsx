import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Appointment",
    path: "/projects",
    icon: <Icon icon="lucide:book" width="24" height="24" />,
    submenu: false,
    subMenuItems: [
      { title: "All", path: "/projects" },
      { title: "Web Design", path: "/projects/web-design" },
      { title: "Graphic Design", path: "/projects/graphic-design" },
    ],
  },
  {
    title: "Patients",
    path: "/messages",
    icon: <Icon icon="lucide:user" width="24" height="24" />,
  },
  {
    title: "Files&Media",
    path: "/messages",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "Profile",
    path: "/settings",
    icon: <Icon icon="lucide:user" width="24" height="24" />,
    submenu: false,
    subMenuItems: [
      { title: "Account", path: "/settings/account" },
      { title: "Privacy", path: "/settings/privacy" },
    ],
  },
  {
    title: "Logout",
    path: "/help",
    icon: <Icon icon="lucide:log-out" width="24" height="24" />,
  },
];

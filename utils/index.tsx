import { HiHome } from 'react-icons/hi';
import { LiaGlobeAfricaSolid } from 'react-icons/lia';
import { MdAdminPanelSettings } from 'react-icons/md';
import { PiUsersFourFill } from 'react-icons/pi';
import { RiCalendarEventFill } from 'react-icons/ri';

export const links = [
  { name: 'dashboard', icon: <HiHome />, page: '/dashboard/home' },
  {
    name: 'events',
    icon: <RiCalendarEventFill />,
    page: '/dashboard/events',
  },
  { name: 'blogs', icon: <LiaGlobeAfricaSolid />, page: '/dashboard/blogs' },
  { name: 'users', icon: <PiUsersFourFill />, page: '/dashboard/users' },
  { name: 'admins', icon: <MdAdminPanelSettings />, page: '/dashboard/admins' },
];

export const eventLinks = [
  { name: 'all', search: 'all' },
  { name: 'ongoing', search: 'ongoing' },
  { name: 'upcoming', search: 'upcoming' },
  { name: 'completed', search: 'completed' },
];

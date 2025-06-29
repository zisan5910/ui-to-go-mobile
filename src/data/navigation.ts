
import { NavigationItem } from '../types';
import { Home, FileText, CreditCard, MessageCircle, User } from 'lucide-react';

export const navigationData: NavigationItem[] = [
  {
    id: 'home',
    label: 'হোম',
    icon: <Home size={20} />,
    route: '/',
    isActive: true
  },
  {
    id: 'services',
    label: 'সেবা',
    icon: <FileText size={20} />,
    route: '/services'
  },
  {
    id: 'payments',
    label: 'পেমেন্ট',
    icon: <CreditCard size={20} />,
    route: '/payments'
  },
  {
    id: 'support',
    label: 'সাপোর্ট',
    icon: <MessageCircle size={20} />,
    route: '/support'
  },
  {
    id: 'profile',
    label: 'প্রোফাইল',
    icon: <User size={20} />,
    route: '/profile'
  }
];

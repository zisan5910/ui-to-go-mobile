
import { ServiceItem } from '../types';
import { 
  FileText, 
  CreditCard, 
  Building, 
  Car, 
  GraduationCap, 
  Heart, 
  Truck, 
  Shield,
  Users,
  Briefcase,
  Home,
  Zap
} from 'lucide-react';

export const servicesData: ServiceItem[] = [
  {
    id: 'birth-certificate',
    title: 'জন্ম নিবন্ধন',
    icon: <FileText size={32} />,
    color: 'bg-blue-500',
    route: '/services/birth-certificate'
  },
  {
    id: 'trade-license',
    title: 'ট্রেড লাইসেন্স',
    icon: <Briefcase size={32} />,
    color: 'bg-green-500',
    route: '/services/trade-license'
  },
  {
    id: 'tax-payment',
    title: 'কর পরিশোধ',
    icon: <CreditCard size={32} />,
    color: 'bg-purple-500',
    route: '/services/tax-payment'
  },
  {
    id: 'building-permit',
    title: 'ভবন অনুমতি',
    icon: <Building size={32} />,
    color: 'bg-orange-500',
    route: '/services/building-permit'
  },
  {
    id: 'driving-license',
    title: 'ড্রাইভিং লাইসেন্স',
    icon: <Car size={32} />,
    color: 'bg-red-500',
    route: '/services/driving-license'
  },
  {
    id: 'education',
    title: 'শিক্ষা সেবা',
    icon: <GraduationCap size={32} />,
    color: 'bg-indigo-500',
    route: '/services/education'
  },
  {
    id: 'health',
    title: 'স্বাস্থ্য সেবা',
    icon: <Heart size={32} />,
    color: 'bg-pink-500',
    route: '/services/health'
  },
  {
    id: 'waste-management',
    title: 'বর্জ্য ব্যবস্থাপনা',
    icon: <Truck size={32} />,
    color: 'bg-teal-500',
    route: '/services/waste-management'
  },
  {
    id: 'security',
    title: 'নিরাপত্তা সেবা',
    icon: <Shield size={32} />,
    color: 'bg-gray-600',
    route: '/services/security'
  },
  {
    id: 'citizen-services',
    title: 'নাগরিক সেবা',
    icon: <Users size={32} />,
    color: 'bg-cyan-500',
    route: '/services/citizen-services'
  },
  {
    id: 'housing',
    title: 'আবাসন সেবা',
    icon: <Home size={32} />,
    color: 'bg-yellow-600',
    route: '/services/housing'
  },
  {
    id: 'utilities',
    title: 'ইউটিলিটি সেবা',
    icon: <Zap size={32} />,
    color: 'bg-amber-500',
    route: '/services/utilities'
  }
];

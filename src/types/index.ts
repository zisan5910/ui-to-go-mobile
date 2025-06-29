
export interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  route?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  route: string;
  isActive?: boolean;
}

export interface AnnouncementItem {
  id: string;
  text: string;
  type: 'info' | 'warning' | 'success';
}

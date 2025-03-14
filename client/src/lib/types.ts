export interface NavItem {
  name: string;
  href: string;
  dropdown: boolean;
  items?: NavSubItem[];
}

export interface NavSubItem {
  name: string;
  href: string;
}

export interface SocialIcon {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  url: string;
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface AwardTab {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
}

export interface AwardCategory {
  icon: string;
  title: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

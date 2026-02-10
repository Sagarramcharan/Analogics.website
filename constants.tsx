
import React from 'react';
import { 
  Zap, 
  Cpu, 
  Fingerprint, 
  Bus, 
  HandCoins, 
  Sun, 
  ShieldCheck, 
  Smartphone 
} from 'lucide-react';
import { Service, Project, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'SOLUTIONS', href: '#projects' },
  { label: 'PRODUCTS', href: '#services' },
  { label: 'INDUSTRIES', href: '#industries' },
  { label: 'CASE STUDIES', href: '#testimonials' },
  { label: 'INNOVATION', href: '#innovation' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export const SECTORS = [
  { id: '1', title: 'UTILITIES', icon: <Zap className="w-8 h-8" /> },
  { id: '2', title: 'INTERNET OF THINGS', icon: <Cpu className="w-8 h-8" /> },
  { id: '3', title: 'BIOMETRIC ATTENDANCE', icon: <Fingerprint className="w-8 h-8" /> },
  { id: '4', title: 'TRANSPORT', icon: <Bus className="w-8 h-8" /> },
  { id: '5', title: 'BANKING', icon: <HandCoins className="w-8 h-8" /> },
  { id: '6', title: 'SOLAR', icon: <Sun className="w-8 h-8" /> },
  { id: '7', title: 'DEFENCE', icon: <ShieldCheck className="w-8 h-8" /> },
  { id: '8', title: 'RETAIL BILLING', icon: <Smartphone className="w-8 h-8" /> },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Photon-Counting CT',
    category: 'Healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p2',
    title: 'Automated Explosives Detection',
    category: 'Security',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p3',
    title: 'Semiconductor Fabrication',
    category: 'Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p4',
    title: 'Molecular Imaging Tools',
    category: 'Healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1579154235602-3c37efd5283a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p5',
    title: 'Cargo Inspection Portals',
    category: 'Security',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p6',
    title: 'Satellite Communication Hubs',
    category: 'Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Elena Rossi',
    role: 'Head of Radiology',
    company: 'Metropolis Health',
    content: 'The precision of components has fundamentally changed our diagnostic throughput. Their CT technology is peerless.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Director of Security',
    company: 'SkyBridge Aviation',
    content: 'In aviation security, there is no room for error. Analogics provides the most reliable material discrimination software we have ever used.',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
  },
  {
    id: 't3',
    name: 'Sarah Chen',
    role: 'VP Engineering',
    company: 'TechFab Global',
    content: 'Their power electronics systems integrated seamlessly into our production line, resulting in a 25% energy efficiency gain.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
];

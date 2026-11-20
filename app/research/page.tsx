import React from 'react';
import { Metadata } from 'next';
import CcdResearch from '@/components/CcdResearch';

export const metadata: Metadata = {
  title: 'About Café Coffee Day — Brand, Heritage & Coffee Culture',
  description:
    'Discover the journey of Café Coffee Day (Coffee Day Global Limited): pioneers of Indian café culture since 1996, Chikmagalur estate bean heritage, signature Chillers, and community initiatives.',
};

export default function ResearchPage() {
  return <CcdResearch />;
}

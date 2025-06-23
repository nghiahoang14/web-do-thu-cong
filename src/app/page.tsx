import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Chuyển hướng tới trang Client',
};

export default function Home() {
  redirect('/Client');
}

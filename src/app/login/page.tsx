'use client';

import { LoginForm } from '@/components/LoginForm';
import { AuthProvider } from '@/contexts/AuthContext';

export default function LoginPage() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}
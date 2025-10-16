import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../services';
import { PageHeader } from '../components/layout';
import { FormInput, Button } from '../components/ui';

function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await auth.login({
        username: formData.email,
        password: formData.password
      });
      
      toast.success('Welcome back!');
      navigate('/');
    } catch (_) {
      toast.error('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <PageHeader />

      <main className="flex-1 flex items-start justify-center px-4 pt-16">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img src="/logo-dark.svg" alt="Flipit Logo" className="h-48 w-48" />
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-400">
                Sign in to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />

              <FormInput
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                disabled={isLoading}
                fullWidth
                variant="primary"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/signup"
                className="text-brand-orange hover:text-brand-orange/90 transition-colors"
              >
                Don't have an account? Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../services';
import { PageHeader } from '../components/layout';
import { FormInput, FormCheckbox, Button } from '../components/ui';

function SignupPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error('Please agree to the Terms of Service');
      return;
    }

    setIsLoading(true);
    try {
      await auth.signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });
      
      toast.success('Welcome to FlipIt!');
      navigate('/');
    } catch (error: any) {
      if (error.message.includes('already registered')) {
        toast.error(error.message);
        navigate('/login');
      } else {
        toast.error('Failed to create account. Please try again.');
      }
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
                Gain instant access!
              </h1>
              <p className="text-gray-400">
                Limited Beta Spots Available
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

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
                minLength={8}
              />

              <FormInput
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <FormCheckbox
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                label={
                  <>
                    I agree to the{' '}
                    <a 
                      href="https://flipit.com/terms" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-brand-orange hover:text-brand-orange/90"
                    >
                      Terms of Service
                    </a>
                  </>
                }
              />

              <Button
                type="submit"
                disabled={isLoading}
                fullWidth
                variant="primary"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="text-brand-orange hover:text-brand-orange/90 transition-colors"
              >
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignupPage;
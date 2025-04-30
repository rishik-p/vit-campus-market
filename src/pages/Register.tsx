
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validate college email
    if (!email.endsWith('.edu')) {
      setError("Please use your college email address (.edu)");
      return;
    }
    
    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call to send OTP
    setTimeout(() => {
      setIsLoading(false);
      setStep(2); // Move to OTP verification step
    }, 1000);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call to verify OTP
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, let's say OTP 123456 is valid
      if (otp === "123456") {
        // Registration successful - in a real app, we would redirect or login the user
        alert("Registration successful! OTP verification functionality will be fully implemented in the next phase!");
      } else {
        setError("Invalid OTP. For this demo, use 123456");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">
                {step === 1 ? "Create Your Account" : "Verify Your Email"}
              </h1>
              <p className="text-gray-600 mt-1">
                {step === 1 
                  ? "Join VitReSell to buy and sell within your campus community" 
                  : "Enter the 6-digit code sent to your email"}
              </p>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
                {error}
              </div>
            )}
            
            {step === 1 ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    College Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.name@college.edu"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Must be a valid college email address with .edu domain
                  </p>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Must be at least 8 characters
                  </p>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-brand-purple hover:bg-brand-purple/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-brand-purple hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <div className="mb-6">
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                    6-Digit Code
                  </label>
                  <input
                    id="otp"
                    type="text"
                    placeholder="123456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-center tracking-widest text-lg"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                    required
                    maxLength={6}
                    pattern="\d{6}"
                  />
                  <p className="text-xs text-gray-500 mt-1 text-center">
                    For this demo, use code: 123456
                  </p>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-brand-purple hover:bg-brand-purple/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </Button>
                
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    className="text-sm text-brand-purple hover:underline"
                    onClick={() => setStep(1)}
                  >
                    Back to registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;

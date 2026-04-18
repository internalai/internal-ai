"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

const TestBackend = () => {
  const [isTesting, setIsTesting] = useState(false);

  const testBackend = async () => {
    setIsTesting(true);
    try {
      const response = await fetch('http://localhost:3001/api/health');
      if (response.ok) {
        const data = await response.json();
        toast.success(`Backend is working: ${data.message}`);
      } else {
        toast.error('Backend is not responding');
      }
    } catch (error) {
      toast.error('Cannot connect to backend. Make sure the server is running on port 3001');
    } finally {
      setIsTesting(false);
    }
  };

  const testRegistration = async () => {
    setIsTesting(true);
    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'password123',
          full_name: 'Test User',
          rank: 'Test Rank'
        })
      });
      
      if (response.ok) {
        toast.success('Registration endpoint is working');
      } else {
        const errorData = await response.json();
        toast.error(`Registration failed: ${errorData.error}`);
      }
    } catch (error) {
      toast.error('Cannot connect to registration endpoint');
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Backend Connection Test</h2>
        
        <div className="space-y-4">
          <Button 
            onClick={testBackend}
            disabled={isTesting}
            className="w-full"
          >
            {isTesting ? 'Testing...' : 'Test Backend Health'}
          </Button>
          
          <Button 
            onClick={testRegistration}
            disabled={isTesting}
            variant="outline"
            className="w-full"
          >
            {isTesting ? 'Testing...' : 'Test Registration Endpoint'}
          </Button>
        </div>
        
        <div className="mt-6 p-4 bg-slate-100 rounded-lg">
          <h3 className="font-semibold text-slate-800 mb-2">Instructions:</h3>
          <ol className="text-sm text-slate-600 space-y-1 list-decimal list-inside">
            <li>Make sure backend server is running on port 3001</li>
            <li>Click "Test Backend Health" first</li>
            <li>If health check passes, try "Test Registration Endpoint"</li>
            <li>If both fail, check server logs for errors</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TestBackend;
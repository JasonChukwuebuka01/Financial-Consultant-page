'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const SignIn = () => {
    


    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-2xl px-4 py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number Animation */}
          <motion.h1 
            className="text-9xl font-bold text-gray-800"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-gray-700 mt-8 mb-4">
              Page Not Included Yet
            </h2>
            <p className="text-gray-600 mb-8">
              There is where Dashboards comes in..
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/">
              <Button 
                className="flex items-center gap-2 px-6 py-2"
                variant="default"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="flex items-center gap-2 px-6 py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="mt-12 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm">
                Need assistance? <Link href="/contact" className="text-blue-600 hover:underline">Contact our support team</Link>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
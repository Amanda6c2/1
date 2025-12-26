'use client';

import { PhoneNumber, Country } from '@/lib/types';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Check } from 'lucide-react';

interface PhoneListProps {
  country: Country;
  phoneNumbers: PhoneNumber[];
  onSelectPhone: (phone: PhoneNumber) => void;
  onBack: () => void;
}

export function PhoneList({ country, phoneNumbers, onSelectPhone, onBack }: PhoneListProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -5 }}
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6 sm:mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-base sm:text-lg">Back</span>
      </motion.button>

      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <span className="text-5xl sm:text-6xl">{country.flag}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-2">
          {country.name}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          Choose an available phone number
        </p>
      </div>

      <div className="space-y-4">
        {phoneNumbers.map((phone, index) => (
          <motion.div
            key={phone.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white font-mono">
                      {phone.countryCode} {phone.number}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    {phone.available && (
                      <>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">
                          Available
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectPhone(phone)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center sm:justify-start space-x-2"
              >
                <span>Select</span>
                <Check className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

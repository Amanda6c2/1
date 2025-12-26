'use client';

import { Country } from '@/lib/types';
import { motion } from 'framer-motion';

interface CountrySelectorProps {
  countries: Country[];
  onSelectCountry: (country: Country) => void;
}

export function CountrySelector({ countries, onSelectCountry }: CountrySelectorProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Receive SMS Online
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Select a country to get started
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {countries.map((country, index) => (
          <motion.button
            key={country.code}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCountry(country)}
            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="flex flex-col items-center space-y-2 sm:space-y-4">
              <div className="text-4xl sm:text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110">
                {country.flag}
              </div>
              <div className="text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                  {country.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {country.dialCode}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// EnquireNowModal.jsx

import React, { useState, useRef, useEffect } from 'react';

const EnquireNowModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileValue, setMobileValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mobileInputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Fetch country data from the API on component mount
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,idd')
      .then(response => response.json())
      .then(data => {
        // Filter and map the data to a simplified format
        const formattedCountries = data
          .filter(country => country.idd.root && country.idd.suffixes)
          .map(country => ({
            name: country.name.common,
            flag: country.flags.svg,
            code: country.idd.root + country.idd.suffixes[0]
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        
        setCountries(formattedCountries);
        setSelectedCountry(formattedCountries.find(c => c.code === '+91') || formattedCountries[0]);
      })
      .catch(error => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Reset form on open
      setName('');
      setEmail('');
      setMobileValue('');
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setMobileValue(e.target.value);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      phone: selectedCountry.code + mobileValue,
    };

    try {
      const response = await fetch('YOUR_PHP_ENDPOINT.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        onClose(); // Close the modal on success
      } else {
        alert(result.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send inquiry. Please try again.');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/92 z-50">
      <div className="bg-white md:pb-20 md:pt-15 p-8 md:pr-12 md:pl-12 shadow-xl relative w-11/12 md:w-[22.22%]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:cursor-pointer text-3xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-3xl font-serif text-center text-black mb-6">Enquire Now</h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="modalName"
              name="name"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 w-full border-b placeholder:text-sm border-gray-400 focus:outline-none text-black placeholder-[#c96c4a]"
            />
          </div>
          
          <div className="relative">
            <input
              type="email"
              id="modalEmail"
              name="email"
              placeholder="E-mail*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-full border-b border-gray-400 focus:outline-none text-black placeholder:text-sm placeholder-[#c96c4a]"
            />
          </div>
          
          <div className="border-b border-gray-400 focus:outline-none relative" ref={dropdownRef}>
            <div className="flex items-center cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span className="text-black text-base flex items-center pr-2 relative">
                {selectedCountry && <img src={selectedCountry.flag} alt={`${selectedCountry.name} flag`} className="inline-block h-3.5 w-6 mr-2" />}
                {selectedCountry && selectedCountry.code}
              </span>
              <input
                ref={mobileInputRef}
                type="tel"
                id="modalMobile"
                name="phone"
                value={mobileValue}
                onChange={handleChange}
                placeholder="Mobile No*"
                className="p-2 w-full focus:outline-none text-black placeholder:text-sm placeholder-[#c96c4a] pl-5"
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <ul className="max-h-60 overflow-y-auto">
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      onClick={() => handleCountrySelect(country)}
                      className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img src={country.flag} alt={`${country.name} flag`} className="inline-block h-4 w-6 mr-2" />
                      <span className="text-black text-sm">{country.name}</span>
                      <span className="text-gray-500 text-sm ml-auto">{country.code}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-black text-white px-8 py-1.5 cursor-pointer font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquireNowModal;
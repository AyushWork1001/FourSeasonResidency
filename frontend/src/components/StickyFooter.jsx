import React, { useState, useRef, useEffect } from 'react';

const StickyFooter = ({ openModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileValue, setMobileValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const mobileInputRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileContainerRef = useRef(null);

  // Fetch country data from the API on component mount
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,idd')
      .then(response => response.json())
      .then(data => {
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        mobileContainerRef.current && !mobileContainerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => setMobileValue(e.target.value);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    if (mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  };
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
        // Clear the form
        setName('');
        setEmail('');
        setMobileValue('');
      } else {
        alert(result.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send inquiry. Please try again.');
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50">
      {/* Mobile Footer (visible on small screens) */}
      <div className="md:hidden w-full bg-[#c96c4a] px-4 flex justify-between items-center py-2 space-x-6"> 
        <a href="tel:+919876543210" className="flex items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-2">
            <path d="M6.62 10.79a15.42 15.42 0 006.59 6.59l2.21-2.21a.996.996 0 01.96-.23c1.72.43 3.53.66 5.37.66h.05a1 1 0 011 1v4a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h4a1 1 0 011 1c0 1.84.23 3.65.66 5.37a.996.996 0 01-.23.96l-2.21 2.21z" />
          </svg>
          <span className="text-md font-sans font-normal">+91 98765 43210</span>
        </a>
        <button
          onClick={openModal}
          className="bg-[#c96c4a] text-white px-2 py-2 text-md font-sans "
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-2 inline-block">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
          Enquire Now
        </button>
      </div>

      {/* Desktop Footer (visible on medium screens and up) */}
      <div className="hidden md:flex w-full bg-white px-12 items-center justify-center space-x-6 py-3 pb-3">
        <h2 className="text-3xl font-serif text-black">Enquire Now</h2>
        <form onSubmit={handleSubmit} className="flex items-center space-x-14">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border-b border-black focus:outline-none text-black placeholder:text-sm placeholder-[#c96c4a]"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border-b border-black focus:outline-none text-black placeholder:text-sm placeholder-[#c96c4a]"
            />
          </div>
          <div className="relative" ref={mobileContainerRef}>
            <div className="border-b border-black flex items-center">
              <span
                className="text-black text-base flex items-center pr-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                {selectedCountry && (
                  <img
                    src={selectedCountry.flag}
                    alt={`${selectedCountry.name} flag`}
                    className="inline-block h-3 w-4 mr-1"
                  />
                )}
                {selectedCountry && selectedCountry.code}
              </span>
              <input
                ref={mobileInputRef}
                type="tel"
                id="mobile"
                name="phone"
                value={mobileValue}
                onChange={handleChange}
                placeholder="Mobile No*"
                className="p-2 focus:outline-none text-black placeholder:text-sm placeholder-[#c96c4a] w-full"
              />
            </div>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute bottom-full mb-2 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
              >
                <ul>
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      onClick={() => handleCountrySelect(country)}
                      className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="inline-block h-4 w-6 mr-2"
                      />
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
            className="bg-black text-white px-8 pt-2 pb-2 font-sans font-bold hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default StickyFooter;
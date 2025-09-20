import React, { useState, useRef, useEffect } from 'react';

const EnquiryForm2 = () => {
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

  const handleMobileChange = (e) => setMobileValue(e.target.value);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    if (mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  };
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone: selectedCountry.code + mobileValue,
    };

    try {
      const response = await fetch('https://marketing.tch.digital/contact.php', {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white md:bg-black px-2 sm:px-4 md:px-0 py-0 md:py-0 lg:py-8">
      {/* Main container for form */}
      <div className="w-full md:w-180 border-2 border-transparent hover:border-black transition-all duration-300 md:pt-15 md:pb-8 bg-white shadow-lg text-center">
        
        {/* Sales Office and address */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-3xl text-[rgb(82,82,82)] font-jeles text-center mb-10">
            Sales Office
          </h2>
          <p className="font-segoe text-[14px] sm:text-[18px] md:text-[17px] text-black leading-relaxed text-center md:px-0 px-2 md:pb-4">
            Modern Heights, Sector 45, Dadar
          </p>
        </div>

        {/* Enquire Now heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-3xl text-[rgb(82,82,82)] font-jeles text-center mb-5">
            Enquire Now 
          </h2>
        </div>
        
        <p className="font-segoe text-[14px] sm:text-[18px] md:text-[17px] text-black leading-relaxed text-center md:px-0 px-2 pb-7">
          📞 Phone: +91-98765-43210 <br/>📧 Email: sales@modernheights.in<br/>OR<br/>Fill out the contact form and our team will get in touch with you within 24 hours.
        </p>

        {/* Form */}
        <form className="w-full space-y-5 px-3 sm:px-4 md:px-18" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="border-b border-black">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 bg-transparent font-sans text-sm text-black placeholder-black outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="border-b border-black">
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 bg-transparent font-sans text-sm text-black placeholder-black outline-none"
            />
          </div>

          {/* Mobile Input with Country Code */}
          <div className="relative" ref={mobileContainerRef}>
            <div className="border-b border-black flex items-center">
              <span
                className="text-black text-sm flex items-center pr-2 cursor-pointer"
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
                name="phone"
                id="mobile"
                value={mobileValue}
                onChange={handleMobileChange}
                placeholder="Mobile No*"
                className="p-2 focus:outline-none bg-transparent font-sans text-sm text-black placeholder-black outline-none w-full"
              />
            </div>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full mt-2 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-black text-white font-sans text-base cursor-pointer hover:bg-gray-800 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm2;
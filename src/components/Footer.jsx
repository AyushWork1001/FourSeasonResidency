import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white">
   
      
      {/* Disclaimer Section */}
      <div className="bg-white  text-black py-12 md:pr-0 md:pl-0 px-4 pb-25 md:px-20 text-center">
        <div className="flex flex-col md:flex-row items-top justify-center space-y-4 md:space-y-0 md:space-x-8 max-w-7xl mx-auto ">
          <img src="/disclaimer.png" alt="Disclaimer Logo" className="w-20 h-20 md:w-24 md:h-24" />
          <div className="text-sm text-black  text-justify">
            <p className="mb-4  ">
              This website is a concise representation of our project. Please contact a member of our Sales Team before making a purchase decision. The project is indicative of the kind of development that is proposed. Artist’s impressions are used to illustrate products and features. Furnishings, fixtures, fittings etc, if any, are shown for reference only. Provenance Land reserves the right to alter, amend and vary the layout, plans specifications or features subject to the approval of the authorities, without prior notice or obligation. Four Seasons Private Residences, Mumbai are not owned, developed or sold by Four Seasons Hotels Limited or its affiliates (Four Seasons). Provenance Land, the developer, uses the Four Seasons trademarks and trade names under a license from Four Seasons Hotels and Resorts Asia Pacific Pte. Ltd. The marks “FOUR SEASONS”, “FOUR SEASONS HOTELS AND RESORTS”, any combination thereof and the Tree Design are registered trademarks of Four Seasons Limited in Canada and U.S.A. and of Four Seasons Hotels (Barbados) Ltd. elsewhere. Prices, sizes and specifications are subject to change without notice. E. & O. E. Photographs and Illustrations are representational. Facilities/layouts/specification/information/images/brand name contained/ or mentioned herein are indicative and subject to change as maybe required by the authorities/developers and cannot form part of any offer or contract. © 2015 Provenance Land Pvt. Ltd. All rights reserved.
            </p>
            <p className="mb-2">This project has been funded by HDFC Ltd and Axis Bank.</p>
            <p>
              The project has been registered via MahaRERA registration number: Phase 1 - PS 1900002789 | Phase 2 - PS 1900002856 and is available on the website: https://maharera.mahaonline.gov.in under registered projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
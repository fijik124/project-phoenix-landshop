// app/ui/header/ResponsiveHeader.jsx

import DesktopNavBar from '@/app/ui/header/main'; // Your original NavBar
import MobileNavBar from '@/app/ui/header/mobileMain'; // Your new mobile menu

export default function ResponsiveHeader() {
  return (
    <>
      {/* 1. Mobile View (Default)
        - The MobileNavBar is shown by default (no prefix).
        - It is hidden on large screens (lg:hidden).
      */}
      <div className="lg:hidden">
        <MobileNavBar />
      </div>

      {/* 2. Desktop View
        - The DesktopNavBar is hidden by default (hidden).
        - It is shown only on large screens (lg:block).
      */}
      <div className="hidden lg:block">
        <DesktopNavBar />
      </div>
    </>
  );
}
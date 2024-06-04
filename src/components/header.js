import React from "react";
import Image from "react-bootstrap/Image";
import headerLeft from "../images/mgh_header_left.svg";
import headerRight from "../images/mgh_header_right.svg";

const Header = () => {
  return (
    <header className="clearfix">
      <div className="header header-left header-padding-left">
          <Image src={ headerLeft } fluid="true" />
      </div>
      <div className="header header-right header-padding-right">
          <Image src={ headerRight } fluid="true" />
      </div>

      {/* Google Tag Manager Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MP9X6D8M');
        `,
      }} />
    </header>
  );
}

export default Header;

import Script from "next/script";

const GA_TRACKING_ID = "G-LNTTQ9YD8G"; // Replace with your actual ID

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;

import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default layout;

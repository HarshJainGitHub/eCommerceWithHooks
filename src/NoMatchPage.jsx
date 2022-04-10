import React from "react";
import { useEffect } from 'react';

function NoMatchPage() {
  useEffect( () => {
    document.title = "pageNotFound (404)- eCommerce";
  }, []);
  return <h1 className="text-danger">Page not found</h1>;
}

export default NoMatchPage;

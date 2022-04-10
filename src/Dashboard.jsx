import React from 'react'
import { useEffect } from 'react';

const Dashboard = () => {
  useEffect( () => {
    document.title = "Dashboard - eCommerce";
  }, []);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {user ? (
        <>
          <h1>Welcome, {user.name || user.email}!</h1>
          <p>Email: {user.email}</p>
          {user?.phone && <p>Phone: {user.phone}</p>}
          {user?.dob && <p>Date of Birth: {user.dob}</p>}

          <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogout}
            >
              Logout
          </Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;


// Custom hook for Auth
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthentication = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated;
};

export default useAuthentication;

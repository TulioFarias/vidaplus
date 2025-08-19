import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
      setLoading(false);
    });


    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Carregando...</div>; 
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;

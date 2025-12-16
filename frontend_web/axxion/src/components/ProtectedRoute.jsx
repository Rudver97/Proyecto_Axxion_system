import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const token = localStorage.getItem('token');
  const rol = localStorage.getItem('rol');

  if (!token) return <Navigate to="/login" />;
  if (allowedRoles.length && !allowedRoles.includes(rol)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

import { Link } from 'react-router-dom';

export default function Navbar() {
  const rol = localStorage.getItem('rol');

  return (
    <nav className="bg-gray-800 p-4 text-white flex space-x-4">
      <Link to="/dashboard">Dashboard</Link>
      {rol === 'admin' && <Link to="/admin">Admin</Link>}
      {rol === 'usuario' && <Link to="/user">User</Link>}
    </nav>
  );
}

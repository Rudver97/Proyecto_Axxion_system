import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  const rol = localStorage.getItem("rol");

  return (
    <div className="grid grid-cols-[260px_1fr] h-screen w-screen bg-[#f0f2f5] overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
}

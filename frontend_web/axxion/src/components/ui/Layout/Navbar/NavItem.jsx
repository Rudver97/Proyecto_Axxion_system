export default function NavItem() {
    // Componentes auxiliares
const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-5 py-2.5 text-sm cursor-pointer transition-all border-l-3 ${active ? "bg-[#4f6ef7]/15 text-white border-l-[#4f6ef7]" : "text-white/50 hover:text-white hover:bg-white/5 border-l-transparent"}`}>
    <span className="text-base w-5 text-center">{icon}</span>
    <span>{label}</span>
  </div>
);

}
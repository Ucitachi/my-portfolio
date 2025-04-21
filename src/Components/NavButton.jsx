const NavButton = ({ name, value, setActiveComponent, darkMode }) => (
    <button 
      onClick={() => setActiveComponent(value)}
      className={`${darkMode ? "text-white" : ""} hover:text-gray-400`}
    >
      {name}
    </button>
  );
export default NavButton;  
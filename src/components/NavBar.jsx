const NavBar = () => {
  return (
    
        <nav className="flex items-center justify-center text-center h-8 px-4 m-3">
          <a className="text-sm font-medium p-5" href="/">
            Equipment
          </a>
          <a className="text-sm font-medium p-5" href="/customers">
            Customer
          </a>
          <a className="text-sm font-medium p-5" href="/rentals">
            Rental
          </a>
        </nav>
    
  );
};

export default NavBar;
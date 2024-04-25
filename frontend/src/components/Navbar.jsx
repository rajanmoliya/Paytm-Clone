function Navbar() {
  return (
    <div className="flex justify-between items-center border-b p-4 ">
      <div>PayTM App</div>

      <div className="flex items-center">
        <div className="mr-4">Hello</div>

        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            RM
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

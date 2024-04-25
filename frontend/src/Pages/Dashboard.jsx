import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className=" bg-slate-100 h-screen">
        <div className="flex p-4 font-bold ">
          <h1 className="mr-3">Your balance</h1>
          <h1>Rs 10,000</h1>
        </div>
        <div className="flex font-bold ml-4">Users</div>
        <div className="p-4">
          <input
            type="text"
            className="border  w-full p-4 h-5 "
            placeholder="Search users..."
          />
        </div>

        <div className="flex p-4 justify-between items-center ">
          <div className="flex items-center">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                RM
              </span>
            </div>
            <div className="ml-3">Rajan Moliya</div>
          </div>

          <div>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700  "
            >
              Send Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

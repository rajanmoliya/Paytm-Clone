import { useNavigate } from "react-router-dom";

function User({ user, id }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex p-4 justify-between items-center ">
        <div className="flex items-center">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {user[0].toUpperCase()}
            </span>
          </div>
          <div className="ml-3">{user}</div>
        </div>

        <div>
          <button
            onClick={() => {
              navigate(`/send?id=${id}&name=${user}`);
            }}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700  "
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;

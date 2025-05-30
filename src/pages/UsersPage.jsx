import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Spinner from "../components/Spinner";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // get users from API
  const getUsers = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:3001/users?_page=${page}&_limit=20`
    );
    setUsers((prev) => [...prev, ...response.data]);
    setLoading(false);
  };

  // useEffect hook to get users when page changes
  useEffect(() => {
    getUsers();
  }, [page]);

  // handle scroll event to load more users when reaching the bottom of the page
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading
    ) {
      setPage((prev) => prev + 1);
    }
  };

  // useEffect hook to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="p-6 space-y-4 bg-gray-50 min-h-screen w-full">
      <h2 className="text-2xl font-bold text-center py-5">
        لیست کاربران سیب ترش
      </h2>

      <div className="grid grid-cols-12 gap-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {loading && <Spinner />}
    </div>
  );
}

export default UsersPage;

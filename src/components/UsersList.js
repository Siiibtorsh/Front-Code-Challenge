import { useEffect, useState, useRef, useCallback } from "react";

import { fetchUsers } from "../API/fetchUsers";
import Spinner from "./Spinner";
import User from "./User";

export default function UsersList({ filterCriteria }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const observer = useRef(null);

  const lastUserRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        { threshold: 1.0 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data, hasMore } = await fetchUsers(page);
        setUsers((prev) => [...prev, ...data]);
        setHasMore(hasMore);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);

  let filteredData = users;

  if (filterCriteria.gender) {
    filteredData = users.filter((user) => {
      return user.gender === filterCriteria.gender;
    });
  }

  if (filterCriteria.searchTerm) {
    filteredData = users.filter((user) => {
      if (!filterCriteria.searchTerm) return true;
      return (
        user.firstName
          .toLowerCase()
          .includes(filterCriteria.searchTerm.toLowerCase()) ||
        user.lastName
          .toLowerCase()
          .includes(filterCriteria.searchTerm.toLowerCase())
      );
    });
  }

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      <div className="w-full max-w-2xl shadow-md rounded-md hidden sm:grid grid-cols-[50px_repeat(4,_1fr)] items-center p-4 mb-5">
        <span>ID</span>
        <span>avatar</span>
        <span>First Name</span>
        <span>Last Name</span>
        <span>Gender</span>
      </div>
      {filteredData.map((user, index) => {
        if (filteredData.length === index + 1) {
          return <User key={user.id} data={user} elementRef={lastUserRef} />;
        } else {
          return <User key={user.id} data={user} />;
        }
      })}
      {loading && <Spinner />}
      {error && <p className="text-center text-red-500 py-4">{error}</p>}
    </div>
  );
}

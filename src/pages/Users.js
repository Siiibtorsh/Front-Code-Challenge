import React, { useState } from "react";
import UsersList from "../components/UsersList";
import Filter from "../components/Filter";

export default function Users() {
  const [filterCriteria, setFilterCriteria] = useState({
    searchTerm: "",
    gender: "",
  });

  return (
    <div>
      <Filter setFilterCriteria={setFilterCriteria} />
      <UsersList filterCriteria={filterCriteria} />
    </div>
  );
}

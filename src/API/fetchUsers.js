import axios from "axios";

const fetchUsers = async (pageNum) => {
  try {
    const res = await axios.get(`http://localhost:4000/users?_page=${pageNum}`);
    return { data: res.data.data, hasMore: !!res.data.next };
  } catch (error) {
    throw new Error("somthing went wrong on the server");
  }
};

export { fetchUsers };

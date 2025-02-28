import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchuser = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return data;
};
function Users() {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchuser,
  });
  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          {user.name}
          {user.email}
        </li>
      ))}
    </ul>
  );
}

export default Users;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const addUser = async () => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    user
  );
  return data;
};
function AddUser() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
  return (
    <button onClick={() => mutation.mutate({ name: "New User" })}>
      Add User
    </button>
  );
}
export default AddUser;

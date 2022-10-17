import React, { useState } from "react";

import { useUsersQuery, useUserMutation } from "../services/reqresinAPI";

const SecondPage = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const { data: users } = useUsersQuery();
  const [dispatchUserMutation, { data: newUser }] = useUserMutation();

  const formOnSubmitHandler = (evt) => {
    evt.preventDefault();
    // Panggil mutation
    dispatchUserMutation({
      name,
      job,
    });
  };

  // bye useEffect
  // useEffect(() => {}, []);

  return (
    <>
      <div className="flex min-w-full min-h-[100vh] p-0 items-center justify-center">
        <div>
          <p className="font-semibold text-3xl">Second Page</p>

          {/* Table */}
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>email</th>
                <th>full name</th>
              </tr>
            </thead>
            <tbody>
              {/* Karena di sini tidak menggunakan isLoading, jadi menggunakan optional chaining */}
              {users?.data?.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <form
            className="flex flex-col gap-2 mt-4"
            onSubmit={formOnSubmitHandler}
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              className="py-4 px-2 border border-gray-200"
            />
            <input
              type="text"
              placeholder="Job"
              value={job}
              onChange={(evt) => setJob(evt.target.value)}
              className="py-4 px-2 border border-gray-200"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-full"
            >
              Tambah User
            </button>
          </form>

          {newUser ? JSON.stringify(newUser) : ""}
        </div>
      </div>
    </>
  );
};

export default SecondPage;

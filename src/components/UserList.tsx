import UserListFilters from "./UserListFilters"
import UserListPagination from "./UserListPagination"
import UserListRows from "./UserListRows"
import UsersListViewSelector from "./UsersListViewSelector"

function UserList() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center">User List</h1>
      <UserListFilters />
      <UsersListViewSelector />
      <UserListRows />
      <UserListPagination />
    </>
  )
}

export default UserList
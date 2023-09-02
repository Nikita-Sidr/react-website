import React from "react";
import Paginator from "./Paginator";
import User from "./User";


let Users = ({ users, follow, unfollow, followingInProgress, currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} />
            {
                users.map(u => <User users={users} key={u.id} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} />)
            }
        </div>
    )
}
export default Users
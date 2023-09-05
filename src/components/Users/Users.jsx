import React from "react";
import Paginator from "./Paginator";
import User from "./User";


let Users = ({ users, follow, unfollow, followingInProgress, currentPage, totalUsersCount, pageSize, onPageChanged, portionSize,  ...props }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} portionSize={portionSize} />
            {
                users.map(u => <User users={users} key={u.id} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} />)
            }
        </div>
    )
}
export default Users
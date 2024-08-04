import s from "../FriendList/FriendList.module.css";
import FriendListItem from "./FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((item) => {
        return (
          <FriendListItem
            avatar={item.avatar}
            key={item.id}
            isOnline={item.isOnline}
            name={item.name}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;

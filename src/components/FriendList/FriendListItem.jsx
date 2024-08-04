import s from "../FriendList/FriendList.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <img className={s.img} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
      <p className={isOnline ? s.online : s.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
}

export default FriendListItem;

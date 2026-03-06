import FriendListItem from "../friendlistitem/friendlistitem";
import styles from "./friendlist.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
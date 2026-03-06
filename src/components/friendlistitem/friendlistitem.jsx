import styles from "./friendlistitem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
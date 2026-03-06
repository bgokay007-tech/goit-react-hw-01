import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span>Followers</span><br />
          <span>{stats.followers}</span>
        </li>

        <li>
          <span>Views</span><br />
          <span>{stats.views}</span>
        </li>

        <li>
          <span>Likes</span><br />
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
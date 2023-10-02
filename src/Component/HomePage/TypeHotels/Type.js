import styles from "./Type.module.css";

//danh sach cac kieu hotel
function Type(props) {
  const link = '#';
  return (
    <div className={`${props.className}`}>
      <img
        src={`${props.type.image}`}
        className={styles.imgType}
        alt={`${props.type.name}`}
      />
      <h5 className={`${styles.typeName}`}>
        <a href={link}>{props.type.name}</a>
      </h5>
      <p>{`${props.type.count} hotels`}</p>
    </div>
  );
}

export default Type;

import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <div className={css.itemContainer}>
          <IoPerson className={css.svg} />
          <p>{name}</p>
        </div>
        <div className={css.itemContainer}>
          <FaPhoneAlt className={css.svg} />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

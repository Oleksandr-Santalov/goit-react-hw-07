import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const Contact = ({ item }) => {
  // console.log(baseState);
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.item}>
        <div className={css.name}>
          <BsFillPersonFill />
          <p>{item.name}</p>
        </div>

        <div className={css.number}>
          <BsFillTelephoneFill />
          <p>{item.number}</p>
        </div>

        <button
          className={css["delete-btn"]}
          onClick={() => {
            dispatch(deleteContact(item.id));
          }}
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;

import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from "../../redux/contactsSlice.js";
import { fetchContacts } from "../../redux/contactsOps.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactsArray = useSelector(selectContacts);
  console.log(contactsArray.length);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {isLoading && <p>Progress loading...</p>}
      {error && <p>Sorry! Something went wrong...{error}</p>}
      {contactsArray.length > 0 && <ContactList />}
    </div>
  );
};

export default App;

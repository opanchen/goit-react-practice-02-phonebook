
import { ContactForm, ContactList, Filter } from "components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css'
// import { Routes, Route } from "react-router-dom";
// import { SharedLayout } from "./SharedLayout/SharedLayout";
// import { ContactsPage } from "pages/ContactsPage";
// import { EditContact } from "pages/EditContact";
// import { CreateContact } from "pages/CreateContact";

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={ <SharedLayout /> } >
//        <Route path="/contacts" element={ <ContactsPage /> }>
//         <Route path="create" element={ <CreateContact />}/>
//        </Route>
//        <Route path="/contacts/:contactId/edit" element={ <EditContact /> }/>
       
//        <Route path="*" element={ <ContactsPage /> }/>
//       </Route>

//     </Routes>
//   )
// }

export const App = () => {
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      {/* {error && <Error message={error}/>}
      {isLoading && !error && <Loader />} */}

      <ContactList />

      <ToastContainer autoClose={3000} />
    </div>
  )
}
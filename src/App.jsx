import Aside from "./component/Aside";
import FormContextProvider from './context/stepContext'
import FormContainer from "./component/formContainer";
FormContainer
function App() {
  return (
    <FormContextProvider>
      <main className="main-container">
        <Aside />
        <FormContainer />

      </main>
    </FormContextProvider>
  )

}

export default App

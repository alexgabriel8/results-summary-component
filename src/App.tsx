import { ResultsSummary } from "./components/results-summary/results-summary"
import { ThemeToggler } from "./components/theme-toggler/theme-toggler"
import { Modal } from "./components/modal/modal"

function App() {
  return (
    <>
      <ThemeToggler />
      <ResultsSummary />
      <Modal>
        Functionality not ready yet. Please be patient, because the wait will be worth it - we promise!
      </Modal>
    </>
  )
}

export default App
import { GlobalStyle } from './styled'
import PageWrapper from '@layout/PageWrapper/PageWrapper'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper />     
    </>
  )
}

export default App

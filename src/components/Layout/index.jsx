import { Navbar } from '../Navbar/index'; // Importação atualizada
import { LayoutWrapper, MainContent } from './style';

export function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar />
      <MainContent>
        {children}
      </MainContent>
    </LayoutWrapper>
  )
}
import { Notss } from './anotaçoes/notss';
import { Header } from './header/header';
import { Text } from './text/Text';
import CustomerProvider  from './context/customer';


export function App() {

  return (
  <>
    <CustomerProvider>
       <Header/>
       <Text/>
       <Notss/>
     </CustomerProvider>
  </>  
  );
}



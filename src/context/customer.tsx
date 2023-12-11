import { useState, createContext, ReactNode, Dispatch, SetStateAction } from "react";

interface CustomerProviderProps {
  children: ReactNode;
}

interface nota {
  id: number;
  desc: string;
  titu: string;
}

interface notssContextData {
  Notss: nota[];
  CreateNotss: (Nota: nota) => void;
  removeNotss: (NotssId: number) => void;
  setNotss: Dispatch<SetStateAction<nota[]>>; // Adicionando a propriedade setNotss
}

export const CustomerContext = createContext({} as notssContextData);

function CustomerProvider({ children }: CustomerProviderProps) {
  const [Notss, setNotss] = useState<nota[]>([]);

  function CreateNotss(Nota: nota) {
    setNotss([...Notss, Nota]);
  }

  function removeNotss(NotssId: number) {
    const updatedNotss = [...Notss];
    const filtered = updatedNotss.filter((todo) => todo.id !== NotssId);
    setNotss(filtered);
  }

  return (
    <CustomerContext.Provider value={{ CreateNotss, Notss, removeNotss, setNotss }}>
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerProvider;
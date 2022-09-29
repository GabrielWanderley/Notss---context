
import { ReactNode } from "react";


export interface NotssProviderProps{
    children: ReactNode;
  }
  
export   interface Dados {
    titu: string;
    desc: string;
    id: number;
  }

interface Notss {
    titu: string;
    desc: string;
    id: number;
}
  export   interface sla {
   Notss: Notss[],
    titu: string;
    desc: string;
    id: number;
  }
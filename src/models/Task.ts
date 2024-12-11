export enum Priority {
    Baixa = "Prioridade Baixa",
    Media = "Prioridade Média",
    Alta = "Prioridade Alta",
  }
  
  export interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
    priority: Priority;
  }
  
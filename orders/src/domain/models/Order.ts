export interface Order {
    id: string;
    total: number;
    date: Date;
    status: 'Creado' | 'Pagado' | 'Enviado';
  }
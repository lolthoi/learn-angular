import { Schedule } from './Schedule';
import { OrderItems } from './OrderItems';

export class Workout {
  id: string;
  title: string;
  description: string;
  image: string | null;
  duration: number;
  price: number;
  categoryId: string;
  orderItems: OrderItems[];
  schedule: Schedule[];
}


import { Product } from "./products.model";

export class FoodLog {
  date: string;
  breakfast: Product[] = [];
  lunch: Product[]= [];
  dinner: Product[] = [];
  snacks: Product[] = [];
}
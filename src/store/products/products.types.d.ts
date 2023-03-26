import { ActionType } from "typesafe-actions";
import * as actions from "./products.action";

type TProductsPayload = {
  id: string;
  name: string;
  description: number;
  thumbnailImage: string;
  images?: Array<string | null>; 
  discount: number;
  price: number;
  isUsed: boolean;
  mfg?: Date;
  properties?: Record<string, number | string | null>;
  category?: { id: string; type: string, properties?: Record<string, number | string | null>[]; };
  inventory?: Record<string, number | string | null> | null;
  brand?: { id: string, name: string, threshold: number};
  categoryId?: string;
  brandId?: string;
  completedStep: number;
};

type TProductsState = {
  loading: boolean;
  products: {
    count: number;
    products?: Array<TProductsPayload | null> | null;
  };
  singleProductData?: TProductsPayload | null;
};

type TProductsActionType = ActionType<typeof actions>;

export { TProductsActionType, TProductsState, TProductsPayload };

import { ActionType } from "typesafe-actions";

type TBrandPayload = {
	id: string;
	name?: string;
	threshold?: number
};

type TBrandState = {
	loading: boolean;
	brands: { count: number; brands: TBrandPayload[] };
	brand?: TBrandPayload | null;
};

type TBrandActionTypes = ActionType<typeof actions>;

export { TBrandPayload, TBrandState, TBrandActionTypes };

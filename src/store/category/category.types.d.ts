import { ActionType } from "typesafe-actions";

type TCategoryPayload = {
	id: string;
	type: string;
	properties?: Array<string> | null;
};

type TCategoryState = {
	loading: boolean;
	categories: { count: number; categories: TCategoryPayload[] };
	category?: TCategoryPayload | null;
};

type TCateoryActionTypes = ActionType<typeof actions>;

export { TCategoryPayload, TCategoryState, TCateoryActionTypes };

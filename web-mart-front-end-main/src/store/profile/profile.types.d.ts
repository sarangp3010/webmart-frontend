import { ActionType } from "typesafe-actions";

import * as actions from "./timeSlot.action";

type TProfileActionType = ActionType<typeof actions>;

type TProfileState = {
  loading: boolean;
  profileData: TGetProfilePayload;
  addresses: []
};

type TGetProfilePayload = {
  id: string;
  profileImage: string | undefined;
  firstName: string | null;
  lastName: string | null;
  countryCode: number | string | null;
  mobileNumber: number | string | null;
  email: string | null;
} | null;

/**
 * TODO:Final ts done after address and image done
 */
type TEditProfilePayload = {
  profileImage: string;
  fullName: string;
  countryCode: string | number;
  mobileNumber: string | number;
  email: string;
};

export {
  TProfileActionType,
  TProfileState,
  TGetProfilePayload,
  TEditProfilePayload,
};

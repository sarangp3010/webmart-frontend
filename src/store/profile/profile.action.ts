import { action } from "typesafe-actions";

import ProfileActionTypeEnum from "./profile.enum";
import { TGetProfilePayload } from "./profile.types";

/**
 * profile loading action creator
 * @returns
 */
const profileLoadingAction = () =>
  action(ProfileActionTypeEnum.PROFILE_LOADING);

/**
 * profile loaded action creator
 * @returns
 */
const profileLoadedAction = () => action(ProfileActionTypeEnum.PROFILE_LOADED);

/**
 * get profile action creator
 * @param profileData
 * @returns
 */
const getProfileAction = (profileData: TGetProfilePayload) =>
  action(ProfileActionTypeEnum.GET_PROFILE, profileData);

/**
 * edit profile action creator
 * @returns
 */
const editProfileAction = () => action(ProfileActionTypeEnum.EDIT_PROFILE);




const setUserAddresses = (addressList: []) =>
  action(ProfileActionTypeEnum.SET_USER_ADDRESSES, addressList);
const updateUserAddress = (address_data: object) =>
  action(ProfileActionTypeEnum.UPDATE_USER_ADDRESS, address_data);
const deleteUserAddress = (address_id: string) =>
  action(ProfileActionTypeEnum.DELETE_USER_ADDRESS, address_id);
const resetUserAddresses = () =>
  action(ProfileActionTypeEnum.RESET_USER_ADDRESSES);

export {
  profileLoadingAction,
  profileLoadedAction,
  getProfileAction,
  editProfileAction,

  setUserAddresses,
  updateUserAddress,
  deleteUserAddress,
  resetUserAddresses,
};

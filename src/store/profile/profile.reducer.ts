import { updateUserAddress } from "./profile.action";
import TimeSlotActionTypeEnum from "./profile.enum";
import { TProfileActionType, TProfileState } from "./profile.types";

const INITIAL_STATE: TProfileState = {
  loading: false,
  profileData: null,
  addresses: [],
};

const profileReducer = (
  state = INITIAL_STATE,
  action: TProfileActionType
): TProfileState => {
  let buffArr: any = [];
  switch (action.type) {
    case TimeSlotActionTypeEnum.PROFILE_LOADING:
      return { ...state, loading: true };

    case TimeSlotActionTypeEnum.PROFILE_LOADED:
      return { ...state, loading: false };

    case TimeSlotActionTypeEnum.GET_PROFILE:
      return {
        ...state,
        loading: false,
        profileData: action.payload,
      };

    case TimeSlotActionTypeEnum.EDIT_PROFILE:
      return {
        ...state,
        loading: false,
      };


    case TimeSlotActionTypeEnum.SET_USER_ADDRESSES:
      return {
        ...state,
        addresses: action.payload,
      };
    case TimeSlotActionTypeEnum.DELETE_USER_ADDRESS:
      state.addresses.map(each => {
        if (each['id'] !== action.payload)
          buffArr.push(each)
      });
      console.log(buffArr, '````````````````````````````````')
      return {
        ...state,
        addresses: buffArr,
      };
    case TimeSlotActionTypeEnum.UPDATE_USER_ADDRESS:
      const addresses = state.addresses.map(each => {
        if (each['id'] === action.payload.id)
          return action.payload
        return each
      });
      return {
        ...state, addresses
      };

    default:
      return state;
  }
};

export default profileReducer;

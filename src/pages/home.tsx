import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileActionThunk } from "../store/profile/profile.actions.async";
import TRootState from "../store/root.types";

const Dashboard = () => {
  const dispatch = useDispatch();
  const profile = useSelector(
    (state: TRootState) => state.profile.profileData
  );
  
  /**
   * Get Profile data when component load first time
   */
  useEffect(() => {
    dispatch(getProfileActionThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return <div>Welcome to the Home page.</div>;
};

export default Dashboard;

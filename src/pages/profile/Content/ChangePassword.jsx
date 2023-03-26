import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FormControl, FormLabel, Grid, Input, Select, Box, Button, Icon } from '@chakra-ui/react'
import { API } from '../../../middleware/middleware';
import { changePasswordActionThunk } from "../../../store/auth/auth.actions.async";
import { useDispatch } from "react-redux";

function ChangePassword() {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const myToken = localStorage.getItem("lToken");
  const dispatch = useDispatch();
  const handleChangePassword = () => {
    if(newPassword != confirmPassword){
      toast.error("Confirm password doesn't match");
      return;
    }
    try {
      dispatch(
        changePasswordActionThunk({
          oldPassword: oldPassword,
          newPassword: newPassword,
        })
      ).then(() => {
        console.log("password changed");
      }).catch((error) => {
        console.log("Error caught");
      });
    } catch (e) {
      console.log("HandleChangePassword caught:", e)
    }
  }

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }}
      gap={6}
      width='60vh'
    >
      <FormControl id="old-password">
        <FormLabel>Old Password</FormLabel>
        <Input focusBorderColor="brand.blue" type="password" placeholder="Type Old Password here."
          value={oldPassword} onChange={e => setOldPassword(e.target.value)}
        />
      </FormControl>
      <FormControl id="new-password">
        <FormLabel>New Password</FormLabel>
        <Input focusBorderColor="brand.blue" type="password" placeholder="Type New Password here."
          value={newPassword} onChange={e => setNewPassword(e.target.value)} />
      </FormControl>
      <FormControl id="confirm-password">
        <FormLabel>Confirm Password</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="password"
          placeholder="Confirm the password."
          value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
        />
      </FormControl>
      <Box>
        <Button onClick={handleChangePassword}>Save Changes</Button>
      </Box>
    </Grid>

  )
}

export default ChangePassword

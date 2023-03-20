import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import { toast } from 'react-toastify';
import { FormControl, FormLabel, Grid, Input, InputLeftElement, InputGroup, Select, Stack, Box, Button, Icon, CloseButton, Flex } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { PhoneIcon, CloseIcon } from "@chakra-ui/icons";

import { API } from '../../../middleware/middleware';

function AccountSettings() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState(['']);
  const [count, setCount] = useState(1);
  const [email, setEmail] = useState("");
  //////////////Get user information using fetch////////////////////
  const myToken = localStorage.getItem("lToken");
  const { profileData } = useSelector(state => state.profile);

  useEffect(() => {
    if (!profileData) return;
    setFirstName(profileData.firstName);
    setLastName(profileData.lastName);
    setEmail(profileData.email);
    console.log(profileData.mobileNumber);

    const mobileNumbers = JSON.parse(profileData.mobileNumber);
    if (mobileNumbers != null) {
      setPhoneNumbers(mobileNumbers);
      setCount(mobileNumbers.length)
    }
  }, [profileData])

  // const 
  const handleUpdate = () => {
    API.put('/users/profile', {
      token: myToken,
      firstName, lastName,
      phoneNumbers: JSON.stringify(phoneNumbers)
    }).then(res => {
      if (res.status == 200) {
        console.log('response: ', res);
        handleSuccess();
      } else {
        handleFailed();
      }
    });
  };

  const handleSuccess = () => {
    toast.success('User Information Updated Successfully');
  }
  const handleFailed = () => {
    toast.error('Update failed with some errors!')
  }

  const handleInputChange = (index, phoneNum) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = phoneNum;
    setPhoneNumbers(newPhoneNumbers);
  };
  const handleAddPhoneNumber = () => {
    if (count < 2) {
      setCount(count + 1);
      setPhoneNumbers([...phoneNumbers, '']);
    }
  }
  const handleRemovePhoneNumber = (index) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers.splice(index, 1);
    setPhoneNumbers(newPhoneNumbers);
    setCount(count - 1);
  }
  const renderInputFields = () => {
    const phoneNumberRegex = /^([0-9]{3})([0-9]{3})([0-9]{4})$/;
    return phoneNumbers.map((phoneNumber, index) => (
      <FormControl key={index}>
        <FormLabel>Phone Number {index + 1}</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.500" />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Enter phone number"
            focusBorderColor="brand.blue"
            value={phoneNumber}
            w="300px" // Set a fixed width for the input field
            maxW="100%" // Set a maximum width for the input field container
            // Center the input field horizontally within its container
            onChange={(e) => {
              const formattedPhoneNumber = e.target.value.replace(/\D/g, '').replace(phoneNumberRegex, '($1) $2-$3');
              handleInputChange(index, formattedPhoneNumber);
            }}
          />
          {index !== 0 && (
            <CloseButton
              size="sm"
              colorScheme="red"
              onClick={() => handleRemovePhoneNumber(index)}
              marginLeft="2"
            >
              <CloseIcon />
            </CloseButton>
          )}
        </InputGroup>
      </FormControl>
    ));
  };

  return (
    <Stack spacing={4}>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}
      >
        <FormControl id="firstName">
          <FormLabel>First Name</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder="Tim"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder="Cook"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>

        <FormControl id="e-mail">
          <FormLabel>e-mail</FormLabel>
          <Input
            disabled = 'true'
            focusBorderColor="brand.blue"
            type="text"
            placeholder="e-mail address"
            value={email}
          />
        </FormControl>

      </Grid>
      <Stack spacing={4}>
        {renderInputFields()}
        {count < 2 && (
          <FormControl>
            <Button
              leftIcon={<PhoneIcon />}
              size="sm"
              onClick={handleAddPhoneNumber}
            >
              Add Number
            </Button>
          </FormControl>
        )}
      </Stack>
      <Box>
        <Button onClick={handleUpdate}>Update</Button>
      </Box>
    </Stack>
  );
}

export default AccountSettings;

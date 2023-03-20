import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import AccountSettings from './AccountSettings'
import Addresses from './Addresses'
import ChangePassword from './ChangePassword'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const Content = () => {
  const tabs = ['Account', 'Addresses', 'Change Password']
  const [isAdminMode, setAdminMode] = useState(false);
  const { profileData } = useSelector(state => state.profile);


  useEffect(() => {
    if (!profileData) return;
    setAdminMode(profileData.userType);
  }, [profileData])

  const checkUserRole = () => {
    const isUser = profileData?.userType.find(each => each === "user");
    return isUser !== undefined;
  }

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir={"column"}
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      boxSizing='content-box'
      overflow='auto'
      minHeight='60vh'
      width='95%'
      style={{ transform: 'translateY(-100px)' }}
    >
      <Tabs orientation='vertical'>
        <TabList px={5} width='40vh'>

          <Tab key='account-setting' mx={3} px={0} py={3} fontWeight="semibold" color="brand.cadet"
            // borderBottomWidth={1}
            _active={{ bg: 'transparent' }} _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }} >
            Account
          </Tab>
          {checkUserRole() &&
            <Tab key='addresses' mx={3} px={0} py={3} fontWeight="semibold" color="brand.cadet"
              // borderBottomWidth={1}
              _active={{ bg: 'transparent' }} _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}>
              Addresses
            </Tab>
          }
          <Tab key='change-password' mx={3} px={0} py={3} fontWeight="semibold" color="brand.cadet"
            // borderBottomWidth={1}
            _active={{ bg: 'transparent' }} _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}>
            ChangePassword
          </Tab>
        </TabList>
        <TabPanels px={3} mt={5} width='60vh'>
          <TabPanel>
            <AccountSettings />
          </TabPanel>
          {
            checkUserRole() &&
            <TabPanel>
              <Addresses />
            </TabPanel>
          }
          <TabPanel>
            <ChangePassword />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Content

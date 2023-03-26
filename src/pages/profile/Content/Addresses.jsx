import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Button,
} from '@chakra-ui/react';
import MyCard from './CardAddress';
import { getUserProfileAddresses } from '../../../store/profile/profile.actions.async';
import AddressModal from "./AddressModal";
import { API } from '../../../middleware/middleware';
import { errorToast } from '../../../components/toast/toast';

function Addresses() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addressList = useSelector(state => state.profile.addresses);

  useEffect(() => {
    dispatch(getUserProfileAddresses());
  }, []);

  useEffect(() => {
    console.log(addressList)
    setItems(addressList);
  }, [addressList]);

  const handleModalOpen = () => {
    
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    debugger;
    API.get("/address/get_user_address")
      .then(res => {
        if (res.status === 200) {
          console.log(res, 'adresses');
          setItems(res.data)
        }
      })
      .catch(err => errorToast("Getting User Addresses    error !"));
  }

  const updateData = () => {
    // API.get("/address/get_user_address")
    //   .then(res => {
    //     if (res.status === 200) {
    //       console.log(res, 'adresses');
    //       setItems(res.data)
    //     }
    //   })
    //   .catch(err => errorToast("Getting User Addresses    error !"));
  }

  const createCardItems = () => {
    return (
      items?.map((item, index) => (
        <MyCard key={index} values={item} updateData={updateData} ></MyCard>
      ))
    )
  }

  return (
    <>
      <Button bg="blue.500" onClick={handleModalOpen}>Add New Address</Button>
      <Grid
        mt='20px'
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        {createCardItems()}
      </Grid>
      <AddressModal isOpen={isModalOpen} onClose={handleModalClose} type="add"></AddressModal>
    </>
  )
}

export default Addresses

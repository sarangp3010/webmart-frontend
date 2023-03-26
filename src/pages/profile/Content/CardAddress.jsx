import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Button,
    IconButton,
    useColorModeValue,
    Flex,
    Heading,
    Text
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, StarIcon } from "@chakra-ui/icons";
import AddressModal from "./AddressModal";
import { deleteUserProfileAddress } from '../../../store/profile/profile.actions.async';

const MyCard = (props) => {
    const dispatch = useDispatch();
    const buttonBg = useColorModeValue("blue.500", "blue.200");
    const buttonColor = useColorModeValue("white", "gray.700");
    const { values } = props;
    const {
        id, full_name, phone_number, address1, address2, city, county, country, pincode, houseNumber, isDefault, userId
    } = values;
    const [isModalOpen, setModalOpen] = useState(false);

    const handleDelete = () => {
        dispatch(deleteUserProfileAddress(values.id));
    }

    const handleSetDefault = () => {

    }


    return (
        <Flex direction="column" bg="white" rounded="md" shadow="md">
            <Flex
                align="center"
                justify="space-between"
                bg="blue.500"
                color="white"
                p={4}
                roundedTop="md"
            >
                <Heading size="md">{full_name}</Heading>
            </Flex>
            <Flex direction="column" p={4}>
                <Text>PhoneNumber: {phone_number}</Text>
                <Text>Address 1: {address1}.</Text>
                <Text>Address 2: {address2}.</Text>
                <Text>City: {city}  {county} {country}</Text>
            </Flex>
            <Flex justify="space-between" p={4} roundedBottom="md">
                <Button
                    colorScheme="blue"
                    bg={buttonBg}
                    color={buttonColor}
                    _hover={{ bg: "blue.600" }}
                    leftIcon={<EditIcon />}
                    onClick={() => setModalOpen(true)}
                >
                    Edit
                </Button>
                <IconButton
                    colorScheme="red"
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                    bg="transparent"
                    color="red.500"
                    _hover={{ bg: "transparent" }}
                    _active={{ bg: "transparent" }}
                    onClick={handleDelete}
                />
                {
                    // console.log(values.isDefault)
                    !isDefault && <Button
                        colorScheme="green"
                        bg={buttonBg}
                        color={buttonColor}
                        _hover={{ bg: "green.600" }}
                        leftIcon={<StarIcon />}
                        onClick={handleSetDefault}
                    >Set as default
                    </Button>
                }

            </Flex>
            <AddressModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} modalValue={values} type="update"></AddressModal>
        </Flex>
    );
};

export default MyCard;

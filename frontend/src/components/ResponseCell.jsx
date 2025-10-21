import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

const NONE = { id: 0, name: "None" };
const REJECTED = { id: 2, name: "Rejected" };
const OFFER = { id: 3, name: "Offer!!!" };
const INTERVIEW = { id: 4, name: "Interview" }
const SCREEN = { id: 5, name: "Screening" }
const RESPONSES = [
    NONE,
    REJECTED,
    OFFER,
    INTERVIEW,
    SCREEN,
]

const ResponseCell = ({ getValue, row, column, table }) => {
    const initialResponse = getValue() || "";
    const [currentReponse, setCurrentReponse] = useState(initialResponse);
    const { updateData } = table.options.meta;

    const handleSelect = (response) => {
        (response === "None")? setCurrentReponse("") : setCurrentReponse(response);
        updateData(row.index, column.id, response);
    };

    return (
        <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
            <MenuButton 
                h="100%" 
                w="100%" 
                textAlign="left" 
                p={1.5} 
                bg="transparent"
                color="gray.900"
                fontSize="sm"
                border="1px solid var(--border-gray)"
            >
                {currentReponse} {/* Sets the response field */}
            </MenuButton>
            <MenuList>
                {RESPONSES.map((response) => (
                <MenuItem 
                    onClick={ () => handleSelect(response.name) }
                    key={response.id}>

                        {response.name}
                </MenuItem>))}
            </MenuList>
        </Menu>
    );
}
export default ResponseCell;
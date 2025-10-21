import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
const REJECTED = { id: 1, name: "Rejected", color: "red.400" };
const OFFER = { id: 2, name: "Offer!!!", color: "green.300" };
const INTERVIEW = { id: 3, name: "Interview", color: "yellow.200" }
const SCREEN = { id: 4, name: "Screening", color: "gray.300" }
const RESPONSES = [
    REJECTED,
    OFFER,
    INTERVIEW,
    SCREEN,
]

const ResponseCell = ({ getValue, row, column, table }) => {
    const { name, color } = getValue() || {};
    const { updateData } = table.options.meta;
    return (
        <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
            <MenuButton 
                h="100%" 
                w="100%" 
                textAlign="left" 
                p={1.5} 
                bg={color || "transparent"}
                color="gray.900"
            >
                {name}
            </MenuButton>
            <MenuList>
                {RESPONSES.map((response) => (
                <MenuItem 
                    onClick={ () => updateData( row.index, column.id, response.name ) }
                    key={response.id}>

                        {response.name}
                </MenuItem>))}
            </MenuList>
        </Menu>
    );
}
export default ResponseCell;
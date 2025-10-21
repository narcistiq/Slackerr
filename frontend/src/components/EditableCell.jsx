import { Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const EditableCell = ({getValue, row, column, table}) => {
    const initialValue = getValue()
    const [value, setValue] = useState(initialValue);

    const onBlur = () => {
        table.options.meta?.updateData(
            row.index,
            column.id,
            value
        )
    }

    useEffect(() => {setValue(initialValue)}, [initialValue])
    return (
        <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={onBlur}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            border="1px solid var(--border-gray)"
            borderRadius="none"
            w="100%"
            size="sm"
        />
    );
}
export default EditableCell;
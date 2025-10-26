import { 
    getCoreRowModel, 
    useReactTable, 
    flexRender } from "@tanstack/react-table";
import { GET_APPLICATIONS, GET_USER_APPLICATIONS } from "./queries";
import { UPDATE_APPLICATION } from "./mutations";
import { Box } from "@chakra-ui/react";
import { useQuery, useMutation } from "@apollo/client/react";
import EditableCell from "./EditableCell";
import ResponseCell from "./ResponseCell";
import { useParams } from "react-router";
import { useMemo } from "react";

const columns = [
    {
        accessorKey: 'company',
        header: 'Company',
        cell: EditableCell,
    },
    {
        accessorKey: 'position',
        header: 'Position',
        cell: EditableCell,
    },
    {
        accessorKey: 'applyDate',
        header: 'Application Date',
        cell: EditableCell,
    },
    {
        accessorKey: 'responseDate',
        header: 'Response Date',
        cell: EditableCell,
    },
    {
        accessorKey: 'response',
        header: 'Response',
        cell: ResponseCell,
    },
    {
        accessorKey: 'url',
        header: 'Job Url',
        cell: EditableCell,
    }
]


const ApplicationTable = () => {
    const { userID } = useParams();
    const userVar = useMemo(() => ({ user: userID }), [userID]); // stablize the variable to prevent infinite refetching
    const { data, loading, error } = useQuery(GET_USER_APPLICATIONS, {
        variables: userVar,
    });
    console.log(userID, data)
    const [updateApplication] = useMutation(UPDATE_APPLICATION, {
        refetchQueries: [{ 
            query: GET_USER_APPLICATIONS,
            variables: userVar,
        }],
    });
    const gottenData = useMemo(() => data?.getUserApplications || [], [data]);
    const table = useReactTable({
        data: gottenData,
        columns,
        getCoreRowModel:getCoreRowModel(),
        columnResizeMode:"onChange",
        meta: {
            updateData: async (rowIndex, columnId, value) => {
                const row = data.getUserApplications[rowIndex];
                console.log(row);
                try {
                    await updateApplication({
                        variables: {
                            id: row.id,
                            input: { [columnId]: value },
                            user: userID,
                        },
                    });
                } catch (err) {
                    console.error("Update failed:", err);
                }
            }
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading applications</p>;
    console.log(data);
    return (
    <Box>
        <Box className="table" w={table.getTotalSize()}>
            {table.getHeaderGroups().map(headerGroup => <Box className="tr" key={headerGroup.id}>
                {headerGroup.headers.map(
                    header => <Box className="th" w={header.getSize()} key={header.id}>
                        {header.column.columnDef.header}
                        <Box
                            onMouseDown={
                                header.getResizeHandler()
                            }
                            onTouchStart={
                                header.getResizeHandler()
                            }
                            className={
                                `resizer ${
                                    header.column.getIsResizing() ? "isResizing" : ""
                                }`
                            }
                        />
                    </Box>
                )}
            </Box>)}
            {
                table.getRowModel().rows.map(row => <Box className="tr" key={row.id}>
                    {row.getVisibleCells().map(cell => <Box className="td" w={cell.column.getSize} key={cell.id}>
                        {
                            flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )
                        }
                    </Box>)}
                </Box>)
            }
        </Box>
    </Box>
    );
}
export default ApplicationTable;
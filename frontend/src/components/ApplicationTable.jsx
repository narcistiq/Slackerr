import { 
    getCoreRowModel, 
    useReactTable, 
    flexRender } from "@tanstack/react-table";
import { GET_APPLICATIONS } from "./queries";
import { UPDATE_APPLICATION } from "./mutations";
import { Box } from "@chakra-ui/react";
import { useQuery, useMutation } from "@apollo/client/react";
import EditableCell from "./EditableCell";
import "./ApplicationTable.css";


const columns = [
    {
        accessorKey: 'company',
        header: 'Company',
        cell: EditableCell,
    },
    {
        accessorKey: 'position',
        header: 'Position',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'applyDate',
        header: 'Application Date',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'reponseDate',
        header: 'Reponse Date',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'reponse',
        header: 'Response',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'url',
        header: 'Job Url',
        cell: (props) => <p>{props.getValue()}</p>
    }
]


const ApplicationTable = () => {
    const { data, loading, error } = useQuery(GET_APPLICATIONS);
    const [updateApplication] = useMutation(UPDATE_APPLICATION, {
        refetchQueries: [{ query: GET_APPLICATIONS }], // refetch applications after updateing
    });

    const table = useReactTable({
        data: data?.getAllApplications || [],
        columns,
        getCoreRowModel:getCoreRowModel(),
        columnResizeMode:"onChange",
        meta: {
            updateData: async (rowIndex, columnId, value) => {
                const row = data.getAllApplications[rowIndex];
                console.log(row);
                try {
                    await updateApplication({
                        variables: {
                            id: row.id,
                            input: {
                                [columnId]: value,
                            },
                        },
                        refetchQueries: [{query: GET_APPLICATIONS}]
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
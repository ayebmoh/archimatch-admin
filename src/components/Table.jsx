
import { Button, CardFooter, Typography } from "@/components/RemoteComponents";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
export default function Table({ columns, data }) {


  console.log(columns)
  console.log("dataaa", data)
  const table = useReactTable({

    columns, data, getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  return (
    <div>
      <table className="text-left w-full h-full  ml-1">
        <thead className="text-[#212121]">
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr key={`headerGroup-${index}`}
            >
              {headerGroup.headers.map((header, index) => (
                <th
                  className="px-4 py-2"
                  key={`header-${index}`}
                >

                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={index}
                  className="border-t border-b px-4 py-2"
                >

                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}{" "}
        </Typography>
        <div className="flex gap-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            variant="filled"
            size="sm"
          >
            Précédant
          </Button>

          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            variant="filled"
            size="sm"
          >
            Suivant
          </Button>
        </div>
      </CardFooter>

    </div>
  );
}




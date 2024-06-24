import { Button, CardFooter, Typography } from "@/components/RemoteComponents";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

export default function List({ data, columns }) {
  console.log(data)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  return (
    <div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className=" text-blue-gray-900 border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  key={header.id}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  className="  p-4 border-b border-blue-gray-50"
                  key={cell.id}
                >
                  <div className="flex items-center gap-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
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

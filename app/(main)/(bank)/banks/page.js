"use client";
import React, { useEffect, useState } from 'react'
import TablePagination from '@mui/material/TablePagination';
import { getBanks } from '@/lib/bank/index';
import toast from 'react-hot-toast';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';

const Banks = () => {

  const [role, setRole] = useState(null)
  const [banks, setbanks] = useState([])
  const [totalBanks, setTotalBanks] = useState(0)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const rowsPerPageOptions = [5, 10, 15, 20]

  const router = useRouter()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setRole(localStorage.getItem('role'))
    const fetchBanks = async () => {
      try {
        const params = {
          page: page + 1,
          limit: rowsPerPage
        }
        const response = await getBanks(params)
        setbanks(response.data.data)
        setTotalBanks(response.data.count)
      } catch (error) {
        toast.error(error.response?.data?.message ?? error.message ?? "Failed to fetch banks");
        console.log(error)
      }
    }

    if (typeof window !== 'undefined') {
      fetchBanks();
    }
  }, [page, rowsPerPage]);

  return (
    <>
      <div className="flex flex-col justify-start items-center w-full h-full">

        {/* Pagination */}
        <div className="w-full h-[35px] bg-slate-50 flex flex-row justify-between items-center mb-5">
          <div className="flex justify-start items-center">
            <h1 className="text-xl text-slate-600 italic font-bold">Total Banks: {totalBanks}</h1>
            {role == "admin"
              ? <Button className="ml-8" onClick={() => router.push("/banks/register")} variant="contained" size="medium" startIcon={<AddIcon />}> Register New Bank</Button>
              : <Button className="ml-8" variant="contained" size="medium"> Select Bank</Button>
            }
          </div>
          <TablePagination
            component="div"
            className="text-slate-600"
            count={totalBanks}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={rowsPerPageOptions}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>

        {/* Bank Card */}
        <div className="grid grid-cols-1 gap-12 mb-6 py-6">

          {banks.map((bank, index) => (
            <div className={`w-[600px] hover:shadow-slate-600 bg-white shadow-md rounded-lg p-4 hover:bg-blue-100 hover:cursor-pointer hover:scale-105`} key={index} onClick={() => router.push("/accounts/register")}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-neutral-950 text-2xl font-semibold">{bank.name}</h2>
                  <span className="text-sm bg-slate-100 text-slate-500 italic px-2 py-1 rounded-3xl mt-1 inline-block">
                    @{bank.abbreviation}
                  </span>

                  <dl className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                    <dt className="text-neutral-500">Code:</dt>
                    <dd className="text-neutral-950 italic text-right">{bank.code}</dd>
                    <dt className="text-neutral-500">Accounts:</dt>
                    <dd className="text-neutral-950 italic text-right">No Accounts</dd>
                  </dl>
                </div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/593/729/non_2x/vector-bank-building-icon-isolated-on-white-background.jpg"
                  alt="avatar" fetchPriority='high'
                  className="w-[130px] h-[130px] rounded-full object-contain mr-8"
                />
              </div>
            </div>
          ))}

        </div>

      </div >
    </>
  )
}

export default Banks
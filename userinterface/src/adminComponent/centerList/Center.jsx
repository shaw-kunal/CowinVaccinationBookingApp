import React from 'react'
import "./center.scss"
import { DataGrid } from '@mui/x-data-grid';
import TitleHeader from '../TitleHeader';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Center Name', width: 130 },
    { field: 'pincode', headerName: 'pincode', width: 100},
    {
        field: 'district',
        headerName: 'District',
        type: 'number',
        width: 130,
    },
    {
        field: 'capacity',
        headerName: 'Capacity',
         type:'number',
        width: 100
    },
    {
        field: 'price',
        headerName: 'Price',
         type:'number',
        width: 100
    },
    {
        field:'action',
        headerName:"Action",
        width:150,
        renderCell:(params)=>{
            return (
                <>
                <Link to={"/center/"+params.row.id}>
                <button className="centerListEdit">Edit</button>
                </Link>
                <DeleteOutline className='centerListDelete'></DeleteOutline>
                </>
            )
        }


    }

];

const rows = [
    { id: 1,name:'xyz',pincode:743126,district:"north 24pgs",capacity:10, price:0 },
    { id: 2,name:'xyz',pincode:743126,district:"north 24pgs",capacity:10, price:0 },
    { id: 3,name:'xyz',pincode:743126,district:"north 24pgs",capacity:10, price:0 },
    { id: 4,name:'xyz',pincode:743126,district:"north 24pgs",capacity:10, price:0 },
    { id: 5,name:'xyz',pincode:743126,district:"north 24pgs",capacity:10, price:0 },
    { id: 6,name:'xyz',pincode:743126,district:"north 24pgs",capacity:10, price:0 },
    { id: 7,name:'xyz',pincode:743126,district:"north 24pgs",capacity:10, price:0 },
    { id: 8,name:'xyz',pincode:743126,district:"north 24pgs",capacity:10, price:0 },
 ];


const Center = () => {
    return (
        <div className='centerList'>
        <TitleHeader title="List of Vaccination Center"/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    disableRowSelectionOnClick
                    
                    columns={columns}
                    
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Center

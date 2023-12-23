import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { useState } from "react";
console.log(userRows);
const Datatable_Dinscri = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    
    return (
        <div className="datatable">
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={(row) => row.id_Demande}
            />
        </div>
    );
};

export default Datatable_Dinscri;

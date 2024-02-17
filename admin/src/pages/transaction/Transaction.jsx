import "./Transaction.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import { userRequest } from "../../requestMethods";
export default function Transaction() {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders");
        setOrders(res.data);

        console.log("ord", orders);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ORDER ID", width: 220 },
    {
      field: "quantity",
      headerName: "Qunatity",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "amount",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

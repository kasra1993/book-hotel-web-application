export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 600,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.img
                ? `http://localhost:8800/images/${params.row.img}.jpeg`
                : "https://openseauserdata.com/files/18d1719179758dbf743a7cc9a3540b72.jpg"
            }
            alt="avatar"
          />

          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];
export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "type", headerName: "Type", width: 100 },
  { field: "title", headerName: "Title", width: 100 },
  { field: "city", headerName: "City", width: 100 },
];
export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  { field: "desc", headerName: "Description", width: 100 },
  { field: "title", headerName: "Title", width: 100 },
  { field: "maxPeople", headerName: "Max People", width: 100 },
  { field: "price", headerName: "Price", width: 100 },
];

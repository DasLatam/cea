export default function ResultsTable({ data }: any) {
  if (!data.length) return null;

  return (
    <table style={{ width: "100%", marginTop: 20 }}>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Vendidos</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => (
          <tr key={item.id}>
            <td>
              <a href={item.link} target="_blank">
                {item.title}
              </a>
            </td>
            <td>${item.price}</td>
            <td>{item.sold}</td>
            <td>{item.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

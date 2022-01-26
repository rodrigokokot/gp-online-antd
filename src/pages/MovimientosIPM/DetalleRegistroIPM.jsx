import { Button } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import Table from "../../components/organisms/Table";
import {
  columnsDetalleRegistroIPM,
  dataDetalleRegistroIPM,
} from "../../Mocks/DetalleRegistroIPM";

function DetalleMovimientoIPM() {
  const { registro, id } = useParams();
  console.log(registro);
  const handleCallback = (values) => {
    console.log(`from parent: ${values}`);
  };

  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(dataDetalleRegistroIPM[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "Débito/Prueba/sistema.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  const Export = ({ onExport }) => (
    <>
      <Button onClick={(e) => onExport(e.target.value)}>Exportar</Button>
    </>
  );

  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(dataDetalleRegistroIPM)} />, []);

  // useEffect(() => {
  //   getUser(id);

  // });

  //LOS DATOS DE LA TABLA TIENEN QUE SER DEL USUARIO SELECCIONADO
  return (
    <>
      <h2>Id file {id}</h2>

      <Table
        title={`Detalle de registro ${registro}`}
        data={dataDetalleRegistroIPM}
        columns={columnsDetalleRegistroIPM}
        actions={actionsMemo}
      ></Table>
    </>
  );
}

export default DetalleMovimientoIPM;

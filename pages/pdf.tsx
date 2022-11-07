import { PDFDownloadLink, PDFRenderer, PDFViewer } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import PreviewPDF from "../components/contract/PreviewPDF";
const PreviewPDF = dynamic(() => import("../components/contract/PreviewPDF"), {
  ssr: false,
});
type Props = {};

const Pdf = (props: Props) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <div>
      <PreviewPDF />
      {/* <PDFDownloadLink document={<PreviewPDF />} fileName="test1">
        <button>Download</button>
      </PDFDownloadLink> */}

      {/* <PDFRenderer /> */}

      {/* <PDFViewer>
        <PreviewPDF />
      </PDFViewer> */}
    </div>
  );
};

export default Pdf;

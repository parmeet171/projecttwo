import { Container} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

const PdfBox = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [selectError, setSelectError] = useState("");

  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ["application/pdf"];

  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      setSelectError("select your file");
    }
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <div className="pdf_container">
      <Container maxWidth="md" className="pdfbox">
        {/* show pdf conditionally (if we have one)  */}
        {viewPdf && (
          <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
              <Viewer
                fileUrl={viewPdf}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </>
        )}

        {/* if we dont have pdf or viewPdf state is null */}
        {!viewPdf && <>No pdf file selected</>}
      </Container>

      <form onSubmit={handlePdfFileSubmit}>
        <div className="button input_box">
          <input
            type="file"
            id="file"
            required
            className="inputfile"
            accept="pdf"
            onChange={handlePdfFileChange}
          />
          <label htmlFor="file">Choose</label>
        </div>
        {pdfFileError && <div className="pdf_file_error">{pdfFileError}</div>}
        {/* {pdfFileError && <div className="pdf_file_error"><span >❌</span> &nbsp; {pdfFileError}</div>} */}
        <div className="button">
          <button type="submit" className="main_btn">
            upload&nbsp;
          </button>
        </div>
      </form>
    </div>
  );
};

export default PdfBox;

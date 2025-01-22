import React from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import samplePDF from './sample.pdf';

const PdfView = () => {
    return (
        <div>
            <Document file={samplePDF}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default PdfView;
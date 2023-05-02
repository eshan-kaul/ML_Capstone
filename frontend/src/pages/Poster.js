//TODO add the project poster to this page. Could probably be an image or something.
import React from "react";
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import posterpdf from './capstone-poster.pdf';
import './Poster.css'

const Poster = () => {
    return (
        <div className='main-container' >
            <Document file={posterpdf}>
                <Page class = 'poster' pageNumber={1} style={{float:'left', margin: 0, width: '80%', height: '100%'}}/>
            </Document>
        </div>
    );
};
export default Poster;
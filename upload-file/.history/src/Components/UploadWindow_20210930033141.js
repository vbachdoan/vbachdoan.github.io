import React from "react";

import "../Styles/UploadWindow.css"

export default class UploadWindow extends React.Component{

    state = {
        file:null,
    }

    handleChange(event){
        let files = event.target.files
        let listFile = Object.keys(files).map((key) => [Number(key), files[key]])
        this.setState({
            file: listFile
        })
    }

    render(){
        return(
            <div id="wrap-upload">
                <input type="file" id="input" multiple onChange={(event)=>this.handleChange(event)}/>

                <label htmlFor="input">
                <svg  id="input-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.125 61.875C3.9538 61.875 4.74866 62.2042 5.33471 62.7903C5.92076 63.3763 6.25 64.1712 6.25 65V80.625C6.25 82.2826 6.90848 83.8723 8.08058 85.0444C9.25268 86.2165 10.8424 86.875 12.5 86.875H87.5C89.1576 86.875 90.7473 86.2165 91.9194 85.0444C93.0915 83.8723 93.75 82.2826 93.75 80.625V65C93.75 64.1712 94.0792 63.3763 94.6653 62.7903C95.2513 62.2042 96.0462 61.875 96.875 61.875C97.7038 61.875 98.4987 62.2042 99.0847 62.7903C99.6708 63.3763 100 64.1712 100 65V80.625C100 83.9402 98.683 87.1196 96.3388 89.4638C93.9946 91.808 90.8152 93.125 87.5 93.125H12.5C9.18479 93.125 6.00537 91.808 3.66117 89.4638C1.31696 87.1196 0 83.9402 0 80.625V65C0 64.1712 0.32924 63.3763 0.915291 62.7903C1.50134 62.2042 2.2962 61.875 3.125 61.875V61.875Z" fill="black"/>
                    <path d="M47.7875 7.16247C48.0778 6.87145 48.4226 6.64056 48.8023 6.48302C49.182 6.32548 49.589 6.24438 50 6.24438C50.4111 6.24438 50.8181 6.32548 51.1977 6.48302C51.5774 6.64056 51.9222 6.87145 52.2125 7.16247L70.9625 25.9125C71.5493 26.4993 71.879 27.2951 71.879 28.125C71.879 28.9548 71.5493 29.7507 70.9625 30.3375C70.3757 30.9243 69.5799 31.2539 68.75 31.2539C67.9202 31.2539 67.1243 30.9243 66.5375 30.3375L53.125 16.9187V71.875C53.125 72.7038 52.7958 73.4986 52.2097 74.0847C51.6237 74.6707 50.8288 75 50 75C49.1712 75 48.3764 74.6707 47.7903 74.0847C47.2043 73.4986 46.875 72.7038 46.875 71.875V16.9187L33.4625 30.3375C33.172 30.628 32.827 30.8585 32.4474 31.0157C32.0678 31.173 31.6609 31.2539 31.25 31.2539C30.8391 31.2539 30.4322 31.173 30.0526 31.0157C29.673 30.8585 29.3281 30.628 29.0375 30.3375C28.747 30.0469 28.5165 29.702 28.3592 29.3224C28.202 28.9427 28.1211 28.5359 28.1211 28.125C28.1211 27.7141 28.202 27.3072 28.3592 26.9276C28.5165 26.548 28.747 26.203 29.0375 25.9125L47.7875 7.16247Z" fill="black"/>
                </svg>
                </label>
                <label htmlFor="input" id="input-label">Browse</label>
            </div>
        )
    }
}
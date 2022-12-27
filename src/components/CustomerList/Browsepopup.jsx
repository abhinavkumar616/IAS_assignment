import React from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Browsepopup = () => {
    return (
        <>
            <div className='container-fluid'>
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <UploadFileIcon />
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="uploadDocument">Upload Document</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">browse and select the required file</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                            <div className='form-browse'>
                                <form>
                                    <div className="mb-3">
                                        <label for="documentName" className="form-label">Document Name</label>
                                        <input type="text" className="form-control" id="documentName" aria-describedby="emailHelp" />

                                    </div>
                                    <div className="mb-3">
                                        <label for="addTag" className="form-label">Tag Name</label>
                                        <input type="text" className="form-control" id="addTag" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-body">
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Browsepopup

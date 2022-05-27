import { uploadService } from '../../../services/upload.service'

export const PopoverAttach = () => {

    return (
        <div className="attach-pop-over-content">
            <div className="upload-preview" >
                <label htmlFor="file-upload">Computer</label>
                <input type="file"
                    onChange={uploadService.uploadImg}
                    accept="img/*"
                    id="file-upload"
                />
            </div>
            <button className="primary-btn btn-wide">Attach</button>
        </div>
    )
}
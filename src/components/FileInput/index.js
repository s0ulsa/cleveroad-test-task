import React from "react";
import "./style.scss";

const FileInput = ({ handleChange, error }) => {
    return (
        <div className="file-input-field">
            <input
                type="file"
                accept="image/jpeg,image/png,image/gif"
                onChange={(e) => {
                    handleChange(e.target.files[0]);
                }}
            />
            {error && <span className="error">{error}</span>}
        </div>
    );
};

export default FileInput;

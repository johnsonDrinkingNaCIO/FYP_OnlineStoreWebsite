import { useState } from 'react';

function ProfilePictureUploader({ onFileSelect }) {
    const [file, setFile] = useState(null);
    const [inputKey, setInputKey] = useState(0);

    const clearInput = () => {
        setFile(null);
        onFileSelect(null);
        setInputKey(prevKey => prevKey + 1);
    };

    const filePlaced = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        onFileSelect(selectedFile);
    };

    const uploadPFP = (e) => {
        e.preventDefault();
        alert(file == null ? "No File" : "File ready for upload: " + file.name);
    };

    return (
        <div className='flexItemSmall OptionBGWhite centerChild flex'>
            Profile Pic:
            <div className='divPfp'></div>
            <form onSubmit={uploadPFP}>
                <div className="flexLeft">
                    <input key={inputKey} type='file' onChange={filePlaced}></input>
                    <button type='button' onClick={clearInput}>Clear</button>
                </div>
                <button type='submit'>Upload</button>
            </form>
        </div>
    );
}

export default ProfilePictureUploader;
'use client'
import { useState } from "react";
import { storage } from '../../app/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const CredUpload = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [uploadStep, setUploadStep] = useState(1);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setSelectedFileName(`Selected: ${selectedFile.name}`);
    } else {
      setSelectedFileName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          if (uploadStep === 1) {
            // First image uploaded successfully, move to the second step.
            setUploadStep(2);
          } else if (uploadStep === 2) {
            // Second image uploaded successfully, show the final message.
            setUploadStep(3);
          }
        });
      }
    );
  }

  let uploadMessage;
  if (uploadStep === 1) {
    uploadMessage = "Document front scan";
  } else if (uploadStep === 2) {
    uploadMessage = "Document back scan";
  } else if (uploadStep === 3) {
    uploadMessage = "Success! Documents have been well received.";
  }

  return (
    <div>
       <form onSubmit={handleSubmit} className='form container'>
       <div className="flex flex-row justify-center space-x-1 items-center border rounded-lg shadow-md p-4 max-w-md mx-auto mb-3">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
        </svg>
        <strong className="text-gray-700">
        {uploadMessage}
        </strong>
       </div>
       <div className="bg-card border rounded-lg shadow-md p-4 max-w-md mx-auto">
      <label className="text-sm font-semibold text-gray-700">
      Upload a scanned copy of drivers license (Front and back)
      </label>
      <div className="flex items-center mt-2">
        <input
          type="file"
          id="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <label htmlFor="file" className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 mr-2 text-blue-600"
              >
                <path strokeLinecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
          <span className="text-blue-600 hover:underline">Choose a file...</span>
        </label>
      </div>
    </div>
    <button
      type="submit"
      className="bg-primary mt-3 mb-3 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
    >
      Upload
    </button>
      </form>
      <div className="container">
      <span className="text-gray-500">{selectedFileName}</span>
      </div>

      {
      !imgUrl && (
        <div className="relative h-8 mt-4 bg-gray-200 rounded-full">
          <div className="absolute left-0 top-0 bottom-0 bg-primary rounded-full" style={{ width: `${progresspercent}%` }}></div>
          <div className="absolute left-0 top-0 bottom-0 right-0 flex items-center justify-center text-gray-600 font-semibold">
            {progresspercent}%
          </div>
        </div>
      )
    }


      {
        imgUrl &&
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imgUrl} alt='uploaded file' height={200}  className="mt-3"/>
      }
      
    </div>
  )
}

export default CredUpload



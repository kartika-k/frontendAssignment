import React, { useState } from 'react';

function Upload({ onLogout, isDarkMode }) {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploads, setUploads] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      setIsUploading(true);
      // Create a local URL for the file
      const fileUrl = URL.createObjectURL(file);
      
      // Simulating upload process
      setTimeout(() => {
        setUploads([...uploads, { 
          name: file.name, 
          link: fileUrl, 
          tags: [] 
        }]);
        setIsUploading(false);
        setFile(null);
      }, 2000);
    }
  };

  const handleAddTag = (index, tag) => {
    if (tag && !uploads[index].tags.includes(tag)) {
      const newUploads = [...uploads];
      newUploads[index].tags.push(tag);
      setUploads(newUploads);
    }
  };

  const handleRemoveTag = (uploadIndex, tagIndex) => {
    const newUploads = [...uploads];
    newUploads[uploadIndex].tags.splice(tagIndex, 1);
    setUploads(newUploads);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Upload CSV</h2>
        <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
      <div className={`border-2 border-dashed ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} p-12 text-center rounded-lg mb-6`}>
        {file ? (
          <div>
            <p>{file.name}</p>
            <button onClick={() => setFile(null)} className="text-red-500">Remove</button>
          </div>
        ) : (
          <div>
            <p>Drop your excel sheet here or <label className="text-indigo-400 cursor-pointer">browse<input type="file" className="hidden" onChange={handleFileChange} /></label></p>
          </div>
        )}
      </div>
      <button 
        onClick={handleUpload} 
        className={`w-full bg-indigo-600 p-2 rounded text-white ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isUploading || !file}
      >
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
      {uploads.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <h3 className="text-xl font-bold mb-4">Uploads</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Sl No.</th>
                <th className="text-left">Links</th>
                <th className="text-left">Prefix</th>
                <th className="text-left">Add Tags</th>
                <th className="text-left">Selected Tags</th>
              </tr>
            </thead>
            <tbody>
              {uploads.map((upload, index) => (
                <tr key={index}>
                  <td>{String(index + 1).padStart(2, '0')}</td>
                  <td>
                    <a 
                      href={upload.link} 
                      className="text-blue-400 hover:underline" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      download={upload.name}
                    >
                      {upload.name}
                    </a>
                  </td>
                  <td>{upload.name}</td>
                  <td>
                    <select 
                      className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} p-1 rounded`}
                      onChange={(e) => handleAddTag(index, e.target.value)}
                      value=""
                    >
                      <option value="" disabled>Select Tags</option>
                      <option value="Tag 1">Tag 1</option>
                      <option value="Tag 2">Tag 2</option>
                      <option value="Tag 3">Tag 3</option>
                      <option value="Tag 4">Tag 4</option>
                      <option value="Tag 5">Tag 5</option>
                    </select>
                  </td>
                  <td>
                    {upload.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-indigo-600 px-2 py-1 rounded mr-2 text-white inline-flex items-center mb-1">
                        {tag}
                        <button 
                          onClick={() => handleRemoveTag(index, tagIndex)}
                          className="ml-1 text-xs"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Upload;
import React, { useState, useRef, DragEvent, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface FileUploadProps {
  id: string;
  buttonText?: string;
  dropText?: string;
  buttonClassName?: string;
  dropzoneClassName?: string;
  containerClassName?: string;
  previewContainerClassName?: string;
  onFileSelect?: (file: File | null) => void;
  acceptedFileTypes?: string;
}

const FileDropUpload: React.FC<FileUploadProps> = ({
  id,
  buttonText = 'Pick File',
  dropText = 'Or drop file here',
  buttonClassName = 'bg-emerald-700  text-white px-4 py-2 rounded-md h-10 flex items-center justify-center',
  dropzoneClassName = 'bg-zinc-800 text-neutral-300 px-4 py-2 rounded-md h-10 flex items-center justify-center border border border-neutral-50',
  containerClassName = 'flex items-stretch w-fit gap-2 cursor-pointer',
  previewContainerClassName = 'w-48 h-48 flex items-center justify-center overflow-hidden ',
  onFileSelect,
  acceptedFileTypes = 'image/*'
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean up URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleFileSelection(file);
  };

  const handleFileSelection = (file: File | null) => {
    // Clean up previous preview URL
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(file);
    
    // Create new preview URL if it's an image
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
    
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      handleFileSelection(file);
    }
  };

  return (
    <div className="space-y-2">
      {/* Image Preview Area - Only shown when there's an image to preview */}
      {previewUrl && (
        <div className={previewContainerClassName}>
          <Image
            src={previewUrl} 
            alt="Preview" 
            className="max-w-full max-h-full object-contain"
            width={180}
            height={180}
          />
        </div>
      )}

      {/* Non-image file placeholder */}
      {!previewUrl && selectedFile && !selectedFile.type.startsWith('image/') && (
        <div className={previewContainerClassName}>
          <div className="text-neutral-400 text-center">
            <div className="text-3xl mb-2">📄</div>
            <p>{selectedFile.name}</p>
            <p className="text-xs text-neutral-500">{selectedFile.type || 'Unknown file type'}</p>
          </div>
        </div>
      )}

      <Input
        type="file"
        id={id}
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept={acceptedFileTypes}
      />
      
      <div 
        className={containerClassName}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div 
          className={buttonClassName}
          onClick={triggerFileInput}
        >
          {buttonText}
        </div>
        
        <div 
          className={`${dropzoneClassName} ${isDragging ? 'bg-neutral-700 border-blue-500' : ''}`}
          onClick={triggerFileInput}
        >
          {dropText}
        </div>
      </div>
      
      <p className="text-neutral-500 text-xs mt-1 italic">
        {selectedFile ? selectedFile.name : "No file selected"}
      </p>
    </div>
  );
};

export default FileDropUpload;
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface FileUploadProps {
  id: string;
  buttonText?: string;
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  buttonClassName?: string;
  previewContainerClassName?: string;
  onFileSelect?: (file: File | null) => void;
  acceptedFileTypes?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  buttonText = 'Pick File',
  buttonVariant = 'default',
  buttonClassName = 'bg-emerald-700 hover:bg-emerald-700 text-white h-10',
  previewContainerClassName = 'w-48 h-48 flex items-center justify-center overflow-hidden',
  onFileSelect,
  acceptedFileTypes = 'image/*'
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(file);
    
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
    const fileInput = document.getElementById(id) as HTMLInputElement;
    fileInput.click();
  };

  return (
    <div className="relative">
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
        className="hidden"
        onChange={handleFileChange}
        accept={acceptedFileTypes}
      />
      <Button
        variant={buttonVariant}
        className={buttonClassName}
        onClick={triggerFileInput}
      >
        {buttonText}
      </Button>
      <p className="text-neutral-500 text-xs mt-1 italic">
        {selectedFile ? selectedFile.name : "No file selected"}
      </p>
    </div>
  );
};

export default FileUpload;
"use client";

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CldUploadWidget signatureEndpoint="/api/sign-image"> 
        {({ open }) => {
          return (
            <button onClick={() => open()}>
            Upload an Image
          </button>
        );
      }}
</CldUploadWidget>
      <CldImage
        width="960"
        height="600"
        src="cld-sample-2"
        sizes="100vw"
        alt="Description of my image"
      />
    </main> 
  );
}

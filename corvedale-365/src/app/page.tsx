import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
	info: {
		public_id: string;
	};
	event: "success";
};

export default function Home() {
	const [imageId, setImageId] = useState("cld-sample-2");

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<CldUploadWidget signatureEndpoint="/api/sign-image">
				{({ open }) => {
					return <button onClick={() => open()}>Upload an Image</button>;
				}}
			</CldUploadWidget>

			{imageId && (
				<CldImage
					src={imageId}
					width={960}
					height={600}
					crop="scale"
					alt="Description of my image"
				/>
			)}
		</main>
	);
}

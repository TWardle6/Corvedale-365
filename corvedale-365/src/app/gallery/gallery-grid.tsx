"use client";

import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";
import { CldImage } from "next-cloudinary";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
	return (
		<ImageGrid
			images={images}
			getImage={(imageData: SearchResult) => {
				return (
					<CldImage
						key={imageData.public_id}
						src={imageData.public_id}
						width={400}
						height={300}
						crop="scale"
						alt="an image of something"
					/>
				);
			}}
		/>
	);
}

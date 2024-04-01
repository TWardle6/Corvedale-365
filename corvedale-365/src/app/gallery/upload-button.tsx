import { CldUploadWidget } from "next-cloudinary";
// import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function UploadButton() {
	const router = useRouter();

	return (
		<Button asChild>
			<CldUploadWidget signatureEndpoint="/api/sign-image">
				{({ open }) => {
					return (
						<button onClick={() => open()}>
							<div className="flex gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									strokeLinecap="round"
									strokeLinejoin="round"
									className="w-5 h-5 text-white">
									<path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
								</svg>
								Upload an Image
							</div>
						</button>
					);
				}}
			</CldUploadWidget>
		</Button>
	);
}

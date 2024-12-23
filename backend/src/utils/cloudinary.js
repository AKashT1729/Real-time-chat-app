import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NANE, 
  api_key: process.env.API_KEY_CLOUDINARY, 
  api_secret: process.env.API_SECRET_CLOUDINARY,
});

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath || !fs.existsSync(localFilePath)) {
    console.error("File path is invalid or does not exist:", localFilePath);
    return null;
  }

  try {
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded successfully:", uploadResult.url);

    // Cleanup the local file
    try {
      fs.unlinkSync(localFilePath);
    } catch (unlinkError) {
      console.warn("Failed to remove local file:", unlinkError.message);
    }

    return uploadResult.url;
  } catch (error) {
    console.error("Error during Cloudinary upload:", error.message);

    // Attempt to clean up local file in case of upload failure
    try {
      fs.unlinkSync(localFilePath);
    } catch (unlinkError) {
      console.warn("Failed to remove local file after error:", unlinkError.message);
    }

    return null;
  }
};

export { uploadOnCloudinary };

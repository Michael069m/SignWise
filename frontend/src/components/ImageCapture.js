import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageCapture = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [formData, setFormData] = useState(null);

  const handleImageCapture = (event) => {
    const imageFile = event.target.files[0];
    setSelectedFile(imageFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(imageFile);

    const newFormData = new FormData();
    newFormData.append("image", imageFile);
    setFormData(newFormData);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select an image to upload.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/detect",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Detection results:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Image upload failed.");
    } finally {
      setSelectedFile(null);
      setPreviewImage(null);
    }
  };

  useEffect(() => {
    if (!formData) return;

    axios
      .post("http://localhost:3000/detect", formData, { responseType: "json" })
      .then((response) => {
        const imageData = response.data.image;
        setImageSrc("data:image/jpeg;base64," + imageData);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, [formData]);

  return (
    <div>
      <h2>Capture Image for Object Detection</h2>
      <input type="file" accept="image/*" onChange={handleImageCapture} />
      {previewImage && (
        <div>
          <img src={previewImage} alt="" style={{ width: "500px" }} />
          <br />
          <div>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Detected Objects"
                style={{ width: "500px" }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCapture;

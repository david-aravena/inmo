import app from 'src/serverless/config';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);

export const uploadImages = async (images) => {
  const placeholders = { imagen1: null, imagen2: null, imagen3: null, imagen4: null };

  const uploadPromises = images.map(async (file, index) => {
    const storageRef = ref(storage, `imagesProperties/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return { [`imagen${index + 1}`]: url };
  });

  try {
    const uploadedImages = await Promise.all(uploadPromises);
    return { ...placeholders, ...Object.assign({}, ...uploadedImages) };
  } catch (error) {
    console.error("Error subiendo imágenes:", error.message);
    return placeholders;
  }
};

import { Databases, ID } from "appwrite";
import { client } from './Aapwrite'

const databases = new Databases(client);

const DatabaseId = import.meta.env.VITE_DATABASE_ID;
const CollectionId = import.meta.env.VITE_COLLECTION_ID;
console.log(DatabaseId, CollectionId);

export const createRecruiterDetails = async (data) => {
    try {
        const response = await databases.createDocument(
            DatabaseId,
            CollectionId,
            ID.unique(),
            data
        );
        return response;
    } catch (error) {
        console.error("Database :: createRecruiterDetails :: error : " + error);
    }
}

export const updateRecruiterDetails = async (document_id, data) => {
    try {
        const response = await databases.updateDocument(
            DatabaseId,
            CollectionId,
            document_id,
            data
        )
        return response;
    } catch (error) {
        console.error("Database :: updateRecruiterDetails :: error : " + error);
    }
}
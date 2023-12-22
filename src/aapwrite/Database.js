import { Databases, ID } from "appwrite";
import { client } from './Aapwrite'

const databases = new Databases(client);

export const createRecruiterDetails = async (data) => {
    try {
        const response = await databases.createDocument(
            '6581f6625e6f02c40277',
            '6581f66c080d93b2f676',
            ID.unique(),
            data
        );
        return response;
    } catch (error) {
        console.error("Database :: createRecruiterDetails :: error : " + error);
    }
}
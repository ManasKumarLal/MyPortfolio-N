import { Client, Account } from 'appwrite';

export const client = new Client();

const AppwriteUrl = import.meta.env.VITE_APPWRITE_URL;
const ProjectId = import.meta.env.VITE_PROJECT_ID;
console.log(AppwriteUrl, ProjectId)


client
    .setEndpoint(AppwriteUrl)
    .setProject(ProjectId)
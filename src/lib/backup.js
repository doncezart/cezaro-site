// src/lib/r2.js
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const ACCESS_KEY_ID = "682f0393849e351e9d25bcb4130564b2";
const ACCOUNT_ID = "72552ec65623866134d08231ea08fe46";
const SECRET_ACCESS_KEY = "5ae8eea48582661b45b83b8b5bf1e5e20bed43255f578bac42dc87a836e2ebfb";
const BUCKET_NAME = "samp-variable";

const s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
    },
});

export async function listImages() {
    try {
      const command = new ListObjectsV2Command({
        Bucket: BUCKET_NAME,
      });
      const response = await s3Client.send(command);
      if (!response.Contents) {
        throw new Error("No contents found in bucket");
      }
      const urls = response.Contents.map((item) => {
        return `https://${BUCKET_NAME}.ceza.ro/${item.Key}`;
      });
      console.log("Fetched URLs:");
      return urls;
    } catch (error) {
      console.error("Error listing images:", error);
      return [];
    }
}
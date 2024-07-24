import { json } from "@sveltejs/kit"
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { SECRET_ACCESS_KEY, ACCOUNT_ID, ACCESS_KEY_ID } from '$env/static/private'

const s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
    },
});

export async function GET() {
  try {
    try {
      const command = new ListObjectsV2Command({
        Bucket: 'samp',
      });

      const response = await s3Client.send(command);
      if (!response.Contents) {
        throw new Error("No contents found in bucket");
      }

      const urls = response.Contents.map((item) => {
        return `https://samp.ceza.ro/${item.Key}`;
      });

      return json(urls);

    } catch (error) {
      console.error("Error listing images:", error);
      return [];
    }
    
  } catch (error) {
    console.error("Error in API /api/images:", error);
    return new Response({
      status: 500,
      body: { error: "Failed to fetch images" },
    });
  }
}
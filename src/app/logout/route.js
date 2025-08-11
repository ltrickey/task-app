import { deleteSession } from "@/app/lib/session";

export async function POST(request) {
  await deleteSession();
  return new Response(); // default status is 200 ok
}

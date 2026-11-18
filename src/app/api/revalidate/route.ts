import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    revalidateTag("sanity");
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
}

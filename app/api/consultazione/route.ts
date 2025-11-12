import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const submission = {
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role"),
    company: formData.get("company"),
    goals: formData.get("goals"),
    submittedAt: new Date().toISOString()
  };

  console.info("[Consultazione] Nuova richiesta", submission);

  return NextResponse.json({ ok: true });
}

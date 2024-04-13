import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { OpenAI } from "openai";
import { ChatCompletionRequestMessage } from "openai-edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator. You must ansewer only in markdown code snippets. Use code comments for explainations.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;
    console.log("messages_openai", messages);
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("API Key doesn't exist", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });
    return NextResponse.json(response.choices[0].message);
    //return new NextResponse.json(response.data.choices[0].message);

    //const data = await response.json();
    //const output = data.choices[0].message;
    //return new NextResponse(output);
  } catch (error) {
    console.error("code error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

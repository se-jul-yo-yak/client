import { NextResponse } from "next/server";

export async function GET() {
  const htmlTemplate = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; }
          .container { max-width: 600px; height: 500px; margin: auto; background: white; padding: 20px; border-radius: 8px; }
          h1 { color: #4a90e2; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>📧 이메일 템플릿 예제</h1>
          <p>이것은 동적으로 생성된 이메일 템플릿입니다.</p>
          <p>감사합니다!</p>
        </div>
      </body>
    </html>
  `;

  return new NextResponse(htmlTemplate, {
    headers: { "Content-Type": "text/html" },
  });
}

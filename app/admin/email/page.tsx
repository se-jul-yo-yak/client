"use client";

import { toast } from "sonner";
import Sidebar from "@/components/layouts/Sidebar";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Send } from "lucide-react";

export default function EmailPage() {
  const handleReload = () => {
    const iframe = document.getElementById("email-preview") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "/admin/email/preview";
    }
    toast.success("템플릿이 새로고침되었습니다.");
  };

  const handleSendEmail = () => {
    toast.info("이메일 전송 기능이 아직 구현되지 않았습니다.");
  };

  return (
    <div className="flex h-screen">
      {/* 사이드바 적용 */}
      <Sidebar title="이메일 관리">
        <Button onClick={handleReload} className="w-full">
          <RefreshCcw className="mr-2 h-4 w-4" />
          템플릿 새로고침
        </Button>

        <Button onClick={handleSendEmail} className="w-full" variant="destructive">
          <Send className="mr-2 h-4 w-4" />
          이메일 전송
        </Button>
      </Sidebar>

      {/* 우측 콘텐츠 */}
      <div className="flex-1 p-6 bg-white">
        <h2 className="text-lg font-medium mb-2">📄 미리보기</h2>
        <div className="border rounded-lg overflow-hidden h-[700px]">
          <iframe
            id="email-preview"
            src="/admin/email/preview" // ✅ 직접 `iframe`이 `/admin/email/preview`를 호출
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}

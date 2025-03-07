"use client";

import useSWR from "swr";
import { toast } from "sonner";
import Sidebar from "@/components/layouts/Sidebar";
import { Button } from "@/components/ui/button";
import { Loader2, RefreshCcw, Send } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.text());

export default function EmailPage() {
  const { data: htmlContent, error, isLoading, mutate } = useSWR("/api/template", fetcher);

  const handleReload = () => {
    mutate();
    toast.success("템플릿이 새로고침되었습니다.");
  };

  const handleSendEmail = () => {
    toast.info("이메일 전송 기능이 아직 구현되지 않았습니다.");
  };

  return (
    <div className="flex h-screen">
      {/* 사이드바 적용 */}
      <Sidebar title="이메일 관리">
        <Button onClick={handleReload} disabled={isLoading} className="w-full">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCcw className="mr-2 h-4 w-4" />}
          템플릿 새로고침
        </Button>

        <Button onClick={handleSendEmail} className="w-full" variant="destructive">
          <Send className="mr-2 h-4 w-4" />
          이메일 전송
        </Button>

        {error && <div className="text-red-500 text-sm bg-red-100 p-3 rounded-md">템플릿을 불러오지 못했습니다.</div>}
      </Sidebar>

      {/* 우측 콘텐츠 */}
      <div className="flex-1 p-6 bg-white">
        <h2 className="text-lg font-medium mb-2">📄 미리보기</h2>
        <div className="border rounded-lg overflow-hidden h-[700px]">
          {htmlContent ? (
            <iframe srcDoc={htmlContent} className="w-full h-full border-none" />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">이메일 템플릿을 불러와 주세요.</div>
          )}
        </div>
      </div>
    </div>
  );
}

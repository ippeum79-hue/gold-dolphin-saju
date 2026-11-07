import "./globals.css";

export const metadata = {
  title: "황금돌고래사주 | 정통 명리학 기반 프리미엄 운세·사주 상담",
  description:
    "거친 인생의 바다에서 길을 밝히는 황금돌고래사주. 신년운세, 정통 사주 풀이, 심층 궁합 상담으로 당신의 대운과 결정적 타이밍을 짚어드립니다.",
  keywords: ["황금돌고래사주", "사주", "신년운세", "정통사주", "궁합", "사주상담", "운세"],
  openGraph: {
    title: "황금돌고래사주 | 삶의 흐름을 읽는 정통 명리 상담",
    description: "불안을 확신으로 바꾸는 1:1 맞춤형 정통 사주, 신년운세, 궁합 상담",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-navy-950 text-slate-100 relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

import Link from "next/link";

export default function Custom404() {
    return (
        <main className="main">
            <p>ページがありません。</p>
            <Link href={`/`}>
                <a>ホーム</a>
            </Link>
        </main>
    );
}
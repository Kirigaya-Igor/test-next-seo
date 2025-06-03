export async function generateMetadata() {
    return {
        metadataBase: new URL('https://is-next-seo.netlify.app'),
        title: 'Test1 title',
        openGraph: {
            title: 'Test1 title',
        },
        twitter: {
            title: 'Test1 title',
            card: 'summary_large_image',
        },
    };
}

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

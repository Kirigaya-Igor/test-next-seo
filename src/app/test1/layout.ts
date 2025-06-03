export async function generateMetadata() {
    return {
        metadataBase: new URL('https://is-next-seo.netlify.app'),
        title: 'Test1 Title',
        openGraph: {
            title: 'Test1 Title',
        },
        twitter: {
            title: 'Test1 Title',
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

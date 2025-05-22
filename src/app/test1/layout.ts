export async function generateMetadata() {
    return {
        title: 'Test1 title',
        description: 'Test1',
        openGraph: {
            title: 'Test1 title',
            // images: 'https://is-next-seo.netlify.app/test1.jpg',
        },
        twitter: {
            title: 'Test1 title',
            // images: 'https://is-next-seo.netlify.app/test1.jpg',
            card: 'summary_large_image',
        },
        metadataBase: new URL('https://is-next-seo.netlify.app'),
    };
}

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

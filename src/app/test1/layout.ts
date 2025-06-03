export async function generateMetadata() {
    const imageUrl = 'https://is-next-seo.netlify.app/test1/opengraph-image.tsx';

    return {
        metadataBase: new URL('https://is-next-seo.netlify.app'),
        title: 'Test1 title',
        openGraph: {
            title: 'Test1 title',
            images: [imageUrl],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Test1 title',
            images: [imageUrl],
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

export async function generateMetadata() {
    return {
        title: 'Test1 Title',
        description: 'Test1',
        openGraph: {
            title: 'Test1',
            images: 'https://is-next-seo.netlify.app/test1.jpg',
        },
        twitter: {
            title: 'Test1',
            images: 'https://is-next-seo.netlify.app/test1.jpg',
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

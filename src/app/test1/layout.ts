export async function generateMetadata() {
    return {
        title: 'Test Title, aaa bbb ccc',
        description: 'Описание страницы Test2',
        openGraph: {
            title: 'Test Title, aaa bbb ccc',
            images: 'https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660487.jpg?semt=ais_hybrid&w=740',
        },
        twitter: {
            title: 'Test Title, aaa bbb ccc',
            images: 'https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660487.jpg?semt=ais_hybrid&w=740',
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

import { ImageResponse } from 'next/og';

export const size = {
    width: 1200,
    height: 600,
};

export const contentType = 'image/png';

export default async function Image() {
    const poll = await fetch(`https://backend.voicecoin.co/api/polls/7`).then((res) => res.json());

    console.log('product AAAAAAAAAAAAAAA', poll.variant1ImageIconUrl);
    console.log('product BBBBBBBBBBBBBBB', poll.variant1ImageIconUrl);

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                test BBBBBBBBBBBBBBB
            </div>
        ),
    );
}

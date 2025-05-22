import { ImageResponse } from 'next/og';

export const size = {
    width: 1200,
    height: 600,
};

export const contentType = 'image/png';

export default async function DynamicImage() {
    const poll = await fetch(`https://backend.voicecoin.co/api/polls/7`).then((res) => res.json());

    const cardStyle = {
        position: 'absolute' as any,
        top: '4px',
        display: 'flex',
        flexDirection: 'column' as any,
        gap: '20px',
        width: '300px',
        height: '440px',
        padding: '20px',
        borderRadius: '32px',
        backgroundColor: '#0E0E0E',
    };

    const cardTextStyle = {
        fontSize: '12px',
        fontWeight: '600',
        lineHeight: '14px',
    };

    return new ImageResponse(
        (
            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '636px',
                    backgroundColor: '#000000',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '120px',
                        height: '120px',
                        background:
                            'linear-gradient(232.13deg, #fdb99b 0%, #cf8bf3 50%, #a770ef 100%) border-box',
                        borderRadius: '50%',
                        filter: 'blur(60px)',
                        transform: 'translate(-50%, -50%)',
                    }}
                />

                <div style={{ left: '18px', rotate: '-5deg', ...cardStyle }}>
                    <img
                        src={poll.variant1ImageIconUrl}
                        width={110}
                        height={82}
                        style={{ borderRadius: '12px' }}
                    />

                    <p style={cardTextStyle}>{poll.variant1Answer}</p>
                </div>

                <div style={{ right: '18px', rotate: '5deg', ...cardStyle }}>
                    <img
                        src={poll.variant2ImageIconUrl}
                        width={110}
                        height={82}
                        style={{ borderRadius: '12px' }}
                    />

                    <p style={cardTextStyle}>{poll.variant2Answer}</p>
                </div>
            </div>
        ),
    );
}

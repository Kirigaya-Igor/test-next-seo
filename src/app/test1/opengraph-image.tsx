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
        left: '26px',
        display: 'flex',
        flexDirection: 'column' as any,
        gap: '10px',
        width: '128px',
        height: '190px',
        padding: '8px',
        borderRadius: '12px',
        backgroundColor: '#0E0E0E',
        rotate: '-5deg',
    };

    const cardText = {
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
                    width: '296px',
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

                <div style={cardStyle}>
                    <img
                        src={poll.variant1ImageIconUrl}
                        width={110}
                        height={82}
                        style={{ borderRadius: '4px' }}
                    />

                    <p style={cardText}>Yes</p>
                </div>

                <div style={cardStyle}>
                    <img
                        src={poll.variant2ImageIconUrl}
                        width={110}
                        height={82}
                        style={{ borderRadius: '4px' }}
                    />

                    <p style={cardText}>No</p>
                </div>

                <p
                    style={{
                        marginTop: '210px',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        textAlign: 'center',
                    }}
                >
                    {poll.title}
                </p>
            </div>
        ),
    );
}

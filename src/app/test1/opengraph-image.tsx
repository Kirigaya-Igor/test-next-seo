import { ImageResponse } from 'next/og';

export const size = {
    width: 700,
    height: 550,
};

export const contentType = 'image/png';

export default async function DynamicImage() {
    const poll = await fetch(`https://backend.voicecoin.co/api/polls/7`).then((res) => res.json());

    const cardStyle = {
        position: 'absolute' as any,
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
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#ffffff',
    };

    return new ImageResponse(
        (
            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000000',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '500px',
                        height: '500px',
                        background:
                            'linear-gradient(232.13deg, #fdb99b 0%, #cf8bf3 50%, #a770ef 100%) border-box',
                        borderRadius: '50%',
                        filter: 'blur(60px)',
                        transform: 'translate(-50%, -50%)',
                    }}
                />

                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        width: '636px',
                        height: '464px',
                    }}
                >
                    <div
                        style={{
                            top: '8px',
                            left: '26px',
                            transform: 'rotate(-5deg)',
                            ...cardStyle,
                        }}
                    >
                        <img
                            src={poll.variant1ImageIconUrl}
                            style={{ width: '100%', height: '190px', borderRadius: '12px' }}
                        />

                        <p style={cardTextStyle}>{poll.variant1Answer}</p>
                    </div>

                    <div
                        style={{
                            top: '5px',
                            right: '26px',
                            transform: 'rotate(5deg)',
                            ...cardStyle,
                        }}
                    >
                        <img
                            src={poll.variant2ImageIconUrl}
                            style={{ width: '100%', height: '190px', borderRadius: '12px' }}
                        />

                        <p style={cardTextStyle}>{poll.variant2Answer}</p>
                    </div>
                </div>
            </div>
        ),
        { ...size },
    );
}

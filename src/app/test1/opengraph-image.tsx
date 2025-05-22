import { ImageResponse } from 'next/og';

export const size = {
    width: 400,
    height: 400,
};

export const contentType = 'image/png';

export default async function DynamicImage() {
    const poll = await fetch(`https://backend.voicecoin.co/api/polls/7`).then((res) => res.json());

    const cardStyle = {
        position: 'absolute' as any,
        top: '4px',
        display: 'flex',
        flexDirection: 'column' as any,
        gap: '16px',
        width: '180px',
        height: '264px',
        padding: '10px',
        borderRadius: '16px',
        backgroundColor: '#0E0E0E',
    };

    const cardTextStyle = {
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '16px',
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
                        position: 'relative',
                        display: 'flex',
                        width: '375px',
                        height: '280px',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '130px',
                            left: '50%',
                            width: '200px',
                            height: '200px',
                            background:
                                'linear-gradient(232.13deg, #fdb99b 0%, #cf8bf3 50%, #a770ef 100%) border-box',
                            borderRadius: '50%',
                            filter: 'blur(60px)',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />

                    <div style={{ left: '18px', transform: 'rotate(-5deg)', ...cardStyle }}>
                        <img
                            src={poll.variant1ImageIconUrl}
                            style={{ width: '100%', height: '118px', borderRadius: '12px' }}
                        />

                        <p style={cardTextStyle}>{poll.variant1Answer}</p>
                    </div>

                    <div style={{ right: '18px', transform: 'rotate(5deg)', ...cardStyle }}>
                        <img
                            src={poll.variant2ImageIconUrl}
                            style={{ width: '100%', height: '118px', borderRadius: '12px' }}
                        />

                        <p style={cardTextStyle}>{poll.variant2Answer}</p>
                    </div>
                </div>
            </div>
        ),
    );
}

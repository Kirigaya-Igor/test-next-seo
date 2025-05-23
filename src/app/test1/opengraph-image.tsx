import { ImageResponse } from 'next/og';

export const size = {
    width: 700,
    height: 580,
};

export const contentType = 'image/png';

export default async function DynamicImage() {
    const poll = await fetch(`https://backend.voicecoin.co/api/polls/29`).then((res) => res.json());

    const baseUrl = 'https://is-next-seo.netlify.app';

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

    const cardTitleStyle = {
        margin: '484px auto 0',
        fontSize: '34px',
        fontWeight: '600',
        lineHeight: '40px',
        color: '#ffffff',
    };

    const progressBarContainerStyle = {
        top: '400px',
        left: '50%',
        display: 'flex',
        width: '60%',
        padding: '2px',
        border: '1px solid #424242',
        borderRadius: '6px',
        transform: 'translateX(-50%)',
    };

    const progressBarBgStyle = {
        display: 'flex',
        width: '100%',
        height: '4px',
        backgroundColor: '#FFD3BF',
        borderRadius: '4px',
    };

    const leftValue = +((poll.variant1Votes || 0) / Math.pow(10, 9)).toFixed(0);
    const rightValue = +((poll.variant2Votes || 0) / Math.pow(10, 9)).toFixed(0);

    const fillPercentage = 50 + ((leftValue - rightValue) / Math.max(leftValue, rightValue)) * 50;

    const progressBarStyle = {
        top: '0px',
        left: '0px',
        height: '4px',
        width: `${fillPercentage || 50}%`,
        backgroundColor: '#A770EF',
        borderRadius: '4px',
        zIndex: '1',
    };

    const progressBarImage = {
        top: '0px',
        left: `${fillPercentage || 50}%`,
        transform: 'translate(-50%, -50%)',
    };

    return new ImageResponse(
        (
            <div
                style={{
                    position: 'relative',
                    display: 'flex',
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
                            top: '20px',
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
                            top: '18px',
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

                    <p
                        style={{
                            textAlign: 'center',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            ...cardTitleStyle,
                        }}
                    >
                        {poll.title} sefjh jske nnsefh kjs ksenfk nsekjfn kjsenfkj nsekfn kjsenfkj
                        sef sefse f sef se nsekjfnk
                    </p>

                    {/* <div
                        style={{
                            position: 'absolute',
                            ...progressBarContainerStyle,
                        }}
                    >
                        <div
                            style={{
                                position: 'relative',
                                ...progressBarBgStyle,
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    ...progressBarStyle,
                                }}
                            ></div>

                            <img
                                src={
                                    leftValue >= rightValue
                                        ? `${baseUrl}/images/voteProgress/voice-coin-left.png`
                                        : `${baseUrl}/images/voteProgress/voice-coin-right.png`
                                }
                                width={40}
                                height={40}
                                style={{ position: 'absolute', ...progressBarImage }}
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        ),
        { ...size },
    );
}

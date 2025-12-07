import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Aida Anna Tom | Senior Product Manager & AI Strategist";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    // Font loading (optional, using system fonts for simplicity and speed for now)
    // strict-local-fonts can be complex without reading file system in edge

    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "80px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "60%",
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: "bold",
                            color: "#111827",
                            marginBottom: 20,
                            lineHeight: 1.1,
                            display: "flex", // essential for flex layout in OG
                            flexDirection: "column",
                        }}
                    >
                        <span>Architecting</span>
                        <span style={{ color: "#2563eb" }}>AI-Driven Products</span>
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: "#4b5563",
                            marginBottom: 40,
                        }}
                    >
                        Senior Product Manager & AI Strategist
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '8px solid white',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}>
                    {/* 
               Using an absolute URL for the image is safest. 
               Since it's generating at build/request time, we need the deployment URL. 
               For now, we can try using the vercel URL or a placeholder if local.
               In local dev, using process.env.NEXT_PUBLIC_SITE_URL or similar is common.
               However, `fetch`ing the local image in Edge runtime can be tricky.
               Simplest reliable way for now: a styled div representation or trying to fetch if feasible.
               Let's try standard fetch if the user has a live URL, but safely fallback.
            */}
                    <img
                        src="https://aida-portfolio.vercel.app/headshot.jpg"
                        alt="Aida Anna Tom"
                        width="400"
                        height="400"
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}

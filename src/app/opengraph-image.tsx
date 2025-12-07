import { ImageResponse } from "next/og";
import fs from "fs";
import { fileURLToPath } from "url";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const alt = "Aida Anna Tom | Senior Product Consultant & AI Strategist";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    // Robustly resolve the file path relative to this file
    const imagePath = fileURLToPath(new URL('../../public/headshot-og.png', import.meta.url));
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBase64 = `data:image/png;base64,${imageBuffer.toString("base64")}`;

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
                            display: "flex",
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
                        Senior Product Consultant | Product Owner
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
                    <img
                        src={imageBase64}
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

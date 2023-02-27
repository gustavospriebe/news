import React from "react";

export default function SideContent() {
    return (
        <div className="sidebar">
            <h1 className="sidebar-title">New</h1>
            <div className="sidebar-news">
                <h3>Hydrogen VS Eletric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="sidebar-news">
                <h3>The Downsides of AI Artistry</h3>
                <p>
                    What are the possible adverse effects of on-demand AI image
                    generation?
                </p>
            </div>
            <div className="sidebar-news">
                <h3>Is VC Funding Drying Up?</h3>
                <p>
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                </p>
            </div>
        </div>
    );
}

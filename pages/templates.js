import React from "react";
import Template from "../components/Template";

const templates = () => {
    return (
        <>
            <h1 className="text-3xl font-bold text-primary mb-16"> Templates</h1>

            <h2 className="text-2xl font-bold mb-4">Notion</h2>
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                <Template
                    title="Template1"
                    description="This is a great template for everyone who wants to get started with ai and notiona nd all the other great stuff thats out thtere."
                    img="/test.png"
                    link="https://pixelloopstudio.notion.site/Test-1d77c3c15f8a4a2585038b8258b6c211"
                />
                <Template
                    title="Template2"
                    description="This is a great template for everyone who wants to get started with ai and notiona nd all the other great stuff thats out thtere."
                    img="/test.png"
                    link="https://pixelloopstudio.notion.site/Test-1d77c3c15f8a4a2585038b8258b6c211"
                />
                <Template
                    title="Template2"
                    description="This is a great template for everyone who wants to get started with ai and notiona nd all the other great stuff thats out thtere."
                    img="/test.png"
                    link="https://pixelloopstudio.notion.site/Test-1d77c3c15f8a4a2585038b8258b6c211"
                />
                <Template
                    title="Template2"
                    description="This is a great template for everyone who wants to get started with ai and notiona nd all the other great stuff thats out thtere."
                    img="/test.png"
                    link="https://pixelloopstudio.notion.site/Test-1d77c3c15f8a4a2585038b8258b6c211"
                />
            </div>
            <h2 className="text-2xl font-bold mb-4">Excel</h2>
               <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <Template
                    title="Template2"
                    description="This is a great template for everyone who wants to get started with ai and notiona nd all the other great stuff thats out thtere."
                    img="/test.png"
                    link="https://pixelloopstudio.notion.site/Test-1d77c3c15f8a4a2585038b8258b6c211"
                />
                </div>

        </>
    );
};

export default templates;

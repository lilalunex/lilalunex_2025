import {
    Link
} from "@remix-run/react";

export default function ProjectsPage() {

    return (
        <>
            <div className="md:hidden container py-28 me-page">
                <div className="pb-12 px-4">
                    <div className="content-box mx-auto p-8">
                        <h3 className="underline">Projects of the Past</h3>
                        <div className="pt-4">
                            <ul>
                                <Link to="/one-handed-mobile-menu">
                                    <li>- Idea: One handed mobile menu</li>
                                </Link>
                                <a href="https://lilalunex.netlify.app/" target="_blank">
                                    <li className="mt-4">- First Remix "Website" (2024, opens in new tab)</li>
                                </a>
                                <a href="https://lilalunex.github.io/" target="_blank">
                                    <li className="mt-4">- First Vue "Website" (2023, opens in new tab)</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pb-12 px-4">
                    <div className="content-box mx-auto p-8">
                        <h3 className="underline">Projects of the Present</h3>
                        <div className="pt-4">
                            <ul>
                                <li>- The CoWorking Hub</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pb-12 px-4">
                    <div className="content-box mx-auto p-8">
                        <h3 className="underline">Projects of the Future</h3>
                        <div className="pt-4">
                            <ul>
                                <li>- Socialize Browser MMO</li>
                                <li>- Nexx</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block container py-48">
                <div className="pb-12 px-4">
                    <div className="content-box mx-auto p-8">
                        <h2 className="underline">Projects of the Past</h2>
                        <div className="pt-4">
                            <ul>
                                <Link to="/one-handed-mobile-menu">
                                    <li>- Idea: One handed mobile menu</li>
                                </Link>
                                <a href="https://lilalunex.netlify.app/" target="_blank">
                                    <li className="mt-4">- First Remix "Website" (2024, opens in new tab)</li>
                                </a>
                                <a href="https://lilalunex.github.io/" target="_blank">
                                    <li className="mt-4">- First Vue "Website" (2023, opens in new tab)</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pb-12 px-4">
                    <div className="content-box mx-auto p-8">
                        <h2 className="underline">Projects of the Present</h2>
                        <div className="pt-4">
                            <ul>
                                <li>- The CoWorking Hub</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pb-12 px-4">
                    <div className="content-box mx-auto p-8">
                        <h2 className="underline">Projects of the Future</h2>
                        <div className="pt-4">
                            <ul>
                                <li>- Socialize Browser MMO</li>
                                <li>- Nexx</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
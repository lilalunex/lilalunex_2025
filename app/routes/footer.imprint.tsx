export default function ImprintPage() {
    const vite_name = import.meta.env.VITE_NAME;
    const vite_address1 = import.meta.env.VITE_ADDRESS_1;
    const vite_address2 = import.meta.env.VITE_ADDRESS_2;
    const vite_address3 = import.meta.env.VITE_ADDRESS_3;
    const vite_company = import.meta.env.VITE_COMPANY;

    return (
        <div className="container py-48">
            <div className="border-b-2 border-golden-tan pb-24">
                <h2 className="text-black">Impressum / Imprint (German)</h2>
                <p className="text-black pt-12 full-ch">
                    <strong>Angaben gemäß § 5 TMG</strong><br /><br />

                    <strong>Betreiber der Website & Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
                    {vite_company}<br />
                    {vite_name}<br />
                    {vite_address1}<br />
                    {vite_address2}<br />
                    {vite_address3}<br /> <br />

                    <strong>Kontakt:</strong><br />
                    E-Mail-Adresse: <img src="/footer/mail.png" alt="E-Mail-Adresse" className="inline" /><br />
                    Telefonnummer: <img src="/footer/tel.png" alt="Telefonnummer" className="inline" /><br /><br />

                    <strong>Haftungsausschluss (Disclaimer):</strong><br />
                    Haftung für Inhalte<br />
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br /><br />

                    <strong>Haftung für Links</strong><br />
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.<br /><br />

                    <strong>Urheberrecht</strong><br />
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.<br /><br />

                    <strong>Alternative Streitbeilegung:</strong><br />
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /><br />
                </p>
            </div>
            <div className="pt-24">
                <h2 className="text-black">Imprint / Legal Notice</h2>
                <p className="text-black pt-12 full-ch">
                    <strong>Information in accordance with § 5 TMG</strong><br /><br />

                    <strong>Website Operator & Responsible for Content according to § 55 Abs. 2 RStV:</strong><br />
                    {vite_company}<br />
                    {vite_name}<br />
                    {vite_address1}<br />
                    {vite_address2}<br />
                    {vite_address3}<br /><br />

                    <strong>Contact:</strong><br />
                    Email Address: <img src="/footer/mail.png" alt="Email Address" className="inline" /><br />
                    Telefonnummer: <img src="/footer/tel.png" alt="Telefonnummer" className="inline" /><br /><br />

                    <strong>Disclaimer:</strong><br />
                    Liability for Content<br />
                    As a service provider, we are responsible for our own content on these pages in accordance with § 7 Abs. 1 TMG under general laws. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.<br /><br />

                    <strong>Liability for Links</strong><br />
                    Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.<br /><br />

                    <strong>Copyright</strong><br />
                    The content and works created by the site operators on these pages are subject to German copyright law. Contributions from third parties are marked as such. Reproduction, editing, distribution, and any kind of use outside the boundaries of copyright law require the written consent of the respective author or creator.<br /><br />

                    <strong>Alternative Dispute Resolution:</strong><br />
                    The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr. You can find our email address above in the imprint.<br /><br />
                </p>
            </div>
        </div>
    );
}
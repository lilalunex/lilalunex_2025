export default function PrivacyPage() {
    const vite_name = import.meta.env.VITE_NAME;
    const vite_address1 = import.meta.env.VITE_ADDRESS_1;
    const vite_address2 = import.meta.env.VITE_ADDRESS_2;
    const vite_address3 = import.meta.env.VITE_ADDRESS_3;
    const vite_company = import.meta.env.VITE_COMPANY;

    return (
        <div className="container py-48">
            <div className="border-b-2 border-golden-tan pb-24">
                <h2 className="text-black">Datenschutzerklärung / Privacy Policy</h2>
                <p className="text-black pt-12 full-ch">
                    <strong>1. Allgemeine Hinweise</strong><br />
                    Der Schutz deiner persönlichen Daten ist uns wichtig. Wir behandeln deine personenbezogenen Daten vertraulich und gemäß den gesetzlichen Datenschutzvorschriften.<br /><br />

                    <strong>2. Verantwortlicher</strong><br />
                    {vite_company}<br />
                    {vite_name}<br />
                    {vite_address1}<br />
                    {vite_address2}<br />
                    {vite_address3}<br /><br />

                    <strong>Kontakt:</strong><br />
                    E-Mail: <img src="/footer/mail.png" alt="E-Mail-Adresse" className="inline" /><br /><br />

                    <strong>3. Erhebung und Verarbeitung personenbezogener Daten</strong><br />
                    Beim Besuch unserer Website werden automatisch folgende Daten erfasst:<br />
                    - IP-Adresse (anonymisiert)<br />
                    - Datum und Uhrzeit des Zugriffs<br />
                    - Browsertyp und -version<br />
                    - Betriebssystem<br />
                    - Referrer-URL<br /><br />
                    Die Verarbeitung erfolgt zur technischen Bereitstellung der Website und zur statistischen Auswertung.<br /><br />

                    <strong>4. Google Analytics</strong><br />
                    Diese Website nutzt Google Analytics. Dabei werden anonymisierte Daten zur Analyse der Websitenutzung verarbeitet. Die Daten werden auf Servern von Google gespeichert.<br /><br />

                    <strong>Widerspruch:</strong><br />
                    Du kannst die Speicherung von Cookies durch eine entsprechende Einstellung deines Browsers verhindern oder das Google-Opt-out-Tool nutzen:<br />
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">https://tools.google.com/dlpage/gaoptout</a><br /><br />
                </p>
            </div>
            <div className="pt-24">
                <h2 className="text-black">Privacy Policy</h2>
                <p className="text-black pt-12 full-ch">
                    <strong>1. General Information</strong><br />
                    Protecting your personal data is important to us. We treat your data confidentially and in accordance with legal data protection regulations.<br /><br />

                    <strong>2. Controller</strong><br />
                    {vite_company}<br />
                    {vite_name}<br />
                    {vite_address1}<br />
                    {vite_address2}<br />
                    {vite_address3}<br /><br />

                    <strong>Contact:</strong><br />
                    Email: <img src="/footer/mail.png" alt="Email Address" className="inline" /><br /><br />

                    <strong>3. Collection and Processing of Personal Data</strong><br />
                    When visiting our website, the following data is automatically collected:<br />
                    - IP address (anonymized)<br />
                    - Date and time of access<br />
                    - Browser type and version<br />
                    - Operating system<br />
                    - Referrer URL<br /><br />
                    This data is processed for technical provision and statistical evaluation.<br /><br />

                    <strong>4. Google Analytics</strong><br />
                    This website uses Google Analytics. Anonymous data is collected for website usage analysis and stored on Google servers.<br /><br />

                    <strong>Opt-Out:</strong><br />
                    You can disable cookies in your browser settings or use Google's opt-out tool:<br />
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">https://tools.google.com/dlpage/gaoptout</a><br /><br />
                </p>

            </div>
        </div>
    );
}

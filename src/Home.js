import React from 'react';
import './styles.css'; // Import für das Styling

const Home = () => {
    return (
        <header2 className="home-header">
            <div className="horizontal-section">
                <section className="section-block">
                    <h2>Willkommen bei DentaView</h2>
                    <p>
                        Auf unserer Website <strong>DentaView</strong> können Sie die faszinierende Welt der Zahnmedizin interaktiv und anschaulich erkunden.
                        Ob Sie Zahnanatomie besser verstehen, die Grundlagen der Zahnhygiene erlernen oder Ihr Wissen testen möchten – bei uns sind Sie genau richtig!
                    </p>
                </section>
                <section className="section-block">
                    <h2>3D-Modell der Zahnanatomie</h2>
                    <p>
                        Unser Highlight ist das interaktive <strong>3D-Modell der Zahnanatomie</strong>. Erkunden Sie Zähne in ihrer ganzen Komplexität
                        und entdecken Sie die verschiedenen Strukturen wie Zahnschmelz, Dentin, Wurzeln und mehr – einfach und intuitiv.
                        Das Modell erlaubt Ihnen, jedes Detail aus verschiedenen Perspektiven zu betrachten und so das Verständnis
                        für Aufbau und Funktion der Zähne zu vertiefen.
                    </p>
                </section>
                <section className="section-block">
                    <h2>Informative Beitragsseiten</h2>
                    <p>
                        Unsere umfangreichen <strong>Beitragsseiten</strong> bieten Ihnen fundiertes Wissen zu zwei Hauptthemen:
                    </p>
                    <ul>
                        <li><strong>Zahnanatomie:</strong> Tauchen Sie tief in die Welt der Zahnstrukturen und -funktionen ein. Lernen Sie, wie Zähne aufgebaut sind und welche Rolle sie im menschlichen Körper spielen.</li>
                        <li><strong>Zahnhygiene:</strong> Entdecken Sie bewährte Tipps und Methoden für die richtige Zahnreinigung und Vorsorge, damit Ihre Zähne gesund und stark bleiben.</li>
                    </ul>
                    <p>
                        Die Inhalte sind übersichtlich strukturiert und leicht verständlich – ideal für Lernende, Fachleute und alle, die mehr über Zähne erfahren möchten.
                    </p>
                </section>
                <section className="section-block">
                    <h2>Quiz – Testen Sie Ihr Wissen!</h2>
                    <p>
                        Haben Sie die Beitragsseiten durchgearbeitet? Dann stellen Sie Ihr Wissen auf die Probe mit unserem <strong>interaktiven Quiz</strong>!
                        Es ist speziell darauf ausgelegt, die Inhalte der Beitragsseiten zu vertiefen und Ihr Verständnis zu überprüfen.
                        Spielerisch und motivierend – ideal für eine effektive Lernkontrolle.
                    </p>
                </section>
                <section className="section-block">
                    <h2>Warum DentaView?</h2>
                    <p>
                        Wir glauben, dass Lernen Spaß machen sollte. Mit unseren interaktiven Tools und gut aufbereiteten Inhalten kombinieren wir modernste Technik
                        mit leicht verständlichem Wissen, um Ihnen eine optimale Lernerfahrung zu bieten.
                    </p>
                    <p>
                        Besuchen Sie <strong>DentaView</strong> und starten Sie Ihre Reise in die faszinierende Welt der Zahnanatomie und Zahnhygiene!
                    </p>
                </section>
            </div>
        </header2>
    );
};

export default Home;

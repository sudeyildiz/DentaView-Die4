import React from 'react';
import './styles.css'; // Import für das Styling

const Home = () => {
    return (
        <header2 className="home-header">
            <div className="horizontal-section">
                <section>
                    <div className="box">
                        <h2>Willkommen bei DentaView</h2>
                        <p>
                            Auf unserer Website DentaView können Sie die faszinierende Welt der Zahnmedizin interaktiv
                            und anschaulich erkunden.
                            Ob Sie Zahnanatomie besser verstehen, die Grundlagen der Zahnhygiene erlernen oder Ihr
                            Wissen testen möchten –
                            bei uns sind Sie genau richtig!
                        </p>
                    </div>

                    <div className="box">
                        <h2>3D-Modell der Zahnanatomie</h2>
                        <p>
                            Unser Highlight ist das interaktive 3D-Modell der Zahnanatomie. Erkunden Sie Zähne in ihrer
                            ganzen Komplexität
                            und entdecken Sie die verschiedenen Strukturen wie Zahnschmelz, Dentin, Wurzeln und mehr –
                            einfach und intuitiv.
                            Das Modell erlaubt Ihnen, jedes Detail aus verschiedenen Perspektiven zu betrachten und so
                            das Verständnis für
                            Aufbau und Funktion der Zähne zu vertiefen.
                        </p>
                    </div>

                    <div className="box">
                        <h2>Informative Beitragsseiten</h2>
                        <p>
                            Unsere umfangreichen Beitragsseiten bieten Ihnen fundiertes Wissen zu zwei Hauptthemen:
                            <ul>
                                <li><strong>Zahnanatomie:</strong> Tauchen Sie tief in die Welt der Zahnstrukturen und
                                    -funktionen ein. Lernen Sie, wie Zähne aufgebaut sind und welche Rolle sie im
                                    menschlichen Körper spielen.
                                </li>
                                <li><strong>Zahnpflege:</strong> Entdecken Sie bewährte Tipps und Methoden für die
                                    richtige Zahnpflege und Vorsorge, damit Ihre Zähne gesund und stark bleiben.
                                </li>
                            </ul>
                            Die Inhalte sind übersichtlich strukturiert und leicht verständlich – ideal für Lernende,
                            Fachleute und alle, die mehr über Zähne erfahren möchten.
                        </p>
                        <a href="/Beitrag2" className="cta-button">Mehr erfahren</a>
                    </div>

                    <div className="box">
                        <h2>Quiz – Testen Sie Ihr Wissen!</h2>
                        <p>
                            Haben Sie die Beitragsseiten durchgearbeitet? Dann stellen Sie Ihr Wissen auf die Probe mit
                            unserem interaktiven Quiz!
                            Es ist speziell darauf ausgelegt, die Inhalte der Beitragsseiten zu vertiefen und Ihr
                            Verständnis zu überprüfen.
                            Spielerisch und motivierend – ideal für eine effektive Lernkontrolle.
                        </p>
                        <a href="/quiz" className="cta-button">Zum Quiz</a>
                    </div>

                    <div className="box">
                        <h2>Warum DentaView?</h2>
                        <p>
                            Wir glauben, dass Lernen Spaß machen sollte. Mit unseren interaktiven Tools und gut
                            aufbereiteten Inhalten kombinieren wir
                            moderne Technik mit leicht verständlichem Wissen, um Ihnen eine optimale Lernerfahrung zu
                            bieten. Besuchen Sie DentaView und
                            starten Sie Ihre Reise in die faszinierende Welt der Zahnanatomie und Zahnhygiene!
                        </p>
                    </div>
                </section>
            </div>
        </header2>
    );
};

export default Home;

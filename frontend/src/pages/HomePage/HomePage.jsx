import "./HomePage.scss";

export default function HomePage() {
    return (
        <div className="HomePage">
            <section className="HomePage__mobile">
                <h3>Download our app:</h3>
                <img src="/src/assets/icons/Download.png" />
            </section>

            <section className="HomePage__tablet">
                <h3>Download our app!</h3>
            </section>

            <section className="HomePage__desktop">
                <h3>Download our app!</h3>
            </section>

        </div>
    )
}
import subscriptions from "../data/data"

const Plans = () => {
    return (
    <section className="plans-container">

        {subscriptions.map((subscription) => {
            return (
                <article key={subscription.id} className="single-plan">
                <h2>{subscription.title}</h2>
                <p className="price">${subscription.price}/{subscription.period}</p>
                </article>
            )
        })}
      </section>
    )
}

export default Plans
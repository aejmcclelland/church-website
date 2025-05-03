"use client";

export default function Welcome() {
    return (
        <section className="bg-base-300 py-12 px-6 text-center">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold font-liter text-primary mb-4">
                    Welcome to Hope Street Church
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you’re a new visitor or a long-time member, we invite you to join us in worship and fellowship.
                    Experience a welcoming community rooted in faith and love.
                </p>
                <a
                    href="/who-we-are/values"
                    className="mt-6 inline-block px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-primary-focus transition"
                >
                    Learn More
                </a>
            </div>
        </section>
    );
}
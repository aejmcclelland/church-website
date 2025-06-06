"use client";

export default function FeaturedContent() {
    return (
        <section className="bg-primary py-12 px-6 text-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-white mb-6">Featured</h2>

                <div className="p-6 bg-base-100 text-gray-900 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">Thought for the Week</h3>
                    <p className="mt-2">"Commit to the LORD whatever you do, and he will establish your plans" (Proverbs 16:3)</p>
                </div>
            </div>
        </section>
    );
}
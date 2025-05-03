"use client";

export default function FindUs() {
    return (
        <section className="bg-base-100 py-12 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Column - Church Description */}
                <div>
                    <h2 className="text-2xl font-bold text-primary">Find Us</h2>
                    <p className="text-gray-700 mt-4">
                        Hope Street Church is situated on Hope Street in Newtown.
                        Car parking is available at the rear of the church building – drive in through the gates and proceed down the right had side.
                    </p>
                </div>

                {/* Right Column - Google Map */}
                <div className="flex justify-center w-full">
                    <div className="inline-block w-fit">
                        <iframe
                            className="w-[360px] h-[200px] md:w-[400px] md:h-[250px] lg:w-[500px] lg:h-[300px]"
                            loading="lazy"
                            title="Google Map"
                            style={{ border: 0 }}
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39162.452677640096!2d-1.6457119542113767!3d54.533110389017764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e9b85de741c0b%3A0x2f07d97860796771!2sCockerton%20Car%20Park!5e1!3m2!1sen!2suk!4v1746279751703!5m2!1sen!2suk"  ></iframe>
                    </div>
                </div>
            </div>
        </section >
    );
};

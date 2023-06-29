import React from 'react'
import Image from "next/image";

export default function Service() {
    return (
        <div className="bg-emerald-900 text-white">
            <section
                className="container mx-auto py-12 bg-cover bg-center"
                style={{backgroundImage: `url('/path/to/your-image.jpg')`}}
            >
                <div className="text-4xl font-bold">Hero Section</div>
            </section>
            <section className="mx-auto py-8">
                <div className="text-xl font-bold mb-4 text-center">SERVICES</div>


                <div className="p-12 serv-sec mb-2 bg-amber-200">
                    <div className="grid grid-cols-2 gap-4 items-center">
                        <div>
                            <Image src="https://images.pexels.com/photos/15625905/pexels-photo-15625905/free-photo-of-
                            close-up-of-a-butterfly-on-a-purple-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                   width={500}
                                   height={500}
                                   alt="Your Image"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Partnerships</h3>
                            <p>
                                Partner with Turntabl today and design low-cost, high-quality technology ethically and
                                sustainably.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-4 w-full"/>


                <div className="p-12 serv-sec mb-2 bg-amber-200">
                    <div className="grid grid-cols-2 gap-4 items-center">
                        <div>
                            <h3 className="text-xl font-bold">Project Management</h3>
                            <p>
                                We cooperate with you throughout the project life-cycle in small, committed teams. From
                                inception and definition to delivery, production and maintenance - our style is clean
                                lines, efficient code, empowered users.
                            </p>
                        </div>
                        <div>
                            <Image src="https://images.pexels.com/photos/15625905/pexels-photo-15625905/free-photo-of-
                            close-up-of-a-butterfly-on-a-purple-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                   width={500}
                                   height={500}
                                   alt="Your Image"/>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-4 w-full"/>


                <div className="p-12 serv-sec mb-2 bg-amber-200">
                    <div className="grid grid-cols-2 gap-4 items-center">
                        <div>
                            <Image src="https://images.pexels.com/photos/15625905/pexels-photo-15625905/free-photo-of-
                            close-up-of-a-butterfly-on-a-purple-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                   width={500}
                                   height={500}
                                   alt="Your Image"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Development</h3>
                            <p>
                                We can assist you in growing your group. Our personnel are adaptable and resourceful. We
                                chew
                                through JIRAs just as easily as we develop your UX or next generation micro-service
                                layer.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-4 w-full"/>


                <div className="p-12 serv-sec mb-2 bg-amber-200">
                    <div className="grid grid-cols-2 gap-4 items-center">
                        <div>
                            <h3 className="text-xl font-bold">Software Consultancy</h3>
                            <p>
                                We listen to . your issues first. After that, you get industry-leading services from a
                                professional solutions team.
                            </p>
                        </div>
                        <div>
                            <Image src="https://images.pexels.com/photos/15625905/pexels-photo-15625905/free-photo-of-
                            close-up-of-a-butterfly-on-a-purple-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                   width={500}
                                   height={500}
                                   alt="Your Image"/>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-4 w-full"/>


            </section>
        </div>
    )
}

import * as React from "react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion"
  

const FAQ: React.FC = () => {
    return (
        <section className="bg-white pt-11 pb-16 w-full sm:px-10">
             <h2 className="text-primary text-3xl sm:text-5xl font-bold w-full text-center mb-9 mt-5">Still Not Convinced?<br></br>We’ve Got The Answers</h2>
             <Accordion className="sm:px-0 px-2" type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl font-bold">What services are available at Naseers?</AccordionTrigger>
                    <AccordionContent className="sm:text-start text-center sm:px-0 px-2">
                        Naseers provides services in a lot of digital solutions like Shopify development, WordPress development, API integration, UX/UI design, logo design, product packaging design, branding and SEO.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl font-bold">How can Naseers help grow my business online?</AccordionTrigger>
                    <AccordionContent className="sm:text-start text-center sm:px-0 px-2">
                    We design and develop unique business solutions that aim at developing professional websites, eye-catching designs, and effective promotion services to improve your company’s online reputation and increase profits.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl font-bold">What happens once the project is done?</AccordionTrigger>
                    <AccordionContent className="sm:text-start text-center sm:px-0 px-2">
                    Of course, after the project is over, we continue to assist our clients in any way they may require. We want your digital platform to work flawlessly, we are always ready to help with updates, maintenance or any issues that might arise.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-2xl font-bold">How long will it take for an average project to be completed?</AccordionTrigger>
                    <AccordionContent className="sm:text-start text-center sm:px-0 px-2">
                    The timeline for each project varies based on its complexity. We prioritize timely delivery and work closely with clients to meet agreed deadlines without compromising on quality.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-2xl font-bold">How can I get sign up or register with Naseers?</AccordionTrigger>
                    <AccordionContent className="sm:text-start text-center sm:px-0 px-2">
                    Getting started is simple! You can use the services of our personnel through the contact form or email to get a free consultation. You will share your project concept and we will suggest the best way to implement the concept.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}

export default FAQ;
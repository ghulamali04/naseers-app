import * as React from "react"
import { useToast } from "../hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"

import  BackgroundImage from '../assets/about-background.png';

import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
    full_name: z.string().min(2, {
        message: "Full Name must be at least 2 characters.",
      }).max(250, { message: "Full Name cannot exceed 250 characters." }),
      email: z.string().email({
        message: "Invalid email format.",
      }).min(2, {
        message: "Email must be at least 2 characters.",
      }).max(250, { message: "Email cannot exceed 250 characters." }),
      phone_number: z.string().min(2, {
        message: "Phone Number must be at least 2 characters.",
      }).max(250, { message: "Phone Number cannot exceed 250 characters." }),
      message: z.string()
        .min(2, { message: "Message must be at least 2 characters." })
        .max(255, { message: "Message cannot exceed 255 characters." })
  })

const About: React.FC = () => {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          full_name: "",
          email: "",
          phone_number: "",
          message: ""
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        fetch('https://naseers-api.skillslay.pk/api/contact/send-mail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values), 
          })
            .then(response => response.json()) 
            .then(data => {
                console.log(data)
                form.reset()
                toast({
                    title: "Success",
                    description: "Your message is successfully sent.",
                  })
              
            })
            .catch(error => {
                console.log(error)
                toast({
                    title: "Error",
                    description: "An error occurred while sending message.",
                  })
            }).finally(() => {
                setIsSubmitting(false) 
            });;
      }    

    return (
        <section id="contact" style={{ backgroundImage: `url('${BackgroundImage}')` }} className=" bg-cover bg-center  w-full pt-11 pb-16 sm:px-10">
            <h2 className="text-primary 2xl:text-6xl text-3xl sm:text-5xl font-bold w-full text-center mb-9 mt-5">Have A Project In Mind?<br></br>Let’s Get To Work.</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex align-items justify-center ">
                        <div className="md:w-2/6 sm:w-2/3 w-full sm:px-0 px-2">
                        <FormDescription>
                                Please fill out the information below
                            </FormDescription>
                            <FormField
                                control={form.control}
                                name="full_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Full Name" className="2xl:text-xl mb-3" {...field} />
                                        </FormControl> 
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" className="2xl:text-xl mb-3" {...field} />
                                        </FormControl> 
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone_number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Phone Number" className="2xl:text-xl mb-3" {...field} />
                                        </FormControl> 
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Message" className="2xl:text-xl mb-3" {...field}/>
                                        </FormControl> 
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="w-full flex align-items justify-center mt-3">
                        <button
                        disabled={isSubmitting}
                        className="btn-dark 2xl:text-2xl w-4/5 sm:w-3/5 md:w-3/5 lg:w-2/5 flex justify-center gap-x-2">
                        <span>Contact Us</span>
                        <svg className="w-6 h-6 2xl:w-9 2xl:h-9 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>

                        </button>
                        </div>
                        </div>
                    </div>
                </form>
            </Form>
        </section>
    )
}

export default About

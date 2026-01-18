import Link from "next/link";
import Image from 'next/image';
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="bg-[#3c3d45] mt-2">
      <a href="https://www.buymeacoffee.com/TamManuel"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=TamManuel&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>
        
      <div className="text-center center item-center">
        <Link href={'/about-us.php'}>About us</Link>
      </div>
        <div className="text-white w-11/12 my-0 mx-auto flex flex-col-reverse gap-y-3.5 md:flex-row lg:flex-row items-center justify-between pt-5 pb-2">
          <div className="flex flex-col text-center gap-y-1.5 md:text-right lg:text-right w-fit">
            <h3 className="font-normal text-sm">
              SUBSCRIBE TO OUR NEWS LETTTER
            </h3>
            <div className="flex items-center gap-x-2.5 justify-end border-b border-[#8D8D8D]">
              <div className="basis-full lg:basis-1/2 w-full">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="text-[#737C87] outline-[#737C87] text-sm font-normal w-[100%] lg:w-[256px] py-1 px-3 bg-transparent"
                />
              </div>
              <div className="text-[#737C87]">|</div>
              <div className="lg:basis-1/4">
                <Button className="flex items-center gap-x-2.5 text-sm text-[#737C87] font-normal p-2.5 bg-transparent hover:bg-red">
                  Subscribe <Image src="/icons/Arrow Up.svg" alt="Arrow Up" width={35} height={35}/>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-1.5 md:items-end lg:items-end w-fit">
            <h3 className="font-normal text-sm">
              CONTACT US
            </h3>
            <div className="flex items-center gap-x-2.5">
              <Link href="https://www.facebook.com/southern.gloryy">
              <Image src="/icons/Facebook.svg" alt="Facebook" width={35} height={35}/>
              </Link>
              <Link href="">
              <Image src="/icons/Tik Tok.svg" alt="Tik Tok" width={35} height={35}/>
              </Link>

                  {/* FOOTER EMAIL IMAGE */}
                  <Dialog>
                  <DialogTrigger>
                    <Image src="/icons/Email.svg" alt="Email" width={35} height={35} />
                  </DialogTrigger>
                    <DialogContent className="bg-black border-gray text-white md:max-w-[50%] sm:max-w-[95%]">
                      
                  
                      <DialogHeader>
                        <DialogTitle className="text-xl text-center">Send Email</DialogTitle>
                        <DialogDescription className="text-base text-white text-center">
                          Send us a mail without leaving the app. Click 'send message' when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-row-4 items-center gap-4">
                        <form
                          id="contact-form"
                          // onSubmit={handleSubmit}
                          action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_FORM_SUBMIT}`}
                          method="POST"
                        >
                          <Label htmlFor="name" className="text-xl mt-4 text-center w-full col-span-3">
                            Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Your name..."
                            className="col-span-3 text-black mb-4 text-base"
                            name="name"
                            required
                          />
                          <Label htmlFor="username" className="text-xl mt-4 text-center col-span-3">
                            Email
                          </Label>
                          <Input
                            id="username"
                            placeholder="Your email..."
                            className="col-span-3 text-black text-base mb-4"
                            name="email"
                            type="email"
                            required
                          />
                          <Label htmlFor="message" className="text-xl mt-4 text-center col-span-3">
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Your message..."
                            className="col-span-3 text-black text-base mb-4"
                            name="message"
                            required
                          />
                          <DialogFooter>
                          <Button type="submit" className="w-full mt-4 text-xl">
                            Send message
                          </Button>
                      </DialogFooter>
                      </form>
                        </div>
                      </div>
                        
                    </DialogContent>
                </Dialog>

              <Link href="https://twitter.com/tam_webdev">
              <Image src="/icons/X.svg" alt="X" width={35} height={35}/>
              </Link>
              <Link href="https://www.instagram.com/bobmanuel__/">
              <Image src="/icons/Instagram.svg" alt="Instagram" width={35} height={35}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B0D17] py-3.5">
        <p className="text-center text-[#6C6C6C] font-medium text-base leading-5">
          Copywrite © {currentYear}. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

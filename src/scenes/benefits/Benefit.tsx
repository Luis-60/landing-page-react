import React, { type JSX } from 'react'
import { SelectedPage } from "@/shared/types";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void; // Adjusted type to string for simplicity
}

const childVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};
const Benefit = ({ icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
        variants={childVariant}
        className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                {icon}
            </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit
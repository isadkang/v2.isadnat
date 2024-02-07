/* eslint-disable */
import React from "react";
import Header from "../../Fragments/Home/Header";
import roadmap from "../../../service/_roadmap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Roadmap = () => {

    return (
        <div className="dark:text-white mb-10 ">
            <div className="border-b border-gray-600 border-dashed mb-5">
                <Header title={'My Roadmap 🚀'} description={'Embarking on the exciting journey of becoming an expert programmer requires a well-structured learning path. This roadmap outlines the key milestones and steps that will guide me through the realm of coding mastery.'} />
            </div>
            <div className="mb-5 flex gap-3 text-sm">
                <Link to={''} className={'rounded-full py-1 px-4 border border-dashed font-medium'}>Self-roadmap</Link>
            </div>
            {roadmap.map((item, index) => (
                <div key={index} className="py-3 border rounded-lg hover:shadow dark:hover:shadow-white hover:scale-100 hover:border transition duration-300 mb-5 hover:cursor-pointer">
                    <div className="flex gap-5 mx-2">
                        <Icon icon={item.icon} fontSize={23}></Icon>
                        <p className="font-semibold">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Roadmap;

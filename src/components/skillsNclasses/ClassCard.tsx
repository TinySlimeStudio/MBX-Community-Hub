/*
 * MBX, Community Based Project
 * Copyright (c) 2026 SiriusB_
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect, useState } from "react";
import { Calendar, Globe, Languages, Layers, Layers2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiModrinth, SiCurseforge, SiGithub, SiDiscord } from "react-icons/si";

interface ClassProps {
    project: {
        name: string;
    };
}

const ClassCards: React.FC<ClassProps> = ({ project }) => {
    const t = useTranslation("projects").t;

    return (
        <div className="p-2 items-center relative bg-gradient-to-br from-gray-800/50 to-gray-900/60 rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col h-full">
            <div className="w-full">
                <div className="relative w-full" style={{ paddingTop: "100%" }}>
                    <img
                        src="https://cdn.modrinth.com/data/SiyJSGns/7352eb4713d9da6bf026026b27a1112f932741df_96.webp"
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover rounded"
                    />
                </div>
            </div>
            <div className="mt-2 flex-1 flex items-center justify-center">
    <h2 className="font-bold text-white text-center leading-none">
        {project.name}
    </h2>
</div>
        </div>
    );
};

export default ClassCards;

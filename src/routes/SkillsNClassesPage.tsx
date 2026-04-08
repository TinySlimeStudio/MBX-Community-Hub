/*
 * MBX, Community Based Project
 * Copyright (c) 2024 SiriusB_
 * SPDX-License-Identifier: MIT
 */

import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "@components/community/ProjectCard";
import { Users } from "lucide-react";
import ClassCards from "@components/skillsNclasses/ClassCard";
import SpellCard from "@components/skillsNclasses/SpellCard";

const SkillsNClassesPage: FC = () => {
    const { t } = useTranslation("skillsNclasses");
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const response = await fetch("/assets/data/projects.json");
                if (!response.ok) throw new Error("Failed to load projects.");
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError("Failed to load community projects.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    return (
        <div className="p-10 max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
                <Users className="mx-auto mb-2 h-16 w-16 text-green-500 bg-opacity-20 bg-green-500 p-3 rounded-lg" />
                <span><h1 className="text-4xl font-bold text-white mb-1">
                    {t("skillsNclasses.skills.title")}
                </h1>
                <p className="text-gray-400 max-w-3xl mx-auto">
                    {t("skillsNclasses.skills.description")}
                </p>
                </span>
                <div className="mt-4 h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
            </div>

            {/* Spells Grid */}
            <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-8 gap-6 mt-6 mb-12">
                <SpellCard project={{ name: "Holy Strike" }} />
                <SpellCard project={{ name: "Unbreakable Will" }} />
                <SpellCard project={{ name: "Heavenly Shield" }} />
                <SpellCard project={{ name: "Hammer of Justice" }} />
                <SpellCard project={{ name: "Bound Seal" }} />
                <SpellCard project={{ name: "Last Stand" }} />
                <SpellCard project={{ name: "Eternal Flame" }} />
                <SpellCard project={{ name: "Wheel of Eternal Flame" }} />
                <SpellCard project={{ name: "Will-O-Wisps" }} />
                <SpellCard project={{ name: "Empower Minions" }} />
                <SpellCard project={{ name: "Life Drain" }} />
                <SpellCard project={{ name: "Skeletal Minion" }} />
                <SpellCard project={{ name: "Blasting Combo" }} />
                <SpellCard project={{ name: "Evasive Shot" }} />
                <SpellCard project={{ name: "Volley of Arrows" }} />
                <SpellCard project={{ name: "Piercing Skyfall" }} />
            </div>

            {/* Header */}
            <div className="text-center mb-12">
                <Users className="mx-auto mb-2 h-16 w-16 text-green-500 bg-opacity-20 bg-green-500 p-3 rounded-lg" />
                <h1 className="text-4xl font-bold text-white mb-1">
                    {t("skillsNclasses.classes.title")}
                </h1>
                <p className="text-gray-400 max-w-3xl mx-auto">
                    {t("skillsNclasses.classes.description")}
                </p>
                <div className="mt-4 h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-8 gap-6 mt-6 mb-12">
                <ClassCards project={{ name: "Paladin" }} />
                <ClassCards project={{ name: "Necromancer" }} />
                <ClassCards project={{ name: "Awakened Archer" }} />
                <ClassCards project={{ name: "Archer" }} />
                <ClassCards project={{ name: "Archmage" }} />
                <ClassCards project={{ name: "Arctic Knight" }} />
                <ClassCards project={{ name: "Artificer" }} />
                <ClassCards project={{ name: "Assassin" }} />
                <ClassCards project={{ name: "Awakened Assassin" }} />
                <ClassCards project={{ name: "Awakened Mage" }} />
                <ClassCards project={{ name: "Awakened Shaman" }} />
                <ClassCards project={{ name: "Awakened Summoner" }} />
                <ClassCards project={{ name: "Awakened Warrior" }} />
                <ClassCards project={{ name: "Barbarian" }} />
                <ClassCards project={{ name: "Bard" }} />
                <ClassCards project={{ name: "Beastmaster" }} />
            </div>

            
        </div>
    );
};

export default SkillsNClassesPage;

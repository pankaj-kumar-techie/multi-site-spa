import React from "react";
import { OurTeam } from "../../modal/Section";

//Todo: Reflector UI based To Team Member
export default function OurTeamMemberCard(member: OurTeam) {
    return (
        <div key={member.name}
            className="group relative py-6 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
            <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={member.imageSrc} alt={member.imageAlt} />
                <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{member.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{member.role}</p>
                </div>
            </div>
        </div>
    )
}
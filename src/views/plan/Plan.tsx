import React from "react";
import FirstPlan from "./v1/FirstPlan";

interface PlanUsProps {
    data: any;
    version: "v1";
}

const planComponents = {
    v1: FirstPlan,
};

const Plan: React.FC<PlanUsProps> = ({data, version}) => {
    const PlanComponent = planComponents[version];

    return <PlanComponent data={data}/>;
};

export default Plan;
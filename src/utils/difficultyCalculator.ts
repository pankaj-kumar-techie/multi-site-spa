const calculateDifficultyPercentage = (difficulty: string | undefined): number => {
    switch (difficulty) {
        case "Moderate":
            return 32;
        case "Challenging":
            return 49;
        case "Difficult":
            return 66;
        case "Technical":
            return 83;
        case "Extreme":
            return 99;
        default:
            return 17;
    }
};

export default calculateDifficultyPercentage;

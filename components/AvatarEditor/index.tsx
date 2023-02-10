import Avatar, { genConfig, AvatarConfig } from "react-nice-avatar";
import { icons } from "./icons";

const defaultOptions = {
    sex: ["man", "woman"],
    faceColor: ["#F9C9B6", "#AC6651"],
    earSize: ["small", "big"],
    hairColor: [
        "#000",
        "#fff",
        "#77311D",
        "#FC909F",
        "#D2EFF3",
        "#506AF4",
        "#F48150",
    ],
    hairStyle: ["normal", "thick", "mohawk", "womanLong", "womanShort"],
    hatColor: [
        "#000",
        "#fff",
        "#77311D",
        "#FC909F",
        "#D2EFF3",
        "#506AF4",
        "#F48150",
    ],
    hatStyle: ["beanie", "turban", "none"],
    eyeBrowStyle: ["up", "upWoman"],
    eyeStyle: ["circle", "oval", "smile"],
    glassesStyle: ["round", "square", "none"],
    noseStyle: ["short", "long", "round"],
    mouthStyle: ["laugh", "smile", "peace"],
    shirtStyle: ["hoody", "short", "polo"],
    shirtColor: ["#9287FF", "#6BD9E9", "#FC909F", "#F4D150", "#77311D"],
    bgColor: [
        "#9287FF",
        "#6BD9E9",
        "#FC909F",
        "#F4D150",
        "#E0DDFF",
        "#D2EFF3",
        "#FFEDEF",
        "#FFEBA4",
        "#506AF4",
        "#F48150",
        "#74D153",
    ],
    gradientBgColor: [
        "linear-gradient(45deg, #178bff 0%, #ff6868 100%)",
        "linear-gradient(45deg, #176fff 0%, #68ffef 100%)",
        "linear-gradient(45deg, #ff1717 0%, #ffd368 100%)",
        "linear-gradient(90deg, #36cd1c 0%, #68deff 100%)",
        "linear-gradient(45deg, #3e1ccd 0%, #ff6871 100%)",
        "linear-gradient(45deg, #1729ff 0%, #ff56f7 100%)",
        "linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)",
    ],
};

export default function AvatarEditor({ avatarConfig, setAvatarConfig }: any) {
    const switchConfig = (type: string | number, currentOpt: any) => {
        const opts = defaultOptions[type as keyof typeof defaultOptions];
        const currentIdx = opts.findIndex((item: any) => item === currentOpt);
        const newIdx = (currentIdx + 1) % opts.length;
        console.log({ type, opts, currentIdx, newIdx, [type]: opts[newIdx] });
        setAvatarConfig((prevConfig: any) => ({
            ...prevConfig,
            [type]: opts[newIdx],
        }));
    };

    return (
        <div className="flex flex-col items-center">
            <h1
                className={
                    "z-0 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text pt-5 text-center text-4xl font-extrabold text-transparent"
                }
            >
                Customize Your Avatar!
            </h1>
            <div className="flex flex-row"></div>
            <Avatar className="m-10 h-32 w-32" {...avatarConfig} />
            <div className="m-5 grid grid-cols-4 gap-2">
                {Object.keys(avatarConfig)
                    .filter((key) => key !== "sex")
                    .map((key) => (
                        <button
                            key={key}
                            className="max-h-4 py-2 px-2 text-sm font-light capitalize   transition-all "
                            onClick={() => switchConfig(key, avatarConfig[key])}
                        >
                            {key}
                        </button>
                    ))}
            </div>
            <button
                onClick={() => setAvatarConfig(genConfig())}
                className="rounded-full bg-somhakohr py-2.5 px-6 font-bold text-white transition-all hover:bg-somhakohr2  md:min-w-[150px]"
            >
                Randomize
            </button>
        </div>
    );
}

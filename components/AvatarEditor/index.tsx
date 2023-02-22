import Avatar, {
    genConfig,
    AvatarConfig,
    AvatarFullConfig,
} from "react-nice-avatar";
import { icons } from "./icons";
import styles from "./AvatarEditor.module.scss";
import DomToImage from "dom-to-image";
import { buffer } from "stream/consumers";

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
    const switchConfig = (type: string | number) => {
        const currentOpt = avatarConfig[type];
        const opts = defaultOptions[type as keyof typeof defaultOptions];
        const currentIdx = opts.findIndex((item: any) => item === currentOpt);
        const newIdx = (currentIdx + 1) % opts.length;
        console.log({ type, opts, currentIdx, newIdx, [type]: opts[newIdx] });
        setAvatarConfig((prevConfig: any) => ({
            ...prevConfig,
            [type]: opts[newIdx],
        }));
    };

    const getButton = (config: string) => {
        const IconComponent = icons[config as keyof typeof icons];
        let value = avatarConfig[config];
        if (config === "hairStyle") value = avatarConfig["hairColor"];
        if (config === "shirtStyle") value = avatarConfig["shirtColor"];
        if (config === "hatStyle") value = avatarConfig["hatColor"];

        if (IconComponent)
            return (
                <button
                    className="100ms mx-2 flex h-16 w-16 items-center   rounded-full bg-gradient-to-r from-purple-400 to-pink-300  stroke-gray-400 shadow-md transition-all hover:from-purple-400 hover:to-pink-400 hover:shadow-lg "
                    type="button"
                    onClick={() => switchConfig(config)}
                    key={config}
                >
                    <div className="relative h-full w-full">
                        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                            <IconComponent color={value} />
                        </div>
                    </div>
                </button>
            );
    };

    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-normal border border-teal-400 rounded-[30px] p-8 mb-6">
            <h1
                className="text-2xl font-bold text-center"
            >
                Customize Your Avatar!
            </h1>
            <div className="relative">
                <div className={styles.circleContainer}>
                    <div>
                        <Avatar
                            className={"m-10 h-[10rem] w-[10rem] md:h-[12rem] md:w-[12rem] lg:h-[16rem] lg:w-[16rem]"}
                            {...avatarConfig}
                            id="avatarId"
                        />
                    </div>
                    {Object.keys(avatarConfig)
                        .filter((key) => key !== "sex")
                        .sort()
                        .reverse()
                        .map((key) => getButton(key))}
                </div>
            </div>

            <div className="text-center">
                <button
                    onClick={() => setAvatarConfig(genConfig())}
                    // onClick={() => saveAvatarFile()}
                    // onClick={() => saveConfig(avatarConfig)}
                    type="button"
                    className="inline-block rounded bg-secondary py-2 px-8 text-sm font-bold text-white transition-all m-2"
                >
                    Randomize
                </button>
                <button
                    type="button"
                    className="inline-block rounded bg-tertiary py-2 px-8 text-sm font-bold text-white transition-all m-2"
                    onClick={() => {
                        setAvatarConfig(genConfig("somhako"));
                    }}
                >
                    {"Reset Avatar"}
                </button>
            </div>
        </div>
    );
}

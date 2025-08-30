import './index.scss'
import Card from "../Card/index.jsx";

function Discover() {
    const imageSets = [
        [
            "https://pbs.twimg.com/media/GoldZRCXoAAr60a?format=jpg&name=900x900",
            "https://pbs.twimg.com/media/GoldZRKX0AASmvD?format=jpg&name=900x900",
            "https://pbs.twimg.com/media/GoldZRFWEAAubAi?format=jpg&name=900x900",
            "https://pbs.twimg.com/media/GolddJRXsAA5pA7?format=jpg&name=900x900"
        ],
        [
            "https://pbs.twimg.com/media/GoldZRKX0AASmvD?format=jpg&name=900x900",
            "https://pbs.twimg.com/media/GoldZRFWEAAubAi?format=jpg&name=900x900",
            "https://pbs.twimg.com/media/GolddJRXsAA5pA7?format=jpg&name=900x900"
        ],
        [
            "https://pbs.twimg.com/media/GoldZRFWEAAubAi?format=jpg&name=900x900",
            "https://pbs.twimg.com/media/GolddJRXsAA5pA7?format=jpg&name=900x900"
        ],
        [
            "https://pbs.twimg.com/media/GolddJRXsAA5pA7?format=jpg&name=900x900"
        ]
    ];

    const arr = new Array(4).fill(0);

    return (
        <section id={"discover"}>
            {arr.map((_, index) => {
                const images = imageSets[index % 4];
                return <Card key={index} images={images}/>;
            })}
        </section>
    );
}

export default Discover;
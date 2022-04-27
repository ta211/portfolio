import './Fun.scss';

import GameIconRPS from '../icons/fun_rps.png';
import FunIconFoodstory from '../icons/fun_foodstory.png';
import StoryIconLiminal from '../icons/fun_liminal.png';
import GameIconDefault from '../icons/game.png';

function Fun(name, img, link, srcCode, info) {
    this.name = name;
    this.img = img; 
    this.link = link;
    this.srcCode = srcCode;
    this.info = info;
}

const fun_rps = new Fun(
    "Play Rock-Paper-Scissor Shoot with Nico",
    GameIconRPS,
    "https://rps-robot.web.app/",
    <a href="https://github.com/itangdav/16467Project/tree/WebChatbot">GitHub</a>,
    "Designed for course 16467."
);

const fun_cart = new Fun(
    "Shopping Website FoodStory",
    FunIconFoodstory,
    "https://pui-foodstory.web.app/",
    <a href="https://github.com/ta211/atang1_pui_hw5_spring_2022">GitHub</a>,
    "Project for course 05430."
);

const fun_story = new Fun(
    "Liminal - an interactive narrative", 
    StoryIconLiminal,
    "https://www.gamecreation.org/play/liminal/Liminal.html",
    <a href="https://www.gamecreation.org/games/liminal">view description on GCS website</a>, 
    null
);

const fun_default = new Fun(
    "Upcoming Game...",
    GameIconDefault,
    null,
    null,
    null
)

const FunList = [
    fun_rps,
    fun_cart,
    fun_story
]

const getFunRow = (fun, index) => {
    const img = 
    <a className="fun-img-container" href={fun.link}>
        <img className={`fun-img fun-img-${index}`} src={fun.img} alt={"Link to " + fun.name}/>
    </a>;

    const description = 
    <div className="fun-descrption">
        <div className="fun-title">
            {fun.name}
        </div>
        <div className="fun-src">
            {fun.srcCode}
        </div>
        <div className="fun-info">
            {fun.info}
        </div>
    </div>;
    
    if (index % 2 == 0) {
        return (
            <div 
                className={"fun-row fun-"+index}
                key={"fun-row fun-"+index}
            >
                {img}
                {description}
            </div>
        );
    } else {
        return (
            <div 
                className={"fun-row fun-"+index}
                key={"fun-row fun-"+index}
            >
                {description}
                {img}
            </div>
        )
    }
};

const funleft = <div></div>;

const funright = 
<div className="fun-right-container container">
    {FunList.map((fun, index) => getFunRow(fun, index))}
</div>;

const fun = {
    left: funleft,
    right: funright
}
export default fun;
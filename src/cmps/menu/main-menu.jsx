
import { Activity } from "../general/activity"
import colors from '../../assets/img/colors.jpg'
import imgs from '../../assets/img/imgs.jpg'



export const MainMenu = ({ isMainMenuOpen, activities, boardId, onOpenColors }) => {


    return <section style={{ display: isMainMenuOpen }}>

        <section className="background-teaser-container">
            <div className="board-background">
                <div className="image-container background-color-teaser" onClick={onOpenColors}>
                    <img src={colors} />
                    <div className="title">Colors</div>
                </div>
                <div className="image-container">
                    <img src={imgs} />
                    <div className="title">photos</div>
                </div>

            </div>
        </section>
        <Activity activities={activities} boardId={boardId} />
    </section>

}

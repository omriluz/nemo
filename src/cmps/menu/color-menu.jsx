import React, { useState } from "react";

export const ColorMenuModal = ({ isColorModalOpen }) => {

    const [selectedColor, setSelectedColor] = useState('#b04632')

    const bgColors = [
        { id: 'c1', color: '#d29034' },
        { id: 'c2', color: '#0079bf' },
        { id: 'c3', color: '#b04632' },
        { id: 'c4', color: '#519839' },
        { id: 'c5', color: '#cd5a91' },
        { id: 'c6', color: '#89609e' },
        { id: 'c7', color: '#00aecc' },
        { id: 'c8', color: '#4bbf6b' },
        { id: 'c9', color: '#838c91' }
    ]

    const chooseColor = (color) => {
        setSelectedColor(color.color)
    }



    return <section style={{ display: isColorModalOpen }} >

        <section className="bg-picker">
            <div className="bg-options-container">
                {bgColors.map((color) => {
                    return (
                        <div key={color.id} className="choose-color-list ">
                            <div
                                style={{ backgroundColor: color.color }}
                                className="color-selected"
                                onClick={() => chooseColor(color)}
                            >
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>

    </section>
}
import React from 'react';
import { renderRoutes } from 'react-router-config'
import{ QuitButton } from './QuitButton.style'

function Button(props) {
    const { route } =props
    return (
        <QuitButton>
           <button className="quitbutton">退出账号</button>
        </QuitButton>
    )
}
export default React.memo(Button);
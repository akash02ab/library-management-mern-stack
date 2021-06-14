import { Container } from "@material-ui/core";
import { useState } from "react";
import SwipeableTemporaryDrawer from "./Drawer";
import MenuAppBar from "./MenuAppBar";

function App(props) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <div>
            <MenuAppBar handleClick={toggleDrawer} />
            <SwipeableTemporaryDrawer
                handleClose={toggleDrawer}
                isOpen={drawerOpen}
            />
            <Container fixed>{props.children}</Container>
        </div>
    );
}

export default App;

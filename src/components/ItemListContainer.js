import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';

function ItemListContainer(props) {
    return (
        <Stack justifyContent={"center"} alignItems={"center"} >
            <Typography sx={{ fontSize: "30vh", padding:"5%"}}>
                Welcome
            </Typography>
        </Stack>
    );
}
export default ItemListContainer;